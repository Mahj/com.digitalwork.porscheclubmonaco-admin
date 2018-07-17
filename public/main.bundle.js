webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box {\n  border: 1px solid #ccc;\n  max-width: 600px;\n  -webkit-box-shadow: 1px 1px 50px 1px;\n          box-shadow: 1px 1px 50px 1px;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n.login-body {\n  padding: 50px;\n}\n\n.login-header {\n  height: 100px;\n  width: 100%;\n  background-color:deeppink;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"auth.user | async; then authenticated else guest\">\n  <!-- template will replace this div -->\n</div>\n<!-- User NOT logged in -->\n<ng-template #guest>\n  <div>\n    <div class=\"login-box\">\n      <div class=\"login-header\"> </div>\n      <div class=\"login-body\">\n        <h3>Welcome to the Admin dashboard</h3>\n\n        <div *ngIf=\"!!isAdminRegistered && !recover\">\n\n          <p>Login to get started...</p>\n          <div class=\"row\">\n\n            <div class=\"col-7\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]='email' name='email'>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]='pass' name='pass'>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <button type=\"button\" class=\"btn btn-primary \" (click)=\"auth.loginWithEmailAndPass(email, pass)\">Login</button>\n                   </div>\n                  <div class=\"col\">\n                    <button type=\"button\" class=\"btn btn-secondary \" (click)=\"recover = true\">Recover Password</button>\n                  </div>\n                </div>\n               \n              </div>\n            </div>\n\n            <div class=\"col-5\">\n              <button class=\"btn btn-danger btn-lg\" (click)=\"auth.googleLogin()\">\n                <i class=\"fa fa-google\"></i> Login with Google\n              </button>\n            </div>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"!isAdminRegistered\">\n          <p>Register Admin account</p>\n          <div class=\"row\">\n\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Fullname\" [(ngModel)]='name' required name='name'>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]='email' required name='email'>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]='pass' required name='pass'>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Profile pic url (optional)\" [(ngModel)]='pic' name='pic'>\n              </div>\n              <div class=\"form-group\">\n                <button type=\"button\" [disabled]=\"!name || !email || !pass\" class=\"btn btn-primary btn-lg\" (click)=\"auth.registerWithEmailAndPass(name, email, pass, pic, true)\">Register</button>\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <button class=\"btn btn-danger btn-lg\" (click)=\"auth.registerUserWithGoogle(true)\">\n                <i class=\"fa fa-google\"></i> Register with Google\n              </button>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div *ngIf=\"!!recover\">\n          <p>Recover password</p>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]='email' name='email'>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!email\" (click)=\"auth.resetPassword(email)\">Recover Password</button>\n            </div>\n            <div class=\"col-8\">\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"recover = false\">Login</button>\n            </div>\n          </div>\n\n        </div>\n\n        <div style=\"margin:30px;\">\n          <ngb-alert *ngIf=\"!!auth.successEmailSent\" (click)=\"auth.successEmailSent = false\" [dismissible]=\"true\" type=\"success\">\n            <strong>Success!</strong> Email sent successfully\n          </ngb-alert>\n          <ngb-alert *ngIf=\"auth.showUnauthorizedAlert\" (click)=\"closeAlert()\" [dismissible]=\"true\" type=\"danger\">\n            <strong>Alert!</strong> {{ !auth.errorMsg? 'Permission denied.': auth.errorMsg}}\n          </ngb-alert>\n        </div>\n        </div>\n    </div>\n</div>\n</ng-template>\n\n\n\n\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <nav style=\"background-color: #f8f8f8;border-color: #e7e7e7;\" class=\"navbar navbar-default\" *ngIf=\"auth.user | async as user\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\" style=\"    margin-right: 0;margin-left: auto;\">\n        <p style=\"margin:10px;\" class=\"navbar-text\">Howdy, {{ user.displayName }}</p>\n        <span class=\"navbar-brand  navbar-right\">\n          <img [src]=\"user.photoURL\" style=\"width:30px;\"  onerror=\"this.src='./assets/no-image-found.jpg'\">\n        </span>\n\n        <button type=\"button\"  (click)=\"auth.signOut()\" class=\"btn btn-default navbar-btn navbar-right\">Logout</button>\n      </div>\n    </div>\n  </nav>\n\n  <!--The content below is only a placeholder and can be replaced.-->\n  <div style=\"text-align:center\">\n\n    <h1 style=\"padding:30px;\">\n      Admin Dashboard\n    </h1>\n  </div>\n  <div class='container-fluid p-10'>\n    <div class='row'>\n      <div class='col-12'>\n        <app-list>\n        </app-list>\n      </div>\n    </div>\n  </div>\n\n\n\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, db) {
        var _this = this;
        this.auth = auth;
        this.db = db;
        this.isAdminRegistered = true;
        this.db.getAllCollections('users').then(function (docs) {
            if (!docs || docs.length == 0) {
                _this.isAdminRegistered = false;
            }
            else {
                _this.isAdminRegistered = true;
            }
        });
    }
    AppComponent.prototype.closeAlert = function () {
        this.auth.showUnauthorizedAlert = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__firestore_firestore_service__["a" /* FirestoreService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_camelToTitle_pipe__ = __webpack_require__("../../../../../src/app/pipes/camelToTitle.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__list_tab_category_tab_category_component__ = __webpack_require__("../../../../../src/app/list/tab/category/tab.category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__list_tab_shopping_tab_shopping_component__ = __webpack_require__("../../../../../src/app/list/tab/shopping/tab.shopping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__list_tab_restaurant_tab_restaurant_component__ = __webpack_require__("../../../../../src/app/list/tab/restaurant/tab.restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__list_tab_cart_tab_cart_component__ = __webpack_require__("../../../../../src/app/list/tab/cart/tab.cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__list_tab_places_tab_places_component__ = __webpack_require__("../../../../../src/app/list/tab/places/tab.places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__list_tab_chart_tab_chart_component__ = __webpack_require__("../../../../../src/app/list/tab/chart/tab.chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_tab_feed_tab_feed_component__ = __webpack_require__("../../../../../src/app/list/tab/feed/tab.feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__list_tab_contact_tab_contact_component__ = __webpack_require__("../../../../../src/app/list/tab/contact/tab.contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__list_tab_gallery_tab_gallery_component__ = __webpack_require__("../../../../../src/app/list/tab/gallery/tab.gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__list_tab_map_tab_map_component__ = __webpack_require__("../../../../../src/app/list/tab/map/tab.map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__list_tab_message_tab_message_component__ = __webpack_require__("../../../../../src/app/list/tab/message/tab.message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__list_tab_userProfile_tab_userProfile_component__ = __webpack_require__("../../../../../src/app/list/tab/userProfile/tab.userProfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__list_tab_timeline_tab_timeline_component__ = __webpack_require__("../../../../../src/app/list/tab/timeline/tab.timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__list_tab_data_tab_data_component__ = __webpack_require__("../../../../../src/app/list/tab/data/tab.data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__list_tab_push_tab_push_component__ = __webpack_require__("../../../../../src/app/list/tab/push/tab.push.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__list_tab_registerUser_tab_register_component__ = __webpack_require__("../../../../../src/app/list/tab/registerUser/tab.register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_editor__ = __webpack_require__("../../../../ngx-editor/ngx-editor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// New imports to update based on AngularFire2 version 4


























//material design




var appRoutes = [
    //{ path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
    { path: 'shopping', component: __WEBPACK_IMPORTED_MODULE_17__list_tab_shopping_tab_shopping_component__["a" /* ShoppingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'places', component: __WEBPACK_IMPORTED_MODULE_20__list_tab_places_tab_places_component__["a" /* PlacesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'restaurant', component: __WEBPACK_IMPORTED_MODULE_18__list_tab_restaurant_tab_restaurant_component__["a" /* RestaurantComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_19__list_tab_cart_tab_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_21__list_tab_chart_tab_chart_component__["a" /* ChartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_22__list_tab_feed_tab_feed_component__["a" /* FeedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_23__list_tab_contact_tab_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_24__list_tab_gallery_tab_gallery_component__["a" /* GalleryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_25__list_tab_map_tab_map_component__["a" /* MapComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'message', component: __WEBPACK_IMPORTED_MODULE_26__list_tab_message_tab_message_component__["a" /* MessageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_28__list_tab_timeline_tab_timeline_component__["a" /* TimelineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_27__list_tab_userProfile_tab_userProfile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_29__list_tab_data_tab_data_component__["a" /* DataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'push', component: __WEBPACK_IMPORTED_MODULE_30__list_tab_push_tab_push_component__["a" /* PushComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_31__list_tab_registerUser_tab_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */]] },
    //{ path: 'login', component: LoginComponent },
    {
        path: '',
        redirectTo: '/shopping',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__list_tab_shopping_tab_shopping_component__["a" /* ShoppingComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__list_tab_category_tab_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__list_tab_shopping_tab_shopping_component__["a" /* ShoppingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__list_tab_restaurant_tab_restaurant_component__["a" /* RestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_19__list_tab_cart_tab_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__list_tab_places_tab_places_component__["a" /* PlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__list_tab_chart_tab_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_22__list_tab_feed_tab_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_23__list_tab_contact_tab_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_24__list_tab_gallery_tab_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__list_tab_map_tab_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_26__list_tab_message_tab_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__list_tab_userProfile_tab_userProfile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__list_tab_timeline_tab_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_29__list_tab_data_tab_data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_30__list_tab_push_tab_push_component__["a" /* PushComponent */],
                __WEBPACK_IMPORTED_MODULE_31__list_tab_registerUser_tab_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_camelToTitle_pipe__["a" /* CamelToTitlePipe */],
                __WEBPACK_IMPORTED_MODULE_33__components_spinner_spinner_service__["a" /* SpinnerService */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_40__config_config__["a" /* config */]),
                __WEBPACK_IMPORTED_MODULE_34__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_40__config_config__["b" /* mapKey */]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["c" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_39__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_37_ngx_editor__["a" /* NgxEditorModule */],
                __WEBPACK_IMPORTED_MODULE_41_mydatepicker__["MyDatePickerModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_32__firestore_firestore_service__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_35__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_36__auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afAuth, router, db) {
        this.afAuth = afAuth;
        this.router = router;
        this.db = db;
        this.successEmailSent = false;
        this.showUnauthorizedAlert = false;
        this.authState();
    }
    AuthService.prototype.authState = function () {
        var _this = this;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                var data = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                };
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].fromPromise(_this.db.getDocumentsByName('users', user.uid));
                //doc<User>(`users/${user.uid}`).valueChanges()
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var that = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            that.db.getDocumentsByName('users', credential.user.uid).then(function (u) {
                if (!u || credential.user.uid != u.uid) {
                    that.showUnauthorizedAlert = true;
                    that.signOut();
                }
            });
        });
    };
    AuthService.prototype.registerUserWithGoogle = function (isSuperAdmin) {
        var _this = this;
        if (isSuperAdmin === void 0) { isSuperAdmin = false; }
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            credential.user.superAdmin = isSuperAdmin ? true : false;
            _this.createUserData(credential.user).then(function (q) {
                window.location.reload();
            });
        });
    };
    AuthService.prototype.createUserData = function (user) {
        // Sets user data to firestore on login
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            superAdmin: user.superAdmin
        };
        return this.db.addDocumentByName('users', user.uid, data);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.loginWithEmailAndPass = function (email, pass) {
        var _this = this;
        var that = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (credential) {
            that.db.getDocumentsByName('users', credential.uid).then(function (u) {
                if (!u || credential.uid != u.uid) {
                    that.showUnauthorizedAlert = true;
                    that.signOut();
                }
            });
        }).catch(function (e) {
            _this.errorMsg = e.message;
            _this.showUnauthorizedAlert = true;
        });
    };
    AuthService.prototype.registerWithEmailAndPass = function (name, email, pass, pic, isSuperAdmin) {
        var _this = this;
        if (isSuperAdmin === void 0) { isSuperAdmin = false; }
        return this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(function (newUser) {
            _this.createUserData({
                email: email,
                displayName: name,
                photoURL: pic || '',
                uid: newUser.uid,
                superAdmin: isSuperAdmin ? true : false
            }).then(function (x) {
                window.location.reload();
            });
        }).catch(function (e) {
            _this.errorMsg = e.message;
            _this.showUnauthorizedAlert = true;
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        return this.afAuth.auth.sendPasswordResetEmail(email).catch(function (e) {
            _this.errorMsg = e.message;
        }).then(function (x) {
            _this.successEmailSent = true;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/components/spinner/spinner.service.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n/* Transparent Overlay */\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/spinner/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerService = (function () {
    function SpinnerService() {
    }
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loading',
            template: "\n<div class=\"loading-indicator\">\n  <mat-progress-spinner mode=\"indeterminate\" color=\"primary\"></mat-progress-spinner>\n</div>\n",
            styles: [__webpack_require__("../../../../../src/app/components/spinner/spinner.service.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pushAuthKey; });
var config = {
    apiKey: 'AIzaSyBxN0fez50o-YCdV7z8y_mTB0VpVhM3PKc',
    authDomain: 'porsche-club-monaco-mobile-mc.firebaseapp.com',
    databaseURL: 'https://porsche-club-monaco-mobile-mc.firebaseio.com',
    projectId: 'porsche-club-monaco-mobile-mc',
    storageBucket: 'porsche-club-monaco-mobile-mc.appspot.com',
    messagingSenderId: '575415647607'
};
var mapKey = 'AIzaSyDsuiyoSDNkolMh1VIElyBboU0adLXyNFg';
// tslint:disable-next-line:max-line-length
var pushAuthKey = 'AAAAhflx_Xc:APA91bE0mL6HI-Av_fxOcc0A8ap7R0ZmbGiKcoKy-XGjaZadhUA-fEn9wGHDo9Unn5lzvhaz6j1UitwnPUvIMqlQEpmsStbR6QiwJGvzlI9Ael-FtWQm0r1LmOyo72h72k2fD7PCmjKB0aDZLDvs_f71h5JmeruYJA';


/***/ }),

/***/ "../../../../../src/app/firestore/firestore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// We MUST import both the firebase AND firestore modules like so


var FirestoreService = (function () {
    function FirestoreService(http) {
        this.http = http;
        this.mainCategories = [
            {
                category: 'shopping',
                subItems: 'shoppingSubItems',
                items: [{ itemName: 'men', categoryId: '5' }, { itemName: 'women', categoryId: '6' }, { itemName: 'outerwear', categoryId: '8' }],
            },
            {
                category: 'restaurant',
                subItems: 'restaurantSubItems',
                items: [{ itemName: 'lunch', categoryId: '9' }, { itemName: 'dinning', categoryId: '10' }, { itemName: 'dessert', categoryId: '12' }, { itemName: 'coffee', categoryId: '11' }],
            },
            {
                category: 'places',
                subItems: 'placesSubItems',
                items: [{ itemName: 'dragonstone', categoryId: '0' }, { itemName: 'habana', categoryId: '1' }, { itemName: 'dublin', categoryId: '2' },
                    { itemName: 'kingslanding', categoryId: '3' }, { itemName: 'beyondthewall', categoryId: '4' }],
            }
        ];
        this.ionicSectionNames = {
            restaurant: '/#/restaurant-category-reference',
            shopping: '/#/shopping-category-reference',
            place: '/#/city-category-reference',
            chart: '/#/cover-chart-reference',
            map: '/#/map',
            gallery: '/#/gallery',
            feed: '/#/feed',
            form: '/#/form-result',
            profileSocial: '/#/profileSocial',
            profileCorporate: '/#/profileCorporate',
            profileGallery: '/#/profileGallery',
            profileTabs: '/#/profileTabs',
            timeline: '/#/timeline',
            contacts: '/#/search'
        };
        // Initialise access to the firestore service
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
    }
    FirestoreService.prototype.createAndPopulateDocument = function (collectionName, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .set(dataObj, { merge: true })
                .then(function (data) {
                console.log(data);
                resolve(data);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    FirestoreService.prototype.addCollection = function (collectionName, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .add(dataObj)
                .then(function (data) {
                console.log(data);
                resolve(data);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    FirestoreService.prototype.getDocuments = function (collection, where) {
        var _this = this;
        if (where === void 0) { where = []; }
        return new Promise(function (resolve, reject) {
            var ref = (_a = _this.db.collection(collection)).where.apply(_a, where).get()
                .then(function (querySnapshot) {
                var arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    console.log(obj);
                    arr.push(obj);
                });
                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                }
                else {
                    console.log("No such document!");
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
            var _a;
        });
    };
    FirestoreService.prototype.getAllCollections = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection(collection).get()
                .then(function (querySnapshot) {
                var arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    console.log(obj);
                    arr.push(obj);
                });
                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                }
                else {
                    console.log("No such document!");
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.getDocumentsByName = function (collection, documentName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection(collection).doc(documentName);
            ref.get()
                .then(function (doc) {
                if (doc.exists) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    if (!!obj) {
                        console.log("Document data:", obj);
                        resolve(obj);
                    }
                    else {
                        console.log("No such document!");
                        resolve(null);
                    }
                }
                else {
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.addDocumentByName = function (collectionName, docName, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collectionName)
                .doc(docName)
                .set(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.addDocument = function (collectionName, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collectionName).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.deleteDocument = function (collectionName, docID) {
        var _this = this;
        var that = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .delete()
                .then(function (obj) {
                that.deleteCollection(that.db, that.db.collection(collectionName).doc(docID).collection('sub'), 10).then(function (o) {
                    resolve(obj);
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.updateDocument = function (collectionName, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.migrateDataToFirestoreFromJson = function (collectionName) {
        var _this = this;
        if (collectionName === void 0) { collectionName = ''; }
        var that = this;
        this.removeAllSubCollection();
        return new Promise(function (resolve, reject) {
            var data = _this.http.get('assets/data/firebase_data.json').map(function (res) { return res.json(); });
            data.subscribe(function (e) {
                console.log(e);
                var keys = [];
                if (collectionName != '') {
                    keys.push(collectionName);
                }
                else {
                    keys = Object.keys(e);
                    keys.splice(keys.indexOf('placesSubItems'), 1);
                    keys.splice(keys.indexOf('shoppingSubItems'), 1);
                    keys.splice(keys.indexOf('restaurantSubItems'), 1);
                }
                keys.forEach(function (str, i) {
                    _this.removeCollection(str).then(function () {
                        if (e[str].length > 0) {
                            e[str].forEach(function (el) {
                                that.addCollection(str, el).then(function (data) {
                                    console.log("Added " + str + "documents");
                                    console.log(el);
                                    if (i == keys.length - 1) {
                                        resolve(e);
                                    }
                                });
                            });
                        }
                    });
                });
            });
        });
    };
    FirestoreService.prototype.getJsonKeys = function () {
        var data = this.http.get('assets/data/firebase_data.json').map(function (res) {
            var j = res.json();
            var keys = Object.keys(j);
            keys.splice(keys.indexOf('placesSubItems'), 1);
            keys.splice(keys.indexOf('shoppingSubItems'), 1);
            keys.splice(keys.indexOf('restaurantSubItems'), 1);
            return keys;
        });
        return data;
    };
    FirestoreService.prototype.removeCollection = function (collectionName) {
        var collectionRef = this.db.collection(collectionName);
        return this.deleteCollection(this.db, collectionRef, 20);
    };
    FirestoreService.prototype.removeAllSubCollection = function () {
        var _this = this;
        var data = this.http.get('assets/data/firebase_data.json').map(function (res) { return res.json(); });
        data.subscribe(function (e) {
            _this.mainCategories.forEach(function (o) {
                //get the subcategories array from /list
                var listFiltered = e[o.subItems];
                o.items.forEach(function (item) {
                    var listFilteredByCategory = listFiltered.filter(function (f) {
                        return f.categoryId == item.categoryId;
                    });
                    listFilteredByCategory.forEach(function (element) {
                        _this.db.collection(o.category).where('id', '==', item.itemName)
                            .get()
                            .then(function (querySnapshot) {
                            if (!!querySnapshot.docs[0]) {
                                console.log(querySnapshot.docs[0].data());
                                var collectionRef = _this.db.collection(o.category).doc(querySnapshot.docs[0].id)
                                    .collection('sub');
                                return _this.deleteCollection(_this.db, collectionRef, 20);
                            }
                        });
                    });
                    //console.log(listFilteredByCategory);
                });
            });
        });
    };
    FirestoreService.prototype.groupBy = function (arr, prop) {
        return arr.reduce(function (groups, item) {
            var val = item[prop];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    };
    FirestoreService.prototype.deleteCollection = function (db, collectionRef, batchSize) {
        var that = this;
        var query = collectionRef.orderBy('__name__').limit(batchSize);
        return new Promise(function (resolve, reject) {
            that.deleteQueryBatch(db, query, batchSize, resolve, reject);
        });
    };
    FirestoreService.prototype.deleteQueryBatch = function (db, query, batchSize, resolve, reject) {
        var that = this;
        query.get()
            .then(function (snapshot) {
            // When there are no documents left, we are done
            if (snapshot.size == 0) {
                return 0;
            }
            // Delete documents in a batch
            var batch = db.batch();
            snapshot.docs.forEach(function (doc) {
                batch.delete(doc.ref);
            });
            return batch.commit().then(function () {
                return snapshot.size;
            });
        }).then(function (numDeleted) {
            if (numDeleted <= batchSize) {
                resolve();
                return;
            }
            // Recurse on the next process tick, to avoid
            // exploding the stack.
            Promise.resolve().then(function () {
                that.deleteQueryBatch(db, query, batchSize, resolve, reject);
            });
        })
            .catch(reject);
    };
    //insert sub-categories for Shopping, Restaurant and City Tour categories
    FirestoreService.prototype.insertSubCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //get json
            var data = _this.http.get('assets/data/firebase_data.json').map(function (res) { return res.json(); });
            data.subscribe(function (e) {
                _this.mainCategories.forEach(function (o, i) {
                    //get the subcategories array from /list
                    var listFiltered = e[o.subItems];
                    o.items.forEach(function (item) {
                        var listFilteredByCategory = listFiltered.filter(function (f) {
                            return f.categoryId == item.categoryId;
                        });
                        listFilteredByCategory.forEach(function (element) {
                            _this.db.collection(o.category).where('id', '==', item.itemName)
                                .get()
                                .then(function (querySnapshot) {
                                if (!!querySnapshot.docs[0]) {
                                    console.log(querySnapshot.docs[0].data());
                                    _this.db.collection(o.category).doc(querySnapshot.docs[0].id)
                                        .collection('sub').add(element);
                                }
                                if (i == _this.mainCategories.length - 1) {
                                    resolve(e);
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    FirestoreService.prototype.getSubCategoryDocs = function (masterCollection, docId, subCollection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection(masterCollection).doc(docId)
                .collection(subCollection)
                .get()
                .then(function (querySnapshot) {
                var arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    console.log(obj);
                    arr.push(obj);
                });
                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                }
                else {
                    console.log("No such document!");
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.addSubCollectionDocument = function (masterCollection, docId, subCollection, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(masterCollection).doc(docId)
                .collection(subCollection)
                .add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.updateSubCollectionDocument = function (masterCollection, docId, subCollection, subDoc, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(masterCollection)
                .doc(docId)
                .collection(subCollection)
                .doc(subDoc)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.deleteSubCollectionDocument = function (collectionName, docID, subCollectionName, subDoc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .collection(subCollectionName)
                .doc(subDoc)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <!--<li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/category\" >Categories</a>\n  </li>-->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/shopping\">Shopping</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/restaurant\">Restaurant</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/cart\">Cart</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/places\">Places</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/chart\" >Chart</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/feed\">Social Feed Cards</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/contact\">Contact</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/gallery\">Gallery</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/map\">Map Cards</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/message\">Message</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/timeline\">Timeline</a>\n  </li>\n  <li class=\"nav-item\" *ngIf=\"isSuperAdmin\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/register\">Add Admin Accounts</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/data\">Data Management</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/push\">Push Notification</a>\n  </li>\n  <!--<li class=\"nav-item\">\n    <a class=\"nav-link\"\n       routerLinkActive=\"active\"\n       routerLink=\"/userprofile\">User Profile</a>\n  </li>-->\n  </ul>\n\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n  <!--<tabset>\n    <tab heading=\"Category\">\n      <tab-category></tab-category>\n    </tab>\n    <tab heading=\"Chart\">\n      <tab-chart></tab-chart>\n    </tab>\n    <tab heading=\"Contact\">\n      <tab-contact></tab-contact>\n    </tab>\n    <tab heading=\"Gallery\">\n      <tab-gallery></tab-gallery>\n    </tab>\n    <tab heading=\"Map\">\n      <tab-map></tab-map>\n    </tab>\n    <tab heading=\"Message\">\n      <tab-message></tab-message>\n    </tab>\n    <tab heading=\"Timeline\">\n      <tab-timeline></tab-timeline>\n    </tab>\n    <tab heading=\"New\">\n      <tab-userProfile></tab-userProfile>\n    </tab>\n    <tab heading=\"Data Manager\">\n      <tab-data></tab-data>\n    </tab>\n  </tabset>-->\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.isSuperAdmin = false;
        this.auth.user.subscribe(function (x) {
            if (!!x) {
                _this.isSuperAdmin = x.superAdmin;
            }
        });
    }
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/cart/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = (function () {
    function Cart(itemKey, categoryKey, name, type, price, img, uid, qty) {
        this.itemKey = itemKey;
        this.categoryKey = categoryKey;
        this.name = name;
        this.type = type;
        this.price = price;
        this.img = img;
        this.uid = uid;
        this.qty = qty;
    }
    return Cart;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/cart/tab.cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form class=\"form-inline\">\n    <div class=\"form-group\" style=\"padding:10px; margin-top:30px;\">\n      <select name=\"type\" [(ngModel)]=\"selectedUser\" class=\"form-control\" (ngModelChange)=\"onTypeChange()\" style=\"width:400px\">\n        <option value=\"select a user\" selected=\"selected\">Select a user</option>\n        <option *ngFor=\"let c of userData; let i = index\" [ngValue]=\"c.uid\">{{c.fullname}}</option>\n      </select>\n    </div>\n  </form>\n\n\n  <div *ngIf=\"selectedUser != 'select a user'\" class=\"user-profile-box\" >\n    <div class=\"row\">\n      <div class=\"col-3\">\n        Full Name:\n      </div>\n      <div class=\"col-9\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='userProfile.fullname' name='fullname'>\n        </div>\n       \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        Email: \n      </div>\n      <div class=\"col-9\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='userProfile.email' name='email'>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        Phone: \n      </div>\n      <div class=\"col-9\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='userProfile.phone' name='phone'>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        Address: \n      </div>\n      <div class=\"col-9\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='userProfile.address' name='address'>\n        </div>\n      \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        uid:\n      </div>\n      <div class=\"col-9\">{{userProfile?.uid}} </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-9\">\n\n      </div>\n      <div class=\"col-3\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"saveUserProfile()\">\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"padding:10px;\"  *ngIf=\"selectedUser != 'select a user'\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n      <button type=\"button\" class=\"btn {{ current == 'onCard'? 'btn-primary': 'btn-secondary'}} \" (click)=\"loadOnCart(); current='onCard'\">Currently on cart</button>\n      <button type=\"button\" class=\"btn  {{ current == 'history'? 'btn-primary': 'btn-secondary'}}\" (click)=\"loadHistory(); current='history'\">Items purchased</button>\n    </div>\n  </div>\n\n    <table class=\"table table-striped\"  *ngIf=\"selectedUser != 'select a user'\">\n      <tbody>\n        <tr>\n          <td></td>\n          <td class=\"font-weight-bold\">Name</td>\n          <td class=\"font-weight-bold\">Price</td>\n          <td class=\"font-weight-bold\">Qty</td>\n          <td class=\"font-weight-bold\">Type</td>\n          <td class=\"font-weight-bold\">Sub Total</td>\n          <td class=\"font-weight-bold\" style=\"max-width:200px;\">Img</td>\n          <td class=\"font-weight-bold\">Thumnail</td>\n        </tr>\n        <tr *ngFor=\"let item of displayItems\">\n          <td class='text-xs-center'>\n            <div ngbDropdown *ngIf=\"current=='history'\">\n              <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                <i class=\"fa fa-cog\"></i>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"options\">\n\n                <a class=\"dropdown-item\"\n                   [ngbPopover]=\"confirmation\"\n                   #p=\"ngbPopover\"\n                   triggers=\"manual\"\n                   (click)=\"p.open(); pp = p;\"\n                   placement=\"right\"\n                   popoverTitle=\"Are you sure?\">\n                  <i class=\"fa fa-trash-o\"></i> Delete\n                </a>\n\n              </div>\n            </div>\n\n          </td>\n          <td> {{ item.name }} </td>\n          <td> {{ item.price }} </td>\n          <td> {{ item.qty }} </td>\n          <td> {{ item.type }} </td>\n          <td> {{ item.total }} </td>\n          <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.img }} </td>\n          <td><a target=\"_blank\" [href]=\"item.img\"> <img [src]=\"item.img\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n        </tr>\n      </tbody>\n    </table>\n\n\n    <!-- Confirmation Delete Modal -->\n    <ng-template #confirmation>\n      <div style=\"min-width:150px; text-align:center\">\n        <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n          <i class=\"fa fa-times\"></i>\n        </button>\n        <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n          <i class=\"fa fa-check\"></i>\n        </button>\n\n      </div>\n    </ng-template>\n  </div>\n\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/cart/tab.cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-profile-box {\n  max-width: 600px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding: 10px;\n  border: 1px solid #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/cart/tab.cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart__ = __webpack_require__("../../../../../src/app/list/tab/cart/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartComponent = (function () {
    function CartComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.current = 'history';
        this.userProfile = {};
        this.color = '#ccc';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__cart__["a" /* Cart */]();
        this.adding = false;
        this.showCategories = true;
        this.showRestaurantSub = false;
        this.showShoppingSub = false;
        this.showPlaceSub = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    CartComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
        this.selectedUser = 'select a user';
    };
    CartComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('checkoutProfile').then(function (data) {
            _this.userData = data; //.map(x => { return { uid: x.uid, name: x.fullname } });
            _this.isLoading = false;
        });
    };
    CartComponent.prototype.onTypeChange = function () {
        var _this = this;
        if (this.selectedUser != 'select a user') {
            this.db.getDocuments('cart', ['uid', '==', this.selectedUser]).then(function (x) {
                if (!!x) {
                    x.forEach(function (e) {
                        e.total = e.price * e.qty;
                    });
                    _this.items = x;
                    _this.loadHistory();
                }
                _this.userProfile = _this.userData.filter(function (u) {
                    return u.uid == _this.selectedUser;
                })[0];
            });
        }
    };
    CartComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('cart', item.$key);
        this.onTypeChange();
    };
    CartComponent.prototype.capitalCase = function (str) {
        if (!!str && !!str[0]) {
            str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        }
        return str;
    };
    CartComponent.prototype.saveUserProfile = function () {
        var _this = this;
        this.isLoading = true;
        this.db.updateDocument('checkoutProfile', this.userProfile.$key, this.userProfile).then(function (x) {
            _this.isLoading = false;
        });
    };
    CartComponent.prototype.loadOnCart = function () {
        if (!!this.items && this.items.length > 0) {
            this.displayItems = this.items.filter(function (x) {
                return !x.bought;
            });
        }
        this.current = 'onCard';
    };
    CartComponent.prototype.loadHistory = function () {
        if (!!this.items && this.items.length > 0) {
            this.displayItems = this.items.filter(function (x) {
                return !!x.bought;
            });
        }
        this.current = 'history';
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-cart',
            template: __webpack_require__("../../../../../src/app/list/tab/cart/tab.cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/cart/tab.cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/category/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(description, name, show, type, total, imgBg) {
        this.description = description;
        this.name = name;
        this.show = show;
        this.type = type;
        this.total = total;
        this.imgBg = imgBg;
    }
    return Category;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/category/tab.category.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCategories\">\n  <form class=\"form-inline\">\n    <div class=\"form-group\" style=\"padding:10px;\">\n      <select name=\"type\" [(ngModel)]=\"selectedType\" class=\"form-control\" (ngModelChange)=\"onTypeChange()\" style=\"width:200px\">\n        <option value=\"all\" selected=\"selected\">All</option>\n        <option *ngFor=\"let c of types; let i = index\" [ngValue]=\"c\">{{c}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n    </div>\n    <div class=\"form-group\" style=\"padding:10px;\">\n      <span data-toggle=\"tooltip\" [attr.title]=\"selectedType != 'all'? '': 'Select a category'\">\n        <button class=\" btn btn-primary form-control\" [attr.disabled]=\"selectedType == 'all'? '': null\" (click)=\"launchApp()\">Open ionic app</button>\n      </span>\n</div>\n  </form>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Show</td>\n        <td class=\"font-weight-bold\">Type</td>\n        <td class=\"font-weight-bold\">Total</td>\n        <td class=\"font-weight-bold\" style=\"max-width:200px;\">Img Bg</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"getSubCategoryTotal(item); currentItem = item;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmation\"\n                 #p=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"p.open(); pp = p;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"getSubCategory(item); currentItem = item;\">\n                <i class=\"fa fa-cogs\"></i> Manage sub-items ({{subsTotal}})\n              </a>\n            </div>\n          </div>\n        \n        </td>\n        <td> {{ item.name }} </td>\n        <td style=\"max-width:200px;\"> {{ item.description }} </td>\n        <td> {{ item.show }} </td>\n        <td> {{ item.type }} </td>\n        <td> {{ item.total }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.imgBg }} </td>\n        <td><a target=\"_blank\" [href]=\"item.imgBg\"> <img [src]=\"item.imgBg\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal -->\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Category</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Category</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='model.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"model.show\" name=\"show\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\" style=\"border: 1px solid #ccc;padding: 10px;\">\n          <label>Type</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.type' name='type'>\n          <div style=\"cursor:pointer; margin:5px;text-decoration:underline;\" *ngFor=\"let c of types; let i = index\" (click)=\"model.type = c;\">{{c}}</div>\n\n        </div>\n        <div class=\"form-group\">\n          <label>Total</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.total' name='total'>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen Background</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgBg' name='imgBg'>\n          <img [src]=\"model.imgBg\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<div *ngIf=\"showShoppingSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n    <table class=\"table table-striped\">\n      <tbody>\n        <tr>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalShopping(templateShopping, item, true)\">\n              <i class=\"fa fa-plus\"></i>\n            </button>\n          </td>\n          <td class=\"font-weight-bold\">Name</td>\n          <td class=\"font-weight-bold\">Description</td>\n          <td class=\"font-weight-bold\">Price</td>\n          <td class=\"font-weight-bold\">Discount</td>\n          <td class=\"font-weight-bold\">Discount Price</td>\n          <td class=\"font-weight-bold\">Image</td>\n          <td class=\"font-weight-bold\">Thumnail</td>\n        </tr>\n        <tr *ngFor=\"let sub of subs\">\n          <td class='text-xs-center'>\n            <div ngbDropdown>\n              <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemShopping = sub;\">\n                <i class=\"fa fa-cog\"></i>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"options\">\n                <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalShopping(templateShopping, sub, false)\">\n                  <i class=\"fa fa-pencil\"></i> Edit\n                </a>\n                <a class=\"dropdown-item\"\n                   [ngbPopover]=\"confirmationShopping\"\n                   #s=\"ngbPopover\"\n                   triggers=\"manual\"\n                   (click)=\"s.open(); ss = s;\"\n                   placement=\"right\"\n                   popoverTitle=\"Are you sure?\">\n                  <i class=\"fa fa-trash-o\"></i> Delete\n                </a>\n              </div>\n            </div>\n\n          </td>\n          <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.price }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.discount }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.discountPrice }} </td>\n          <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n          <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n          <td> {{ sub.show }} </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <!-- Edit Modal Shopping -->\n    <ng-template #templateShopping>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Shopping</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Shopping</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefShopping.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='modelShopping.name' name='name'>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control\" [(ngModel)]='modelShopping.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelShopping.price\" name=\"price\">\n          </div>\n          <div class=\"form-group\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"modelShopping.discount\" name=\"discount\"> Show\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label>Discount Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelShopping.discountPrice\" name=\"discountPrice\">\n          </div>\n          <div class=\"form-group\">\n            <label>Imagen</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='modelShopping.imgSmall' name='imgSmall'>\n            <img [src]=\"modelShopping.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n          </div>\n\n          <button type=\"submit\" (click)=\"editOrAddRecordShopping(modelShopping, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n          <button type=\"submit\" (click)=\"editOrAddRecordShopping(modelShopping, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n      </div>\n    </ng-template>\n\n    <!-- Confirmation Delete Modal -->\n    <ng-template #confirmationShopping>\n      <div style=\"min-width:150px; text-align:center\">\n        <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n          <i class=\"fa fa-times\"></i>\n        </button>\n        <button (click)=\"deleteRecordShopping(currentItemShopping)\" class=\"btn btn-danger btn-sm\">\n          <i class=\"fa fa-check\"></i>\n        </button>\n\n      </div>\n    </ng-template>\n</div>\n\n<div *ngIf=\"showRestaurantSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalRestaurant(templateRestaurant, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Price</td>\n        <td class=\"font-weight-bold\">Promotion</td>\n        <td class=\"font-weight-bold\">Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let sub of subs\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemRestaurant = sub;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalRestaurant(templateRestaurant, sub, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmationRestaurant\"\n                 #s=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"s.open(); ss = s;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n            </div>\n          </div>\n\n        </td>\n        <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.price }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.promotion }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n        <td> {{ sub.show }} </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal Restaurant -->\n  <ng-template #templateRestaurant>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Restaurant</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Restaurant</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefRestaurant.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelRestaurant.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='modelRestaurant.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelRestaurant.price\" name=\"price\">\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"modelRestaurant.discount\" name=\"discount\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelRestaurant.imgSmall' name='imgSmall'>\n          <img [src]=\"modelRestaurant.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <button type=\"submit\" (click)=\"editOrAddRecordRestaurant(modelRestaurant, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecordRestaurant(modelRestaurant, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmationRestaurant>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecordRestaurant(currentItemRestaurant)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<div *ngIf=\"!!showPlaceSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalPlace(templatePlace, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Address</td>\n        <td class=\"font-weight-bold\">Location</td>\n        <td class=\"font-weight-bold\">Phone</td>\n        <td class=\"font-weight-bold\">Rate</td>\n        <td class=\"font-weight-bold\">Web</td>\n        <td class=\"font-weight-bold\">Latitude</td>\n        <td class=\"font-weight-bold\">Longitude</td>\n        <td class=\"font-weight-bold\">Big Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n        <td class=\"font-weight-bold\">Small Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let sub of subs\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemPlace = sub;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalPlace(templatePlace, sub, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmationPlace\"\n                 #s=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"s.open(); ss = s;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n            </div>\n          </div>\n\n        </td>\n        <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.address }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.location }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.phone }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.rate }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.web }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.lat }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.lng }} </td>\n\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgBig }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgBig\"> <img [src]=\"sub.imgBig\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal Place -->\n  <ng-template #templatePlace>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Place</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Place</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefPlace.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='modelPlace.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.address\" name=\"address\">\n        </div>\n        <div class=\"form-group\">\n          <label>Location</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.location\" name=\"location\">\n        </div>\n        <div class=\"form-group\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.phone\" name=\"phone\">\n        </div>\n        <div class=\"form-group\">\n          <label>Rate</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"modelPlace.rate\" name=\"rate\">\n        </div>\n        <div class=\"form-group\">\n          <label>Web</label>\n          <input type=\"url\" class=\"form-control\" [(ngModel)]=\"modelPlace.web\" name=\"web\">\n        </div>\n        <div class=\"form-group\">\n          <label>Latitude</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.lat\" name=\"lat\">\n        </div>\n        <div class=\"form-group\">\n          <label>Longitude</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.lng\" name=\"lng\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label>Imagen Big</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.imgBig' name='imgBig'>\n          <img [src]=\"modelPlace.imgBig\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label>Imagen Small</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.imgSmall' name='imgSmall'>\n          <img [src]=\"modelPlace.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <button type=\"submit\" (click)=\"editOrAddRecordPlace(modelPlace, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecordPlace(modelPlace, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmationPlace>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecordPlace(currentItemPlace)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/category/tab.category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/category/tab.category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__("../../../../../src/app/list/tab/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryComponent = (function () {
    function CategoryComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.color = '#ccc';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__category__["a" /* Category */]();
        this.adding = false;
        this.showCategories = true;
        this.showRestaurantSub = false;
        this.showShoppingSub = false;
        this.showPlaceSub = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
        this.selectedType = 'all';
    };
    CategoryComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('category').then(function (data) {
            _this.category$ = data;
            //goup by types to populate dropdown
            _this.types = Object.keys(_this.db.groupBy(data, 'type'));
            _this.items = _this.onTypeChange();
            _this.isLoading = false;
        });
    };
    CategoryComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTerm == '') {
            this.items = this.intermediary;
        }
        else if (this.items && this.searchTerm != undefined) {
            console.log(this.intermediary);
            var res = this.intermediary.filter(function (e) {
                e.description = e.description || '';
                e.name = e.name || '';
                console.log((e.name == e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description == e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) == true ? "found" : "not found");
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    CategoryComponent.prototype.onTypeChange = function () {
        var _this = this;
        if (this.selectedType == 'all') {
            this.intermediary = this.category$;
        }
        else {
            this.intermediary = this.category$.filter(function (e) {
                return e.type == _this.selectedType;
            });
        }
        this.items = this.intermediary;
        return this.intermediary;
    };
    CategoryComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    CategoryComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('category', item.$key);
        this.loadData();
    };
    CategoryComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            show: model.show ? model.show : false,
            type: model.type ? model.type : null,
            total: model.total ? model.total : null,
            imgBg: model.imgBg ? model.imgBg : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('category', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('category', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    //----------------------------Shopping------------------------------------------------
    CategoryComponent.prototype.openModalShopping = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelShopping = {};
        }
        else {
            this.adding = false;
            this.modelShopping = item;
        }
        this.modalRefShopping = this.modalService.show(template);
    };
    CategoryComponent.prototype.editOrAddRecordShopping = function (model, addFlag) {
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
            this.db.addSubCollectionDocument('category', this.currentItem.$key, 'sub', data);
            this.modalRefShopping.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('category', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefShopping.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    CategoryComponent.prototype.deleteRecordShopping = function (item) {
        this.db.deleteSubCollectionDocument('category', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //----------------------------Restaurant------------------------------------------------
    CategoryComponent.prototype.openModalRestaurant = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelRestaurant = {};
        }
        else {
            this.adding = false;
            this.modelRestaurant = item;
        }
        this.modalRefRestaurant = this.modalService.show(template);
    };
    CategoryComponent.prototype.editOrAddRecordRestaurant = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            price: model.price ? model.price : false,
            discount: model.discount ? model.discount : null,
            imgSmall: model.imgSmall ? model.imgSmall : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addSubCollectionDocument('category', this.currentItem.$key, 'sub', data);
            this.modalRefRestaurant.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('category', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefRestaurant.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    CategoryComponent.prototype.deleteRecordRestaurant = function (item) {
        this.db.deleteSubCollectionDocument('category', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //----------------------------Place------------------------------------------------
    CategoryComponent.prototype.openModalPlace = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelPlace = {};
        }
        else {
            this.adding = false;
            this.modelPlace = item;
        }
        this.modalRefPlace = this.modalService.show(template);
    };
    CategoryComponent.prototype.editOrAddRecordPlace = function (model, addFlag) {
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
            this.db.addSubCollectionDocument('category', this.currentItem.$key, 'sub', data);
            this.modalRefPlace.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('category', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefPlace.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    CategoryComponent.prototype.deleteRecordPlace = function (item) {
        this.db.deleteSubCollectionDocument('category', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //------------general-----------------------------------------------------------------
    CategoryComponent.prototype.getSubCategory = function (item) {
        var _this = this;
        this.isLoading = true;
        this.db.getSubCategoryDocs('category', item.$key, 'sub').then(function (e) {
            console.log(e);
            _this.subs = e;
            _this.showViewHandler(item.type);
            _this.isLoading = false;
        });
    };
    CategoryComponent.prototype.getSubCategoryTotal = function (item) {
        var _this = this;
        this.db.getSubCategoryDocs('category', item.$key, 'sub').then(function (e) {
            if (!e) {
                _this.subsTotal = 0;
                return;
            }
            _this.subsTotal = e.length;
        });
    };
    CategoryComponent.prototype.showViewHandler = function (showView) {
        this.showCategories = false;
        this.showRestaurantSub = false;
        this.showShoppingSub = false;
        this.showPlaceSub = false;
        if (showView == 'category') {
            this.showCategories = true;
            return;
        }
        if (showView == 'restaurant') {
            this.showRestaurantSub = true;
        }
        else if (showView == 'shopping') {
            this.showShoppingSub = true;
        }
        else if (showView == 'place') {
            this.showPlaceSub = true;
        }
    };
    CategoryComponent.prototype.capitalCase = function (str) {
        if (!!str && !!str[0]) {
            str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        }
        return str;
    };
    CategoryComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames[_this.selectedType], '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-category',
            template: __webpack_require__("../../../../../src/app/list/tab/category/tab.category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/category/tab.category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/chart/chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
var Chart = (function () {
    function Chart(country, view) {
        this.country = country;
        this.view = view;
    }
    return Chart;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/chart/tab.chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"padding:10px;\">\n  <button class=\" btn btn-primary\" (click)=\"launchApp()\">Open ionic app</button>\n</div>\n\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n            <td class=\"font-weight-bold\">Country</td>\n            <td class=\"font-weight-bold\">View</td>\n        </tr>\n        <tr *ngFor=\"let item of chart$\">\n            <td class='text-xs-center' style=\"width:100px;\">\n             \n                   \n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n\n            </td>\n            <td> {{ item.country }} </td>\n            <td> {{ item.view }} </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Chart</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Chart</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label>Country</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.country' name='country'>\n            </div>\n            <div class=\"form-group\">\n                <label>View</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.view' name='view'>\n            </div>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n\n<loading *ngIf=\"isLoading\"></loading>\n\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/chart/tab.chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart__ = __webpack_require__("../../../../../src/app/list/tab/chart/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartComponent = (function () {
    function ChartComponent(http, af, modalService, cdr, db, config) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.db = db;
        this.config = config;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__chart__["a" /* Chart */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.cdr.detectChanges();
        this.loadData();
    };
    ChartComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('chart').then(function (data) {
            _this.chart$ = data;
            _this.isLoading = false;
        });
    };
    ChartComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    ChartComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('chart', item.$key);
        this.loadData();
    };
    ChartComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            country: model.country ? model.country : null,
            view: model.view ? model.view : null
        };
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('chart', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('chart', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    ChartComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.chart, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-chart',
            template: __webpack_require__("../../../../../src/app/list/tab/chart/tab.chart.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/contact/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(company, img, name) {
        this.company = company;
        this.img = img;
        this.name = name;
    }
    return Contact;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/contact/tab.contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\" style=\"margin:20px\">\n    <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n  </div>\n  <div class=\"form-group\" style=\"padding:10px;\">\n    <button class=\" btn btn-primary \" (click)=\"launchApp()\">Open ionic app</button>\n  </div>\n</form>\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n          <td class=\"font-weight-bold\">Name</td>\n            <td class=\"font-weight-bold\">Company</td>\n          <td class=\"font-weight-bold\">Img</td>\n            <td class=\"font-weight-bold\">Thumnail</td>\n          <td class=\"font-weight-bold\">aboutMe  </td>\n          <td class=\"font-weight-bold\">email    </td>\n          <td class=\"font-weight-bold\">linkedin </td>\n          <td class=\"font-weight-bold\">follower </td>\n          <td class=\"font-weight-bold\">following</td>\n          <td class=\"font-weight-bold\">imgCover</td>\n          <td class=\"font-weight-bold\">Thumnail</td>\n          <td class=\"font-weight-bold\">phone   </td>\n          <td class=\"font-weight-bold\">position</td>\n          <td class=\"font-weight-bold\">post    </td>\n</tr>\n        <tr *ngFor=\"let item of items\">\n            <td class='text-xs-center'>\n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n            </td>\n          <td> {{ item.name }} </td>\n            <td> {{ item.company }} </td>\n            <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.img }} </td>\n          <td><a target=\"_blank\" [href]=\"item.img\"> <img [src]=\"item.img\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n          <td>{{item.aboutMe}}</td>\n          <td>{{item.email}}</td>\n          <td>{{item.linkedin}}</td>\n          <td>{{item.follower}}</td>\n          <td>{{item.following}}</td>\n          <td style=\"max-width:200px;overflow-x: scroll;\">{{item.imgCover}}</td>\n          <td><a target=\"_blank\" [href]=\"item.imgCover\"> <img [src]=\"item.imgCover\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n          <td>{{item.phone}}</td>\n          <td>{{item.position}}</td>\n          <td>{{item.post}}</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Contact</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Contact</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n          </div>\n            <div class=\"form-group\">\n                <label>Company</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.company' name='company'>\n            </div>\n            <div class=\"form-group\">\n                <label>Img</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.img' name='img'>\n              <img [src]=\"model.img\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n            </div>\n          <div class=\"form-group\">\n            <label>About me</label>\n            <textarea style=\"width:100%; height:215px;\" class=\"form-control\" [(ngModel)]='model.aboutMe' name='aboutMe'></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.email' name='email'/>\n          </div>\n          <div class=\"form-group\">\n            <label>linkedin</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.linkedin' name='linkedin' />\n          </div>\n          <div class=\"form-group\">\n            <label>Follower</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.follower' name='follower' />\n          </div>\n          <div class=\"form-group\">\n            <label>Following</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.following' name='following' />\n          </div>\n          <div class=\"form-group\">\n            <label>Img Cover</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgCover' name='imgCover' />\n            <img [src]=\"model.imgCover\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Phone</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.phone' name='phone' />\n          </div>\n          <div class=\"form-group\">\n            <label>Position</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.position' name='position' />\n          </div>\n          <div class=\"form-group\">\n            <label>Post</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.post' name='post' />\n          </div>\n\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/contact/tab.contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__("../../../../../src/app/list/tab/contact/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactComponent = (function () {
    function ContactComponent(http, af, modalService, cdr, db, config) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.db = db;
        this.config = config;
        this.searchTerm = '';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* Contact */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
    };
    ContactComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('contact').then(function (data) {
            _this.contact$ = data;
            _this.items = data;
            _this.isLoading = false;
        });
    };
    ContactComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    ContactComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('contact', item.$key);
        this.loadData();
    };
    ContactComponent.prototype.editOrAddRecord = function (model, addFlag) {
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
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('contact', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    ContactComponent.prototype.search = function () {
        var _this = this;
        console.log("$$$" + this.searchTerm);
        if (this.searchTerm == '') {
            this.items = this.contact$;
        }
        else if (this.contact$ && this.searchTerm != undefined) {
            var res = this.contact$.filter(function (e) {
                e.company = e.company || '';
                e.name = e.name || '';
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.company.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    ContactComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.contacts, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-contact',
            template: __webpack_require__("../../../../../src/app/list/tab/contact/tab.contact.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/data/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile(email, name) {
        this.email = email;
        this.name = name;
    }
    return UserProfile;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/data/tab.data.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin:20px 0px 20px 0px;\" class=\"alert alert-danger\" role=\"alert\"><strong>Warning:</strong> If you restore the default data, it will override the changes made to the bd</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Manage Data\n  </div>\n  <div class=\"card-body\">\n\n\n    <form class=\"form-inline\">\n      <div class=\"form-group\" style=\"margin:10px 0px 10px 10px;\">\n        <label>Select a section: </label>\n      </div>\n      <div class=\"form-group\" style=\"margin:20px;\">\n        <select name=\"type\" [(ngModel)]=\"selectedKey\" class=\"form-control\" style=\"width:200px\">\n          <option value=\"all\" selected=\"selected\">All</option>\n          <option *ngFor=\"let c of keys; let i = index\" [ngValue]=\"c\">{{c}}</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <div style=\"margin: 20px;\">\n\n          <button class=\"btn btn-default\"\n                  [ngbPopover]=\"confirmation\"\n                  #p=\"ngbPopover\"\n                  triggers=\"manual\"\n                  (click)=\"p.open(); pp = p;\"\n                  placement=\"bottom\"\n                  popoverTitle=\"Are you sure?\">\n\n            Restore Primary default data <span class=\"badge badge-light\">1</span>\n          </button>\n\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <div style=\"margin: 20px;\">\n\n          <button class=\"btn btn-default\"\n                  [ngbPopover]=\"subcategories\"\n                  #t=\"ngbPopover\"\n                  triggers=\"manual\"\n                  (click)=\"t.open(); tt = t;\"\n                  placement=\"bottom\"\n                  popoverTitle=\"Are you sure?\">\n\n            Restore sub-items <span class=\"badge badge-light\">2</span>\n          </button>\n\n        </div>\n      </div>\n    </form>\n\n\n  </div>\n</div>\n\n\n<div style=\"margin-top:20px;\" class=\"card\">\n  <div class=\"card-header\">\n    Set ionic running url\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-group\" style=\"max-width:600px;\">\n      <p class=\"card-text\">Enter the url where you are hosting/running the ionic project that comes with this Admin Dashboard</p>\n      <input type=\"url\" class=\"form-control\" [(ngModel)]=\"ionicurl\" style=\"margin-bottom:20px\"  pattern=\"https?://.+\" required />\n      <button [attr.disabled]=\"ionicurl == ''?'': null\" class=\"btn btn-primary\" (click)=\"saveUrl()\">Save Url</button>\n    </div>\n\n    <div *ngIf=\"saveSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n      <strong>Success!</strong> Url successfully saved to the database.\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"saveSuccess = false;\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n  </div>\n</div>\n\n\n\n<!-- Confirmation Restore data -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"restoreData(); pp.close()\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n\n  </div>\n</ng-template>\n\n\n<!-- Confirmation Restore subcategories -->\n<ng-template #subcategories>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"tt.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"restoreSubCategories(); tt.close()\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/data/tab.data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__("../../../../../src/app/list/tab/data/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataComponent = (function () {
    function DataComponent(http, af, modalService, cdr, config, db) {
        var _this = this;
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.saveSuccess = false;
        this.docExist = true;
        this.ionicurl = '';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__data__["a" /* UserProfile */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
        db.getDocumentsByName('configuration', 'ionicurl').then(function (o) {
            if (o != null) {
                _this.ionicurl = o.url;
            }
            else {
                _this.docExist = false;
            }
        });
    }
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getJsonKeys().subscribe(function (e) {
            _this.keys = e;
            _this.selectedKey = 'all';
        });
    };
    DataComponent.prototype.restoreSubCategories = function () {
        var _this = this;
        this.isLoading = true;
        this.db.insertSubCategories().then(function (e) {
            _this.isLoading = false;
        });
    };
    DataComponent.prototype.restoreData = function () {
        var _this = this;
        this.isLoading = true;
        var key = '';
        if (this.selectedKey != 'all') {
            key = this.selectedKey;
        }
        this.db.migrateDataToFirestoreFromJson(key).then(function (e) {
            _this.isLoading = false;
            _this.pp.close();
        });
    };
    DataComponent.prototype.saveUrl = function () {
        var _this = this;
        this.isLoading = true;
        if (!this.docExist) {
            this.db.addDocumentByName('configuration', 'ionicurl', { url: this.ionicurl }).then(function (a) {
                _this.isLoading = false;
                _this.saveSuccess = true;
            });
        }
        else {
            this.db.updateDocument('configuration', 'ionicurl', { url: this.ionicurl }).then(function (a) {
                _this.isLoading = false;
                _this.saveSuccess = true;
            });
        }
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-data',
            template: __webpack_require__("../../../../../src/app/list/tab/data/tab.data.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/feed/feed.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
/* unused harmony export Img */
var Feed = (function () {
    function Feed(comment, description, image, images, imgProfile, like, location, name, postDate, startTime, title) {
        this.comment = comment;
        this.description = description;
        this.image = image;
        this.images = images;
        this.imgProfile = imgProfile;
        this.like = like;
        this.location = location;
        this.name = name;
        this.postDate = postDate;
        this.startTime = startTime;
        this.title = title;
    }
    return Feed;
}());

var Img = (function () {
    function Img(url) {
        this.url = url;
    }
    return Img;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/feed/tab.feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"padding:10px;\">\n  <button class=\" btn btn-primary \" (click)=\"launchApp()\">Open ionic app</button>\n</div>\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true); currentItem ={}\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n          <td class=\"font-weight-bold\">Name       </td>\n          <td class=\"font-weight-bold\">Title      </td>\n          <td class=\"font-weight-bold\">Comment    </td>\n          <td class=\"font-weight-bold\">Description</td>\n          <td class=\"font-weight-bold\">Image Profile </td>\n          <td class=\"font-weight-bold\">Thumnail </td>\n          <td class=\"font-weight-bold\">Image      </td>\n          <td class=\"font-weight-bold\">Images     </td>\n          <td class=\"font-weight-bold\">Like       </td>\n          <td class=\"font-weight-bold\">Location   </td>\n          <td class=\"font-weight-bold\">Post Date   </td>\n          <td class=\"font-weight-bold\">Start Time  </td>\n        </tr>\n        <tr *ngFor=\"let item of feed$\">\n            <td class='text-xs-center' style=\"width:100px;\">\n             \n                   \n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n\n            </td>\n          <td> {{ item.name        }} </td>\n          <td> {{ item.title       }} </td>\n          <td> {{ item.comment     }} </td>\n          <td> {{ item.description }} </td>\n          <td> {{ item.imgProfile  }} </td>\n          <td> <a target=\"_blank\" [href]=\"item.imgProfile\"> <img [src]=\"item.imgProfile\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a> </td>\n          <td> {{ item.image       }} </td>\n          <td>\n              <i class=\"fa fa-arrows\" (click)=\"openViewImgModal(viewImgs, item.images)\"></i>\n          </td>\n          <td> {{ item.like        }} </td>\n          <td> {{ item.location    }} </td>\n          <td> {{ item.postDate    }} </td>\n          <td> {{ item.startTime   }} </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Feed</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Feed</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n            </div>\n            <div class=\"form-group\">\n                <label>Title</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.title' name='title'>\n            </div>\n          <div class=\"form-group\">\n            <label>Comment</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.comment' name='comment'>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea style=\"width:100%; height:215px;\" class=\"form-control\" [(ngModel)]='model.description' name='description'></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Image Profile</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgProfile' name='imgProfile'>\n          </div>\n          <div class=\"form-group\">\n            <img [src]=\"model.imgProfile\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Image</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.image' name='images'>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-default\" (click)=\"openEditImgModal(editImgs, model)\">Add images</button>\n          </div>\n          <div class=\"form-group\">\n            <label>Like</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.like' name='like'>\n          </div>\n          <div class=\"form-group\">\n            <label>Location</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.location' name='location'>\n          </div>\n          <div class=\"form-group\">\n            <label>Post Date</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.postDate' name='postDate'>\n          </div>\n          <div class=\"form-group\">\n            <label>Start Time</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.startTime' name='startTime'>\n          </div>\n\n\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- View images Modal -->\n<ng-template #viewImgs>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\" >View Images</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"viewImgModalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <table class=\"table table-striped\">\n      <tbody>\n        <tr>\n          <td>Image Url</td>\n          <td>Thumnail</td>\n          </tr>\n\n        <tr  *ngFor=\"let img of viewImage\">\n          <td>{{img.url}}</td>\n          <td><a target=\"_blank\" [href]=\"img.imgProfile\"> <img [src]=\"img.url\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n        </tr>\n        </tbody>\n      </table>\n\n\n  </div>\n</ng-template>\n\n<!-- Edit images Modal -->\n<ng-template #editImgs>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Edit Images</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"editImgModalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <table class=\"table table-striped\">\n      <tbody>\n        <tr>\n          <td>Image Url</td>\n          <td>Thumnail</td>\n          <td></td>\n        </tr>\n\n        <tr *ngFor=\"let img of editImages.images; let i = index\">\n          <td>{{img.url}}</td>\n          <td><a target=\"_blank\" [href]=\"img.imgProfile\"> <img [src]=\"img.url\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n          <td>\n            <button aria-haspopup=\"true\" class=\"btn btn-danger btn-sm \" id=\"deleteImg\" aria-expanded=\"false\" (click)=\"deleteImage(editImages.images, i)\">\n              <i class=\"fa fa-trash-o\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form #heroForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Add img url</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='newImg' name='name'>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-default\" (click)=\"addImage(editImages)\">Add Image</button>\n      </div>\n      </form>\n\n    <button type=\"button\" (click)=\"editImgModalRef.hide()\" class=\"btn btn-primary float-right\">Done</button>\n</div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/feed/tab.feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed__ = __webpack_require__("../../../../../src/app/list/tab/feed/feed.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedComponent = (function () {
    function FeedComponent(http, af, modalService, cdr, db, config) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.db = db;
        this.config = config;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__feed__["a" /* Feed */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.cdr.detectChanges();
        this.loadData();
    };
    FeedComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('feed').then(function (data) {
            _this.feed$ = data;
            _this.isLoading = false;
        });
    };
    FeedComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template, { class: 'feed-wide-modal' });
    };
    FeedComponent.prototype.openViewImgModal = function (template, item) {
        this.viewImage = item;
        this.viewImgModalRef = this.modalService.show(template, { class: 'feed-mid-wide-modal' });
    };
    FeedComponent.prototype.openEditImgModal = function (template, item) {
        this.editImages = item;
        this.editImgModalRef = this.modalService.show(template, { class: 'feed-mid-wide-modal' });
    };
    FeedComponent.prototype.addImage = function (editImages) {
        console.log(editImages);
        if (!editImages.images) {
            editImages.images = [];
        }
        editImages.images.push({ "url": this.newImg });
        this.newImg = '';
        console.log(editImages);
    };
    FeedComponent.prototype.deleteImage = function (images, i) {
        if (!!images) {
            images.splice(i, 1);
        }
    };
    FeedComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('feed', item.$key);
        this.loadData();
    };
    FeedComponent.prototype.editOrAddRecord = function (model, addFlag) {
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
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('feed', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    FeedComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.feed, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-feed',
            template: __webpack_require__("../../../../../src/app/list/tab/feed/tab.feed.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/gallery/gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });
var Gallery = (function () {
    function Gallery(name, url) {
        this.name = name;
        this.url = url;
    }
    return Gallery;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/gallery/tab.gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\" style=\"margin:20px\">\n    <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n  </div>\n  <div class=\"form-group\" style=\"padding:10px;\">\n    <button class=\" btn btn-primary \" (click)=\"launchApp()\">Open ionic app</button>\n  </div>\n</form>\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n            <td class=\"font-weight-bold\" style=\"width:400px;\">Name</td>\n          <td class=\"font-weight-bold\">Description</td>\n          <td class=\"font-weight-bold\">Url</td>\n            <td class=\"font-weight-bold\">Thumnail</td>\n        </tr>\n        <tr *ngFor=\"let item of items\">\n            <td class='text-xs-center'>\n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n            </td>\n          <td> {{ item.name }} </td>\n            <td> {{ item.description }} </td>\n            <td> {{ item.url }} </td>\n            <td><img [src]=\"item.url\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\"  /> </td>\n          \n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Gallery</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Gallery</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n            </div>\n            <div class=\"form-group\">\n              <label>Description</label>\n              <textarea class=\"form-control\" [(ngModel)]='model.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label>Url</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.url' name='url'>\n              <img [src]=\"model.url\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\"  />\n\n            </div>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/gallery/tab.gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery__ = __webpack_require__("../../../../../src/app/list/tab/gallery/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GalleryComponent = (function () {
    function GalleryComponent(http, af, modalService, cdr, db, config) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.db = db;
        this.config = config;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__gallery__["a" /* Gallery */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
    };
    GalleryComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('gallery').then(function (data) {
            _this.gallery$ = data;
            _this.items = data;
            _this.isLoading = false;
        });
    };
    GalleryComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    GalleryComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('gallery', item.$key);
        this.loadData();
    };
    GalleryComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            name: model.name ? model.name : null,
            description: model.description ? model.description : null,
            url: model.url ? model.url : null
        };
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('gallery', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('gallery', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    GalleryComponent.prototype.search = function () {
        var _this = this;
        console.log("$$$" + this.searchTerm);
        if (this.searchTerm == '') {
            this.items = this.gallery$;
        }
        else if (this.gallery$ && this.searchTerm != undefined) {
            var res = this.gallery$.filter(function (e) {
                e.name = e.name || '';
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    GalleryComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.gallery, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-gallery',
            template: __webpack_require__("../../../../../src/app/list/tab/gallery/tab.gallery.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__firestore_firestore_service__["a" /* FirestoreService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/map/map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
var Map = (function () {
    function Map(address, amenities, description, email, image, lat, lng, name, phone, rating, status, web) {
        this.address = address;
        this.amenities = amenities;
        this.description = description;
        this.email = email;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.phone = phone;
        this.rating = rating;
        this.status = status;
        this.web = web;
    }
    return Map;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/map/tab.map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"padding:10px;\">\n  <button class=\" btn btn-primary \" (click)=\"launchApp()\">Open ionic app</button>\n</div>\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n          <td class=\"font-weight-bold\"  >Name</td>\n            <td class=\"font-weight-bold\">Address</td>\n            <td class=\"font-weight-bold\">Amenities</td>\n            <td class=\"font-weight-bold\">Description</td>\n            <td class=\"font-weight-bold\">Email</td>\n          <td class=\"font-weight-bold\"  >Image</td>\n            <td class=\"font-weight-bold\">Thumnail</td>\n            <td class=\"font-weight-bold\">Latitud</td>\n            <td class=\"font-weight-bold\">Longitud</td>\n            <td class=\"font-weight-bold\">Phone</td>\n            <td class=\"font-weight-bold\">Rating</td>\n            <td class=\"font-weight-bold\">Status</td>\n            <td class=\"font-weight-bold\">Web</td>\n        </tr>\n        <tr *ngFor=\"let item of map$\">\n            <td class='text-xs-center'>\n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n              <div style=\"margin-top:20px;\">\n                <button class=\"btn btn-primary btn-sm\" (click)=\"openMapModal(map, item, false)\">\n                  <i class=\"fa fa-map-o\"></i>\n                </button>\n              </div>\n            </td>\n            <td style=\"max-width:100px;\"> {{ item.name }} </td>\n            <td style=\"max-width:200px;\"> {{ item.address }} </td>\n            <td style=\"max-width:400px;\"> {{ item.amenities }} </td>\n            <td style=\"min-width:400px; overflow-y:scroll;\"><div style=\"max-height:100px;\"> {{ item.description }} </div></td>\n            <td style=\"max-width:200px;\"> {{ item.email }} </td>\n            <td style=\"max-width:200px; overflow-x:scroll\">{{ item.image }} </td>\n            <td><img [src]=\"item.image\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" /></td>\n            <td> {{ item.lat }} </td>\n            <td> {{ item.lng }} </td>\n            <td> {{ item.phone }} </td>\n            <td> {{ item.rating }} </td>\n            <td> {{ item.status }} </td>\n            <td> {{ item.web }} </td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n\n<!-- Map Modal -->\n<ng-template #map style=\"width:600px;\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Map</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalMapRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div style=\"margin-bottom:10px\">{{model.lat}} - {{model.lng}}</div>\n    <agm-map style=\"height:400px; width:100%;\"  [latitude]=\"model.lat\" [longitude]=\"model.lng\" [zoom]=\"17\" (mapClick)=\"placeMarker($event, model)\">\n      <agm-marker [latitude]=\"model.lat\" [longitude]=\"model.lng\"></agm-marker>\n    </agm-map>\n  </div>\n  <div class=\"form-group\">\n  <button type=\"button\" class=\"btn btn-primary pull-right\" aria-label=\"Close\" (click)=\"modalMapRef.hide()\" style=\"margin-right:30px;\">\n    <span>Ok</span>\n  </button>\n    </div>\n</ng-template>\n\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Map</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Map</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n          </div>\n            <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.address' name='address'>\n            </div>\n            <div class=\"form-group\">\n                <label>Amenities</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.amenities' name='amenities'>\n            </div>\n            <div class=\"form-group\">\n                <label>Description</label>\n              <textarea style=\"width:100%; height:215px;\" class=\"form-control\" [(ngModel)]='model.description' name='description'></textarea>\n                \n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.email' name='email'>\n            </div>\n            <div class=\"form-group\">\n                <label>Image</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.image' name='image'>\n                <img [src]=\"model.image\" width=\"100\" style=\"margin:20px 0px 20px 0px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n            </div>\n          <div style=\"margin-bottom:20px;\">\n            <button class=\"btn btn-primary btn-sm\" (click)=\"openMapModal(map, model, false)\">\n              <i class=\"fa fa-map-o\"></i>\n            </button>\n          </div>\n            <div class=\"form-group\">\n                <label>Latitud</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.lat' name='latitud'>\n            </div>\n            <div class=\"form-group\">\n                <label>Longitud</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.lng' name='longitud'>\n            </div>\n            <div class=\"form-group\">\n                <label>Phone</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.phone' name='phone'>\n            </div>\n            <div class=\"form-group\">\n                <label>Rating</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.rating' name='rating'>\n            </div>\n            <div class=\"form-group\">\n                <label>Status</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.status' name='status'>\n            </div>\n            <div class=\"form-group\">\n                <label>Web</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.web' name='web'>\n            </div>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/map/tab.map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__("../../../../../src/app/list/tab/map/map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapComponent = (function () {
    function MapComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__map__["a" /* Map */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    MapComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
    };
    MapComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('map').then(function (data) {
            _this.map$ = data;
            _this.isLoading = false;
        });
    };
    MapComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template, { class: 'map-wide-modal' });
    };
    MapComponent.prototype.openMapModal = function (template, item) {
        this.model = item;
        this.modalMapRef = this.modalService.show(template);
    };
    MapComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('map', item.$key);
        this.loadData();
    };
    MapComponent.prototype.editOrAddRecord = function (model, addFlag) {
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
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('map', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    MapComponent.prototype.placeMarker = function ($event, model) {
        console.log($event.coords.lat);
        console.log($event.coords.lng);
        model.lat = $event.coords.lat;
        model.lng = $event.coords.lng;
    };
    MapComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.map, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-map',
            template: __webpack_require__("../../../../../src/app/list/tab/map/tab.map.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/message/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(createdDate, imgProfile, messageBody, messageTitle, toId, toName) {
        this.createdDate = createdDate;
        this.imgProfile = imgProfile;
        this.messageBody = messageBody;
        this.messageTitle = messageTitle;
        this.toId = toId;
        this.toName = toName;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/message/tab.message.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\" style=\"padding:10px;\">\n  <button class=\" btn btn-primary\" (click)=\"launchApp()\">Open ionic app</button>\n</div>\n<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true); currentItem ={}\">\n                <i class=\"fa fa-plus\"></i>\n              </button>\n            </td>\n            <td class=\"font-weight-bold\">Created Date</td>\n            <td class=\"font-weight-bold\">Img Profile</td>\n            <td class=\"font-weight-bold\">Message Body</td>\n            <td class=\"font-weight-bold\">Message Title</td>\n            <td class=\"font-weight-bold\">To Id</td>\n            <td class=\"font-weight-bold\">To Name</td>\n        </tr>\n        <tr *ngFor=\"let item of (message$ | async)\">\n            <td class='text-xs-center'>\n              <div ngbDropdown>\n                <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n                  <i class=\"fa fa-cog\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"options\">\n                  <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                    <i class=\"fa fa-pencil\"></i> Edit\n                  </a>\n                  <a class=\"dropdown-item\"\n                     [ngbPopover]=\"confirmation\"\n                     #p=\"ngbPopover\"\n                     triggers=\"manual\"\n                     (click)=\"p.open(); pp = p;\"\n                     placement=\"right\"\n                     popoverTitle=\"Are you sure?\">\n                    <i class=\"fa fa-trash-o\"></i> Delete\n                  </a>\n                </div>\n              </div>\n\n            </td>\n            <td> {{ item.createdDate }} </td>\n            <td> {{ item.imgProfile }} </td>\n            <td> {{ item.messageBody }} </td>\n            <td> {{ item.messageTitle }} </td>\n            <td> {{ item.toId }} </td>\n            <td> {{ item.toName }} </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Message</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Message</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label>Created Date</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.createdDate' name='createdDate'>\n            </div>\n            <div class=\"form-group\">\n                <label>Img Profile</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgProfile' name='imgProfile'>\n            </div>\n            <div class=\"form-group\">\n                <label>Message Body</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.messageBody' name='messageBody'>\n            </div>\n            <div class=\"form-group\">\n                <label>Message Title</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.messageTitle' name='messageTitle'>\n            </div>\n            <div class=\"form-group\">\n                <label>To Id</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.toId' name='toId'>\n            </div>\n            <div class=\"form-group\">\n                <label>To Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.toName' name='toName'>\n            </div>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/message/tab.message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__("../../../../../src/app/list/tab/message/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageComponent = (function () {
    function MessageComponent(http, af, modalService, cdr, db, config) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.db = db;
        this.config = config;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__message__["a" /* Message */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.message$ = this.af.list('/message', {});
        this.message$.subscribe(function (e) {
            _this.isLoading = false;
        });
        this.cdr.detectChanges();
    };
    MessageComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    MessageComponent.prototype.deleteRecord = function (item) {
        this.af.database
            .ref('/message/' + item.$key)
            .remove();
    };
    MessageComponent.prototype.editOrAddRecord = function (model, addFlag) {
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
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.af.database
                .ref('/message/' + model.$key)
                .set(data);
            this.modalRef.hide();
        }
    };
    MessageComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.form, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-message',
            template: __webpack_require__("../../../../../src/app/list/tab/message/tab.message.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/places/places.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Places; });
var Places = (function () {
    function Places(description, name, show, type, total, imgBg) {
        this.description = description;
        this.name = name;
        this.show = show;
        this.type = type;
        this.total = total;
        this.imgBg = imgBg;
    }
    return Places;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/places/tab.places.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCategories\">\n  <form class=\"form-inline\">\n  \n    <div class=\"form-group\">\n      <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n    </div>\n    <div class=\"form-group\" style=\"padding:10px;\">\n      <span data-toggle=\"tooltip\">\n        <button class=\" btn btn-primary form-control\" (click)=\"launchApp()\">Open ionic app</button>\n      </span>\n</div>\n  </form>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Show</td>\n        <td class=\"font-weight-bold\">Type</td>\n        <td class=\"font-weight-bold\">Total</td>\n        <td class=\"font-weight-bold\" style=\"max-width:200px;\">Img Bg</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"getSubCategoryTotal(item); currentItem = item;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmation\"\n                 #p=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"p.open(); pp = p;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"getSubCategory(item); currentItem = item;\">\n                <i class=\"fa fa-cogs\"></i> Manage sub-items ({{subsTotal}})\n              </a>\n            </div>\n          </div>\n        \n        </td>\n        <td> {{ item.name }} </td>\n        <td style=\"max-width:200px;\"> {{ item.description }} </td>\n        <td> {{ item.show }} </td>\n        <td> {{ item.type }} </td>\n        <td> {{ item.total }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.imgBg }} </td>\n        <td><a target=\"_blank\" [href]=\"item.imgBg\"> <img [src]=\"item.imgBg\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal -->\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Places</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Places</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='model.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"model.show\" name=\"show\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>Type</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.type' disabled=\"disabled\" name='type'>\n        </div>\n        <div class=\"form-group\">\n          <label>Total</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.total' name='total'>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen Background</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgBg' name='imgBg'>\n          <img [src]=\"model.imgBg\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<div *ngIf=\"!!showPlaceSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalPlace(templatePlace, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Address</td>\n        <td class=\"font-weight-bold\">Location</td>\n        <td class=\"font-weight-bold\">Phone</td>\n        <td class=\"font-weight-bold\">Rate</td>\n        <td class=\"font-weight-bold\">Web</td>\n        <td class=\"font-weight-bold\">Latitude</td>\n        <td class=\"font-weight-bold\">Longitude</td>\n        <td class=\"font-weight-bold\">Big Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n        <td class=\"font-weight-bold\">Small Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let sub of subs\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemPlace = sub;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalPlace(templatePlace, sub, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmationPlace\"\n                 #s=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"s.open(); ss = s;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n            </div>\n          </div>\n\n        </td>\n        <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.address }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.location }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.phone }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.rate }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.web }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.lat }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.lng }} </td>\n\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgBig }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgBig\"> <img [src]=\"sub.imgBig\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal Place -->\n  <ng-template #templatePlace>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Place</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Place</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefPlace.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='modelPlace.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.address\" name=\"address\">\n        </div>\n        <div class=\"form-group\">\n          <label>Location</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.location\" name=\"location\">\n        </div>\n        <div class=\"form-group\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.phone\" name=\"phone\">\n        </div>\n        <div class=\"form-group\">\n          <label>Rate</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"modelPlace.rate\" name=\"rate\">\n        </div>\n        <div class=\"form-group\">\n          <label>Web</label>\n          <input type=\"url\" class=\"form-control\" [(ngModel)]=\"modelPlace.web\" name=\"web\">\n        </div>\n        <div class=\"form-group\">\n          <label>Latitude</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.lat\" name=\"lat\">\n        </div>\n        <div class=\"form-group\">\n          <label>Longitude</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelPlace.lng\" name=\"lng\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label>Imagen Big</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.imgBig' name='imgBig'>\n          <img [src]=\"modelPlace.imgBig\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label>Imagen Small</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelPlace.imgSmall' name='imgSmall'>\n          <img [src]=\"modelPlace.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <button type=\"submit\" (click)=\"editOrAddRecordPlace(modelPlace, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecordPlace(modelPlace, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmationPlace>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecordPlace(currentItemPlace)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/places/tab.places.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/places/tab.places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places__ = __webpack_require__("../../../../../src/app/list/tab/places/places.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlacesComponent = (function () {
    function PlacesComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.color = '#ccc';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__places__["a" /* Places */]();
        this.adding = false;
        this.showCategories = true;
        this.showRestaurantSub = false;
        this.showShoppingSub = false;
        this.showPlaceSub = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    PlacesComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
        this.selectedType = 'place';
    };
    PlacesComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('places').then(function (data) {
            _this.category$ = data;
            _this.items = data;
            _this.isLoading = false;
        });
    };
    PlacesComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTerm == '') {
            this.items = this.category$;
        }
        else if (this.items && this.searchTerm != undefined) {
            var res = this.category$.filter(function (e) {
                e.description = e.description || '';
                e.name = e.name || '';
                console.log((e.name == e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description == e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) == true ? "found" : "not found");
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    PlacesComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
            this.model.type = 'place';
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    PlacesComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('places', item.$key);
        this.loadData();
    };
    PlacesComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            show: model.show ? model.show : false,
            type: model.type ? model.type : null,
            total: model.total ? model.total : null,
            imgBg: model.imgBg ? model.imgBg : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('places', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('places', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    //----------------------------Place------------------------------------------------
    PlacesComponent.prototype.openModalPlace = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelPlace = {};
        }
        else {
            this.adding = false;
            this.modelPlace = item;
        }
        this.modalRefPlace = this.modalService.show(template);
    };
    PlacesComponent.prototype.editOrAddRecordPlace = function (model, addFlag) {
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
            this.modalRefPlace.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('places', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefPlace.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    PlacesComponent.prototype.deleteRecordPlace = function (item) {
        this.db.deleteSubCollectionDocument('places', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //------------general-----------------------------------------------------------------
    PlacesComponent.prototype.getSubCategory = function (item) {
        var _this = this;
        this.isLoading = true;
        this.db.getSubCategoryDocs('places', item.$key, 'sub').then(function (e) {
            console.log(e);
            _this.showViewHandler(item.type);
            _this.subs = e;
            _this.isLoading = false;
        });
    };
    PlacesComponent.prototype.showViewHandler = function (showView) {
        this.showCategories = false;
        this.showPlaceSub = false;
        if (showView == 'category') {
            this.showCategories = true;
            return;
        }
        if (showView == 'place') {
            this.showPlaceSub = true;
        }
    };
    PlacesComponent.prototype.getSubCategoryTotal = function (item) {
        var _this = this;
        this.db.getSubCategoryDocs('places', item.$key, 'sub').then(function (e) {
            if (!e) {
                _this.subsTotal = 0;
                return;
            }
            _this.subsTotal = e.length;
        });
    };
    PlacesComponent.prototype.capitalCase = function (str) {
        if (!!str && !!str[0]) {
            str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        }
        return str;
    };
    PlacesComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames[_this.selectedType], '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-places',
            template: __webpack_require__("../../../../../src/app/list/tab/places/tab.places.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/places/tab.places.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/push/push.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PushViewModel; });
var Push = (function () {
    function Push(name, title, text, landingTitle, landingText, createdDate, updatedDate, runStartDate, runEndDate, $key) {
        this.name = name;
        this.title = title;
        this.text = text;
        this.landingTitle = landingTitle;
        this.landingText = landingText;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.runStartDate = runStartDate;
        this.runEndDate = runEndDate;
        this.$key = $key;
    }
    return Push;
}());

var PushViewModel = (function () {
    function PushViewModel(model) {
        this.name = model.name;
        this.title = model.title;
        this.text = model.text;
        this.landingTitle = model.landingTitle;
        this.landingText = model.landingText;
        this.createdDate = model.createdDate;
        this.updatedDate = model.updatedDate;
        this.runStartDate = model.runStartDate;
        this.runEndDate = model.runEndDate;
        this.$key = model.$key;
    }
    return PushViewModel;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/push/tab.push.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <div class=\"row\">\n  \n    <div class=\"col\" style=\"max-width:900px; margin: 0 auto;\">\n      <div class=\"form-group wide-popover\" style=\"margin-top:30px;\">\n        <button class=\"btn btn-primary btn-lg\"\n                (click)=\"p.open(); pp = p; loadSavedNotificationData()\"\n                [ngbPopover]=\"confirmation\"\n                #p=\"ngbPopover\"\n                triggers=\"manual\"\n                placement=\"bottom\"\n                popoverTitle=\"Saved campaigns\">\n          Load saved campaign\n        </button>\n        <button class=\"btn btn-secondary btn-lg\"\n                (click)=\"clearForm()\">\n          Clear form\n        </button>\n      </div>\n    </div>\n   \n  </div>\n  <div class=\"row\">\n    <div class=\"col\" style=\"max-width:900px; margin:0 auto\">\n      <form #myForm=\"ngForm\" novalidate>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">Campaign</h4>\n          \n        </div>\n        <div class=\"modal-body\">\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n            <strong>Success!</strong> {{status}}.\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n            <strong>Error!</strong> {{status}}.\n          </div>\n          <div class=\"row\" style=\"margin-bottom:10px;\">\n            <div class=\"col\">\n              <div style=\"padding:3px; border:1px solid #ccc\">\n                <button style=\"margin:10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template, e);\">Add users, groups, topics</button>\n                <span style=\"margin:4px;padding:10px\" class=\"badge badge-pill badge-info\" *ngFor=\"let u of selectedUsers\">{{u.name}}</span>\n                <span style=\"margin:4px;padding:10px\" class=\"badge badge-pill badge-success\" *ngFor=\"let u of selectedUsersGroup\">{{u.name}}</span>\n                <span style=\"margin:4px;padding:10px\" class=\"badge badge-pill badge-dark\" *ngFor=\"let u of selectedChannels\">{{u.name}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"form-group\">\n                <label>Campaign name (*)</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n              </div>\n            </div>\n            <div class=\"col-4\">\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"form-group\">\n                <label>Notification Title (*)</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.title' name='title'>\n              </div>\n              <div class=\"form-group\">\n                <label>Notification text</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.text' name='text'>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <img src=\"./assets/push-notifications.png\" style=\"position: absolute;top: -17px;right: 20px;\" />\n            </div>\n          </div><div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"form-group\">\n                <label>Landing title</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.landingTitle' name='landingTitle'>\n              </div>\n              <div class=\"form-group\">\n                <label>Landing Text</label>\n                <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"model.landingText\" name=\"landingText\" id=\"landingText\" #landingText style=\"width:100%; height:415px;\"></app-ngx-editor>\n                <!--<textarea class=\"form-control\" [(ngModel)]='model.landingText' name=\"landingText\" id=\"landingText\" #landingText style=\"width:100%; height:215px;\"></textarea>-->\n                <!--<div [class]=\"landingText.value.length > 1000? 'over-limit-danger': ''\" style=\"text-align:right; padding-right:10px\">{{landingText.value.length}} of 1000</div>-->\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <img src=\"./assets/notification-landing.png\" style=\"position: absolute;top: 4px;right: 3px;width: 270px;\" />\n\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col col-8\">\n\n              <div class=\"form-group\">\n                <label>Run Start Date</label>\n                <my-date-picker name=\"runStartDate\" [options]=\"myDatePickerOptions\" placeholder=\"mm/dd/yyyy\"\n                                [(ngModel)]=\"model.runStartDate\"></my-date-picker>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Run End Date</label>\n                <my-date-picker name=\"runEndDate\" [options]=\"myDatePickerOptions\" placeholder=\"mm/dd/yyyy\"\n                                [(ngModel)]=\"model.runEndDate\"></my-date-picker>\n              </div>\n\n\n\n            </div>\n            <div class=\"col col-4\">\n\n            </div>\n          </div>\n\n          <p>&nbsp;</p>\n          <div class=\"alert alert-danger\" style=\"padding:5px;\" *ngIf=\"!recipientSelected()\">\n            *No user, group or topic selected\n          </div>\n          <div class=\"row float-right\" style=\"position:relative; margin-bottom:20px\">\n            <div class=\"col\" style=\"display:flex; align-items:center;\">\n\n\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" (click)=\"saveNotification(model)\" class=\"btn btn-primary\" [disabled]=\"!model.title || !model.name\">Save</button>\n            </div>\n            <div class=\"col\">\n              <button type=\"button\" (click)=\"sendNotification(model)\" class=\"btn btn-success\" [disabled]=\"!recipientSelected() || !model.title || !model.name\">Send</button>\n            </div>\n          </div>\n\n        </div>\n      </form>\n    </div>\n\n\n  </div>\n</div>\n\n<!-- Users Modal -->\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Users</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <span class=\"nav-link {{ !!userActive? 'active': ''}}\" (click)=\"toggleTabs('users')\">Users</span>\n      </li>\n      <li class=\"nav-item\">\n        <span class=\"nav-link {{ !!groupsActive? 'active': ''}}\" (click)=\"toggleTabs('groups')\">Groups</span>\n      </li>\n      <li class=\"nav-item\">\n        <span class=\"nav-link {{ !!channelsActive? 'active': ''}}\" (click)=\"toggleTabs('channels')\">Topics</span>\n      </li>\n    </ul>\n\n    <div class=\"form-group\" style=\"margin-top:30px;\">\n      <button type=\"button\" class=\"btn btn-success pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">Done</button>\n    </div>\n    <div *ngIf=\"toggle == 'users'\">\n      <div>\n        <div class=\"form-group\" style=\"margin-top:30px;\">\n          <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n        </div>\n      </div>\n      <div style=\"max-height:650px; overflow-y:scroll\">\n        <table class=\"table table-striped\">\n          <tbody>\n            <tr>\n              <td>\n                <div style=\"text-align:center;\">\n                  <input type=\"checkbox\" class=\"\" [(ngModel)]=\"userCheck\" style=\"width:20px; height:20px;\" (click)=\"selectAll();\" />\n                </div>\n              </td>\n              <td class=\"font-weight-bold\">Name</td>\n              <td class=\"font-weight-bold\">Email</td>\n              <td class=\"font-weight-bold\">Tocken</td>\n              <!--<td class=\"font-weight-bold\" style=\"max-width:200px;\">Img Bg</td>-->\n              <td class=\"font-weight-bold\">Thumnail</td>\n            </tr>\n            <tr *ngFor=\"let user of items\" (click)=\"user.checked? user.checked = false: user.checked = true; changed(user);\">\n              <td class='text-xs-center'>\n                <div class=\"\" style=\"text-align:center;\">\n                  <input type=\"checkbox\" class=\"\" style=\"width:20px; height:20px;\" [(ngModel)]=\"user.checked\" />\n                </div>\n\n              </td>\n              <td> {{ user.name }} </td>\n              <td> {{ user.email}} </td>\n              <td style=\"max-width:300px;overflow-x: scroll;\"> {{ user.pushTocken }} </td>\n              <td><a target=\"_blank\" [href]=\"user.pic\"> <img [src]=\"user.pic\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div *ngIf=\"toggle == 'groups'\">\n      <div class=\"form-group\" style=\"margin-top:30px;\">\n        <input name=\"groupSearchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"groupSearchTerm\" (ngModelChange)=\"searchGroups()\" style=\"width:400px;\">\n      </div>\n      <table class=\"table table-striped\" style=\"max-height:650px; overflow-y:scroll\">\n        <tbody>\n          <tr>\n            <td>\n              <div style=\"text-align:center;\">\n                <input type=\"checkbox\" [(ngModel)]=\"groupCheck\" class=\"\" style=\"width:20px; height:20px;\" (click)=\"selectAllGroups();\" />\n              </div>\n            </td>\n            <td class=\"font-weight-bold\">Group Name</td>\n            <td class=\"font-weight-bold\">Users</td>\n          </tr>\n          <tr *ngFor=\"let group of groups\" (click)=\"group.checked? group.checked = false: group.checked = true; changedGroup();\">\n            <td class='text-xs-center'>\n              <div class=\"\" style=\"text-align:center;\">\n                <input type=\"checkbox\" class=\"\" style=\"width:20px; height:20px;\" [(ngModel)]=\"group.checked\" (ngModelChange)=\"changedGroup(group)\" />\n              </div>\n\n            </td>\n            <td style=\"max-width:100px;\"> {{ group.name }} </td>\n            <td>\n              <span style=\"margin:4px;padding:10px\" class=\"badge badge-pill badge-info\" *ngFor=\"let u of group.users\">{{u.name}}</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n\n    <div *ngIf=\"toggle == 'channels'\">\n      <div class=\"form-group\" style=\"margin-top:30px;\">\n        <input name=\"channelSearchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"channelSearchTerm\" (ngModelChange)=\"searchChannels()\" style=\"width:400px;\">\n      </div>\n      <table class=\"table table-striped\" style=\"max-height:650px; overflow-y:scroll\">\n        <tbody>\n          <tr>\n            <td>\n            </td>\n            <td class=\"font-weight-bold\">Topic name</td>\n          </tr>\n          <tr *ngFor=\"let channel of channels\" (click)=\"channel.checked? channel.checked = false: channel.checked = true;  changedChannel(channel)\">\n            <td class='text-xs-center'>\n              <div class=\"\" style=\"text-align:center;\">\n                <input type=\"checkbox\" class=\"\" style=\"width:20px; height:20px;\" [(ngModel)]=\"channel.checked\" />\n              </div>\n\n            </td>\n            <td style=\"max-width:100px;\"> {{ channel.name }} </td>\n           \n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n  </div>\n</ng-template>\n\n<!-- Confirmation list saved notifications Modal -->\n<ng-template #confirmation>\n  <div style=\"min-width:260px; \">\n    <i class=\"fa fa-times\" (click)=\"pp.close()\" style=\"position:absolute;right:5px;top:5px\"></i>\n    <div style=\"overflow-y:scroll; max-height:290px;\">\n  \n      <div style=\"margin-bottom:10px;\">\n        <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTermSentNotifications\" (ngModelChange)=\"searchSentNotifications()\" style=\"width:100%\">\n      </div>\n      <div *ngFor=\"let e of itemsSentNotifications\">\n        <div class=\"row\" style=\"padding: 5px; margin:2px; border: 1px solid #ccc;\">\n          <div class=\"col col-7\">\n            <div (click)=\"pp.close();loadModel(e);\">{{e.name}}</div>\n          </div>\n\n          <div class=\"col col-4\" (click)=\"pp.close();loadModel(e);\">\n            <div *ngIf=\"!!e.runStartDate\">Start: {{e.runStartDate.formatted}}</div>\n            <div *ngIf=\"!!e.runEndDate\">Ends: {{e.runEndDate.formatted}}</div>\n            \n          </div>\n\n          <div class=\"col col-1 no-arrow\">\n            <i class=\"fa fa-trash\" style=\"color:red\"\n               [ngbPopover]=\"delete\"\n               #d=\"ngbPopover\"\n               triggers=\"manual\"\n               (click)=\"d.open(); dd = d; currentItem = e;\"\n               placement=\"left\"\n               popoverTitle=\"Delete campaign\"></i>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<!-- Confirmation Delete Modal -->\n<ng-template #delete>\n  <div style=\"min-width:150px; text-align:center\">\n    <button (click)=\"dd.close()\" class=\"btn btn-success btn-sm\">\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button (click)=\"deleteCampaign(currentItem)\" class=\"btn btn-danger btn-sm\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n\n  </div>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/push/tab.push.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tab-push .wide-popover > .popover {\n  max-width: 500px !important;\n  width: 500px;\n  max-height: 350px; }\n\ntab-push div.no-arrow .bs-popover-left .arrow {\n  visibility: hidden !important; }\n\n.over-limit-danger {\n  color: red; }\n\n.push-wide-modal {\n  max-width: 800px !important;\n  width: 800px !important;\n  background-color: #fafafa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/push/tab.push.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__push__ = __webpack_require__("../../../../../src/app/list/tab/push/push.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PushComponent = (function () {
    function PushComponent(http, af, modalService) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.selectedUsersGroup = [];
        this.selectedChannels = [];
        this.toggleSelectAllGroups = false;
        this.groupSearchTerm = '';
        this.channelSearchTerm = '';
        this.toggle = 'users';
        this.groupsActive = false;
        this.channelsActive = false;
        this.userActive = true;
        this.selectedUsers = [];
        this.toggleSelectAll = false;
        this.searchTermSentNotifications = '';
        this.totalSelected = 0;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__push__["a" /* Push */]();
        this.searchTerm = '';
        this.authorizationKey = __WEBPACK_IMPORTED_MODULE_5__config_config__["c" /* pushAuthKey */];
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'mm/dd/yyyy',
        };
        this.loadData();
    }
    PushComponent.prototype.recipientSelected = function () {
        if (this.selectedUsers.length > 0 || this.selectedUsersGroup.length > 0 || this.selectedChannels.length > 0) {
            return true;
        }
        return false;
    };
    PushComponent.prototype.changed = function (user) {
        if (!!user) {
            if (!!user.checked) {
                this.selectedUsers.push(user);
            }
            else {
                var email = this.selectedUsers.map(function (x) { return x.email; });
                this.selectedUsers.splice(email.indexOf(user.email), 1);
            }
        }
    };
    PushComponent.prototype.changedGroup = function (group) {
        if (!!group) {
            if (!!group.checked) {
                this.selectedUsersGroup.push(group);
            }
            else {
                var key = this.selectedUsersGroup.map(function (x) { return x.$key; });
                this.selectedUsersGroup.splice(key.indexOf(group.$key), 1);
            }
        }
    };
    PushComponent.prototype.changedChannel = function (channel) {
        if (!!channel) {
            if (!!channel.checked) {
                this.selectedChannels.push(channel);
            }
            else {
                var key = this.selectedChannels.map(function (x) { return x.$key; });
                this.selectedChannels.splice(key.indexOf(channel.$key), 1);
            }
        }
    };
    PushComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.users$ = this.af.list('/userProfile', {});
        this.users$.subscribe(function (e) {
            _this.isLoading = false;
            _this.users = e;
            _this.search();
        });
        this.af.list('/userGroups', {}).subscribe(function (e) {
            _this.isLoading = false;
            _this.usersGroups = e;
            _this.searchGroups();
        });
        this.af.list('/ChannelsTopics', {}).subscribe(function (e) {
            _this.isLoading = false;
            _this.channelsFromDb = e;
            _this.searchChannels();
        });
    };
    PushComponent.prototype.toggleTabs = function (tab) {
        this.userActive = false;
        this.groupsActive = false;
        this.channelsActive = false;
        if (tab == 'users') {
            this.userActive = true;
        }
        else if (tab == 'groups') {
            this.groupsActive = true;
            this.searchGroups();
        }
        else if (tab == 'channels') {
            this.channelsActive = true;
            this.searchChannels();
        }
        this.toggle = tab;
    };
    PushComponent.prototype.loadSavedNotificationData = function () {
        var _this = this;
        this.isLoading = true;
        this.sentNotifications$ = this.af.list('/sentNotifications', {});
        this.sentNotifications$.subscribe(function (e) {
            _this.isLoading = false;
            _this.sentNotifications = new __WEBPACK_IMPORTED_MODULE_4__push__["a" /* Push */]();
            _this.sentNotifications = e;
            _this.searchSentNotifications();
        });
    };
    PushComponent.prototype.searchSentNotifications = function () {
        var _this = this;
        if (this.searchTermSentNotifications == '') {
            this.itemsSentNotifications = this.sentNotifications;
        }
        else if (this.itemsSentNotifications && this.searchTermSentNotifications != undefined) {
            var res = this.sentNotifications.filter(function (e) {
                e.name == e.name || '';
                return (e.name.toLowerCase().indexOf(_this.searchTermSentNotifications.toLowerCase()) > -1);
            });
            this.itemsSentNotifications = res;
        }
    };
    PushComponent.prototype.searchGroups = function () {
        var _this = this;
        if (this.groupSearchTerm == '') {
            this.groups = this.usersGroups;
        }
        else if (this.groups && this.groupSearchTerm != undefined) {
            var res = this.usersGroups.filter(function (e) {
                e.name = !!e.name ? e.name : '';
                return (e.name.toLowerCase().indexOf(_this.groupSearchTerm.toLowerCase()) > -1);
            });
            this.groups = res;
        }
    };
    PushComponent.prototype.searchChannels = function () {
        var _this = this;
        if (this.channelSearchTerm == '') {
            this.channels = this.channelsFromDb;
        }
        else if (this.groups && this.channelSearchTerm != undefined) {
            var res = this.channelsFromDb.filter(function (e) {
                e.name = !!e.name ? e.name : '';
                return (e.name.toLowerCase().indexOf(_this.channelSearchTerm.toLowerCase()) > -1);
            });
            this.channels = res;
        }
    };
    PushComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTerm == '') {
            this.items = this.users;
        }
        else if (this.items && this.searchTerm != undefined) {
            var res = this.users.filter(function (e) {
                e.email = !!e.email ? e.email : '';
                e.name = !!e.name ? e.name : '';
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.email.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    PushComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'push-wide-modal' });
    };
    PushComponent.prototype.saveNotification = function (model) {
        var _this = this;
        model.createdDate = model.createdDate ? model.createdDate : '';
        model.updatedDate = model.updatedDate ? model.updatedDate : '';
        model.runStartDate = model.runStartDate ? model.runStartDate : '';
        model.runEndDate = model.runEndDate ? model.runEndDate : '';
        if (model.runStartDate == 'Invalid date' || model.runEndDate == 'Invalid date') {
            this.error = true;
            this.status = 'Inavlid date';
            return;
        }
        var that = this;
        this.isLoading = true;
        this.af.list('/sentNotifications/' + model.$key).subscribe(function (e) {
            var key = model.$key;
            if (e && e.length > 0) {
                model.updatedDate = __WEBPACK_IMPORTED_MODULE_6_moment__().format();
                delete model.$key;
                _this.af.object("/sentNotifications/" + key).set(model)
                    .then(function (n) {
                    _this.isLoading = false;
                    _this.success = true;
                    _this.status = 'Notification seccesfully updated';
                    setTimeout(function () { _this.success = false; }, 3000);
                });
                model.$key = key;
            }
            else {
                model.createdDate = __WEBPACK_IMPORTED_MODULE_6_moment__().format();
                model.updatedDate = __WEBPACK_IMPORTED_MODULE_6_moment__().format();
                delete model.$key;
                _this.af.list('/sentNotifications').push(model)
                    .then(function (n) {
                    model.$key = n.key;
                    _this.isLoading = false;
                    _this.success = true;
                    _this.status = 'Notification seccesfully saved';
                    setTimeout(function () { _this.success = false; }, 3000);
                });
                model.$key = key;
            }
        });
    };
    PushComponent.prototype.sendNotification = function (model) {
        var _this = this;
        this.saveNotification(model);
        this.isLoading = true;
        if (!this.selectedUsers && !this.selectedUsersGroup && !this.selectedChannels) {
            return;
        }
        var selectedUserPushTockens = [];
        this.selectedUsers.forEach(function (e) {
            selectedUserPushTockens.push(e.pushTocken);
        });
        this.selectedUsersGroup.forEach(function (e) {
            if (e.users) {
                selectedUserPushTockens = selectedUserPushTockens.concat(e.users.map(function (x) { return x.pushTocken; }));
            }
        });
        this.selectedChannels.forEach(function (e) {
            if (e.name) {
                selectedUserPushTockens.push('/topics/' + e.name);
            }
        });
        if (!!selectedUserPushTockens && selectedUserPushTockens.length > 0) {
            selectedUserPushTockens.forEach(function (x, i) {
                _this.sendPushNotification(x, model);
                _this.isLoading = false;
                _this.success = true;
                _this.status = 'Notification seccesfully sent';
                setTimeout(function () { _this.success = false; }, 3000);
            });
        }
    };
    PushComponent.prototype.cancelModal = function () {
        this.modalRef.hide();
    };
    PushComponent.prototype.selectAll = function () {
        if (this.toggleSelectAll) {
            this.items.forEach(function (x) {
                x.checked = false;
            });
            this.userCheck = false;
            this.selectedUsers = [];
            this.toggleSelectAll = false;
        }
        else {
            this.items.forEach(function (x) {
                x.checked = true;
            });
            this.userCheck = true;
            this.selectedUsers = JSON.parse(JSON.stringify(this.items));
            this.toggleSelectAll = true;
        }
        this.changed(null);
    };
    PushComponent.prototype.selectAllGroups = function () {
        if (this.toggleSelectAllGroups) {
            this.groups.forEach(function (x) {
                x.checked = false;
            });
            this.groupCheck = false;
            this.selectedUsersGroup = [];
            this.toggleSelectAllGroups = false;
        }
        else {
            this.groups.forEach(function (x) {
                x.checked = true;
            });
            this.groupCheck = true;
            this.selectedUsersGroup = JSON.parse(JSON.stringify(this.groups));
            this.toggleSelectAllGroups = true;
        }
        this.changed(null);
    };
    PushComponent.prototype.sendPushNotification = function (deviceId, model) {
        var url = 'https://fcm.googleapis.com/fcm/send';
        //use notification instead of data for ios
        var body = {
            "data": {
                "title": model.title,
                "body": model.text,
                "sound": "default",
                "icon": "fcm_push_icon",
                "extras": {
                    "name": model.name
                }
            },
            "to": deviceId
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'key=' + this.authorizationKey
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var post = this.http.post(url, body, options);
        post.map(function (response) {
            return response;
        }).subscribe(function (data) {
            //post doesn't fire if it doesn't get subscribed to
            console.log(data);
            //store the notification on the database
        });
        return post;
    };
    PushComponent.prototype.deleteCampaign = function (currentItem) {
        var _this = this;
        this.isLoading = true;
        this.af.object('/sentNotifications/' + currentItem.$key).remove().then(function () {
            _this.isLoading = false;
        });
    };
    PushComponent.prototype.loadModel = function (e) {
        //clear model first
        e.runStartDate = !e.runStartDate ? '' : e.runStartDate;
        e.runEndDate = !e.runEndDate ? '' : e.runEndDate;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__push__["b" /* PushViewModel */](e);
        //this.model = e;
    };
    PushComponent.prototype.clearForm = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_4__push__["a" /* Push */]();
        this.selectedUsers = [];
        this.selectedUsersGroup = [];
        this.selectedChannels = [];
    };
    PushComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-push',
            template: __webpack_require__("../../../../../src/app/list/tab/push/tab.push.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/push/tab.push.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */]])
    ], PushComponent);
    return PushComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/registerUser/tab.register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"padding:50px\">\n    <p>Register Admin account</p>\n    <div class=\"row\">\n\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Fullname\" [(ngModel)]='name' required name='name'>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]='email' required name='email'>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]='pass' required name='pass'>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Profile pic url (optional)\" [(ngModel)]='pic' name='pic'>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" [disabled]=\"!name || !email || !pass\" class=\"btn btn-primary btn-lg\" (click)=\"auth.registerWithEmailAndPass(name, email, pass, pic)\">Register</button>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <button class=\"btn btn-danger btn-lg\" (click)=\"auth.registerUserWithGoogle()\">\n          <i class=\"fa fa-google\"></i> Register with Google\n        </button>\n      </div>\n    </div>\n\n  </div>\n  <ngb-alert *ngIf=\"auth.showUnauthorizedAlert\" (click)=\"closeAlert()\" [dismissible]=\"true\" type=\"danger\">\n    <strong>Alert!</strong> {{ !auth.errorMsg? 'Permission denied.': auth.errorMsg}}\n  </ngb-alert>\n</div>\n\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/registerUser/tab.register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-profile-box {\n  max-width: 600px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding: 10px;\n  border: 1px solid #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/registerUser/tab.register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(auth, db, router) {
        var _this = this;
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.isAdminRegistered = true;
        auth.user.subscribe(function (x) {
            if (!x.superAdmin) {
                _this.router.navigate(['/']);
            }
        });
    }
    RegisterComponent.prototype.closeAlert = function () {
        this.auth.showUnauthorizedAlert = false;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-register',
            template: __webpack_require__("../../../../../src/app/list/tab/registerUser/tab.register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/registerUser/tab.register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__firestore_firestore_service__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/restaurant/restaurant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
var Restaurant = (function () {
    function Restaurant(description, name, show, type, total, imgBg) {
        this.description = description;
        this.name = name;
        this.show = show;
        this.type = type;
        this.total = total;
        this.imgBg = imgBg;
    }
    return Restaurant;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/restaurant/tab.restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCategories\">\n  <form class=\"form-inline\">\n \n    <div class=\"form-group\">\n      <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n    </div>\n    <div class=\"form-group\" style=\"padding:10px;\">\n      <span data-toggle=\"tooltip\">\n        <button class=\" btn btn-primary form-control\" (click)=\"launchApp()\">Open ionic app</button>\n      </span>\n</div>\n  </form>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Show</td>\n        <td class=\"font-weight-bold\">Type</td>\n        <td class=\"font-weight-bold\">Total</td>\n        <td class=\"font-weight-bold\" style=\"max-width:200px;\">Img Bg</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"getSubCategoryTotal(item); currentItem = item;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmation\"\n                 #p=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"p.open(); pp = p;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"getSubCategory(item); currentItem = item;\">\n                <i class=\"fa fa-cogs\"></i> Manage sub-items ({{subsTotal}})\n              </a>\n            </div>\n          </div>\n        \n        </td>\n        <td> {{ item.name }} </td>\n        <td style=\"max-width:200px;\"> {{ item.description }} </td>\n        <td> {{ item.show }} </td>\n        <td> {{ item.type }} </td>\n        <td> {{ item.total }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.imgBg }} </td>\n        <td><a target=\"_blank\" [href]=\"item.imgBg\"> <img [src]=\"item.imgBg\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal -->\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Restaurant</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Restaurant</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='model.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"model.show\" name=\"show\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>Type</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.type' disabled=\"disabled\" name='type'>\n         \n        </div>\n        <div class=\"form-group\">\n          <label>Total</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.total' name='total'>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen Background</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgBg' name='imgBg'>\n          <img [src]=\"model.imgBg\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<div *ngIf=\"showRestaurantSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalRestaurant(templateRestaurant, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Price</td>\n        <td class=\"font-weight-bold\">Promotion</td>\n        <td class=\"font-weight-bold\">Image</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let sub of subs\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemRestaurant = sub;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalRestaurant(templateRestaurant, sub, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmationRestaurant\"\n                 #s=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"s.open(); ss = s;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n            </div>\n          </div>\n\n        </td>\n        <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.price }} </td>\n        <td style=\"max-width:200px;\"> {{ sub.promotion }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n        <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n        <td> {{ sub.show }} </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal Restaurant -->\n  <ng-template #templateRestaurant>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Restaurant</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Restaurant</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefRestaurant.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelRestaurant.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='modelRestaurant.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelRestaurant.price\" name=\"price\">\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"modelRestaurant.discount\" name=\"discount\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='modelRestaurant.imgSmall' name='imgSmall'>\n          <img [src]=\"modelRestaurant.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n\n        <button type=\"submit\" (click)=\"editOrAddRecordRestaurant(modelRestaurant, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecordRestaurant(modelRestaurant, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmationRestaurant>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecordRestaurant(currentItemRestaurant)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/restaurant/tab.restaurant.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/restaurant/tab.restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant__ = __webpack_require__("../../../../../src/app/list/tab/restaurant/restaurant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RestaurantComponent = (function () {
    function RestaurantComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.color = '#ccc';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__restaurant__["a" /* Restaurant */]();
        this.adding = false;
        this.showCategories = true;
        this.showRestaurantSub = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.cdr.detectChanges();
        this.selectedType = 'restaurant';
    };
    RestaurantComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('restaurant').then(function (data) {
            _this.category$ = data;
            _this.items = data;
            _this.isLoading = false;
        });
    };
    RestaurantComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTerm == '') {
            this.items = this.category$;
        }
        else if (this.items && this.searchTerm != undefined) {
            var res = this.category$.filter(function (e) {
                e.description = e.description || '';
                e.name = e.name || '';
                console.log((e.name == e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description == e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) == true ? "found" : "not found");
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    RestaurantComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
            this.model.type = 'restaurant';
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    RestaurantComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('restaurant', item.$key);
        this.loadData();
    };
    RestaurantComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            show: model.show ? model.show : false,
            type: model.type ? model.type : null,
            total: model.total ? model.total : null,
            imgBg: model.imgBg ? model.imgBg : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('restaurant', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('restaurant', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    //----------------------------Restaurant------------------------------------------------
    RestaurantComponent.prototype.openModalRestaurant = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelRestaurant = {};
        }
        else {
            this.adding = false;
            this.modelRestaurant = item;
        }
        this.modalRefRestaurant = this.modalService.show(template);
    };
    RestaurantComponent.prototype.editOrAddRecordRestaurant = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            price: model.price ? model.price : false,
            discount: model.discount ? model.discount : null,
            imgSmall: model.imgSmall ? model.imgSmall : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addSubCollectionDocument('category', this.currentItem.$key, 'sub', data);
            this.modalRefRestaurant.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('category', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefRestaurant.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    RestaurantComponent.prototype.deleteRecordRestaurant = function (item) {
        this.db.deleteSubCollectionDocument('category', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //------------general-----------------------------------------------------------------
    RestaurantComponent.prototype.getSubCategory = function (item) {
        var _this = this;
        this.isLoading = true;
        this.db.getSubCategoryDocs('restaurant', item.$key, 'sub').then(function (e) {
            console.log(e);
            _this.showViewHandler(item.type);
            _this.subs = e;
            _this.isLoading = false;
        });
    };
    RestaurantComponent.prototype.showViewHandler = function (showView) {
        this.showCategories = false;
        this.showRestaurantSub = false;
        if (showView == 'category') {
            this.showCategories = true;
            return;
        }
        if (showView == 'restaurant') {
            this.showRestaurantSub = true;
        }
    };
    RestaurantComponent.prototype.getSubCategoryTotal = function (item) {
        var _this = this;
        this.db.getSubCategoryDocs('restaurant', item.$key, 'sub').then(function (e) {
            if (!e) {
                _this.subsTotal = 0;
                return;
            }
            _this.subsTotal = e.length;
        });
    };
    RestaurantComponent.prototype.capitalCase = function (str) {
        if (!!str && !!str[0]) {
            str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        }
        return str;
    };
    RestaurantComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames[_this.selectedType], '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    RestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-restaurant',
            template: __webpack_require__("../../../../../src/app/list/tab/restaurant/tab.restaurant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/restaurant/tab.restaurant.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/shopping/shopping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shopping; });
var Shopping = (function () {
    function Shopping(description, name, show, type, total, imgBg) {
        this.description = description;
        this.name = name;
        this.show = show;
        this.type = type;
        this.total = total;
        this.imgBg = imgBg;
    }
    return Shopping;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/shopping/tab.shopping.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCategories\">\n  <form class=\"form-inline\">\n\n    <div class=\"form-group\">\n      <input name=\"searchTerm\" type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\" style=\"width:400px;\">\n    </div>\n    <div class=\"form-group\" style=\"padding:10px;\">\n      <span >\n        <button class=\" btn btn-primary form-control\" (click)=\"launchApp()\">Open ionic app</button>\n      </span>\n</div>\n  </form>\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Name</td>\n        <td class=\"font-weight-bold\">Description</td>\n        <td class=\"font-weight-bold\">Show</td>\n        <td class=\"font-weight-bold\">Type</td>\n        <td class=\"font-weight-bold\">Total</td>\n        <td class=\"font-weight-bold\" style=\"max-width:200px;\">Img Bg</td>\n        <td class=\"font-weight-bold\">Thumnail</td>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td class='text-xs-center'>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"getSubCategoryTotal(item); currentItem = item;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmation\"\n                 #p=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"p.open(); pp = p;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"getSubCategory(item); currentItem = item;\">\n                <i class=\"fa fa-cogs\"></i> Manage sub-items ({{subsTotal}})\n              </a>\n            </div>\n          </div>\n        \n        </td>\n        <td> {{ item.name }} </td>\n        <td style=\"max-width:200px;\"> {{ item.description }} </td>\n        <td> {{ item.show }} </td>\n        <td> {{ item.type }} </td>\n        <td> {{ item.total }} </td>\n        <td style=\"max-width:200px;overflow-x: scroll;\"> {{ item.imgBg }} </td>\n        <td><a target=\"_blank\" [href]=\"item.imgBg\"> <img [src]=\"item.imgBg\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <!-- Edit Modal -->\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Shopping</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Shopping</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='model.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"model.show\" name=\"show\"> Show\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <label>Type</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.type' disabled=\"disabled\" name='type'>\n          \n        </div>\n        <div class=\"form-group\">\n          <label>Total</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.total' name='total'>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen Background</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.imgBg' name='imgBg'>\n          <img [src]=\"model.imgBg\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n    </div>\n  </ng-template>\n</div>\n\n<div *ngIf=\"showShoppingSub\">\n  <ol style=\"margin-top:10px;\" class=\"breadcrumb\">\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"showViewHandler('category')\"><i class=\"fa fa-arrow-left\"></i></button>\n      <h3 style=\"display:inline; margin-left:10px;\"> {{capitalCase(currentItem.type)}} / {{currentItem.name}}</h3>\n    </li>\n  </ol>\n    <table class=\"table table-striped\">\n      <tbody>\n        <tr>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModalShopping(templateShopping, item, true)\">\n              <i class=\"fa fa-plus\"></i>\n            </button>\n          </td>\n          <td class=\"font-weight-bold\">Name</td>\n          <td class=\"font-weight-bold\">Description</td>\n          <td class=\"font-weight-bold\">Price</td>\n          <td class=\"font-weight-bold\">Discount</td>\n          <td class=\"font-weight-bold\">Discount Price</td>\n          <td class=\"font-weight-bold\">Image</td>\n          <td class=\"font-weight-bold\">Thumnail</td>\n        </tr>\n        <tr *ngFor=\"let sub of subs\">\n          <td class='text-xs-center'>\n            <div ngbDropdown>\n              <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItemShopping = sub;\">\n                <i class=\"fa fa-cog\"></i>\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"options\">\n                <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModalShopping(templateShopping, sub, false)\">\n                  <i class=\"fa fa-pencil\"></i> Edit\n                </a>\n                <a class=\"dropdown-item\"\n                   [ngbPopover]=\"confirmationShopping\"\n                   #s=\"ngbPopover\"\n                   triggers=\"manual\"\n                   (click)=\"s.open(); ss = s;\"\n                   placement=\"right\"\n                   popoverTitle=\"Are you sure?\">\n                  <i class=\"fa fa-trash-o\"></i> Delete\n                </a>\n              </div>\n            </div>\n\n          </td>\n          <td style=\"max-width:200px;\"> {{ sub.name }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.description }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.price }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.discount }} </td>\n          <td style=\"max-width:200px;\"> {{ sub.discountPrice }} </td>\n          <td style=\"max-width:200px;overflow-x: scroll;\"> {{ sub.imgSmall }} </td>\n          <td><a target=\"_blank\" [href]=\"sub.imgSmall\"> <img [src]=\"sub.imgSmall\" width=\"100\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </a></td>\n          <td> {{ sub.show }} </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <!-- Edit Modal Shopping -->\n    <ng-template #templateShopping>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Shopping</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Shopping</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRefShopping.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='modelShopping.name' name='name'>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control\" [(ngModel)]='modelShopping.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelShopping.price\" name=\"price\">\n          </div>\n          <div class=\"form-group\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"modelShopping.discount\" name=\"discount\"> Show\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label>Discount Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelShopping.discountPrice\" name=\"discountPrice\">\n          </div>\n          <div class=\"form-group\">\n            <label>Imagen</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='modelShopping.imgSmall' name='imgSmall'>\n            <img [src]=\"modelShopping.imgSmall\" width=\"100\" style=\"margin:20px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n          </div>\n\n          <button type=\"submit\" (click)=\"editOrAddRecordShopping(modelShopping, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n          <button type=\"submit\" (click)=\"editOrAddRecordShopping(modelShopping, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n      </div>\n    </ng-template>\n\n    <!-- Confirmation Delete Modal -->\n    <ng-template #confirmationShopping>\n      <div style=\"min-width:150px; text-align:center\">\n        <button (click)=\"ss.close()\" class=\"btn btn-success btn-sm\">\n          <i class=\"fa fa-times\"></i>\n        </button>\n        <button (click)=\"deleteRecordShopping(currentItemShopping)\" class=\"btn btn-danger btn-sm\">\n          <i class=\"fa fa-check\"></i>\n        </button>\n\n      </div>\n    </ng-template>\n</div>\n\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/shopping/tab.shopping.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/tab/shopping/tab.shopping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping__ = __webpack_require__("../../../../../src/app/list/tab/shopping/shopping.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingComponent = (function () {
    function ShoppingComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.color = '#ccc';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__shopping__["a" /* Shopping */]();
        this.adding = false;
        this.showCategories = true;
        this.showShoppingSub = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.selectedType = 'shopping';
        this.cdr.detectChanges();
    };
    ShoppingComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('shopping').then(function (data) {
            _this.category$ = data;
            _this.items = data;
            _this.isLoading = false;
        });
    };
    ShoppingComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTerm == '') {
            this.items = this.category$;
        }
        else if (this.items && this.searchTerm != undefined) {
            var res = this.category$.filter(function (e) {
                e.description = e.description || '';
                e.name = e.name || '';
                console.log((e.name == e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description == e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) == true ? "found" : "not found");
                return (e.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) || (e.description.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            });
            this.items = res;
        }
    };
    ShoppingComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
            this.model.type = 'shopping';
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    ShoppingComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('shopping', item.$key);
        this.loadData();
    };
    ShoppingComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            description: model.description ? model.description : null,
            name: model.name ? model.name : null,
            show: model.show ? model.show : false,
            type: model.type ? model.type : null,
            total: model.total ? model.total : null,
            imgBg: model.imgBg ? model.imgBg : null
        };
        console.log('data', data);
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('shopping', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('shopping', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    //----------------------------Shopping------------------------------------------------
    ShoppingComponent.prototype.openModalShopping = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.modelShopping = {};
        }
        else {
            this.adding = false;
            this.modelShopping = item;
        }
        this.modalRefShopping = this.modalService.show(template);
    };
    ShoppingComponent.prototype.editOrAddRecordShopping = function (model, addFlag) {
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
            this.modalRefShopping.hide();
        }
        else {
            // Edit Record
            this.db.updateSubCollectionDocument('shopping', this.currentItem.$key, 'sub', model.$key, data);
            this.modalRefShopping.hide();
        }
        this.getSubCategory(this.currentItem);
    };
    ShoppingComponent.prototype.deleteRecordShopping = function (item) {
        this.db.deleteSubCollectionDocument('shopping', this.currentItem.$key, 'sub', item.$key);
        //re-load the data
        this.getSubCategory(this.currentItem);
    };
    //------------general-----------------------------------------------------------------
    ShoppingComponent.prototype.getSubCategory = function (item) {
        var _this = this;
        this.isLoading = true;
        this.db.getSubCategoryDocs('shopping', item.$key, 'sub').then(function (e) {
            console.log(e);
            _this.subs = e;
            _this.showViewHandler(item.type);
            _this.isLoading = false;
        });
    };
    ShoppingComponent.prototype.showViewHandler = function (showView) {
        this.showCategories = false;
        this.showShoppingSub = false;
        if (showView == 'category') {
            this.showCategories = true;
            return;
        }
        if (showView == 'shopping') {
            this.showShoppingSub = true;
        }
    };
    ShoppingComponent.prototype.getSubCategoryTotal = function (item) {
        var _this = this;
        this.db.getSubCategoryDocs('shopping', item.$key, 'sub').then(function (e) {
            if (!e) {
                _this.subsTotal = 0;
                return;
            }
            _this.subsTotal = e.length;
        });
    };
    ShoppingComponent.prototype.capitalCase = function (str) {
        if (!!str && !!str[0]) {
            str = str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        }
        return str;
    };
    ShoppingComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames[_this.selectedType], '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    ShoppingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-shopping',
            template: __webpack_require__("../../../../../src/app/list/tab/shopping/tab.shopping.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/tab/shopping/tab.shopping.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/timeline/tab.timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" style=\"padding:10px;\">\n  <button class=\" btn btn-primary\" (click)=\"launchApp()\">Open ionic app</button>\n</div>\n\n<div class=\"tab-timeline\">\n  <table class=\"table table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openModal(template, item, true)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </td>\n        <td class=\"font-weight-bold\">Date</td>\n        <td class=\"font-weight-bold\">Lists</td>\n      </tr>\n      <tr *ngFor=\"let item of timeline$\">\n        <td class='text-xs-center' style=\"width:100px\">\n          <div ngbDropdown>\n            <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle (click)=\"currentItem = item;\">\n              <i class=\"fa fa-cog\"></i>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"options\">\n              <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                <i class=\"fa fa-pencil\"></i> Edit\n              </a>\n              <a class=\"dropdown-item\"\n                 [ngbPopover]=\"confirmation\"\n                 #p=\"ngbPopover\"\n                 triggers=\"manual\"\n                 (click)=\"p.open(); pp = p;\"\n                 placement=\"right\"\n                 popoverTitle=\"Are you sure?\">\n                <i class=\"fa fa-trash-o\"></i> Delete\n              </a>\n            </div>\n          </div>\n\n\n        </td>\n        <td style=\"width:200px\">{{ datePickerObjToDate(item.date) | date: 'fullDate'}} </td>\n        <td>\n          <!--<span>{{item.lists | json}}</span>-->\n            <i class=\"fa fa-plus\" (click)=\"openListsModal(lists, item.lists, true); currentItem = item;\"></i>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n  <!-- Lists Modal -->\n  <ng-template #lists>\n    <div>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Lists: {{currentItem.date | date: 'fullDate'}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"listModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-striped\">\n          <tbody>\n            <tr>\n              <td class=\"font-weight-bold\">\n                <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"openEditListModal(editlist, listModel, true)\">\n                  <i class=\"fa fa-plus\"></i>\n                </button>\n              </td>\n              <td class=\"font-weight-bold\">Created Time </td>\n              <td class=\"font-weight-bold\">Profile Name </td>\n              <td class=\"font-weight-bold\">Description </td>\n              <td class=\"font-weight-bold\">Profile Image</td>\n              <td class=\"font-weight-bold\">Profile Thumnail</td>\n              <td class=\"font-weight-bold\">Images</td>\n              <td class=\"font-weight-bold\">Images Thumnail</td>\n            </tr>\n            <tr *ngFor=\"let e of listModel\">\n              <td>\n                <div ngbDropdown>\n                  <button class=\"btn btn-primary btn-sm\" id=\"options\" ngbDropdownToggle >\n                    <i class=\"fa fa-cog\"></i>\n                  </button>\n                  <div ngbDropdownMenu aria-labelledby=\"options\">\n                    <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openEditListModal(editlist, e, false)\">\n                      <i class=\"fa fa-pencil\"></i> Edit\n                    </a>\n                    <a class=\"dropdown-item\"\n                       [ngbPopover]=\"deleteitemconfirmation\"\n                       #lp=\"ngbPopover\"\n                       triggers=\"manual\"\n                       (click)=\"lp.open(); lpp = lp;\"\n                       placement=\"right\"\n                       popoverTitle=\"Are you sure?\">\n                      <i class=\"fa fa-trash-o\"></i> Delete\n                    </a>\n                  </div>\n                </div>\n\n              </td>\n              <td> {{ e.createdTime }} </td>\n              <td> {{ e.profileName }} </td>\n              <td> {{ e.description }} </td>\n              <td> {{ e.profileImage}} </td>\n              <td>  <img [src]=\"e.profileImage\" width=\"100\" style=\"margin:20px 0px 20px 0px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" /></td>\n              <td> {{ e.images}} </td>\n              <td> <img [src]=\"e.images\" width=\"100\" style=\"margin:20px 0px 20px 0px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" /> </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- Edit list Modal -->\n  <ng-template #editlist>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit List</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New List</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"editListModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Created Time</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='editListModel.createdTime' name='createdTime'>\n        </div>\n        <!--<span>{{model.lists | json}}</span>-->\n        <div class=\"form-group\">\n          <label>Profile Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='editListModel.profileName' name='profileName'>\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\" [(ngModel)]='editListModel.description' name=\"description\" style=\"width:100%; height:215px;\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Profile Image</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='editListModel.profileImage' name='profileImage'>\n          <img [src]=\"editListModel.profileImage\" width=\"100\" style=\"margin:20px 0px 20px 0px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Images</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='editListModel.images' name='images'>\n          <img [src]=\"editListModel.images\" width=\"100\" style=\"margin:20px 0px 20px 0px;\" onerror=\"this.src='./assets/no-image-found.jpg'\" />\n        </div>\n        <button type=\"submit\" (click)=\"editOrAddListRecord(editListModel, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n        <button type=\"submit\" (click)=\"editOrAddListRecord(editListModel, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Edit Modal -->\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit Timeline</h4>\n      <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New Timeline</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form #heroForm=\"ngForm\">\n        <!--<div class=\"form-group\">\n          <label>Date</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='model.date' name='date'>\n        </div>-->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <div style=\"margin:0 auto;\">\n              <div style=\"margin:15px;\">{{datePickerObjToDate(model.date) | date: 'fullDate'}}</div>\n\n              <ngb-datepicker [(ngModel)]=\"model.date\" name=\"datePicker\" #d=\"ngbDatepicker\"></ngb-datepicker>\n              <!--<button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"  ngbDatepicker>\n                <i class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n              </button>-->\n            </div>\n          </div>\n          </div>\n\n          <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n          <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n</form>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete Modal -->\n  <ng-template #confirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"pp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </ng-template>\n\n  <!-- Confirmation Delete List item -->\n  <ng-template #deleteitemconfirmation>\n    <div style=\"min-width:150px; text-align:center\">\n      <button (click)=\"lpp.close()\" class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button (click)=\"deleteListRecord(currentItem)\" class=\"btn btn-danger btn-sm\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </ng-template>\n</div>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/timeline/tab.timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbDateNativeAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline__ = __webpack_require__("../../../../../src/app/list/tab/timeline/timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__ = __webpack_require__("../../../../../src/app/firestore/firestore.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Example of a Native Date adapter
 */
var NgbDateNativeAdapter = (function (_super) {
    __extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateNativeAdapter.prototype.fromModel = function (date) {
        console.log("fromModel " + date);
        //date = new Date(date);
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() } : null;
    };
    NgbDateNativeAdapter.prototype.toModel = function (date) {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    };
    NgbDateNativeAdapter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NgbDateNativeAdapter);
    return NgbDateNativeAdapter;
}(__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbDateAdapter */]));

var TimelineComponent = (function () {
    function TimelineComponent(http, af, modalService, cdr, config, db) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.config = config;
        this.db = db;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__timeline__["a" /* Timeline */]();
        this.adding = false;
        config.placement = 'right';
        config.autoClose = 'outside';
    }
    TimelineComponent.prototype.ngOnInit = function () {
        //this.userProfile$ = this.af.list('/userProfile', {});
        this.loadData();
        this.cdr.detectChanges();
    };
    TimelineComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.db.getAllCollections('timeline').then(function (data) {
            console.log(data);
            _this.timeline$ = data;
            _this.isLoading = false;
        });
    };
    TimelineComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    TimelineComponent.prototype.openListsModal = function (template, item) {
        this.listModel = item;
        this.listModalRef = this.modalService.show(template, { class: 'timeline-wide-modal' });
    };
    TimelineComponent.prototype.openEditListModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.editListModel = {};
        }
        else {
            this.adding = false;
            this.editListModel = item;
        }
        this.editListModalRef = this.modalService.show(template);
    };
    TimelineComponent.prototype.editOrAddRecord = function (model, addFlag) {
        //console.log(model.date)
        var data = {
            date: model ? this.datePickerObjToDate(model.date) : null
        };
        if (addFlag === true) {
            // Add Record
            this.db.addDocument('timeline', data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.db.updateDocument('timeline', model.$key, data);
            this.modalRef.hide();
        }
        this.loadData();
    };
    TimelineComponent.prototype.deleteRecord = function (item) {
        this.db.deleteDocument('timeline', item.$key);
        this.loadData();
    };
    TimelineComponent.prototype.editOrAddListRecord = function (model, addFlag) {
        if (addFlag === true) {
            // Add Record, since lists is an array of an object in the db, and not an object in the db it self 
            this.listModel.push(model);
        }
        this.db.updateDocument('timeline', this.currentItem.$key, this.currentItem);
        this.editListModalRef.hide();
        this.loadData();
    };
    TimelineComponent.prototype.deleteListRecord = function (item) {
        this.db.deleteDocument('timeline', this.currentItem);
        this.loadData();
    };
    TimelineComponent.prototype.datePickerObjToDate = function (obj) {
        //console.log(JSON.stringify(obj))
        if (!!obj && !!obj.month) {
            //console.log("typeof " + typeof obj + " " + JSON.stringify(obj) + "****" + new Date(obj.month + '/' + obj.day + '/' + obj.year))
            return new Date(obj.month + '/' + obj.day + '/' + obj.year).getTime();
        }
        return new Date(obj).getTime();
        ;
    };
    TimelineComponent.prototype.dateToDatePickerObj = function (date) {
        var ret = {
            day: 0,
            month: 0,
            year: 0
        };
        var d = new Date(date);
        ret.day = d.getDay();
        ret.month = d.getMonth();
        ret.year = d.getFullYear();
        return ret;
    };
    TimelineComponent.prototype.launchApp = function () {
        var _this = this;
        this.db.getDocumentsByName('configuration', 'ionicurl').then(function (data) {
            if (!data) {
                alert('Please go to Data Management section and introduce an URL');
            }
            window.open(data.url + _this.db.ionicSectionNames.timeline, '_blank', 'location=yes,height=640,width=360,scrollbars=yes,status=yes');
        });
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-timeline',
            template: __webpack_require__("../../../../../src/app/list/tab/timeline/tab.timeline.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_6__firestore_firestore_service__["a" /* FirestoreService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/timeline/timeline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* unused harmony export TimelineList */
var Timeline = (function () {
    function Timeline(
        //public email?: string,
        //public name?: number
        date, lists) {
        this.date = date;
        this.lists = lists;
    }
    return Timeline;
}());

var TimelineList = (function () {
    function TimelineList(createdTime, description, images, profileImage, profileName) {
        this.createdTime = createdTime;
        this.description = description;
        this.images = images;
        this.profileImage = profileImage;
        this.profileName = profileName;
    }
    return TimelineList;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/userProfile/tab.userProfile.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n    <tbody>\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModal(template, item, true)\">\n                    <i class=\"fa fa-plus\"></i>\n                </button>\n            </td>\n            <td class=\"font-weight-bold\">Email</td>\n            <td class=\"font-weight-bold\">Name</td>\n        </tr>\n        <tr *ngFor=\"let item of (userProfile$ | async)\">\n            <td class='text-xs-center'>\n                <div class=\"btn-group\" dropdown>\n                    <button dropdownToggle type=\"button\" class=\"btn btn-primary btn-sm\">\n                        <i class=\"fa fa-chevron-down\"></i>\n                    </button>\n                    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"openModal(template, item, false)\">\n                                <i class=\"fa fa-pencil\"></i> Edit</a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" [popover]=\"confirmation\" popoverTitle=\"Are you sure?\" placement=\"right\">\n                                <i class=\"fa fa-trash-o\"></i> Delete</a>\n                        </li>\n                    </ul>\n                </div>\n\n            </td>\n            <td> {{ item.email }} </td>\n            <td> {{ item.name }} </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Edit Modal -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\" *ngIf=\"!adding\">Edit User Profile</h4>\n        <h4 class=\"modal-title pull-left\" *ngIf=\"adding\">Add New User Profile</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #heroForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.email' name='email'>\n            </div>\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='model.name' name='name'>\n            </div>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, false)\" *ngIf=\"!adding\" class=\"btn btn-primary float-right\">Save</button>\n            <button type=\"submit\" (click)=\"editOrAddRecord(model, true)\" *ngIf=\"adding\" class=\"btn btn-success float-right\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<!-- Confirmation Delete Modal -->\n<ng-template #confirmation>\n    <span>Are you sure you want to delete this record!</span>\n    <button (click)=\"deleteRecord(item)\" class=\"btn btn-danger\">\n        <i class=\"fa fa-trash-o\"></i>\n    </button>\n</ng-template>\n\n<loading *ngIf=\"isLoading\"></loading>\n"

/***/ }),

/***/ "../../../../../src/app/list/tab/userProfile/tab.userProfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userProfile__ = __webpack_require__("../../../../../src/app/list/tab/userProfile/userProfile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(http, af, modalService, cdr) {
        this.http = http;
        this.af = af;
        this.modalService = modalService;
        this.cdr = cdr;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__userProfile__["a" /* UserProfile */]();
        this.adding = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userProfile$ = this.af.list('/userProfile', {});
        this.userProfile$.subscribe(function (e) {
            _this.isLoading = false;
        });
        this.cdr.detectChanges();
    };
    UserProfileComponent.prototype.openModal = function (template, item, addFlag) {
        if (addFlag === true) {
            this.adding = true;
            this.model = {};
        }
        else {
            this.adding = false;
            this.model = item;
        }
        this.modalRef = this.modalService.show(template);
    };
    UserProfileComponent.prototype.deleteRecord = function (item) {
        this.af.database
            .ref('/userProfile/' + item.$key)
            .remove();
    };
    UserProfileComponent.prototype.editOrAddRecord = function (model, addFlag) {
        var data = {
            email: model.email ? model.email : null,
            name: model.name ? model.name : null
        };
        if (addFlag === true) {
            // Add Record
            this.af.database.ref('/userProfile')
                .push()
                .set(data);
            this.modalRef.hide();
        }
        else {
            // Edit Record
            this.af.database
                .ref('/userProfile/' + model.$key)
                .set(data);
            this.modalRef.hide();
        }
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-userProfile',
            template: __webpack_require__("../../../../../src/app/list/tab/userProfile/tab.userProfile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/tab/userProfile/userProfile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile(email, name) {
        this.email = email;
        this.name = name;
    }
    return UserProfile;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/camelToTitle.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamelToTitlePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelToTitlePipe = (function () {
    function CamelToTitlePipe() {
    }
    CamelToTitlePipe.prototype.transform = function (value) {
        return value
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); });
    };
    CamelToTitlePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'camelToTitle' })
    ], CamelToTitlePipe);
    return CamelToTitlePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map