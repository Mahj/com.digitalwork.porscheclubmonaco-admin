import { Component, OnInit, TemplateRef, ChangeDetectorRef, Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Timeline } from './timeline';
import { Http } from '@angular/http';
import _ from "lodash";
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../firestore/firestore.service';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * Example of a Native Date adapter
 */
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  
    fromModel(date): NgbDateStruct {
        console.log("fromModel " + date);
        //date = new Date(date);
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() } : null;
       
    }

    toModel(date: NgbDateStruct): Date {
        return date ? new Date(date.year, date.month - 1, date.day): null;
    }
}


@Component({
  selector: 'tab-timeline',
  templateUrl: './tab.timeline.component.html',
 // providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class TimelineComponent implements OnInit{
    isLoading: boolean;
    currentItem: any;
    editListModalRef: BsModalRef;
    editListModel: {};
    listModalRef: BsModalRef;
    listModel: any;
  timeline$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Timeline = new Timeline();
  adding: boolean = false;

  constructor(private http: Http, 
              private af: AngularFireDatabase, 
              private modalService: BsModalService,
              private cdr: ChangeDetectorRef,
              private config: NgbDropdownConfig,
              private db: FirestoreService) {
      config.placement = 'right';
      config.autoClose = 'outside';
  }
  
  ngOnInit(): void {
      //this.userProfile$ = this.af.list('/userProfile', {});
      this.loadData();
    this.cdr.detectChanges();
  }

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('timeline').then((data) => {
          console.log(data);
          this.timeline$ = data;
          this.isLoading = false;
      });
  }

  openModal(template: TemplateRef<any>, item: object, addFlag: boolean) {
    if (addFlag === true) {
      this.adding = true;
      this.model = {};
    } else {
      this.adding = false;
      this.model = item;
      }
    this.modalRef = this.modalService.show(template);
  }

  openListsModal(template: TemplateRef<any>, item: object) {
      this.listModel = item;
      this.listModalRef = this.modalService.show(template, { class: 'timeline-wide-modal'});
  }

  openEditListModal(template: TemplateRef<any>, item: object, addFlag: boolean) {
      if (addFlag === true) {
          this.adding = true;
          this.editListModel = {};
      } else {
          this.adding = false;
          this.editListModel = item;
      }
      this.editListModalRef = this.modalService.show(template);
  }



  editOrAddRecord(model: any, addFlag: boolean): void {
      //console.log(model.date)
    var data = { 
        date: model ? this.datePickerObjToDate(model.date) : null
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('timeline', data);  
      this.modalRef.hide()
    } else {
      // Edit Record
      this.db.updateDocument('timeline', model.$key, data);  
      this.modalRef.hide()
    }
    this.loadData();
  }
    
  deleteRecord(item: any) {
      this.db.deleteDocument('timeline', item.$key);
      this.loadData();
  }


  editOrAddListRecord(model: any, addFlag: boolean): void {
     
      if (addFlag === true) {
          // Add Record, since lists is an array of an object in the db, and not an object in the db it self 
          this.listModel.push(model);
      }
          this.db.updateDocument('timeline', this.currentItem.$key, this.currentItem);
          this.editListModalRef.hide();
      this.loadData();
  }


  deleteListRecord(item: any) {
      this.db.deleteDocument('timeline', this.currentItem);
      this.loadData();
  }

  datePickerObjToDate(obj) {
      //console.log(JSON.stringify(obj))
      if (!!obj && !!obj.month) {
          //console.log("typeof " + typeof obj + " " + JSON.stringify(obj) + "****" + new Date(obj.month + '/' + obj.day + '/' + obj.year))
          return new Date(obj.month + '/' + obj.day + '/' + obj.year).getTime();
      }
      return new Date(obj).getTime();;
  }

  dateToDatePickerObj(date) {
      let ret = {
          day: 0,
          month: 0,
          year : 0
      };
      let d = new Date(date);
      ret.day = d.getDay();
      ret.month = d.getMonth();
      ret.year = d.getFullYear();
      return ret;
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.timeline, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
