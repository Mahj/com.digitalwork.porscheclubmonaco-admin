import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Chart } from './chart';
import { Http } from '@angular/http';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import _ from "lodash";
import { FirestoreService } from '../../../firestore/firestore.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tab-chart',
  templateUrl: './tab.chart.component.html',
  providers: [NgbDropdownConfig]
})
export class ChartComponent implements OnInit{
    isLoading: boolean;
  chart$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Chart = new Chart();
  adding: boolean = false;

  constructor(private http: Http, 
              private af: AngularFireDatabase, 
              private modalService: BsModalService,
              private cdr: ChangeDetectorRef,
              private db: FirestoreService,
              private config: NgbDropdownConfig) {
      config.placement = 'right';
      config.autoClose = 'outside';
  }
  
  ngOnInit(): void {
      this.cdr.detectChanges();
      this.loadData();
  } 

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('chart').then((data) => {
          this.chart$ = data;
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

  deleteRecord(item: any) {
      this.db.deleteDocument('chart', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
      country: model.country ? model.country : null, 
      view: model.view ? model.view : null
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('chart', data);
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('chart', model.$key, data);
      this.modalRef.hide()
    }
    this.loadData();
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.chart, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
