import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Gallery } from './gallery';
import { Http } from '@angular/http';
import _ from "lodash";
import { FirestoreService } from '../../../firestore/firestore.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tab-gallery',
  templateUrl: './tab.gallery.component.html'
})
export class GalleryComponent implements OnInit{
    isLoading: boolean;
    searchTerm: string;
    items: any;
  gallery$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Gallery = new Gallery();
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
      this.db.getAllCollections('gallery').then((data) => {
          this.gallery$ = data;
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
      this.db.deleteDocument('gallery', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
      name: model.name ? model.name : null, 
      description: model.description ? model.description : null, 
      url: model.url ? model.url : null
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('gallery', data);  
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('gallery', model.$key, data);  
      this.modalRef.hide()
    }
    this.loadData();
  }

  search() {
      console.log("$$$" + this.searchTerm)
      if (this.searchTerm == '') {
          this.items = this.gallery$;
      } else if (this.gallery$ && this.searchTerm != undefined) {
          let res = this.gallery$.filter((e) => {
              e.name = e.name || '';
              return (e.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
          });
          this.items = <FirebaseListObservable<any>>res;
      }
  }


  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.gallery, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
