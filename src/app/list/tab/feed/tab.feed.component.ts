import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Feed } from './feed';
import { Http } from '@angular/http';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import _ from "lodash";
import { FirestoreService } from '../../../firestore/firestore.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tab-feed',
  templateUrl: './tab.feed.component.html'
})
export class FeedComponent implements OnInit{
    isLoading: boolean;
    currentItem: any;
    newImg: string;
    editImgModalRef: BsModalRef;
    editImages: any[];
    viewImgModalRef: BsModalRef;
    viewImage: any[];
  feed$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  model: Feed = new Feed();
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
      this.db.getAllCollections('feed').then((data) => {
          this.feed$ = data;
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
    this.modalRef = this.modalService.show(template, { class: 'feed-wide-modal' });
  }

  openViewImgModal(template: TemplateRef<any>, item: any[]) {
      this.viewImage = item;
      this.viewImgModalRef = this.modalService.show(template, { class: 'feed-mid-wide-modal' });
  }

  openEditImgModal(template: TemplateRef<any>, item: any[]) {
      this.editImages = item;
      this.editImgModalRef = this.modalService.show(template, { class: 'feed-mid-wide-modal' });
  }

  addImage(editImages) {
      console.log(editImages);
      if (!editImages.images) {
          editImages.images = [];
      }
      editImages.images.push({ "url": this.newImg });
      this.newImg = '';
      console.log(editImages);

  }

  deleteImage(images, i) {
      if (!!images) {
          images.splice(i, 1);
      }
  }

  deleteRecord(item: any) {
      this.db.deleteDocument('feed', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
        comment: model.comment ? model.comment : null, 
        description: model.description ? model.description : null, 
        image: model.image ? model.image : null, 
        images: model.images ? model.images : null, 
        imgProfile: model.imgProfile ? model.imgProfile : null, 
        like: model.like ? model.like : null, 
        location: model.location ? model.location : null, 
        name: model.name ? model.name : null, 
        postDate: model.postDate ? model.postDate : null, 
        startTime: model.startTime ? model.startTime : null, 
        title: model.title ? model.title : null, 

        
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('feed', data);
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('feed', model.$key, data);
      this.modalRef.hide()
    }
    this.loadData();
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.feed, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
