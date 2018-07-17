import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Contact } from './contact';
import { Http } from '@angular/http';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import _ from "lodash";
import { FirestoreService } from '../../../firestore/firestore.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tab-contact',
  templateUrl: './tab.contact.component.html',
  providers: [NgbDropdownConfig]
})
export class ContactComponent implements OnInit{
    isLoading: boolean;
    items: FirebaseListObservable<any[]>;
    searchTerm: string = '';
  contact$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Contact = new Contact();
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
      this.loadData();
      this.cdr.detectChanges();
  }

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('contact').then((data) => {
          this.contact$ = data;
          this.items = data;
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
      this.db.deleteDocument('contact', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
      company: model.company ? model.company : null, 
      img: model.img ? model.img : null,
      name: model.name ? model.name : null,
      aboutMe: model.aboutMe ? model.aboutMe : null,
      email: model.email ? model.email : null,
      linkedin: model.linkedin ? model.linkedin : null,
      follower: model.follower ? model.follower : null,
      following: model.following ? model.following : null,
      imgCover: model.imgCover ? model.imgCover : null,
      phone: model.phone ? model.phone : null,
      position: model.position ? model.position : null,
      post: model.post ? model.post : null,
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('contact', data);  
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('contact', model.$key, data);
      this.modalRef.hide()
    }
    this.loadData();
  }

  search() {
      console.log("$$$" + this.searchTerm)
      if (this.searchTerm == '') {
          this.items = this.contact$;
      } else if (this.contact$ && this.searchTerm != undefined) {
          let res = this.contact$.filter((e) => {
              e.company = e.company || '';
              e.name = e.name || '';
              return (e.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) || (e.company.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
          });
          this.items = <FirebaseListObservable<any>> res;
      }
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.contacts, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
