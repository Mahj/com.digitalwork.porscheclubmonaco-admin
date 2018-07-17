import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Shopping } from './shopping';
import { Http } from '@angular/http';
import _ from "lodash";
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../firestore/firestore.service';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'tab-shopping',
    templateUrl: './tab.shopping.component.html',
    styleUrls: ['tab.shopping.component.scss']
})
export class ShoppingComponent implements OnInit{
    isLoading: boolean;
    subsTotal: number;

    color = '#ccc';
    currentItem: any;
    modalRefShopping: BsModalRef;
    modelShopping: {
    };
    subs: any;
    items: any[];
    searchTerm: string;
    intermediary: any[];
    types: any;
    selectedType: string;
  category$: any[];
  public modalRef: BsModalRef;
  model: Shopping = new Shopping();
  adding: boolean = false;


  showCategories: boolean = true;
  showShoppingSub: boolean = false;

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
      this.selectedType = 'shopping';
      this.cdr.detectChanges();
  }

  loadData() {
      this.isLoading = true;
      this.db.getAllCollections('shopping').then((data) => {
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
      this.model.type = 'shopping';
    } else {
      this.adding = false;
      this.model = item;
    }
    this.modalRef = this.modalService.show(template);
  }

  deleteRecord(item: any) {
      this.db.deleteDocument('shopping', item.$key);
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
        this.db.addDocument('shopping', data);
        
      this.modalRef.hide()
    } else {
      // Edit Record
        this.db.updateDocument('shopping', model.$key, data);
      this.modalRef.hide()
    }
    this.loadData();
  }

 //----------------------------Shopping------------------------------------------------

  openModalShopping(template: TemplateRef<any>, item: object, addFlag: boolean) {
      if (addFlag === true) {
          this.adding = true;
          this.modelShopping = {};
      } else {
          this.adding = false;
          this.modelShopping = item;
      }
      this.modalRefShopping = this.modalService.show(template);
  }

  editOrAddRecordShopping(model: any, addFlag: boolean): void {
      var data = {
          description: model.description ? model.description : null,
          name: model.name ? model.name : null,
          price: model.price ? model.price : false,
          discount: model.discount ? model.discount : null,
          discountPrice: model.discountPrice ? model.discountPrice : null,
          imgSmall: model.imgSmall ? model.imgSmall : null
      };
      console.log('data', data);
      if (addFlag === true) {
          // Add Record
          this.db.addSubCollectionDocument('shopping', this.currentItem.$key, 'sub', data);

          this.modalRefShopping.hide()
      } else {
          // Edit Record
          this.db.updateSubCollectionDocument('shopping', this.currentItem.$key, 'sub', model.$key, data);
          this.modalRefShopping.hide()
      }
      this.getSubCategory(this.currentItem);

  }

  deleteRecordShopping(item: any) {
      this.db.deleteSubCollectionDocument('shopping', this.currentItem.$key, 'sub', item.$key);
      //re-load the data
      this.getSubCategory(this.currentItem);
  }



 //------------general-----------------------------------------------------------------

  getSubCategory(item) {
      this.isLoading = true;
      this.db.getSubCategoryDocs('shopping', item.$key, 'sub').then((e) => {
          console.log(e);
          this.subs = e;
          this.showViewHandler(item.type);
          this.isLoading = false;
      });
  }

  showViewHandler(showView) {
      this.showCategories = false;
      this.showShoppingSub = false;

      if (showView == 'category') {
          this.showCategories = true;
          return;
      }
      if (showView == 'shopping') {
          this.showShoppingSub = true;
      }
  }

  getSubCategoryTotal(item) {
      this.db.getSubCategoryDocs('shopping', item.$key, 'sub').then((e) => {
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
