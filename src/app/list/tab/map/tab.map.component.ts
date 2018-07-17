import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Map } from './map';
import { Http } from '@angular/http';
import _ from "lodash";
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../firestore/firestore.service';

@Component({
  selector: 'tab-map',
  templateUrl: './tab.map.component.html'
})
export class MapComponent implements OnInit{
    isLoading: boolean;
  map$: FirebaseListObservable<any[]>;
  public modalRef: BsModalRef;
  public modalMapRef: BsModalRef;
  model: Map = new Map();
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
    this.loadData();
    this.cdr.detectChanges();
  }

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('map').then((data) => {
          this.map$ = data;
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
    this.modalRef = this.modalService.show(template, { class: 'map-wide-modal'});
  }

  openMapModal(template: TemplateRef<any>, item: object) {
      this.model = item;
      this.modalMapRef = this.modalService.show(template);
  }

  deleteRecord(item: any) {
      this.db.deleteDocument('map', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = { 
      address: model.address ? model.address : null,
      amenities: model.amenities ? model.amenities : null,
      description: model.description ? model.description : null,
      email: model.email ? model.email : null,
      image: model.image ? model.image : null,
      lat: model.lat ? model.lat : null,
      lng: model.lng ? model.lng : null,
      name: model.name ? model.name : null,
      phone: model.phone ? model.phone : null,
      rating: model.rating ? model.rating : null,
      status: model.status ? model.status : null,
      web: model.web ? model.web : null,
    };
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('map', data);  
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('map', model.$key, data);  
      this.modalRef.hide()
    }
    this.loadData();
  }

  placeMarker($event, model) {
      console.log($event.coords.lat);
      console.log($event.coords.lng);
      model.lat = $event.coords.lat;
      model.lng = $event.coords.lng;
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames.map, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });

  }
}
