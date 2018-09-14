(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n\n<app-parent></app-parent>ng serve\n<!--<app-parent1></app-parent1>-->\n<!--<app-child1></app-child1>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Mobile Zone';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_4__["ChildComponent"],
                _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_5__["MobileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#d1{\r\n    border:2px solid;\r\n    padding:20px;\r\n    margin:20px;\r\n    background-color: lightseagreen;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"d1\">\n    <h2>Mobile Details</h2>\n    <div class=\"row\">\n    <div class=\"col-lg-4\">\n    <div class=\"card\" style=\"width:400px\">\n      <img class=\"card-img-top\" [src]=\"productData.img\" alt=\"Card image\" height=\"200px\" width=\"200px\">\n      <div class=\"card-body\">\n        Name:<h4 class=\"card-title\">{{productData.name}}</h4>\n        Model:<p class=\"card-text\"><b>{{productData.model}}</b></p>\n      <!--  Rating:<p class=\"card-text\"><b>{{productData.rating}}</b></p>-->\n        Rating:<input type=\"text\" [value]=\"productData.rating\" #rat>\n        <button (click)=\"subRate(rat.value)\">Submit Rating</button><br><br>\n        Price:<a href=\"#\" class=\"btn btn-primary\"><b>{{productData.price}}</b></a>\n      </div>\n</div>\n      </div>\n      <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n              <label for=\"exampleFormControlTextarea1\">Reviews</label>\n        <textarea maxlength=\"500\" class=\"form-control rounded-0\" rows=\"10\" col=\"150\"[value]=\"productData.review\" #rev></textarea>\n        <button (click)=\"review1(rev.value)\">Add review</button>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n  "

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.subRating = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.subReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ChildComponent.prototype.subRate = function (r) {
        this.productData.rating = r;
        this.subRating.emit(this.productData.rating);
    };
    ChildComponent.prototype.review1 = function (a) {
        this.productData.review = a;
        this.subReview.emit(this.productData.review);
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "productData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "subRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "subReview", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/mobile/mobile.component.css":
/*!*********************************************!*\
  !*** ./src/app/mobile/mobile.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mob-table{\r\n    background-color:royalblue;\r\n}"

/***/ }),

/***/ "./src/app/mobile/mobile.component.html":
/*!**********************************************!*\
  !*** ./src/app/mobile/mobile.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Latest Mobile Collection</h2>\n<table class=\"table\" id=\"mob-table\">\n  <thead>\n    <tr  style=\"color:white\">\n      <th>Name:</th>\n      <th>Model:</th>\n      <th>Price:</th>\n      <th>Rating:</th>\n      <th>Image:</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><input type=\"text\" #name></td>\n      <td><input type=\"text\" #model></td>\n      <td><input type=\"text\" #price></td>\n      <td><input type=\"text\" #rating></td>\n      <td><input type=\"text\" #image></td>\n    </tr>\n    <tr>\n      <button class=\"btn btn-success btn-md\" (click)=\"addMobiles(name.value,model.value,price.value,rating.value,image.value)\">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      <button class=\"btn btn-success btn-md\" (click)=\"abc()\">View</button>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MobileComponent = /** @class */ (function () {
    function MobileComponent(http) {
        this.http = http;
        this.url = "https://api.mlab.com/api/1/databases/manumits/collections/apartments";
        this.apikey = "?apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy";
    }
    MobileComponent.prototype.addMobiles = function (n, m, p, r, i) {
        var _this = this;
        alert("hi sexy");
        this.http.post(this.url + this.apikey, { 'Name': n, 'Model': m, 'Price': p, 'Rating': r, 'Image': i }).subscribe(function (res) {
            _this.abc();
        });
    };
    MobileComponent.prototype.abc = function () {
        var _this = this;
        alert("hi sexy sexy");
        this.http.get(this.url + this.apikey).subscribe(function (res) {
            _this.mobileList = res;
        });
    };
    ;
    MobileComponent.prototype.ngOnInit = function () {
    };
    MobileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile',
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/mobile/mobile.component.html"),
            styles: [__webpack_require__(/*! ./mobile.component.css */ "./src/app/mobile/mobile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#p1{\r\nborder: 1px solid;\r\nbackground-color: lightsalmon;\r\n}\r\n\r\n#sale{\r\n\r\n    background-color: aquamarine;\r\n}\r\n\r\n#ol1:hover{ cursor: pointer;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div calss=\"row\" id=\"p1\">\n\n<div class=\"col-12\">\n\n\n\n<!-- here app-mobile component is chid of parent component-->\n<app-mobile></app-mobile>\n\n<ol class=\"list-group\" id=\"ol1\">\n  \n \n  \n    <li class=\"list-group-item\" *ngFor=\"let product of products;let i = index\"><span (click)=\"selectProd(i)\">{{product.name}}--<span class=\"btn btn-primary\">{{product.rating}}</span><br><span>{{product.review}}</span></span></li>\n  </ol>\n  <div *ngIf=\"selectedProduct then prodInfo;else sale\"></div>\n  <ng-template #prodInfo>\n      <app-child [productData]=\"selectedProduct\" (subRating)=\"saveRating($event)\" (subReview)=\"saveReview($event)\"></app-child>\n    </ng-template>\n\n    <ng-template #sale >\n        <p><marquee direction=\"left\">SALE!! SALE!! SALE!!</marquee></p>\n        <h1 id=\"sale\">Welcome to flash Sale!!!!!</h1>\n        <p><marquee direction=\"right\">UPto 50% off</marquee></p>\n      </ng-template>\n\n     \n\n</div>\n  </div>\n    </div>"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.products = [
            { name: "smasung galaxy", model: "samsung", rating: "4.1", price: "35000", img: "https://www.achheydeal.com/wp-content/uploads/2017/11/Samsung-Galaxy-A5-2016-Refurbished-Android-Mobile-Phone.jpg", review: "nice mobile" },
            { name: "zenfone max pro m1", model: "samsung", rating: "4.2", price: "15000", img: "https://images.financialexpress.com/2017/08/redmi-4a.jpg", review: "nice mobile" },
            { name: "vivo v11", model: "vivo", rating: "4.3", price: "48000", img: "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/YU_Yureka_2/YU_Yureka_2_L_1.jpg", review: "nice mobile" },
            { name: "oppo f9 pro", model: "oppo", rating: "4.4", price: "55000", img: "https://images.techhive.com/images/article/2017/02/android-phones-at-mobile-world-congress-2017-7-100710785-large.jpg", review: "nice mobile" },
            { name: "iphone X", model: "apple", rating: "4.5", price: "95000", img: "http://www.vodafone.co.nz/MEDIA_ProductCatalog/m1650104_iPhoneX-spacegrey-frameV2.png", review: "nice mobile" },
        ];
    }
    ParentComponent.prototype.selectProd = function (ind) {
        this.selectedProduct = this.products[ind];
        this.selectedProduct['i'] = ind;
        console.log("helooooo123" + "  " + this.selectedProduct['i']);
    };
    ParentComponent.prototype.saveRating = function (e) {
        console.log("parent", e['i']);
        var index = e['i'];
        this.products[index].rating = e['rating'];
    };
    ParentComponent.prototype.saveReview = function (f) {
        console.log(f['i']);
        var index11 = f['i'];
        this.products[index11].review = f['i'];
    };
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saksham.Shah\input-output\input-output\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map