import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Message } from './message';
import { Http } from '@angular/http';
import _ from "lodash";
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../firestore/firestore.service';

@Component({
  selector: 'tab-message',
  templateUrl: './tab.message.component.html'
})
export class MessageComponent implements OnInit{
    isLoading: boolean;
  message$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Message = new Message();
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
      this.isLoading = true;
      this.message$ = this.af.list('/message', {})
      this.message$.subscribe((e) => {
          this.isLoading = false;
      });
    this.cdr.detectChanges();
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
    this.af.database
    .ref('/message/' + item.$key)
    .remove();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
      createdDate: model.createdDate ? model.createdDate : null, 
      imgProfile: model.imgProfile ? model.imgProfile : null,
      messageBody: model.messageBody ? model.messageBody : null,
      messageTitle: model.messageTitle ? model.messageTitle : null,
      toId: model.toId ? model.toId : null,
      toName: model.toName ? model.toName : null
    };
    if (addFlag === true) {
      // Add Record
      this.af.database.ref('/message')
      .push()
      .set(data);    
      this.modalRef.hide()
    } else {
      // Edit Record
      this.af.database
      .ref('/message/' + model.$key)
      .set(data);    
      this.modalRef.hide()
    }
  }


  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.form, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
