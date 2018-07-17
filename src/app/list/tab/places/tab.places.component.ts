import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Places } from './places';
import { Http } from '@angular/http';
import _ from "lodash";
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../firestore/firestore.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tab-places',
  templateUrl: './tab.places.component.html',
  styleUrls: ['tab.places.component.scss']
})
export class PlacesComponent implements OnInit{
    isLoading: boolean;
    subsTotal: number;

    color = '#ccc';
    modalRefPlace: any;
    modelPlace: {
    };
  
    currentItem: any;

    subs: any;
    items: any[];
    searchTerm: string;
    intermediary: any[];
    types: any;
    selectedType: string;
  category$: any[];
  public modalRef: BsModalRef;
  model: Places = new Places();
  adding: boolean = false;

  showCategories: boolean = true;
  showRestaurantSub: boolean = false;
  showShoppingSub: boolean = false;
  showPlaceSub: boolean = false;

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
      this.selectedType = 'place';
  }

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('places').then((data) => {
          this.category$ = data;
          
          this.items = data;
          this.isLoading = false;
          
      });
  }

 
  search() {
      if (this.searchTerm == '') {
          this.items = this.category$;
      } else if (this.items && this.searchTerm != undefined) {
          let res = this.category$.filter((e) => {
              e.description = e.description || '';
              e.name = e.name || '';

              console.log((e.name == e.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) || (e.description == e.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) == true?"found":"not found")

              return (e.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) || (e.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
          });
          this.items = res;
      }
  }

  openModal(template: TemplateRef<any>, item: object, addFlag: boolean) {
    if (addFlag === true) {
      this.adding = true;
      this.model = {};
      this.model.type = 'place';
    } else {
      this.adding = false;
      this.model = item;
    }
    this.modalRef = this.modalService.show(template);
  }

  deleteRecord(item: any) {
      this.db.deleteDocument('places', item.$key);
      this.loadData();
  }

  editOrAddRecord(model: any, addFlag: boolean): void { 
    var data = {
      description: model.description ? model.description : null, 
      name: model.name ? model.name : null,
      show: model.show ? model.show : false, 
      type: model.type ? model.type : null,
      total: model.total ? model.total : null,
      imgBg: model.imgBg ? model.imgBg : null
    };
    console.log('data',data);
    if (addFlag === true) {
      // Add Record
        this.db.addDocument('places', data);
        
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('places', model.$key, data);
      this.modalRef.hide()
    }
    this.loadData();
  }


  //----------------------------Place------------------------------------------------

  openModalPlace(template: TemplateRef<any>, item: object, addFlag: boolean) {
      if (addFlag === true) {
          this.adding = true;
          this.modelPlace = {};
      } else {
          this.adding = false;
          this.modelPlace = item;
      }
      this.modalRefPlace = this.modalService.show(template);
  }

  editOrAddRecordPlace(model: any, addFlag: boolean): void {
      var data = {
          name: model.name ? model.name : null,
          description: model.description ? model.description : null,
          address: model.address ? model.address : false,
          location: model.location ? model.location : null,
          phone: model.phone ? model.phone : null,
          rate: model.rate ? model.rate : null,
          web: model.web ? model.web : null,
          lat: model.lat ? model.lat : null,
          lng: model.lng ? model.lng : null,
          imgBig: model.imgBig ? model.imgBig : null,
          imgSmall: model.imgSmall ? model.imgSmall : null
      };
      console.log('data', data);
      if (addFlag === true) {
          // Add Record
          this.db.addSubCollectionDocument('places', this.currentItem.$key, 'sub', data);

          this.modalRefPlace.hide()
      } else {
          // Edit Record
          this.db.updateSubCollectionDocument('places', this.currentItem.$key, 'sub', model.$key, data);
          this.modalRefPlace.hide()
      }
      this.getSubCategory(this.currentItem);

  }

  deleteRecordPlace(item: any) {
      this.db.deleteSubCollectionDocument('places', this.currentItem.$key, 'sub', item.$key);
      //re-load the data
      this.getSubCategory(this.currentItem);
  }

 //------------general-----------------------------------------------------------------

  getSubCategory(item) {
      this.isLoading = true;
      this.db.getSubCategoryDocs('places', item.$key, 'sub').then((e) => {
          console.log(e);
          this.showViewHandler(item.type);
          this.subs = e;
          this.isLoading = false;
      });
  }

  showViewHandler(showView) {
      this.showCategories = false;
      this.showPlaceSub = false;

      if (showView == 'category') {
          this.showCategories = true;
          return;
      }

     if (showView == 'place') {
          this.showPlaceSub = true;
      }
  }

  getSubCategoryTotal(item) {
      this.db.getSubCategoryDocs('places', item.$key, 'sub').then((e) => {
          if (!e) {
              this.subsTotal = 0;
              return;
          }
          this.subsTotal = e.length;
      });
  }
    
  capitalCase(str) {
      if (!!str && !!str[0]) {
          str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
      }
      return str;
  }

  launchApp() {
      this.db.getDocumentsByName('configuration', 'ionicurl').then((data) => {
          if (!data) {
              alert('Please go to Data Management section and introduce an URL');
          }
          window.open(data.url + this.db.ionicSectionNames[this.selectedType], '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
      });
      
  }
}
