webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getallactivatedusers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getusersdump = function (dump) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/dump/" + dump, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("users/register", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getbalance = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("users/balance", obj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("users/authenticate", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBalance = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/balance/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetpassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("users/resetpassword", email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getpending = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/pending/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.activateaccount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("users/activate", email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.manipulateAccount = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("users/manipulate", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/profile", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // remove new for only immediate parent and other for everything
    AuthService.prototype.getChildAccess = function (val) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/childs/new/" + val, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getRights = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log("" + email);
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/rights/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateRights = function (rights) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("users/rights", rights, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("users/profile", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem("id_loggedIn", "true");
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.onLogout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.getallchilds = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/rights/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getallaccounts = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/all/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getRights(){
    //   let headers = new Headers();
    //   this.loadToken();
    //   headers.append('Authorization',this.authToken);
    //   headers.append('Content-Type','application/json');
    //   return this.http.get("users/rights",{headers})
    //   .map(res => res.json());
    // }
    AuthService.prototype.removechild = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("users/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSavedEmail = function () {
        var userstr = localStorage.getItem('user');
        var userobj = JSON.parse(userstr);
        var email = '';
        if (userobj.delegate) {
            email = userobj.parent;
        }
        else {
            email = userobj.email;
        }
        return email;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/auth.service.js.map

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagingService = (function () {
    function MessagingService(http) {
        this.http = http;
    }
    MessagingService.prototype.registertemplate = function (template) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/template/register", template, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalltemplates = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/template/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallstatictemplates = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/template/static/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldynamictemplates = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/template/dynamic/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removetemplate = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/template/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //  -------------------------------------------------------------------
    MessagingService.prototype.registercampaign = function (campaign) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/campaigns/register", campaign, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallcampaigns = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/campaigns/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallstaticcampaigns = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/campaigns/static/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldynamiccampaigns = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/campaigns/dynamic/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removecampaign = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/campaigns/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.downloadcampaign = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/campaigns/download/" + path, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------------------------------------------
    MessagingService.prototype.registerdigital = function (digital) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/digital/register", digital, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.registerdigitalstatic = function (bulk) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/digital/static/register", bulk, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.registerdigitaldynamic = function (bulk) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/digital/dynamic/register", bulk, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldigital = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/digital/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getdigitaldump = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/digital/dump/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removedigital = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/digital/" + name, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------
    // -----------------------------------------------------------------------
    MessagingService.prototype.registerquick = function (quick) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/quick/register", quick, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getallquick(email){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.get("messaging/quick/"+email,{headers})
    //   .map(res => res.json());
    // }
    MessagingService.prototype.getallquick = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/quick/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getquickdump = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/quick/dump/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removequick = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/quick/" + name, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //  --------------------------------------------------------------------
    MessagingService.prototype.registerbulk = function (bulk) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/bulk/register", bulk, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallbulk = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/bulk/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getbulkdump = function (queryobj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/bulk/dump/" + queryobj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removebulk = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/bulk/" + name, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------------------------
    MessagingService.prototype.registerbulkdynamic = function (bulk) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/bulk/dynamic/register", bulk, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------------
    MessagingService.prototype.registerdrip = function (drip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/drip/register", drip, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldrip = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/drip/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getdripdump = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/drip/dump/" + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.removedrip = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("messaging/drip/" + name, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // registergroup(group){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.post("contacts/group/register",group,{headers})
    //   .map(res => res.json());
    // }
    // getallgroups(email){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.get("contacts/group/"+email,{headers})
    //   .map(res => res.json());
    // }
    // getallcontacts(email){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.get("contacts/"+email,{headers})
    //   .map(res => res.json());
    // }
    // removecontact(id){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.delete("contacts/"+id,{headers})
    //   .map(res => res.json());
    // }
    // removecontactfromgroup(contact){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.delete("contacts/group/contact/"+contact,{headers})
    //   .map(res => res.json());
    // }
    // removegroup(id){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.delete("contacts/group/"+id,{headers})
    //   .map(res => res.json());
    // }
    // updategroup(group){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.put("contacts/group",group,{headers})
    //   .map(res => res.json());
    // }
    // getgroupwithdetails(email){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   //since it is an obsservable so we have to map its response
    //   return this.http.get("contacts/group/details/"+email,{headers})
    //   .map(res => res.json());
    // }
    MessagingService.prototype.getAccountSummary = function (creds) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("messaging/account/summary", creds, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallquickdashboard = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/quick/dashboard/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallbulkdashboard = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/bulk/dashboard/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldripdashboard = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/drip/dashboard/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalldigitaldashboard = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/digital/dashboard/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // --------------- sent
    MessagingService.prototype.getallsentquicklimit = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/sent/quick/limit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ------------ outbox
    MessagingService.prototype.getalloutboxquicklimit = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/limit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxbulklimit = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/limit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxdigitallimit = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/digital/limit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ------------------------------ prio quick limit
    MessagingService.prototype.getallprioutboxquicklimit = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/limit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----- outbox quick count
    MessagingService.prototype.getalloutboxquickcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxquickjazzcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/jazz/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxquickzongcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/zong/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxquickwaridcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/warid/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxquickufonecount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/ufone/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxquicktelenorcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/quick/telenor/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ------------------------------- prio outbox
    MessagingService.prototype.getallprioutboxquickcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------
    MessagingService.prototype.getalloutboxbulkjazzcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/jazz/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxbulkzongcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/zong/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxbulkwaridcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/warid/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxbulkufonecount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/ufone/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxbulktelenorcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/telenor/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // prioutbox telco segregate
    MessagingService.prototype.getallprioutboxquickjazzcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/jazz/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxquickzongcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/zong/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxquickwaridcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/warid/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxquickufonecount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/ufone/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxquicktelenorcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/quick/telenor/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxbulkjazzcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/bulk/jazz/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxbulkzongcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/bulk/zong/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxbulkwaridcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/bulk/warid/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxbulkufonecount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/bulk/ufone/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getallprioutboxbulktelenorcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/pri/bulk/telenor/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------
    MessagingService.prototype.getalloutboxbulkcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/bulk/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalloutboxdigitalcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/outbox/digital/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----- 
    MessagingService.prototype.getalltotalquickcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/total/quick/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalltotalbulkcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/total/bulk/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalltotaldigitalcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/total/digital/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService.prototype.getalltotaldripcount = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("messaging/total/drip/count/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MessagingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], MessagingService);
    return MessagingService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/messaging.service.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaskService = (function () {
    function MaskService(http) {
        this.http = http;
    }
    MaskService.prototype.registermask = function (mask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("masks/register", mask, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.getallmask = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("masks/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.getpendingmasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("masks/pending", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.activatemask = function (mask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("masks/allow", mask, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.getmaskbyid = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("masks/id/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.getactivatedmasks = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("masks/activated/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService.prototype.removemask = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("masks/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaskService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], MaskService);
    return MaskService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/mask.service.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricingService = (function () {
    function PricingService(http) {
        this.http = http;
    }
    // bundles/register
    PricingService.prototype.registerbundle = function (bundle) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("bundles/register", bundle, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.extendexpirypromo = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("bundles/extendexpirypromo", email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.extendsmstp10promo = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("bundles/extendsmstp10promo", email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.extendwatp10promo = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("bundles/extendwatp10promo", email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.registercredit = function (credit) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("bundles/credit/register", credit, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.credithistory = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/credit/history/" + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getallbundles = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getallcredits = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/credit/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getpendingconfigs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/all/pending/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.receivebundlepayment = function (bundleid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("bundles/receive", bundleid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getpendingcredits = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/credit/all/pending/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.receivecreditpayment = function (creditid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("bundles/credit/receive", creditid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.removebundle = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("bundles/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getconfigurationdump = function (dump) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/dump/" + dump, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService.prototype.getcreditdump = function (dump) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("bundles/credit/dump/" + dump, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PricingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PricingService);
    return PricingService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/pricing.service.js.map

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.registerTemplate = function (template) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("notifications/templates/register", template, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.getalltemplates = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("notifications/templates/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.removetemplate = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("notifications/templates/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // notifications campaign
    NotificationService.prototype.registerNotificationCampaign = function (notificationcampaign) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("notifications/campaigns/register", notificationcampaign, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.getallnotificaitons = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("notifications/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.getAllnotificationreported = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("notifications/reported/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], NotificationService);
    return NotificationService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/notification.service.js.map

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.registercontact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("contacts/register", contact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.registergroup = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("contacts/group/register", group, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.getallgroups = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("contacts/group/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.getallcontacts = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("contacts/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.removecontact = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("contacts/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.removecontactfromgroup = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("contacts/group/contact/" + contact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.removegroup = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("contacts/group/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.updategroup = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("contacts/group", group, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.getgroupwithdetails = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("contacts/group/details/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ContactService);
    return ContactService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/contact.service.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssueService = (function () {
    function IssueService(http) {
        this.http = http;
    }
    IssueService.prototype.registerissue = function (issue) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("issue/register", issue, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IssueService.prototype.resolveissue = function (issue) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.put("issue/resolve", issue, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IssueService.prototype.getpendingissues = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("issue/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IssueService.prototype.getallissues = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("issue/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IssueService.prototype.removeissue = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("issue/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IssueService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], IssueService);
    return IssueService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/issue.service.js.map

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HybridService = (function () {
    function HybridService(http) {
        this.http = http;
    }
    // -----------------------------------------------------------------------
    HybridService.prototype.registerhybrid = function (hybrid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.post("hybrid/register", hybrid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HybridService.prototype.getallhybrid = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.get("hybrid/" + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HybridService.prototype.removehybrid = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //since it is an obsservable so we have to map its response
        return this.http.delete("hybrid/" + name, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HybridService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], HybridService);
    return HybridService;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybrid.service.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.fullname == undefined || user.phone == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 556;


/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(675);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/main.js.map

/***/ }),
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1045),
            styles: [__webpack_require__(976)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/app.component.js.map

/***/ }),
/* 675 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_topbar_topbar_component__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_messaging_messaging_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_notification_notification_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_reporting_reporting_component__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_addressbook_addressbook_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_issuestracker_issuestracker_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pricing_pricing_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_composemessage_composemessage_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_inbox_inbox_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_outbox_outbox_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sent_sent_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_messagingdashboard_messagingdashboard_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_campaignmanagement_campaignmanagement_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_templatemanagement_templatemanagement_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_autorespond_autorespond_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_quickmessage_quickmessage_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_bulkmessage_bulkmessage_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dripmessage_dripmessage_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_statictemplatemessaging_statictemplatemessaging_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dynamictemplatemessaging_dynamictemplatemessaging_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_contacts_contacts_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_groups_groups_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_newcontact_newcontact_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_issuedashboard_issuedashboard_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_createissue_createissue_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_apitesting_apitesting_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_bundledetails_bundledetails_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_buybundles_buybundles_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_uacmanagement_uacmanagement_component__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_maskmanagement_maskmanagement_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_composenotification_composenotification_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_inboxnotification_inboxnotification_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_dashboardnotification_dashboardnotification_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_templatenotification_templatenotification_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_hybrid_hybrid_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_hybridcompose_hybridcompose_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_hybridinbox_hybridinbox_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_hybridoutbox_hybridoutbox_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_hybridsent_hybridsent_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_hybriddashboard_hybriddashboard_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_hybridtemplate_hybridtemplate_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_topbarstatic_topbarstatic_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_footer_footer_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_angular2_datetimepicker__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_inboxsender_inboxsender_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_inboxdetails_inboxdetails_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ng2_charts__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_59_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_hybridinboxsender_hybridinboxsender_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_hybridinboxdetails_hybridinboxdetails_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__services_validate_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__services_mask_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__services_pricing_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__services_issue_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__services_contact_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__services_notification_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__services_hybrid_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pipes_masksfilter_pipe__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_notificationreported_notificationreported_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_ng2_file_upload__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_73_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_digital_digital_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_prioutbox_prioutbox_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_leareporting_leareporting_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_default_default_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__components_master_master_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__components_masternewaccount_masternewaccount_component__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_masteraccountmoderation_masteraccountmoderation_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__components_mastermanageaccount_mastermanageaccount_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__components_masterbundlemoderation_masterbundlemoderation_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__components_mastercreditmoderation_mastercreditmoderation_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__components_mastermaskmoderation_mastermaskmoderation_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__components_masterissuemoderation_masterissuemoderation_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__components_masterreports_masterreports_component__ = __webpack_require__(722);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























































































var appRoutes = [
    {
        path: 'master',
        component: __WEBPACK_IMPORTED_MODULE_78__components_master_master_component__["a" /* MasterComponent */],
        children: [
            {
                path: 'newaccount',
                component: __WEBPACK_IMPORTED_MODULE_79__components_masternewaccount_masternewaccount_component__["a" /* MasternewaccountComponent */]
            },
            {
                path: 'moderate',
                component: __WEBPACK_IMPORTED_MODULE_80__components_masteraccountmoderation_masteraccountmoderation_component__["a" /* MasteraccountmoderationComponent */]
            },
            {
                path: 'accounts',
                component: __WEBPACK_IMPORTED_MODULE_81__components_mastermanageaccount_mastermanageaccount_component__["a" /* MastermanageaccountComponent */]
            },
            {
                path: 'bundle',
                component: __WEBPACK_IMPORTED_MODULE_82__components_masterbundlemoderation_masterbundlemoderation_component__["a" /* MasterbundlemoderationComponent */]
            },
            {
                path: 'credit',
                component: __WEBPACK_IMPORTED_MODULE_83__components_mastercreditmoderation_mastercreditmoderation_component__["a" /* MastercreditmoderationComponent */]
            },
            {
                path: 'masks',
                component: __WEBPACK_IMPORTED_MODULE_84__components_mastermaskmoderation_mastermaskmoderation_component__["a" /* MastermaskmoderationComponent */]
            },
            {
                path: 'issues',
                component: __WEBPACK_IMPORTED_MODULE_85__components_masterissuemoderation_masterissuemoderation_component__["a" /* MasterissuemoderationComponent */]
            },
            {
                path: 'reports',
                component: __WEBPACK_IMPORTED_MODULE_86__components_masterreports_masterreports_component__["a" /* MasterreportsComponent */]
            }
        ]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: '',
                redirectTo: '/home/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'default',
        component: __WEBPACK_IMPORTED_MODULE_77__components_default_default_component__["a" /* DefaultComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'hybrid',
        component: __WEBPACK_IMPORTED_MODULE_47__components_hybrid_hybrid_component__["a" /* HybridComponent */],
        loadChildren: '',
        children: [
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_48__components_hybridcompose_hybridcompose_component__["a" /* HybridcomposeComponent */]
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_49__components_hybridinbox_hybridinbox_component__["a" /* HybridinboxComponent */]
            },
            {
                path: 'outbox',
                component: __WEBPACK_IMPORTED_MODULE_50__components_hybridoutbox_hybridoutbox_component__["a" /* HybridoutboxComponent */]
            },
            {
                path: 'sent',
                component: __WEBPACK_IMPORTED_MODULE_51__components_hybridsent_hybridsent_component__["a" /* HybridsentComponent */]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_52__components_hybriddashboard_hybriddashboard_component__["a" /* HybriddashboardComponent */]
            },
            {
                path: 'templates',
                component: __WEBPACK_IMPORTED_MODULE_53__components_hybridtemplate_hybridtemplate_component__["a" /* HybridtemplateComponent */]
            }
        ]
    },
    {
        path: 'messaging',
        component: __WEBPACK_IMPORTED_MODULE_13__components_messaging_messaging_component__["a" /* MessagingComponent */],
        children: [
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_20__components_composemessage_composemessage_component__["a" /* ComposemessageComponent */],
                children: [
                    // {
                    //   path:'',
                    //   redirectTo:'/messaging/compose/quick',
                    //   pathMatch:'full'
                    // },
                    {
                        path: 'quick',
                        component: __WEBPACK_IMPORTED_MODULE_28__components_quickmessage_quickmessage_component__["a" /* QuickmessageComponent */]
                    },
                    {
                        path: 'bulk',
                        component: __WEBPACK_IMPORTED_MODULE_29__components_bulkmessage_bulkmessage_component__["a" /* BulkmessageComponent */]
                    },
                    {
                        path: 'drip',
                        component: __WEBPACK_IMPORTED_MODULE_30__components_dripmessage_dripmessage_component__["a" /* DripmessageComponent */]
                    },
                    {
                        path: 'digital',
                        component: __WEBPACK_IMPORTED_MODULE_74__components_digital_digital_component__["a" /* DigitalComponent */]
                    }
                ]
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_21__components_inbox_inbox_component__["a" /* InboxComponent */]
            },
            {
                path: 'outbox',
                component: __WEBPACK_IMPORTED_MODULE_22__components_outbox_outbox_component__["a" /* OutboxComponent */]
            },
            {
                path: 'prioutbox',
                component: __WEBPACK_IMPORTED_MODULE_75__components_prioutbox_prioutbox_component__["a" /* PrioutboxComponent */]
            },
            {
                path: 'sent',
                component: __WEBPACK_IMPORTED_MODULE_23__components_sent_sent_component__["a" /* SentComponent */]
            },
            {
                path: 'messagingdashboard',
                component: __WEBPACK_IMPORTED_MODULE_24__components_messagingdashboard_messagingdashboard_component__["a" /* MessagingdashboardComponent */]
            },
            {
                path: 'campaignmanagement',
                component: __WEBPACK_IMPORTED_MODULE_25__components_campaignmanagement_campaignmanagement_component__["a" /* CampaignmanagementComponent */]
            },
            {
                path: 'templatemanagement',
                component: __WEBPACK_IMPORTED_MODULE_26__components_templatemanagement_templatemanagement_component__["a" /* TemplatemanagementComponent */],
                children: [
                    {
                        path: 'sttmsg',
                        component: __WEBPACK_IMPORTED_MODULE_31__components_statictemplatemessaging_statictemplatemessaging_component__["a" /* StatictemplatemessagingComponent */]
                    },
                    {
                        path: 'dytmsg',
                        component: __WEBPACK_IMPORTED_MODULE_32__components_dynamictemplatemessaging_dynamictemplatemessaging_component__["a" /* DynamictemplatemessagingComponent */]
                    },
                    {
                        path: '',
                        redirectTo: '/messaging/templatemanagement/sttmsg',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'autorespond',
                component: __WEBPACK_IMPORTED_MODULE_27__components_autorespond_autorespond_component__["a" /* AutorespondComponent */]
            },
        ]
    },
    {
        path: 'notification',
        component: __WEBPACK_IMPORTED_MODULE_14__components_notification_notification_component__["a" /* NotificationComponent */],
        children: [
            {
                path: 'composen',
                component: __WEBPACK_IMPORTED_MODULE_43__components_composenotification_composenotification_component__["a" /* ComposenotificationComponent */]
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_44__components_inboxnotification_inboxnotification_component__["a" /* InboxnotificationComponent */]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_45__components_dashboardnotification_dashboardnotification_component__["a" /* DashboardnotificationComponent */]
            },
            {
                path: 'templates',
                component: __WEBPACK_IMPORTED_MODULE_46__components_templatenotification_templatenotification_component__["a" /* TemplatenotificationComponent */]
            },
            {
                path: 'reported',
                component: __WEBPACK_IMPORTED_MODULE_72__components_notificationreported_notificationreported_component__["a" /* NotificationreportedComponent */]
            }
        ]
    },
    {
        path: 'reporting',
        component: __WEBPACK_IMPORTED_MODULE_15__components_reporting_reporting_component__["a" /* ReportingComponent */]
    },
    {
        path: 'leareporting',
        component: __WEBPACK_IMPORTED_MODULE_76__components_leareporting_leareporting_component__["a" /* LeareportingComponent */]
    },
    {
        path: 'addressbook',
        component: __WEBPACK_IMPORTED_MODULE_16__components_addressbook_addressbook_component__["a" /* AddressbookComponent */],
        children: [
            {
                path: 'contacts',
                component: __WEBPACK_IMPORTED_MODULE_33__components_contacts_contacts_component__["a" /* ContactsComponent */]
            },
            {
                path: 'groups',
                component: __WEBPACK_IMPORTED_MODULE_34__components_groups_groups_component__["a" /* GroupsComponent */]
            },
            {
                path: 'newcontact',
                component: __WEBPACK_IMPORTED_MODULE_35__components_newcontact_newcontact_component__["a" /* NewcontactComponent */]
            }
        ]
    },
    {
        path: 'issuestracker',
        component: __WEBPACK_IMPORTED_MODULE_17__components_issuestracker_issuestracker_component__["a" /* IssuestrackerComponent */],
        children: [
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_36__components_issuedashboard_issuedashboard_component__["a" /* IssuedashboardComponent */]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_37__components_createissue_createissue_component__["a" /* CreateissueComponent */]
            },
            {
                path: 'apitest',
                component: __WEBPACK_IMPORTED_MODULE_38__components_apitesting_apitesting_component__["a" /* ApitestingComponent */]
            }
        ]
    },
    {
        path: 'pricing',
        component: __WEBPACK_IMPORTED_MODULE_18__components_pricing_pricing_component__["a" /* PricingComponent */],
        children: [
            // {
            //   path:'details',
            //   component:BundledetailsComponent
            // },
            {
                path: 'buy',
                component: __WEBPACK_IMPORTED_MODULE_40__components_buybundles_buybundles_component__["a" /* BuybundlesComponent */]
            }
        ]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__["a" /* SettingsComponent */],
        children: [
            {
                path: 'uac',
                component: __WEBPACK_IMPORTED_MODULE_41__components_uacmanagement_uacmanagement_component__["a" /* UacmanagementComponent */]
            },
            {
                path: 'masks',
                component: __WEBPACK_IMPORTED_MODULE_42__components_maskmanagement_maskmanagement_component__["a" /* MaskmanagementComponent */]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_73_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_topbar_topbar_component__["a" /* TopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_messaging_messaging_component__["a" /* MessagingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_reporting_reporting_component__["a" /* ReportingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_addressbook_addressbook_component__["a" /* AddressbookComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_issuestracker_issuestracker_component__["a" /* IssuestrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_composemessage_composemessage_component__["a" /* ComposemessageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_outbox_outbox_component__["a" /* OutboxComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_sent_sent_component__["a" /* SentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_messagingdashboard_messagingdashboard_component__["a" /* MessagingdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_campaignmanagement_campaignmanagement_component__["a" /* CampaignmanagementComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_templatemanagement_templatemanagement_component__["a" /* TemplatemanagementComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_autorespond_autorespond_component__["a" /* AutorespondComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_quickmessage_quickmessage_component__["a" /* QuickmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_bulkmessage_bulkmessage_component__["a" /* BulkmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dripmessage_dripmessage_component__["a" /* DripmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_statictemplatemessaging_statictemplatemessaging_component__["a" /* StatictemplatemessagingComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dynamictemplatemessaging_dynamictemplatemessaging_component__["a" /* DynamictemplatemessagingComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_newcontact_newcontact_component__["a" /* NewcontactComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_issuedashboard_issuedashboard_component__["a" /* IssuedashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_createissue_createissue_component__["a" /* CreateissueComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_apitesting_apitesting_component__["a" /* ApitestingComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_bundledetails_bundledetails_component__["a" /* BundledetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_buybundles_buybundles_component__["a" /* BuybundlesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_uacmanagement_uacmanagement_component__["a" /* UacmanagementComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_maskmanagement_maskmanagement_component__["a" /* MaskmanagementComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_composenotification_composenotification_component__["a" /* ComposenotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_inboxnotification_inboxnotification_component__["a" /* InboxnotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_dashboardnotification_dashboardnotification_component__["a" /* DashboardnotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_templatenotification_templatenotification_component__["a" /* TemplatenotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_hybrid_hybrid_component__["a" /* HybridComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_hybridcompose_hybridcompose_component__["a" /* HybridcomposeComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_hybridinbox_hybridinbox_component__["a" /* HybridinboxComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_hybridoutbox_hybridoutbox_component__["a" /* HybridoutboxComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_hybridsent_hybridsent_component__["a" /* HybridsentComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_hybriddashboard_hybriddashboard_component__["a" /* HybriddashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_hybridtemplate_hybridtemplate_component__["a" /* HybridtemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_topbarstatic_topbarstatic_component__["a" /* TopbarstaticComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_inboxsender_inboxsender_component__["a" /* InboxsenderComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_inboxdetails_inboxdetails_component__["a" /* InboxdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_hybridinboxsender_hybridinboxsender_component__["a" /* HybridinboxsenderComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_hybridinboxdetails_hybridinboxdetails_component__["a" /* HybridinboxdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_71__pipes_masksfilter_pipe__["a" /* MasksfilterPipe */],
                __WEBPACK_IMPORTED_MODULE_72__components_notificationreported_notificationreported_component__["a" /* NotificationreportedComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_digital_digital_component__["a" /* DigitalComponent */],
                __WEBPACK_IMPORTED_MODULE_75__components_prioutbox_prioutbox_component__["a" /* PrioutboxComponent */],
                __WEBPACK_IMPORTED_MODULE_76__components_leareporting_leareporting_component__["a" /* LeareportingComponent */],
                __WEBPACK_IMPORTED_MODULE_77__components_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_78__components_master_master_component__["a" /* MasterComponent */],
                __WEBPACK_IMPORTED_MODULE_79__components_masternewaccount_masternewaccount_component__["a" /* MasternewaccountComponent */],
                __WEBPACK_IMPORTED_MODULE_80__components_masteraccountmoderation_masteraccountmoderation_component__["a" /* MasteraccountmoderationComponent */],
                __WEBPACK_IMPORTED_MODULE_81__components_mastermanageaccount_mastermanageaccount_component__["a" /* MastermanageaccountComponent */],
                __WEBPACK_IMPORTED_MODULE_82__components_masterbundlemoderation_masterbundlemoderation_component__["a" /* MasterbundlemoderationComponent */],
                __WEBPACK_IMPORTED_MODULE_83__components_mastercreditmoderation_mastercreditmoderation_component__["a" /* MastercreditmoderationComponent */],
                __WEBPACK_IMPORTED_MODULE_84__components_mastermaskmoderation_mastermaskmoderation_component__["a" /* MastermaskmoderationComponent */],
                __WEBPACK_IMPORTED_MODULE_85__components_masterissuemoderation_masterissuemoderation_component__["a" /* MasterissuemoderationComponent */],
                __WEBPACK_IMPORTED_MODULE_86__components_masterreports_masterreports_component__["a" /* MasterreportsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_56_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_59_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_62__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_63__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_64__services_mask_service__["a" /* MaskService */], __WEBPACK_IMPORTED_MODULE_65__services_pricing_service__["a" /* PricingService */], __WEBPACK_IMPORTED_MODULE_66__services_issue_service__["a" /* IssueService */], __WEBPACK_IMPORTED_MODULE_67__services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_68__services_messaging_service__["a" /* MessagingService */], __WEBPACK_IMPORTED_MODULE_69__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_70__services_hybrid_service__["a" /* HybridService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/app.module.js.map

/***/ }),
/* 676 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressbookComponent = (function () {
    function AddressbookComponent() {
    }
    AddressbookComponent.prototype.ngOnInit = function () {
    };
    AddressbookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addressbook',
            template: __webpack_require__(1046),
            styles: [__webpack_require__(977)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressbookComponent);
    return AddressbookComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/addressbook.component.js.map

/***/ }),
/* 677 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApitestingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApitestingComponent = (function () {
    function ApitestingComponent() {
    }
    ApitestingComponent.prototype.ngOnInit = function () {
    };
    ApitestingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apitesting',
            template: __webpack_require__(1047),
            styles: [__webpack_require__(978)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApitestingComponent);
    return ApitestingComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/apitesting.component.js.map

/***/ }),
/* 678 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorespondComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutorespondComponent = (function () {
    function AutorespondComponent() {
    }
    AutorespondComponent.prototype.ngOnInit = function () {
    };
    AutorespondComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autorespond',
            template: __webpack_require__(1048),
            styles: [__webpack_require__(979)]
        }), 
        __metadata('design:paramtypes', [])
    ], AutorespondComponent);
    return AutorespondComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/autorespond.component.js.map

/***/ }),
/* 679 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mask_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulkmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BulkmessageComponent = (function () {
    function BulkmessageComponent(authService, maskService, messagingService) {
        this.authService = authService;
        this.maskService = maskService;
        this.messagingService = messagingService;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy HH:mm:ss',
            defaultOpen: false,
            closeOnSelect: true
        };
        this.sent = false;
        this.msg = "";
        this.op = "";
        this.account = "";
        this.password = "";
        this.cdate = "";
        this.masksarr = [];
        this.templatesArr = [];
        this.campaignsArr = [];
    }
    BulkmessageComponent.prototype.ngOnInit = function () {
        this.getallmasks();
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
        //this.gettemplates();
    };
    BulkmessageComponent.prototype.getallmasks = function () {
        var _this = this;
        this.maskService.getactivatedmasks(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.masksarr = data.data;
            }
        });
    };
    BulkmessageComponent.prototype.opchange = function (ev) {
        // console.log(ev.target.value);
        this.op = ev.target.value;
        //console.log(this.op);
        this.gettemplates();
    };
    BulkmessageComponent.prototype.languagechange = function (ev) {
    };
    BulkmessageComponent.prototype.registerbulk = function () {
        var _this = this;
        this.sent = true;
        if (this.op == "") {
            this.op = "static";
        }
        var bulk = {
            name: this.name,
            language: this.language,
            type: this.op,
            campaign: this.campaignname,
            path: this.campaignpath,
            masking: this.masking,
            msg: this.msg,
            createdby: this.authService.getSavedEmail()
        };
        if (this.op == "static") {
            this.messagingService.registerbulk(bulk).subscribe(function (data) {
                if (data.success) {
                    alert("Bulk Sent!");
                    location.reload(true);
                }
                else {
                    alert(data.error);
                }
                _this.sent = false;
            });
        }
        else if (this.op == "dynamic") {
            this.messagingService.registerbulkdynamic(bulk).subscribe(function (data) {
                if (data.success) {
                    alert("Bulk of " + data.records + " sent in " + data.timetaken + "ms!");
                    location.reload(true);
                }
                else {
                    alert(data.error);
                }
                _this.sent = false;
            });
        }
    };
    BulkmessageComponent.prototype.templatechange = function (ev) {
        this.msg = ev.target.value;
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    BulkmessageComponent.prototype.campaignchange = function (ev) {
        this.campaignpath = ev.target.value;
        this.campaignname = ev.target[ev.target.selectedIndex].text;
        // this.campaignname = ev.target;
        // console.log(ev.target.selectedIndex);
    };
    BulkmessageComponent.prototype.maskingchange = function (ev) {
    };
    BulkmessageComponent.prototype.msgchange = function (ev) {
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    BulkmessageComponent.prototype.gettemplates = function () {
        var _this = this;
        if (this.op == "") {
            // this.messagingService.getallstatictemplates(this.authService.getSavedEmail()).subscribe(data=>{
            //     if(data.success){
            //       this.templatesArr = data.data;
            //       console.log(this.templatesArr);
            //     }
            // });
            this.messagingService.getallstaticcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                    console.log(_this.campaignsArr);
                }
            });
            console.log("Get static templates");
        }
        else if (this.op == "static") {
            this.messagingService.getallstatictemplates(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.templatesArr = data.data;
                }
            });
            this.messagingService.getallstaticcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                }
            });
            console.log("Get static templates");
        }
        else if (this.op == "dynamic") {
            this.messagingService.getalldynamictemplates(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.templatesArr = data.data;
                }
            });
            this.messagingService.getalldynamiccampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                }
            });
            console.log("Get dynamic templates");
        }
    };
    BulkmessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bulkmessage',
            template: __webpack_require__(1049),
            styles: [__webpack_require__(980)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object])
    ], BulkmessageComponent);
    return BulkmessageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/bulkmessage.component.js.map

/***/ }),
/* 680 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BundledetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BundledetailsComponent = (function () {
    function BundledetailsComponent() {
    }
    BundledetailsComponent.prototype.ngOnInit = function () {
    };
    BundledetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bundledetails',
            template: __webpack_require__(1050),
            styles: [__webpack_require__(981)]
        }), 
        __metadata('design:paramtypes', [])
    ], BundledetailsComponent);
    return BundledetailsComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/bundledetails.component.js.map

/***/ }),
/* 681 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuybundlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuybundlesComponent = (function () {
    function BuybundlesComponent(pricingService, auth) {
        this.pricingService = pricingService;
        this.auth = auth;
        this.bundlearr = [];
        this._smscredit = "0";
        this._whatsappcredit = "0";
        this._tpsms = "0";
        this._tpwa = "0";
        this.cost = 0;
        this.items = "";
        this.itemscredit = "";
        this.costcredit = 0;
        this.creditarr = [];
    }
    BuybundlesComponent.prototype.ngOnInit = function () {
        var userob = localStorage.getItem('user');
        var u = JSON.parse(userob);
        this.email = u.email;
        this.getAllBundles();
        this.getAllCredit();
    };
    BuybundlesComponent.prototype.onChangeBundle = function (event) {
        this.bundle = event.target.value;
    };
    BuybundlesComponent.prototype.selectchangecredit = function (event) {
        this.costcredit = 0;
        this.itemscredit = "";
        if (this._smscredit == "1000") {
            this.costcredit += 100;
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;SMS Credit = 100 PKR \n";
        }
        else if (this._smscredit == "10000") {
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;SMS Credit = 1000 PKR \n";
            this.costcredit += 1000;
        }
        else if (this._smscredit == "100000") {
            this.costcredit += 2000;
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;SMS Credit = 2000 PKR \n";
        }
        if (this._whatsappcredit == "1000") {
            this.costcredit += 100;
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 100 PKR \n";
        }
        else if (this._whatsappcredit == "10000") {
            this.costcredit += 1000;
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 1000 PKR \n";
        }
        else if (this._whatsappcredit == "100000") {
            this.costcredit += 2000;
            this.itemscredit += "<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp Credit = 2000 PKR \n";
        }
    };
    BuybundlesComponent.prototype.selectchange = function (event) {
        this.cost = 0;
        this.items = "";
        // expiry
        if (this._expiry == "1") {
            this.cost += 5;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 1 Month = 5 PKR \n";
        }
        else if (this._expiry == "2") {
            this.cost += 10;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 2 Months = 10 PKR \n";
        }
        else if (this._expiry == "3") {
            this.cost += 15;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Expiry for 3 Months = 15 PKR \n";
        }
        // enc
        if (this._encryption == "enable") {
            this.cost += 5000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Encryption = 5000 PKR \n";
        }
        else if (this._encryption == "disable") {
            this.cost += 0;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Encryption = 0 PKR \n";
        }
        // feaut
        if (this._featureset == "messaging") {
            this.cost += 0;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;SMS = 0 PKR \n";
        }
        else if (this._featureset == "digital") {
            this.cost += 1000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;WhatsApp = 1000 PKR \n";
        }
        else if (this._featureset == "messaging,digital") {
            this.cost += 2000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;SMS & WhatsApp = 2000 PKR \n";
        }
        if (this._tpsms == "10") {
            this.cost += 100;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 100 PKR \n";
        }
        else if (this._tpsms == "50") {
            this.cost += 1000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 1000 PKR \n";
        }
        else if (this._tpsms == "100") {
            this.cost += 2000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 2000 PKR \n";
        }
        else if (this._tpsms == "0") {
            this.cost += 0;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for SMS = 0 PKR \n";
        }
        if (this._tpwa == "10") {
            this.cost += 100;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 100 PKR \n";
        }
        else if (this._tpwa == "50") {
            this.cost += 1000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 1000 PKR \n";
        }
        else if (this._tpwa == "100") {
            this.cost += 2000;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 2000 PKR \n";
        }
        else if (this._tpwa == "0") {
            this.cost += 0;
            this.items += "<span><i class='fa fa-check'></i></span>&nbsp;Throughput for WhatsApp = 0 PKR \n";
        }
    };
    BuybundlesComponent.prototype.buycredit = function () {
        var credit = {
            smscredit: this._smscredit,
            whatsappcredit: this._whatsappcredit,
            from: 'sa@mangotree.com',
            to: this.auth.getSavedEmail(),
            cost: this.costcredit,
            payment: false,
            createdby: this.auth.getSavedEmail()
        };
        this.pricingService.registercredit(credit).subscribe(function (data) {
            if (data.success) {
                alert('Credit requested!');
                location.reload();
            }
            else {
                alert(data.err);
            }
        });
    };
    BuybundlesComponent.prototype.createbundle = function () {
        if (this._featureset == "messaging,digital") {
            if (this._tpsms != "0" && this._tpwa != "0") {
            }
            else {
                alert("Please select base througput for both WhatsApp and SMS");
                return false;
            }
        }
        if (this._featureset == "messaging") {
            if (this._tpsms != "0") {
            }
            else {
                alert("Please select base througput for SMS");
                return false;
            }
        }
        if (this._featureset == "digital") {
            if (this._tpwa != "0") {
            }
            else {
                alert("Please select base througput for WhatsApp");
                return false;
            }
        }
        var newBundle = {
            expiry: this._expiry,
            encryption: this._encryption,
            featureset: this._featureset,
            smstp: this._tpsms,
            watp: this._tpwa,
            cost: this.cost,
            createdby: this.auth.getSavedEmail()
        };
        this.pricingService.registerbundle(newBundle).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Subscribed");
                location.reload();
            }
            else {
                alert("Already subscribed to a bundle. Please buy credit now.");
            }
        });
    };
    BuybundlesComponent.prototype.onSubmit = function () {
        var _this = this;
        var newBundle = {
            name: this.bundle,
            createdby: this.auth.getSavedEmail()
        };
        this.pricingService.registerbundle(newBundle).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Subscribed");
                _this.getAllBundles();
            }
            else {
                alert("Not Subscribed");
            }
        });
    };
    BuybundlesComponent.prototype.getAllBundles = function () {
        var _this = this;
        this.pricingService.getallbundles(this.auth.getSavedEmail()).subscribe(function (data) {
            _this.bundlearr = data.data;
        });
    };
    BuybundlesComponent.prototype.getAllCredit = function () {
        var _this = this;
        this.pricingService.getallcredits(this.auth.getSavedEmail()).subscribe(function (data) {
            _this.creditarr = data.data;
        });
    };
    BuybundlesComponent.prototype.ondelete = function (id) {
        var _this = this;
        this.pricingService.removebundle(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Deleted");
                _this.getAllBundles();
            }
            else {
                alert("Not Deleted");
            }
        });
    };
    BuybundlesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buybundles',
            template: __webpack_require__(1051),
            styles: [__webpack_require__(982)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], BuybundlesComponent);
    return BuybundlesComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/buybundles.component.js.map

/***/ }),
/* 682 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignmanagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var uri = 'http://localhost:3000/messaging/campaigns/upload';
var CampaignmanagementComponent = (function () {
    function CampaignmanagementComponent(authService, messagingService, router) {
        this.authService = authService;
        this.messagingService = messagingService;
        this.router = router;
        this.path = "";
        this.name = "";
        this.type = "";
        this.description = "";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: uri, itemAlias: 'photo' });
        this.campaignsArr = [];
    }
    CampaignmanagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getallcampaigns();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var resp = JSON.parse(response);
            _this.path = resp.path;
            console.log("ImageUpload:uploaded:", _this.path);
        };
    };
    CampaignmanagementComponent.prototype.typechange = function (e) {
    };
    CampaignmanagementComponent.prototype.registercampaign = function () {
        var campaign = {
            name: this.name,
            type: this.type,
            description: this.description,
            path: this.path,
            createdby: this.authService.getSavedEmail()
        };
        //console.log(campaign);
        this.messagingService.registercampaign(campaign).subscribe(function (data) {
            if (data.success) {
                alert("Campaign Registered");
                location.reload();
            }
            else {
                alert("Not Registered");
            }
        });
    };
    CampaignmanagementComponent.prototype.getallcampaigns = function () {
        var _this = this;
        this.messagingService.getallcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.campaignsArr = data.data;
            }
            else {
                console.log("Nothing found.");
            }
        });
    };
    CampaignmanagementComponent.prototype.removecampaign = function (id) {
        var _this = this;
        this.messagingService.removecampaign(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Removed");
                _this.getallcampaigns();
            }
            else {
                alert("Not Removed");
            }
        });
    };
    CampaignmanagementComponent.prototype.download = function (path) {
        window.location.href = "http://localhost:3000/messaging/campaigns/download/" + path;
        //this.router.navigateByUrl();
    };
    CampaignmanagementComponent.prototype.fileChange = function (ev) {
    };
    CampaignmanagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaignmanagement',
            template: __webpack_require__(1052),
            styles: [__webpack_require__(983)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CampaignmanagementComponent);
    return CampaignmanagementComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/campaignmanagement.component.js.map

/***/ }),
/* 683 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposemessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComposemessageComponent = (function () {
    function ComposemessageComponent(router) {
        this.router = router;
        this.digital = false;
    }
    ComposemessageComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.rights.indexOf("digital") === -1) {
            this.digital = false;
        }
        else {
            this.digital = true;
        }
        // this.router.navigate(['/messaging/compose/quick']);
    };
    ComposemessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-composemessage',
            template: __webpack_require__(1053),
            styles: [__webpack_require__(984)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], ComposemessageComponent);
    return ComposemessageComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/composemessage.component.js.map

/***/ }),
/* 684 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposenotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComposenotificationComponent = (function () {
    function ComposenotificationComponent(authService, notificationService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.message = "";
        this.templatesArr = [];
    }
    ComposenotificationComponent.prototype.ngOnInit = function () {
        this.messagelen = this.message.length;
        this.getallnotificationtemplates();
    };
    ComposenotificationComponent.prototype.prefchange = function (event) {
        if (this.preference == 'db') {
            this.preferenceselected = false;
        }
        else {
            this.preferenceselected = true;
        }
    };
    ComposenotificationComponent.prototype.getallnotificationtemplates = function () {
        var _this = this;
        this.notificationService.getalltemplates(this.authService.getSavedEmail()).subscribe(function (data) {
            // console.log(data.data);
            _this.templatesArr = data.data;
        });
    };
    ComposenotificationComponent.prototype.templatechange = function (event) {
        this.message = event.target.value;
        this.messagelen = this.message.length;
    };
    ComposenotificationComponent.prototype.register = function () {
        var campaign;
        if (this.topic == undefined) {
            campaign = {
                preference: this.preference,
                topic: '',
                name: this.name,
                category: this.category,
                language: this.language,
                message: this.message,
                createdby: this.authService.getSavedEmail()
            };
        }
        else {
            campaign = {
                preference: this.preference,
                topic: this.topic,
                name: this.name,
                category: this.category,
                language: this.language,
                message: this.message,
                createdby: this.authService.getSavedEmail()
            };
        }
        this.notificationService.registerNotificationCampaign(campaign).subscribe(function (data) {
            if (data.success) {
                // console.log(data);
                alert("Campaign successfully created.");
            }
            else {
                alert("Not created. Try another name.");
            }
        });
    };
    ComposenotificationComponent.prototype.k = function (e) {
        this.messagelen = this.message.length;
    };
    ComposenotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-composenotification',
            template: __webpack_require__(1054),
            styles: [__webpack_require__(985)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === 'function' && _b) || Object])
    ], ComposenotificationComponent);
    return ComposenotificationComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/composenotification.component.js.map

/***/ }),
/* 685 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(authService, constactService) {
        this.authService = authService;
        this.constactService = constactService;
        this.contactsArr = [];
        this.checkedArr = [];
        this.namesArr = [];
        this.localcontact = [];
        this.allgroups = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getallcontacts();
        this.getallgroups();
    };
    ContactsComponent.prototype.getallcontacts = function () {
        var _this = this;
        this.constactService.getallcontacts(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.contactsArr = data.data;
            }
            else {
                console.log("No contacts registered");
            }
        });
    };
    ContactsComponent.prototype.deletecontact = function (id) {
        var _this = this;
        var check = confirm("This action will delete this contact");
        if (check) {
            this.constactService.removecontact(id).subscribe(function (data) {
                if (data.success) {
                    alert("Contact removed.");
                    _this.getallcontacts();
                }
                else {
                    alert("Not removed.");
                }
            });
        }
    };
    ContactsComponent.prototype.checkchange = function (event, id, fullname) {
        if (event.target.checked) {
            this.checkedArr.push(id);
            this.namesArr.push(fullname);
            var s = {
                contact: id,
                name: fullname
            };
            this.localcontact.push(s);
        }
        else {
            var s = {
                contact: id,
                name: fullname
            };
            this.checkedArr.splice(this.checkedArr.indexOf(id), 1);
            this.namesArr.splice(this.namesArr.indexOf(fullname), 1);
            this.localcontact.splice(this.localcontact.indexOf(s), 1);
        }
    };
    ContactsComponent.prototype.registergroup = function () {
        if (this.checkedArr.length > 0) {
            var newGroup = {
                name: this.name,
                description: this.description,
                contacts: this.localcontact,
                createdby: this.authService.getSavedEmail()
            };
            this.constactService.registergroup(newGroup).subscribe(function (data) {
                if (data.success) {
                    alert("New Group registered.");
                }
                else {
                    alert(data.msg);
                }
            });
        }
        else {
            alert("Please select contacts first");
        }
    };
    ContactsComponent.prototype.getallgroups = function () {
        var _this = this;
        this.constactService.getallgroups(this.authService.getSavedEmail())
            .subscribe(function (data) {
            _this.allgroups = data.data;
        });
    };
    ContactsComponent.prototype.updategroup = function () {
        if (this.checkedArr.length > 0) {
            var update = {
                group: this.groups,
                contacts: this.localcontact
            };
            // console.log(JSON.stringify(update));
            this.constactService.updategroup(update).subscribe(function (data) {
                if (data.success) {
                    alert("Group updated.");
                }
                else {
                    alert("Not updated.");
                }
            });
        }
        else {
            alert("Please select contacts to put in this group.");
        }
    };
    ContactsComponent.prototype.groupschange = function (event) {
        this.groups = event.target.value;
    };
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(1055),
            styles: [__webpack_require__(986)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === 'function' && _b) || Object])
    ], ContactsComponent);
    return ContactsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/contacts.component.js.map

/***/ }),
/* 686 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mask_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_issue_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateissueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateissueComponent = (function () {
    function CreateissueComponent(authService, maskService, issueService) {
        this.authService = authService;
        this.maskService = maskService;
        this.issueService = issueService;
        this.masksArr = [];
    }
    CreateissueComponent.prototype.ngOnInit = function () {
        this.getMasks();
        this.createdby = this.authService.getSavedEmail();
    };
    CreateissueComponent.prototype.registerissue = function () {
        var newIssue = {
            maskforiegn: this.maskforiegn,
            maskname: this.maskname,
            feature: this.feature,
            problem: this.problem,
            remarks: this.remarks,
            createdby: this.createdby
        };
        //this.issueService.registerissue(newIssue);
        this.issueService.registerissue(newIssue).subscribe(function (data) {
            if (data.success) {
                alert("Issue registered!");
                console.log(data.issue);
            }
            else {
                alert("Issue not registered!");
            }
        });
    };
    CreateissueComponent.prototype.getMasks = function () {
        var _this = this;
        this.maskService.getactivatedmasks(this.authService.getSavedEmail())
            .subscribe(function (data) {
            _this.masksArr = data.data;
        });
    };
    CreateissueComponent.prototype.maskchange = function (event) {
        //console.log(event.target.value);
        this.maskforiegn = event.target.value;
        this.maskname = event.target.options[event.target.selectedIndex].text;
        //console.log(this.maskforiegn,this.maskname);
    };
    CreateissueComponent.prototype.featurechange = function (event) {
        // console.log(event.target.value);
        this.feature = event.target.value;
    };
    CreateissueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createissue',
            template: __webpack_require__(1056),
            styles: [__webpack_require__(987)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_mask_service__["a" /* MaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_issue_service__["a" /* IssueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_issue_service__["a" /* IssueService */]) === 'function' && _c) || Object])
    ], CreateissueComponent);
    return CreateissueComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/createissue.component.js.map

/***/ }),
/* 687 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(auth, msgService) {
        this.auth = auth;
        this.msgService = msgService;
        this.doughnutChartLabels = ['Quick', 'Bulk', 'Drip', 'WhatsApp'];
        this.doughnutChartData = [];
        this.datefrom = "";
        this.dateto = "";
        this.doughnutChartType = 'doughnut';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Timeline'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [1560], label: 'Quick' },
            { data: [750], label: 'Bulk' },
            { data: [2], label: 'Drip' }
        ];
        this.selfemail = "";
        this.digitalArr = [];
        this.childsArr = [];
        this.quickArr = [];
        this.bulkArr = [];
        this.dripArr = [];
    }
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.selfemail = this.auth.getSavedEmail();
        this.getallchilds();
    };
    DashboardComponent.prototype.childchange = function (ev) {
        console.log(ev.target.value);
        this.geteverythingnew(ev.target.value);
    };
    DashboardComponent.prototype.geteverythingnew = function (email) {
        var _this = this;
        this.quick = 0;
        this.digital = 0;
        this.bulk = 0;
        this.drip = 0;
        this.doughnutChartData = [];
        this.msgService.getalltotalquickcount(email).subscribe(function (data) {
            _this.quick = data.count;
            _this.msgService.getalltotalbulkcount(email).subscribe(function (data) {
                _this.bulk = data.count;
                _this.msgService.getalltotaldripcount(email).subscribe(function (data) {
                    _this.drip = data.count;
                    _this.msgService.getalltotaldigitalcount(email).subscribe(function (data) {
                        _this.digital = data.count;
                        _this.doughnutChartData.push(_this.quick, _this.bulk, _this.drip, _this.digital);
                    });
                });
            });
        });
    };
    DashboardComponent.prototype.geteverything = function (email) {
        var _this = this;
        this.quickArr = [];
        this.bulkArr = [];
        this.dripArr = [];
        this.digitalArr = [];
        this.doughnutChartData = [];
        this.msgService.getallquickdashboard(email).subscribe(function (data) {
            _this.quickArr = data.data;
            _this.msgService.getallbulkdashboard(email).subscribe(function (data) {
                _this.bulkArr = data.data;
                _this.msgService.getalldripdashboard(email).subscribe(function (data) {
                    _this.dripArr = data.data;
                    _this.msgService.getalldigitaldashboard(email).subscribe(function (data) {
                        _this.digitalArr = data.data;
                        _this.doughnutChartData.push(_this.quickArr.length, _this.bulkArr.length, _this.dripArr.length, _this.digitalArr.length);
                    });
                    //console.log(this.dripArr.length);
                    //this.doughnutChartLabels.push('Quick');
                    //this.doughnutChartData.push(this.quickArr.length,this.bulkArr.length,this.dripArr.length);
                    //this.doughnutChartData.push(1000,2000,2);
                    //this.doughnutChartLabels.push('Bulk');
                    //this.doughnutChartData.push(this.bulkArr.length);
                    //this.doughnutChartLabels.push('Drip');
                    //this.doughnutChartData.push(this.dripArr.length);
                });
            });
        });
    };
    DashboardComponent.prototype.getallchilds = function () {
        var _this = this;
        this.auth.getChildAccess(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                //console.log(data.data);
                _this.childsArr = data.data;
            }
            else {
                console.log('No Childs');
            }
        });
    };
    DashboardComponent.prototype.getallquick = function () {
        var _this = this;
        this.msgService.getallquick(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                //console.log(data.data);
                _this.quickArr = data.data;
            }
            else {
                console.log('No Quick Messages');
            }
        });
    };
    DashboardComponent.prototype.getallbulk = function () {
        var _this = this;
        this.msgService.getallbulk(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                // console.log(data.data);
                _this.bulkArr = data.data;
            }
            else {
                console.log('No Bulk Messages');
            }
        });
    };
    DashboardComponent.prototype.getalldrip = function () {
        var _this = this;
        this.msgService.getalldrip(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                _this.dripArr = data.data;
            }
            else {
                console.log('No Bulk Messages');
            }
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(1057),
            styles: [__webpack_require__(988)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),
/* 688 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardnotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardnotificationComponent = (function () {
    function DashboardnotificationComponent(authService, notificationService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.router = router;
        // Doughnut
        // public doughnutChartLabels:string[] = ['Sent', 'Seen','Reported'];
        // public doughnutChartData:number[] = [350, 450,100];
        this.doughnutChartLabels = ['Sent', 'Seen', 'Ack', 'Reported'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.notificationsArr = [];
        this.tempArr = [];
        this.payloadArr = [];
        this.sent = 0;
        this.mastersent = 0;
        this.seen = 0;
        this.masterseen = 0;
        this.ack = 0;
        this.masterack = 0;
        this.reported = 0;
        this.masterreported = 0;
    }
    DashboardnotificationComponent.prototype.ngOnInit = function () {
        this.getallnotifications();
    };
    DashboardnotificationComponent.prototype.getallnotifications = function () {
        var _this = this;
        this.notificationService.getallnotificaitons(this.authService.getSavedEmail())
            .subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.tempArr = data.data;
                _this.tempArr.forEach(function (element) {
                    _this.payloadArr = element.payload;
                    _this.payloadArr.forEach(function (element) {
                        _this.sent++;
                        _this.mastersent++;
                        if (element.ack != "0") {
                            _this.ack++;
                            _this.masterack++;
                        }
                        if (element.seen != "0") {
                            _this.seen++;
                            _this.masterseen++;
                        }
                        if (element.reported != "0") {
                            _this.reported++;
                            _this.masterreported++;
                        }
                    });
                    var ob = {
                        name: element.name,
                        created: element.created,
                        category: element.category,
                        message: element.message,
                        sent: _this.sent,
                        seen: _this.seen,
                        ack: _this.ack,
                        reported: _this.reported,
                        notificationid: element._id
                    };
                    _this.notificationsArr.push(ob);
                    _this.sent = 0;
                    _this.seen = 0;
                    _this.ack = 0;
                    _this.reported = 0;
                });
                // console.log(this.sent,this.seen,this.ack,this.reported);
                // console.log(this.payloadArr);
                _this.doughnutChartData.push(_this.mastersent);
                _this.doughnutChartData.push(_this.masterseen);
                _this.doughnutChartData.push(_this.masterack);
                _this.doughnutChartData.push(_this.masterreported);
            }
            else {
                console.log("No notifications found.");
            }
        });
    };
    // events
    DashboardnotificationComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardnotificationComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardnotificationComponent.prototype.reportedclick = function (id) {
        this.router.navigate(['/notification/reported'], { queryParams: { notificationid: id } });
    };
    DashboardnotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboardnotification',
            template: __webpack_require__(1058),
            styles: [__webpack_require__(989)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardnotificationComponent);
    return DashboardnotificationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/dashboardnotification.component.js.map

/***/ }),
/* 689 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultComponent = (function () {
    function DefaultComponent(auth, msgService) {
        this.auth = auth;
        this.msgService = msgService;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        var obj = localStorage.getItem('user');
        this.user = JSON.parse(obj);
        this.getuserinfo();
    };
    DefaultComponent.prototype.getuserinfo = function () {
        var _this = this;
        var obj = {
            email: this.auth.getSavedEmail()
        };
        this.auth.getbalance(obj).subscribe(function (data) {
            if (data.success) {
                _this.obj = data.data;
                console.log(_this.obj);
            }
            else {
                alert(data.error);
            }
        });
    };
    DefaultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(1059),
            styles: [__webpack_require__(990)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object])
    ], DefaultComponent);
    return DefaultComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/default.component.js.map

/***/ }),
/* 690 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DigitalComponent = (function () {
    function DigitalComponent(messagingService, authService, router) {
        this.messagingService = messagingService;
        this.authService = authService;
        this.router = router;
        this.mobilenos = "";
        this.msg = "";
        this.reach = "";
        this.op = "";
        this.cdate = "";
        this.smallmessage = "";
        this.verified = false;
        this.showspinner = false;
        this.mobilenosarr = [];
        // registerquick(){
        //   this.mobilenosarr = this.mobilenos.trim().split(',');
        //   if(this.mobilenosarr.length>11){
        //     alert("Mobile numbers must be less than 11.");
        //   }else{
        //         let quickObj = {
        //           name:this.name,
        //           language:this.language,
        //           masking:this.masking,
        //           mobilenos:this.mobilenosarr,
        //           msg:this.msg,
        //           msgchars:this.msgchars,
        //           noofmsgs:this.noofmsgs,
        //           preference:this.preference,
        //           createdby: this.authService.getSavedEmail(),
        //           account:this.account,
        //           password:this.password
        //         };
        //         this.messagingService.registerquick(quickObj).subscribe(data=>{
        //           //console.log(data);
        //           if(data.success){
        //             alert("Quick Message(s) : Sent") ;
        //             //location.reload(true);
        //           }else{
        //             alert(data.error);
        //           }
        //         });
        //   }
        // }
        this.templateArr = [];
        this.templatesArr = [];
        this.campaignsArr = [];
    }
    DigitalComponent.prototype.opchange = function (ev) {
        // console.log(ev.target.value);
        this.op = ev.target.value;
        //console.log(this.op);
        this.gettemplates();
    };
    DigitalComponent.prototype.campaignchange = function (ev) {
        this.campaignpath = ev.target.value;
        this.campaignname = ev.target[ev.target.selectedIndex].text;
        // this.campaignname = ev.target;
        // console.log(ev.target.selectedIndex);
    };
    DigitalComponent.prototype.registerwhatsapp = function () {
        if (this.op == "") {
            this.op = "static";
        }
        console.log(this.op);
        var obj = {
            name: this.name,
            language: this.language,
            type: this.op,
            campaign: this.campaignname,
            path: this.campaignpath,
            msg: this.msg,
            createdby: this.authService.getSavedEmail()
        };
        if (this.op == "static") {
            this.messagingService.registerdigitalstatic(obj).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    alert('Successful!' + data.timetaken + data.records);
                }
                else {
                    alert(data.error);
                }
            });
        }
        else {
            this.messagingService.registerdigitaldynamic(obj).subscribe(function (data) {
                if (data.success) {
                    alert('Successful!' + data.timetaken + data.records);
                }
                else {
                    alert(data.error);
                }
            });
        }
        // if(this.name.length != 0 && this.mobilenos.length !=0 && this.msg.length !=0){
        //   this.mobilenosarr = this.mobilenos.split(',')
        //   let obj = {
        //     name: this.name,
        //     mobilenos: this.mobilenosarr,
        //     message:this.msg,
        //     createdby: this.authService.getSavedEmail()
        //   }
        //   this.messagingService.registerdigital(obj).subscribe(data=>{
        //     if(data.success){
        //       alert('Successful!');
        //       location.reload(true);
        //     }else{
        //       alert('Not Successful!');
        //     }
        //   });
        //   // console.log(obj);
        // }else{
        //   alert('Fields are missing.')
        // }
    };
    DigitalComponent.prototype.oprchange = function (ev) {
        //alert(ev.target.value);
        this.reach = ev.target.value;
    };
    DigitalComponent.prototype.pc = function () {
        this.verified = false;
        //this.verifybalance(this.account,this.password,this.mobilenosarr.length);
    };
    DigitalComponent.prototype.registerbulk = function () {
        if (this.op == "") {
            this.op = "static";
        }
        var bulk = {
            name: this.name,
            language: this.language,
            type: this.op,
            campaign: this.campaignname,
            path: this.campaignpath,
            masking: this.masking,
            msg: this.msg,
            createdby: this.authService.getSavedEmail(),
            account: this.account,
            password: this.password,
            campaigndate: this.cdate
        };
        if (this.op == "static") {
            this.messagingService.registerbulk(bulk).subscribe(function (data) {
                if (data.success) {
                    alert("Bulk Sent!");
                    location.reload();
                }
                else {
                    alert(data.error);
                }
            });
        }
        else if (this.op == "dynamic") {
            this.messagingService.registerbulkdynamic(bulk).subscribe(function (data) {
                if (data.success) {
                    alert("Bulk of " + data.records + " sent in " + data.timetaken + "ms!");
                    location.reload();
                }
                else {
                    alert(data.error);
                }
            });
        }
    };
    // verifybalance(){
    //   //this.mobilenosarr = this.mobilenos.trim().split(',');
    //   if(this.mobilenos == ''){
    //     alert("Enter mobile numbers first!");
    //     return false;
    //   }
    //   this.mobilenosarr = this.mobilenos.trim().split(',');
    //   this.showspinner=true;
    //   let creds = {
    //     loginId:this.account,
    //     loginPassword:this.password
    //   }
    //   this.messagingService.getAccountSummary(creds).subscribe(data=>{
    //     console.log(data,this.verified);
    //     if(data.success){
    //       // verify the condition
    //       //console.log(data.data.Total_Balance);
    //       if(this.mobilenosarr.length > parseInt(data.data.Total_Balance)){
    //         //console.log("return false");
    //         //alert("Unsufficient Balance");
    //         this.smallmessage = "Insufficient Balance";
    //         this.verified = false;
    //       }else{
    //         //console.log("return true");
    //         this.verified = true;
    //         this.smallmessage = "";
    //       }
    //     }else{
    //       this.smallmessage = "Invalid username/password";
    //       this.verified=false;
    //     }
    //     this.showspinner=false;
    //     //console.log(data);
    //   });
    // }
    DigitalComponent.prototype.templatechange = function (ev) {
        this.msg = ev.target.value;
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    DigitalComponent.prototype.msgchange = function (ev) {
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    DigitalComponent.prototype.ngOnInit = function () {
        //this.getallstatictemplates();
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    DigitalComponent.prototype.getallstatictemplates = function () {
        var _this = this;
        this.messagingService.getallstatictemplates(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.templateArr = data.data;
            }
            else {
                console.log("No Templates Found");
            }
        });
    };
    DigitalComponent.prototype.gettemplates = function () {
        var _this = this;
        if (this.op == "") {
            // this.messagingService.getallstatictemplates(this.authService.getSavedEmail()).subscribe(data=>{
            //     if(data.success){
            //       this.templatesArr = data.data;
            //       console.log(this.templatesArr);
            //     }
            // });
            this.messagingService.getallstaticcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                    console.log(_this.campaignsArr);
                }
            });
            console.log("Get static templates");
        }
        else if (this.op == "static") {
            this.messagingService.getallstatictemplates(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.templatesArr = data.data;
                }
            });
            this.messagingService.getallstaticcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                }
            });
            console.log("Get static templates");
        }
        else if (this.op == "dynamic") {
            this.messagingService.getalldynamictemplates(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.templatesArr = data.data;
                }
            });
            this.messagingService.getalldynamiccampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
                if (data.success) {
                    _this.campaignsArr = data.data;
                }
            });
            console.log("Get dynamic templates");
        }
    };
    DigitalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-digital',
            template: __webpack_require__(1060),
            styles: [__webpack_require__(991)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DigitalComponent);
    return DigitalComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/digital.component.js.map

/***/ }),
/* 691 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mask_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DripmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DripmessageComponent = (function () {
    function DripmessageComponent(authService, maskService, messagingService) {
        this.authService = authService;
        this.maskService = maskService;
        this.messagingService = messagingService;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy HH:mm:ss',
            defaultOpen: false,
            closeOnSelect: true
        };
        this.msg = "";
        this.timepayload = [];
        this.arr = [];
        this.times = 0;
        this.campaignsArr = [];
        this.templatesArr = [];
        this.masksarr = [];
        this.objArr = [];
    }
    DripmessageComponent.prototype.frequencychange = function (ev) {
        this.arr = [];
        if (ev.target.value == "1") {
            this.arr.push({ id: 'ng1', value: 1 });
        }
        else if (ev.target.value == "2") {
            this.arr.push({ id: 'ng1', value: 1 });
            this.arr.push({ id: 'ng2', value: 2 });
        }
        else if (ev.target.value == "3") {
            this.arr.push({ id: 'ng1', value: 1 });
            this.arr.push({ id: 'ng2', value: 2 });
            this.arr.push({ id: 'ng3', value: 3 });
        }
        //this.arr.push(ev.target.value);
    };
    DripmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getallmasks();
        this.messagingService.getallstatictemplates(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.templatesArr = data.data;
            }
        });
        this.messagingService.getallstaticcampaigns(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.campaignsArr = data.data;
            }
        });
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    DripmessageComponent.prototype.getallmasks = function () {
        var _this = this;
        this.maskService.getactivatedmasks(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.masksarr = data.data;
            }
        });
    };
    DripmessageComponent.prototype.campchange = function (ev) {
        this.campaign = ev.target[ev.target.selectedIndex].text;
        this.path = ev.target.value;
    };
    DripmessageComponent.prototype.templatechange = function (ev) {
        this.msg = ev.target.value;
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    DripmessageComponent.prototype.msgchange = function (ev) {
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    DripmessageComponent.prototype.test = function () {
        alert(document.getElementById('1')["value"]);
        //document.getElementsByName('times')
    };
    DripmessageComponent.prototype.register = function () {
        var timespayload = [];
        if (this.frequency == "1") {
            timespayload.push({ status: '', time: document.getElementById('1')["value"] });
        }
        else if (this.frequency == "2") {
            timespayload.push({ status: '', time: document.getElementById('1')["value"] });
            timespayload.push({ status: '', time: document.getElementById('2')["value"] });
        }
        else if (this.frequency == "3") {
            timespayload.push({ status: '', time: document.getElementById('1')["value"] });
            timespayload.push({ status: '', time: document.getElementById('2')["value"] });
            timespayload.push({ status: '', time: document.getElementById('3')["value"] });
        }
        var drip = {
            name: this.name,
            language: this.language,
            masking: this.masking,
            campaign: this.campaign,
            path: this.path,
            msg: this.msg,
            datefrom: this.datefrom,
            dateto: this.dateto,
            frequency: this.frequency,
            timespayload: timespayload,
            createdby: this.authService.getSavedEmail()
        };
        this.messagingService.registerdrip(drip).subscribe(function (data) {
            if (data.success) {
                alert("Drip Created.");
            }
            else {
                alert(data.error.toString());
            }
        });
    };
    DripmessageComponent.prototype.langchange = function (ev) {
    };
    DripmessageComponent.prototype.maskingchange = function (ev) {
    };
    DripmessageComponent.prototype.pc = function (ev) {
        this.verified = false;
    };
    DripmessageComponent.prototype.verify = function () {
        var _this = this;
        this.spinner = true;
        var creds = {
            loginId: this.account,
            loginPassword: this.password
        };
        this.messagingService.getAccountSummary(creds).subscribe(function (data) {
            if (data.success) {
                _this.verified = true;
            }
            else {
                _this.verified = false;
            }
            _this.spinner = false;
        });
    };
    DripmessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dripmessage',
            template: __webpack_require__(1061),
            styles: [__webpack_require__(992)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object])
    ], DripmessageComponent);
    return DripmessageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/dripmessage.component.js.map

/***/ }),
/* 692 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamictemplatemessagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamictemplatemessagingComponent = (function () {
    function DynamictemplatemessagingComponent() {
    }
    DynamictemplatemessagingComponent.prototype.ngOnInit = function () {
    };
    DynamictemplatemessagingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamictemplatemessaging',
            template: __webpack_require__(1062),
            styles: [__webpack_require__(993)]
        }), 
        __metadata('design:paramtypes', [])
    ], DynamictemplatemessagingComponent);
    return DynamictemplatemessagingComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/dynamictemplatemessaging.component.js.map

/***/ }),
/* 693 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(1063),
            styles: [__webpack_require__(994)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/footer.component.js.map

/***/ }),
/* 694 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = (function () {
    function GroupsComponent(authService, contactService) {
        this.authService = authService;
        this.contactService = contactService;
        this.groupsArr = [];
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getallgroups();
        //this.getGroupsWithDetails();
    };
    GroupsComponent.prototype.getallgroups = function () {
        var _this = this;
        this.contactService.getallgroups(this.authService.getSavedEmail()).subscribe(function (data) {
            _this.groupsArr = data.data;
        });
    };
    GroupsComponent.prototype.removegroup = function (id) {
        var _this = this;
        this.contactService.removegroup(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                alert("Removed");
                _this.getallgroups();
            }
            else {
                alert("Remove error.");
            }
        });
    };
    GroupsComponent.prototype.removecontactfromgroup = function (cid, gid) {
        var _this = this;
        //console.log(cid,gid);
        var con = {
            contactid: cid,
            groupid: gid
        };
        this.contactService.removecontactfromgroup(JSON.stringify(con)).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                alert("Removed");
                _this.getallgroups();
            }
            else {
                alert("Remove error.");
            }
        });
    };
    GroupsComponent.prototype.getGroupsWithDetails = function () {
        this.contactService.getgroupwithdetails(this.authService.getSavedEmail()).subscribe(function (data) {
            //this.groupsArr = data.data;
            console.log(data);
        });
    };
    GroupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(1064),
            styles: [__webpack_require__(995)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === 'function' && _b) || Object])
    ], GroupsComponent);
    return GroupsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/groups.component.js.map

/***/ }),
/* 695 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(1065),
            styles: [__webpack_require__(996)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/home.component.js.map

/***/ }),
/* 696 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridComponent = (function () {
    function HybridComponent() {
    }
    HybridComponent.prototype.ngOnInit = function () {
    };
    HybridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybrid',
            template: __webpack_require__(1066),
            styles: [__webpack_require__(997)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridComponent);
    return HybridComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybrid.component.js.map

/***/ }),
/* 697 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hybrid_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridcomposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HybridcomposeComponent = (function () {
    function HybridcomposeComponent(authService, hybridService, messagingService) {
        this.authService = authService;
        this.hybridService = hybridService;
        this.messagingService = messagingService;
        this.msg = "";
    }
    HybridcomposeComponent.prototype.ngOnInit = function () {
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    HybridcomposeComponent.prototype.register = function () {
        var hybrid = {
            name: this.name,
            masking: this.masking,
            language: this.language,
            msg: this.msg,
            locking: this.locking,
            createdby: this.authService.getSavedEmail(),
            account: this.account,
            password: this.password
        };
        this.hybridService.registerhybrid(hybrid).subscribe(function (data) {
            if (data.success) {
                alert("Message Sent");
                location.reload(true);
            }
            else {
                alert("Not Sent");
            }
        });
    };
    HybridcomposeComponent.prototype.maskingchange = function (ev) {
    };
    HybridcomposeComponent.prototype.langchange = function (e) {
    };
    HybridcomposeComponent.prototype.msgchange = function (ev) {
        this.msgchars = this.msg.length;
        this.msgcount = Math.ceil(this.msgchars / 160);
    };
    HybridcomposeComponent.prototype.lockchange = function (ev) {
        this.locking = ev.target.value;
    };
    HybridcomposeComponent.prototype.pc = function (ev) {
        this.verified = false;
    };
    HybridcomposeComponent.prototype.verify = function () {
        var _this = this;
        this.spinner = true;
        var creds = {
            loginId: this.account,
            loginPassword: this.password
        };
        this.messagingService.getAccountSummary(creds).subscribe(function (data) {
            if (data.success) {
                _this.verified = true;
            }
            else {
                _this.verified = false;
            }
            _this.spinner = false;
        });
    };
    HybridcomposeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridcompose',
            template: __webpack_require__(1067),
            styles: [__webpack_require__(998)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_hybrid_service__["a" /* HybridService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_hybrid_service__["a" /* HybridService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object])
    ], HybridcomposeComponent);
    return HybridcomposeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridcompose.component.js.map

/***/ }),
/* 698 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hybrid_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybriddashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HybriddashboardComponent = (function () {
    // Doughnut
    // public doughnutChartLabels:string[] = ['Msgs Sent', 'Noti. Sent', 'Delivered', 'Outbox','Seen', 'Reported'];
    // public doughnutChartData:number[] = [350, 450, 100,100,20,200];
    // public doughnutChartType:string = 'doughnut';
    function HybriddashboardComponent(authService, hybridService) {
        this.authService = authService;
        this.hybridService = hybridService;
        this.hybridArr = [];
    }
    HybriddashboardComponent.prototype.ngOnInit = function () {
        this.getallhybrid();
    };
    // events
    HybriddashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HybriddashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HybriddashboardComponent.prototype.getallhybrid = function () {
        var _this = this;
        this.hybridService.getallhybrid(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.hybridArr = data.data;
            }
        });
    };
    HybriddashboardComponent.prototype.removehybrid = function (name) {
        var _this = this;
        this.hybridService.removehybrid(name).subscribe(function (data) {
            if (data.success) {
                alert("Deleted");
                _this.getallhybrid();
            }
            else {
                alert("Not deleted.");
            }
        });
    };
    HybriddashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybriddashboard',
            template: __webpack_require__(1068),
            styles: [__webpack_require__(999)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hybrid_service__["a" /* HybridService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hybrid_service__["a" /* HybridService */]) === 'function' && _b) || Object])
    ], HybriddashboardComponent);
    return HybriddashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybriddashboard.component.js.map

/***/ }),
/* 699 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridinboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridinboxComponent = (function () {
    function HybridinboxComponent() {
    }
    HybridinboxComponent.prototype.ngOnInit = function () {
    };
    HybridinboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridinbox',
            template: __webpack_require__(1069),
            styles: [__webpack_require__(1000)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridinboxComponent);
    return HybridinboxComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridinbox.component.js.map

/***/ }),
/* 700 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridinboxdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridinboxdetailsComponent = (function () {
    function HybridinboxdetailsComponent() {
    }
    HybridinboxdetailsComponent.prototype.ngOnInit = function () {
    };
    HybridinboxdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridinboxdetails',
            template: __webpack_require__(1070),
            styles: [__webpack_require__(1001)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridinboxdetailsComponent);
    return HybridinboxdetailsComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridinboxdetails.component.js.map

/***/ }),
/* 701 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridinboxsenderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridinboxsenderComponent = (function () {
    function HybridinboxsenderComponent() {
    }
    HybridinboxsenderComponent.prototype.ngOnInit = function () {
    };
    HybridinboxsenderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridinboxsender',
            template: __webpack_require__(1071),
            styles: [__webpack_require__(1002)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridinboxsenderComponent);
    return HybridinboxsenderComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridinboxsender.component.js.map

/***/ }),
/* 702 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridoutboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridoutboxComponent = (function () {
    function HybridoutboxComponent() {
    }
    HybridoutboxComponent.prototype.ngOnInit = function () {
    };
    HybridoutboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridoutbox',
            template: __webpack_require__(1072),
            styles: [__webpack_require__(1003)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridoutboxComponent);
    return HybridoutboxComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridoutbox.component.js.map

/***/ }),
/* 703 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridsentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridsentComponent = (function () {
    function HybridsentComponent() {
    }
    HybridsentComponent.prototype.ngOnInit = function () {
    };
    HybridsentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridsent',
            template: __webpack_require__(1073),
            styles: [__webpack_require__(1004)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridsentComponent);
    return HybridsentComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridsent.component.js.map

/***/ }),
/* 704 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HybridtemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HybridtemplateComponent = (function () {
    function HybridtemplateComponent() {
    }
    HybridtemplateComponent.prototype.ngOnInit = function () {
    };
    HybridtemplateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hybridtemplate',
            template: __webpack_require__(1074),
            styles: [__webpack_require__(1005)]
        }), 
        __metadata('design:paramtypes', [])
    ], HybridtemplateComponent);
    return HybridtemplateComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/hybridtemplate.component.js.map

/***/ }),
/* 705 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        // jQuery().ready(function(){
        //   jQuery("#p").click(function(){
        //     alert("My Nigga");
        //   });
        // });
    };
    InboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(1075),
            styles: [__webpack_require__(1006)]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxComponent);
    return InboxComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/inbox.component.js.map

/***/ }),
/* 706 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxdetailsComponent = (function () {
    function InboxdetailsComponent() {
    }
    InboxdetailsComponent.prototype.ngOnInit = function () {
    };
    InboxdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inboxdetails',
            template: __webpack_require__(1076),
            styles: [__webpack_require__(1007)]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxdetailsComponent);
    return InboxdetailsComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/inboxdetails.component.js.map

/***/ }),
/* 707 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxnotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxnotificationComponent = (function () {
    function InboxnotificationComponent() {
    }
    InboxnotificationComponent.prototype.ngOnInit = function () {
    };
    InboxnotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inboxnotification',
            template: __webpack_require__(1077),
            styles: [__webpack_require__(1008)]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxnotificationComponent);
    return InboxnotificationComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/inboxnotification.component.js.map

/***/ }),
/* 708 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxsenderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxsenderComponent = (function () {
    function InboxsenderComponent() {
    }
    InboxsenderComponent.prototype.ngOnInit = function () {
    };
    InboxsenderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inboxsender',
            template: __webpack_require__(1078),
            styles: [__webpack_require__(1009)]
        }), 
        __metadata('design:paramtypes', [])
    ], InboxsenderComponent);
    return InboxsenderComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/inboxsender.component.js.map

/***/ }),
/* 709 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_issue_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuedashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuedashboardComponent = (function () {
    function IssuedashboardComponent(issueService, authService) {
        this.issueService = issueService;
        this.authService = authService;
        this.issuesArr = [];
    }
    IssuedashboardComponent.prototype.ngOnInit = function () {
        this.getallissues();
    };
    IssuedashboardComponent.prototype.getallissues = function () {
        var _this = this;
        this.issueService.getallissues(this.authService.getSavedEmail())
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.issuesArr = data.data;
            }
            else {
                console.log("No issues registered.");
            }
        });
    };
    IssuedashboardComponent.prototype.remove = function (id) {
        var _this = this;
        this.issueService.removeissue(id).subscribe(function (data) {
            if (data.success) {
                alert("Removed");
                _this.getallissues();
            }
            else {
                alert("Not Removed");
            }
        });
    };
    IssuedashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-issuedashboard',
            template: __webpack_require__(1079),
            styles: [__webpack_require__(1010)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_issue_service__["a" /* IssueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_issue_service__["a" /* IssueService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], IssuedashboardComponent);
    return IssuedashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/issuedashboard.component.js.map

/***/ }),
/* 710 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuestrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuestrackerComponent = (function () {
    function IssuestrackerComponent() {
    }
    IssuestrackerComponent.prototype.ngOnInit = function () {
    };
    IssuestrackerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-issuestracker',
            template: __webpack_require__(1080),
            styles: [__webpack_require__(1011)]
        }), 
        __metadata('design:paramtypes', [])
    ], IssuestrackerComponent);
    return IssuestrackerComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/issuestracker.component.js.map

/***/ }),
/* 711 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeareportingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeareportingComponent = (function () {
    function LeareportingComponent(auth, msgService, _csvService) {
        this.auth = auth;
        this.msgService = msgService;
        this._csvService = _csvService;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy HH:mm:ss',
            defaultOpen: false,
            closeOnSelect: true
        };
        this.notfound = false;
        this.spinner = false;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Timeline'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.d = new Date();
        this.account = "";
        this.downloadable = [];
        this.datefrom = this.d.getFullYear() + "-" + ('0' + (this.d.getMonth() + 1)).slice(-2) + "-" + ('0' + (this.d.getDate())).slice(-2);
        this.dateto = this.d.getFullYear() + "-" + ('0' + (this.d.getMonth() + 1)).slice(-2) + "-" + ('0' + (this.d.getDate())).slice(-2);
        this.localemail = "";
        this.accountsArr = [];
        this._MS_PER_DAY = 1000 * 60 * 60 * 24;
        this.ops = [];
    }
    // events
    LeareportingComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    LeareportingComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    LeareportingComponent.prototype.ngOnInit = function () {
        this.getallaccounts();
        this.localemail = this.auth.getSavedEmail();
    };
    LeareportingComponent.prototype.opchange = function (ev) {
        this.operation = ev.target.value;
        console.log(this.operation);
        if (this.operation == "quick") {
        }
        else if (this.operation == "bulk") {
        }
        else if (this.operation == "drip") {
        }
    };
    LeareportingComponent.prototype.acchange = function (ev) {
        this.account = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(ev.target.value.trim(), this.localemail.trim().toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8);
        //this.account = ev.target.value;
        console.log(this.account);
    };
    LeareportingComponent.prototype.getallaccounts = function () {
        var _this = this;
        this.auth.getallaccounts(this.auth.getSavedEmail()).
            subscribe(function (data) {
            if (data.success) {
                // data.data.forEach(element => {
                //   element.email = AES.decrypt(element.email.trim(), this.localemail.trim().toString()).toString(enc.Utf8)
                // });
                _this.accountsArr = data.data;
            }
        });
    };
    LeareportingComponent.prototype.opnamechangequick = function (ev) {
        this.operationname = ev.target.value;
    };
    LeareportingComponent.prototype.opnamechangeother = function (ev) {
        this.operationname = ev.target.value;
    };
    // a and b are javascript Date objects
    LeareportingComponent.prototype.dateDiffInDays = function (a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
    };
    LeareportingComponent.prototype.report = function () {
        var _this = this;
        if (this.account == "") {
            alert("Select account please.");
            return false;
        }
        this.notfound = false;
        this.barChartData = [];
        this.downloadable = [];
        this.ops = [];
        if (this.operation == "quick") {
            this.barChartLabels = ['Total', 'Jazz', 'Zong', 'Warid', 'Ufone', 'Telenor'];
            this.spinner = true;
            //this.ops = [];
            var queryobj = {
                email: this.account,
                datefrom: this.datefrom,
                dateto: this.dateto
            };
            this.msgService.getallquick(JSON.stringify(queryobj)).subscribe(function (data) {
                //console.log(data);
                var feed = {
                    joutbox: 0,
                    jsent: 0,
                    jsuccessful: 0,
                    zoutbox: 0,
                    zsent: 0,
                    zsuccessful: 0,
                    woutbox: 0,
                    wsent: 0,
                    wsuccessful: 0,
                    uoutbox: 0,
                    usent: 0,
                    usuccessful: 0,
                    toutbox: 0,
                    tsent: 0,
                    tsuccessful: 0
                };
                if (data.data.length > 0) {
                    data.data.forEach(function (element) {
                        if (_this.localemail != '') {
                            if (element.telco == "jazz") {
                                feed.jsent++;
                                if (element.sentid == "0") {
                                    feed.joutbox++;
                                }
                                else {
                                    feed.jsuccessful++;
                                }
                            }
                            else if (element.telco == "zong") {
                                feed.zsent++;
                                if (element.sentid == "0") {
                                    feed.zoutbox++;
                                }
                                else {
                                    feed.zsuccessful++;
                                }
                            }
                            else if (element.telco == "warid") {
                                feed.wsent++;
                                if (element.sentid == "0") {
                                    feed.woutbox++;
                                }
                                else {
                                    feed.wsuccessful++;
                                }
                            }
                            else if (element.telco == "ufone") {
                                feed.usent++;
                                if (element.sentid == "0") {
                                    feed.uoutbox++;
                                }
                                else {
                                    feed.usuccessful++;
                                }
                            }
                            else if (element.telco == "telenor") {
                                feed.tsent++;
                                if (element.sentid == "0") {
                                    feed.toutbox++;
                                }
                                else {
                                    feed.tsuccessful++;
                                }
                            }
                            element.msg = element.encrypted == true ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.account.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                        }
                        delete element.mnp;
                        delete element.intended;
                        delete element.priority;
                        delete element._id;
                        delete element.name;
                        delete element.language;
                        delete element.masking;
                        delete element.msgchars;
                        delete element.noofmsgs;
                        delete element.preference;
                        delete element.sentlength;
                        delete element.updatedAt;
                        delete element.createdby;
                    });
                    //console.log(data.data);
                    _this.ops = data.data;
                    //console.log(feed);
                    var countoutbox = 0;
                    var countsent = _this.ops.length;
                    var successful = 0;
                    _this.ops.forEach(function (element) {
                        if (element.sentid == "0") {
                            countoutbox++;
                        }
                        else {
                            successful++;
                        }
                    });
                    _this.barChartData.push({ data: [countsent, feed.jsent, feed.zsent, feed.wsent, feed.usent, feed.tsent], label: 'Sent' });
                    // this.barChartData.push({ data: [countoutbox,feed.joutbox,feed.zoutbox,feed.woutbox,feed.uoutbox,feed.toutbox], label: 'Outbox' });
                    // this.barChartData.push({ data: [successful,feed.jsuccessful,feed.zsuccessful,feed.wsuccessful,feed.usuccessful,feed.tsuccessful], label: 'Successful' });
                    _this.downloadable = _this.ops;
                }
                else {
                    console.log('No Quick Messages');
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
        else if (this.operation == "bulk") {
            this.barChartLabels = ['Total', 'Jazz', 'Zong', 'Warid', 'Ufone', 'Telenor'];
            this.spinner = true;
            var queryobj = {
                email: this.account,
                datefrom: this.datefrom,
                dateto: this.dateto
            };
            this.msgService.getallbulk(JSON.stringify(queryobj)).subscribe(function (data) {
                console.log(data);
                var feed = {
                    joutbox: 0,
                    jsent: 0,
                    jsuccessful: 0,
                    zoutbox: 0,
                    zsent: 0,
                    zsuccessful: 0,
                    woutbox: 0,
                    wsent: 0,
                    wsuccessful: 0,
                    uoutbox: 0,
                    usent: 0,
                    usuccessful: 0,
                    toutbox: 0,
                    tsent: 0,
                    tsuccessful: 0
                };
                if (data.data.length > 0) {
                    //console.log(data.data);
                    data.data.forEach(function (element) {
                        if (_this.localemail != '') {
                            if (element.telco == "jazz") {
                                feed.jsent++;
                                if (element.sentid == "0") {
                                    feed.joutbox++;
                                }
                                else {
                                    feed.jsuccessful++;
                                }
                            }
                            else if (element.telco == "zong") {
                                feed.zsent++;
                                if (element.sentid == "0") {
                                    feed.zoutbox++;
                                }
                                else {
                                    feed.zsuccessful++;
                                }
                            }
                            else if (element.telco == "warid") {
                                feed.wsent++;
                                if (element.sentid == "0") {
                                    feed.woutbox++;
                                }
                                else {
                                    feed.wsuccessful++;
                                }
                            }
                            else if (element.telco == "ufone") {
                                feed.usent++;
                                if (element.sentid == "0") {
                                    feed.uoutbox++;
                                }
                                else {
                                    feed.usuccessful++;
                                }
                            }
                            else if (element.telco == "telenor") {
                                feed.tsent++;
                                if (element.sentid == "0") {
                                    feed.toutbox++;
                                }
                                else {
                                    feed.tsuccessful++;
                                }
                            }
                            element.msg = element.encrypted == true ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.account.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                        }
                        delete element.mnp;
                        delete element.intended;
                        delete element.priority;
                        delete element._id;
                        delete element.name;
                        delete element.language;
                        delete element.type;
                        delete element.campaign;
                        delete element.path;
                        delete element.masking;
                        delete element.createdby;
                        delete element.sentlength;
                    });
                    //console.log(feed);
                    _this.ops = data.data;
                    var countoutbox = 0;
                    var countsent = _this.ops.length;
                    var successful = 0;
                    _this.ops.forEach(function (element) {
                        if (element.sentid == "0") {
                            countoutbox++;
                        }
                        else {
                            successful++;
                        }
                    });
                    _this.barChartData.push({ data: [countsent, feed.jsent, feed.zsent, feed.wsent, feed.usent, feed.tsent], label: 'Sent' });
                    // this.barChartData.push({ data: [countoutbox,feed.joutbox,feed.zoutbox,feed.woutbox,feed.uoutbox,feed.toutbox], label: 'Outbox' });
                    // this.barChartData.push({ data: [successful,feed.jsuccessful,feed.zsuccessful,feed.wsuccessful,feed.usuccessful,feed.tsuccessful], label: 'Successful' });
                    _this.downloadable = _this.ops;
                }
                else {
                    console.log('No Bulk Messages');
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
        else if (this.operation == "drip") {
            this.barChartLabels = ['Timeline'];
            this.spinner = true;
            this.msgService.getalldrip(this.auth.getSavedEmail()).subscribe(function (data) {
                if (data.data.length > 0) {
                    _this.ops = data.data;
                    console.log(_this.ops);
                    // console.log(this.dripArr.length);
                    var from = new Date(_this.datefrom.toString());
                    var to = new Date(_this.dateto.toString());
                    //console.log(this.dateDiffInDays(from, new Date(this.dateto.toString())),to,new Date(this.datefrom.toString()));
                    var driparr = [];
                    _this.barChartData = [];
                    _this.ops.forEach(function (element) {
                        var quickdate = new Date(element.created.toString());
                        var differencefrom = _this.dateDiffInDays(from, quickdate);
                        var differenceto = _this.dateDiffInDays(quickdate, to);
                        console.log('quickdate', quickdate);
                        console.log(differencefrom, differenceto);
                        // console.log('from', datefrom);
                        // console.log('to', dateto);
                        if (differencefrom >= 0 && differenceto >= 0) {
                            driparr.push(element);
                        }
                    });
                    _this.barChartData.push({ data: [driparr.length], label: 'Sent' });
                    _this.barChartData.push({ data: [0], label: 'Outbox' });
                    _this.barChartData.push({ data: [driparr.length], label: 'Submitted to the system' });
                    _this.downloadable = driparr;
                }
                else {
                    console.log('No Bulk Messages');
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
    };
    LeareportingComponent.prototype.download = function () {
        this._csvService.download(this.downloadable, this.operation.toString());
    };
    LeareportingComponent.prototype.getallquick = function () {
        var _this = this;
        //this.ops = [];
        var queryobj = {
            email: this.auth.getSavedEmail(),
            datefrom: this.datefrom,
            dateto: this.dateto
        };
        this.msgService.getallquick(JSON.stringify(queryobj)).subscribe(function (data) {
            console.log(data);
            if (data.data.length > 0) {
                //console.log(data.data);
                _this.ops = data.data;
            }
            else {
                console.log('No Quick Messages');
            }
        });
    };
    LeareportingComponent.prototype.getallbulk = function () {
        var _this = this;
        this.msgService.getallbulk(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                // console.log(data.data);
                _this.ops = data.data;
            }
            else {
                console.log('No Bulk Messages');
            }
        });
    };
    LeareportingComponent.prototype.getalldrip = function () {
        var _this = this;
        this.msgService.getalldrip(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                _this.ops = data.data;
                console.log(_this.ops);
            }
            else {
                console.log('No Bulk Messages');
            }
        });
    };
    LeareportingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leareporting',
            template: __webpack_require__(1081),
            styles: [__webpack_require__(1012)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"]) === 'function' && _c) || Object])
    ], LeareportingComponent);
    return LeareportingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/leareporting.component.js.map

/***/ }),
/* 712 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        if (localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn') == 'true') {
            this.router.navigate(['/default']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                if (data.activated && data.suspended == false) {
                    alert("You are logged in.");
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['/default']);
                }
                else {
                    alert("Your account is blocked." +
                        " Please contact us at support@mangotree.com for further assistance.");
                    _this.router.navigate(['/home/login']);
                }
            }
            else {
                alert(data.msg);
                _this.router.navigate(['/home/login']);
            }
            //console.log(data);
        });
        //localStorage.clear();
        //localStorage.setItem("id_loggedIn","true");
        //console.log(localStorage.getItem("id_loggedIn"));
        //this.router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(1082),
            styles: [__webpack_require__(1013)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/login.component.js.map

/***/ }),
/* 713 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mask_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskmanagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaskmanagementComponent = (function () {
    function MaskmanagementComponent(maskService, router, auth) {
        this.maskService = maskService;
        this.router = router;
        this.auth = auth;
        // get masks data
        this.dataArr = [];
    }
    MaskmanagementComponent.prototype.ngOnInit = function () {
        this.getAllMasks();
    };
    MaskmanagementComponent.prototype.createmasktypechange = function (event) {
        this.type = event.target.value;
    };
    MaskmanagementComponent.prototype.createMask = function () {
        var _this = this;
        if (this.mask.length > 11) {
            alert('This field can only be 11 chars long.');
            return false;
        }
        var newMask = {
            mask: this.mask,
            type: this.type,
            description: this.description,
            createdby: this.auth.getSavedEmail()
        };
        this.maskService.registermask(newMask).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Created");
                _this.getAllMasks();
            }
            else {
                alert("Mask already registered.");
            }
        });
    };
    MaskmanagementComponent.prototype.getAllMasks = function () {
        var _this = this;
        this.maskService.getallmask(this.auth.getSavedEmail()).subscribe(function (data) {
            _this.dataArr = data.data;
        });
    };
    MaskmanagementComponent.prototype.ondelete = function (id) {
        var _this = this;
        this.maskService.removemask(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Deleted");
                _this.getAllMasks();
            }
            else {
                alert("Not Deleted");
            }
        });
    };
    MaskmanagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maskmanagement',
            template: __webpack_require__(1083),
            styles: [__webpack_require__(1014)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_mask_service__["a" /* MaskService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], MaskmanagementComponent);
    return MaskmanagementComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/maskmanagement.component.js.map

/***/ }),
/* 714 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterComponent = (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(1084),
            styles: [__webpack_require__(1015)]
        }), 
        __metadata('design:paramtypes', [])
    ], MasterComponent);
    return MasterComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/master.component.js.map

/***/ }),
/* 715 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasteraccountmoderationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasteraccountmoderationComponent = (function () {
    function MasteraccountmoderationComponent(auth) {
        this.auth = auth;
        this.usersarr = [];
    }
    MasteraccountmoderationComponent.prototype.ngOnInit = function () {
        this.usersarr = [];
        this.getpending();
    };
    MasteraccountmoderationComponent.prototype.getpending = function () {
        var _this = this;
        this.auth.getpending().subscribe(function (data) {
            if (data.success) {
                _this.usersarr = data.data;
            }
            else {
                alert(data.error);
            }
        });
    };
    MasteraccountmoderationComponent.prototype.activate = function (email) {
        var _this = this;
        var e = {
            email: email
        };
        this.auth.activateaccount(e).subscribe(function (data) {
            if (data.success) {
                alert('Success');
                _this.getpending();
            }
            else {
                alert(data.err);
            }
        });
    };
    MasteraccountmoderationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masteraccountmoderation',
            template: __webpack_require__(1085),
            styles: [__webpack_require__(1016)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], MasteraccountmoderationComponent);
    return MasteraccountmoderationComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masteraccountmoderation.component.js.map

/***/ }),
/* 716 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterbundlemoderationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasterbundlemoderationComponent = (function () {
    function MasterbundlemoderationComponent(pricingService) {
        this.pricingService = pricingService;
        this.configarr = [];
    }
    MasterbundlemoderationComponent.prototype.ngOnInit = function () {
        this.getpendingconfigs();
    };
    MasterbundlemoderationComponent.prototype.getpendingconfigs = function () {
        var _this = this;
        this.pricingService.getpendingconfigs().subscribe(function (data) {
            if (data.success) {
                _this.configarr = data.data;
            }
        });
    };
    MasterbundlemoderationComponent.prototype.receive = function (id, email) {
        var _this = this;
        this.pricingService.receivebundlepayment({ id: id }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully recieved.');
                _this.getpendingconfigs();
            }
            else {
                alert(data.error);
            }
        });
    };
    MasterbundlemoderationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masterbundlemoderation',
            template: __webpack_require__(1086),
            styles: [__webpack_require__(1017)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */]) === 'function' && _a) || Object])
    ], MasterbundlemoderationComponent);
    return MasterbundlemoderationComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masterbundlemoderation.component.js.map

/***/ }),
/* 717 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MastercreditmoderationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MastercreditmoderationComponent = (function () {
    function MastercreditmoderationComponent(pricingService) {
        this.pricingService = pricingService;
        this.configarr = [];
    }
    MastercreditmoderationComponent.prototype.ngOnInit = function () {
        this.getpendingcredits();
    };
    MastercreditmoderationComponent.prototype.getpendingcredits = function () {
        var _this = this;
        this.pricingService.getpendingcredits().subscribe(function (data) {
            if (data.success) {
                _this.configarr = data.data;
            }
        });
    };
    MastercreditmoderationComponent.prototype.receive = function (id, email) {
        var _this = this;
        this.pricingService.receivecreditpayment({ id: id }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully recieved.');
                _this.getpendingcredits();
            }
            else {
                alert(data.error);
            }
        });
    };
    MastercreditmoderationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mastercreditmoderation',
            template: __webpack_require__(1087),
            styles: [__webpack_require__(1018)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */]) === 'function' && _a) || Object])
    ], MastercreditmoderationComponent);
    return MastercreditmoderationComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/mastercreditmoderation.component.js.map

/***/ }),
/* 718 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_issue_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterissuemoderationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasterissuemoderationComponent = (function () {
    function MasterissuemoderationComponent(issueService) {
        this.issueService = issueService;
        this.configarr = [];
    }
    MasterissuemoderationComponent.prototype.ngOnInit = function () {
        this.getpendingissues();
    };
    MasterissuemoderationComponent.prototype.getpendingissues = function () {
        var _this = this;
        this.issueService.getpendingissues().subscribe(function (data) {
            if (data.success) {
                _this.configarr = data.data;
            }
        });
    };
    MasterissuemoderationComponent.prototype.resolve = function (id) {
        var _this = this;
        this.issueService.resolveissue({ id: id }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully resolved.');
                _this.getpendingissues();
            }
            else {
                alert(data.error);
            }
        });
    };
    MasterissuemoderationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masterissuemoderation',
            template: __webpack_require__(1088),
            styles: [__webpack_require__(1019)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_issue_service__["a" /* IssueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_issue_service__["a" /* IssueService */]) === 'function' && _a) || Object])
    ], MasterissuemoderationComponent);
    return MasterissuemoderationComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masterissuemoderation.component.js.map

/***/ }),
/* 719 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MastermanageaccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MastermanageaccountComponent = (function () {
    function MastermanageaccountComponent(auth, pricing, messaging) {
        this.auth = auth;
        this.pricing = pricing;
        this.messaging = messaging;
        this.email = "";
        this.promocredit = 0;
        this.userobj = {};
        this.enable = false;
        this.accountsarr = [];
        this.childsarr = [];
    }
    MastermanageaccountComponent.prototype.ngOnInit = function () {
        this.getallaccounts();
    };
    MastermanageaccountComponent.prototype.getallaccounts = function () {
        var _this = this;
        this.auth.getallactivatedusers().subscribe(function (data) {
            if (data.success) {
                _this.accountsarr = data.data;
            }
        });
    };
    MastermanageaccountComponent.prototype.search = function () {
        var _this = this;
        if (this.email == "") {
            alert("Enter Email");
            return false;
        }
        this.auth.getBalance(this.email.trim()).subscribe(function (data) {
            if (data.success) {
                _this.userobj = data.data;
                _this.enable = true;
                _this.getchilds(_this.userobj.email);
            }
            else {
                alert(data.err);
                _this.enable = false;
            }
        });
    };
    MastermanageaccountComponent.prototype.clear = function () {
        this.email = "";
        this.enable = false;
    };
    MastermanageaccountComponent.prototype.suspend = function (email) {
        var _this = this;
        var obj = {
            email: email,
            issuspended: true
        };
        this.auth.manipulateAccount(obj).subscribe(function (data) {
            _this.enable = false;
            _this.search();
        });
    };
    MastermanageaccountComponent.prototype.allow = function (email) {
        var _this = this;
        var obj = {
            email: email,
            issuspended: false
        };
        this.auth.manipulateAccount(obj).subscribe(function (data) {
            _this.enable = false;
            _this.search();
        });
    };
    MastermanageaccountComponent.prototype.resetpassword = function (e) {
        var email = {
            email: e
        };
        this.auth.resetpassword(email).subscribe(function (data) {
            if (data.success) {
                alert('Password reset complete.');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent.prototype.quick = function (e) {
        this.messaging.getalltotalquickcount(e).subscribe(function (data) {
            if (data.success) {
                alert(data.count + ' messages were sent');
            }
        });
    };
    MastermanageaccountComponent.prototype.bulk = function (e) {
        this.messaging.getalltotalbulkcount(e).subscribe(function (data) {
            if (data.success) {
                alert(data.count + ' messages were sent');
            }
        });
    };
    MastermanageaccountComponent.prototype.whatsapp = function (e) {
        this.messaging.getalltotaldigitalcount(e).subscribe(function (data) {
            if (data.success) {
                alert(data.count + ' messages were sent');
            }
        });
    };
    MastermanageaccountComponent.prototype.getchilds = function (email) {
        var _this = this;
        this.auth.getChildAccess(email).subscribe(function (data) {
            if (data.success) {
                _this.childsarr = data.data;
            }
        });
    };
    MastermanageaccountComponent.prototype.week1 = function (email, expiry) {
        this.pricing.extendexpirypromo({ email: email, expiry: expiry }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully added 1 week to the expiry.');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent.prototype.smstp10 = function (email) {
        this.pricing.extendsmstp10promo({ email: email }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully added Throughput');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent.prototype.watp10 = function (email) {
        this.pricing.extendwatp10promo({ email: email }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully added Throughput');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent.prototype.psms = function (email) {
        var credit = {
            smscredit: this.promocredit == null ? 0 : this.promocredit,
            whatsappcredit: 0,
            from: 'sa@mangotree.com',
            to: email,
            cost: 0,
            payment: true,
            createdby: email
        };
        this.pricing.registercredit(credit).subscribe(function (data) {
            if (data.success) {
                alert('Successfully Added Promo Credit!');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent.prototype.pwhatsapp = function (email) {
        var credit = {
            smscredit: 0,
            whatsappcredit: this.promocredit == null ? 0 : this.promocredit,
            from: 'sa@mangotree.com',
            to: email,
            cost: 0,
            payment: true,
            createdby: email
        };
        this.pricing.registercredit(credit).subscribe(function (data) {
            if (data.success) {
                alert('Successfully Added Promo Credit!');
            }
            else {
                alert(data.err);
            }
        });
    };
    MastermanageaccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mastermanageaccount',
            template: __webpack_require__(1089),
            styles: [__webpack_require__(1020)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__["a" /* PricingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object])
    ], MastermanageaccountComponent);
    return MastermanageaccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/mastermanageaccount.component.js.map

/***/ }),
/* 720 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mask_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MastermaskmoderationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MastermaskmoderationComponent = (function () {
    function MastermaskmoderationComponent(maskService) {
        this.maskService = maskService;
        this.configarr = [];
    }
    MastermaskmoderationComponent.prototype.ngOnInit = function () {
        this.getpendingmasks();
    };
    MastermaskmoderationComponent.prototype.getpendingmasks = function () {
        var _this = this;
        this.maskService.getpendingmasks().subscribe(function (data) {
            if (data.success) {
                _this.configarr = data.data;
            }
        });
    };
    MastermaskmoderationComponent.prototype.activate = function (id) {
        var _this = this;
        this.maskService.activatemask({ id: id }).subscribe(function (data) {
            if (data.success) {
                alert('Successfully activated.');
                _this.getpendingmasks();
            }
            else {
                alert(data.error);
            }
        });
    };
    MastermaskmoderationComponent.prototype.ondelete = function (id) {
        var _this = this;
        this.maskService.removemask(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Deleted");
                _this.getpendingmasks();
            }
            else {
                alert("Not Deleted");
            }
        });
    };
    MastermaskmoderationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mastermaskmoderation',
            template: __webpack_require__(1090),
            styles: [__webpack_require__(1021)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_mask_service__["a" /* MaskService */]) === 'function' && _a) || Object])
    ], MastermaskmoderationComponent);
    return MastermaskmoderationComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/mastermaskmoderation.component.js.map

/***/ }),
/* 721 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasternewaccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasternewaccountComponent = (function () {
    function MasternewaccountComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.type = "";
    }
    MasternewaccountComponent.prototype.ngOnInit = function () {
    };
    MasternewaccountComponent.prototype.onRegister = function () {
        // rights:['dashboard','messaging','notification','hybrid','reporting','contacts','tracker','pricing','settings'],
        if (this.type == '') {
            return false;
        }
        var user = {};
        if (this.type == 'regular') {
            user = {
                fullname: this.fullname,
                phone: this.phone,
                email: this.email,
                password: this.password,
                rights: ['contacts', 'tracker', 'pricing', 'settings'],
                isparent: true,
                isdelegate: false,
                parent: null,
                parents: [],
                type: this.type,
                isactivated: true
            };
        }
        else if (this.type == 'telco') {
            user = {
                fullname: this.fullname,
                phone: this.phone,
                email: this.email,
                password: this.password,
                rights: ['contacts', 'tracker', 'pricing', 'settings'],
                isparent: true,
                isdelegate: false,
                parent: null,
                parents: [],
                type: this.type,
                isactivated: true
            };
        }
        else if (this.type == 'lea') {
            user = {
                fullname: this.fullname,
                phone: this.phone,
                email: this.email,
                password: this.password,
                rights: ['contacts', 'tracker', 'pricing', 'settings'],
                isparent: true,
                isdelegate: false,
                parent: null,
                parents: [],
                type: this.type,
                isactivated: true
            };
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                alert("User registered successfully.");
            }
            else {
                alert("Something went wrong. Email might already be registered");
            }
        });
    };
    MasternewaccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masternewaccount',
            template: __webpack_require__(1091),
            styles: [__webpack_require__(1022)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], MasternewaccountComponent);
    return MasternewaccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masternewaccount.component.js.map

/***/ }),
/* 722 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_json2csv__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_json2csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterreportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterreportsComponent = (function () {
    function MasterreportsComponent(auth, pricingService, messagingService, _csvService) {
        this.auth = auth;
        this.pricingService = pricingService;
        this.messagingService = messagingService;
        this._csvService = _csvService;
        this.d = new Date();
        this.datefrom = this.d.getFullYear() +
            "-" +
            ("0" + (this.d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this.d.getDate()).slice(-2);
        this.dateto = this.d.getFullYear() +
            "-" +
            ("0" + (this.d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this.d.getDate()).slice(-2);
    }
    MasterreportsComponent.prototype.ngOnInit = function () {
    };
    MasterreportsComponent.prototype.config = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.pricingService.getconfigurationdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'configdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.credit = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.pricingService.getcreditdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'creditdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.quick = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.messagingService.getquickdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'quickdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.bulk = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.messagingService.getbulkdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'bulkdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.digital = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.messagingService.getdigitaldump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'digitaldump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.drip = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.messagingService.getdripdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'dripdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent.prototype.accounts = function () {
        var _this = this;
        var query = {
            dateto: this.dateto,
            datefrom: this.datefrom
        };
        this.auth.getusersdump(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this._csvService.download(data.data, 'accountsdump');
            }
            else {
                console.log(data.error);
            }
        });
    };
    MasterreportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-masterreports',
            template: __webpack_require__(1092),
            styles: [__webpack_require__(1023)],
            providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_json2csv__["CsvService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_pricing_service__["a" /* PricingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_json2csv__["CsvService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_json2csv__["CsvService"]) === 'function' && _d) || Object])
    ], MasterreportsComponent);
    return MasterreportsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masterreports.component.js.map

/***/ }),
/* 723 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagingComponent = (function () {
    function MessagingComponent(router, authService, messagingService) {
        this.router = router;
        this.authService = authService;
        this.messagingService = messagingService;
        this.totalOutbox = 0;
        this.totalPriOutbox = 0;
        this.outboxquick = 0;
        this.outboxbulk = 0;
        this.outboxdigital = 0;
        this.spinner = true;
    }
    MessagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var local = localStorage.getItem("user");
        var type = JSON.parse(local).type;
        if (type == "telco") {
            this.telco = true;
            this.gettotaloutbox();
            this.intervalid = setInterval(function () {
                _this.gettotaloutbox();
            }, 1000 * 4);
        }
        else {
            this.telco = false;
            this.getjustoutbox();
            this.intervalid = setInterval(function () {
                _this.getjustoutbox();
            }, 1000 * 4);
        }
        // this.router.navigate(["/messaging/messagingdashboard"]);
    };
    MessagingComponent.prototype.ngOnDestroy = function () {
        console.log("msging desroyyed");
        clearInterval(this.intervalid);
    };
    MessagingComponent.prototype.getjustoutbox = function () {
        var _this = this;
        this.spinner = true;
        this.messagingService
            .getalloutboxquickcount(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.outboxquick = data.count;
            }
            _this.messagingService
                .getalloutboxbulkcount(_this.authService.getSavedEmail())
                .subscribe(function (data) {
                if (data.success) {
                    _this.outboxbulk = data.count;
                }
                _this.messagingService
                    .getalloutboxdigitalcount(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.outboxdigital = data.count;
                    }
                    _this.totalOutbox =
                        _this.outboxquick + _this.outboxbulk + _this.outboxdigital;
                    _this.spinner = false;
                });
            });
        });
    };
    MessagingComponent.prototype.gettotaloutbox = function () {
        var _this = this;
        this.spinner = true;
        this.messagingService
            .getalloutboxquickcount(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.outboxquick = data.count;
            }
            // priority
            _this.messagingService
                .getallprioutboxquickcount(_this.authService.getSavedEmail())
                .subscribe(function (data) {
                if (data.success) {
                    _this.totalPriOutbox = data.count;
                }
                _this.messagingService
                    .getalloutboxbulkcount(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.outboxbulk = data.count;
                    }
                    _this.messagingService
                        .getalloutboxdigitalcount(_this.authService.getSavedEmail())
                        .subscribe(function (data) {
                        if (data.success) {
                            _this.outboxdigital = data.count;
                        }
                        _this.totalOutbox =
                            _this.outboxquick + _this.outboxbulk + _this.outboxdigital;
                        _this.spinner = false;
                    });
                });
            });
        });
    };
    MessagingComponent.prototype.composeClick = function () {
        console.log("Compose clicked");
    };
    MessagingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-messaging",
            template: __webpack_require__(1093),
            styles: [__webpack_require__(1024)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__["a" /* MessagingService */]) === 'function' && _c) || Object])
    ], MessagingComponent);
    return MessagingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/messaging.component.js.map

/***/ }),
/* 724 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingdashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagingdashboardComponent = (function () {
    function MessagingdashboardComponent(auth, msgService) {
        this.auth = auth;
        this.msgService = msgService;
        // Doughnut
        // public doughnutChartLabels:string[] = [];
        // public doughnutChartData:number[] = [];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLabels = ['Quick', 'Bulk', 'Drip', 'WhatsApp'];
        this.doughnutChartData = [];
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        this.barChartLabels = ['Quick', 'Bulk', 'Drip', 'WhatsApp'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [];
        this.quickArr = [];
        this.digitalArr = [];
        this.bulkArr = [];
        this.dripArr = [];
    }
    MessagingdashboardComponent.prototype.ngOnInit = function () {
        this.geteverythingnew(this.auth.getSavedEmail());
    };
    MessagingdashboardComponent.prototype.geteverythingnew = function (email) {
        var _this = this;
        this.quick = 0;
        this.digital = 0;
        this.bulk = 0;
        this.drip = 0;
        this.quickArr = [];
        this.bulkArr = [];
        this.dripArr = [];
        this.digitalArr = [];
        this.doughnutChartData = [];
        this.msgService.getalltotalquickcount(email).subscribe(function (data) {
            _this.quick = data.count;
            _this.msgService.getalltotalbulkcount(email).subscribe(function (data) {
                _this.bulk = data.count;
                _this.msgService.getalltotaldripcount(email).subscribe(function (data) {
                    _this.drip = data.count;
                    _this.msgService.getalltotaldigitalcount(email).subscribe(function (data) {
                        _this.digital = data.count;
                        _this.barChartData.push({ data: [_this.quick, _this.bulk, _this.drip, _this.digital], label: "" });
                        _this.doughnutChartData.push(_this.quick, _this.bulk, _this.drip, _this.digital);
                    });
                });
            });
        });
    };
    MessagingdashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messagingdashboard',
            template: __webpack_require__(1094),
            styles: [__webpack_require__(1025)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object])
    ], MessagingdashboardComponent);
    return MessagingdashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/messagingdashboard.component.js.map

/***/ }),
/* 725 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.messagingclicked = false;
        this.notificationclicked = false;
        this.composeclicked = false;
        this.hybridclicked = false;
        this.addressbookclicked = false;
        this.trackerclicked = false;
        this.settingsclicked = false;
        this.masterclicked = false;
        //this.loggedIn = false;
        if (localStorage.getItem("masterclicked")) {
            this.masterclicked = 'true' == localStorage.getItem("masterclicked").toString().trim();
        }
        if (localStorage.getItem("messagingclicked")) {
            this.messagingclicked = 'true' == localStorage.getItem("messagingclicked").toString().trim();
        }
        if (localStorage.getItem("composeclicked")) {
            this.composeclicked = 'true' == localStorage.getItem("composeclicked").toString().trim();
        }
        if (localStorage.getItem("notificationclicked")) {
            this.notificationclicked = 'true' == localStorage.getItem("notificationclicked").toString().trim();
        }
        if (localStorage.getItem("hybridclicked")) {
            this.hybridclicked = 'true' == localStorage.getItem("hybridclicked").toString().trim();
        }
        if (localStorage.getItem("addressbookclicked")) {
            this.addressbookclicked = 'true' == localStorage.getItem("addressbookclicked").toString().trim();
        }
        if (localStorage.getItem("trackerclicked")) {
            this.trackerclicked = 'true' == localStorage.getItem("trackerclicked").toString().trim();
        }
        if (localStorage.getItem("settingsclicked")) {
            this.settingsclicked = 'true' == localStorage.getItem("settingsclicked").toString().trim();
        }
    }
    NavbarComponent.prototype.onmessagingclicked = function () {
        this.messagingclicked = !this.messagingclicked;
        localStorage.setItem("messagingclicked", this.messagingclicked + "");
    };
    NavbarComponent.prototype.oncomposeclicked = function () {
        this.composeclicked = !this.composeclicked;
        localStorage.setItem("composeclicked", this.composeclicked + "");
    };
    NavbarComponent.prototype.onnotificationclicked = function () {
        this.notificationclicked = !this.notificationclicked;
        localStorage.setItem("notificationclicked", this.notificationclicked + "");
    };
    NavbarComponent.prototype.onhybridclicked = function () {
        this.hybridclicked = !this.hybridclicked;
        localStorage.setItem("hybridclicked", this.hybridclicked + "");
    };
    NavbarComponent.prototype.onaddressbookclicked = function () {
        this.addressbookclicked = !this.addressbookclicked;
        localStorage.setItem("addressbookclicked", this.addressbookclicked + "");
    };
    NavbarComponent.prototype.ontrackerclicked = function () {
        this.trackerclicked = !this.trackerclicked;
        localStorage.setItem("trackerclicked", this.trackerclicked + "");
    };
    NavbarComponent.prototype.onsettingsclicked = function () {
        this.settingsclicked = !this.settingsclicked;
        localStorage.setItem("settingsclicked", this.settingsclicked + "");
    };
    NavbarComponent.prototype.onmasterclicked = function () {
        this.masterclicked = !this.masterclicked;
        localStorage.setItem("masterclicked", this.masterclicked + "");
    };
    NavbarComponent.prototype.setRights = function () {
        var userStr = localStorage.getItem('user');
        var userObj = JSON.parse(userStr);
        var rights = userObj.rights;
        if (userObj.type == "sa") {
            this.master = true;
            return false;
        }
        else {
            this.master = false;
        }
        if (userObj.type == "lea") {
            this.lea = true;
            return false;
        }
        else {
            this.lea = false;
        }
        if (rights.includes('messaging')) {
            this.messaging = true;
        }
        if (rights.includes('digital')) {
            this.digital = true;
        }
        if (rights.includes('dashboard')) {
            this.dashboard = true;
        }
        if (rights.includes('notification')) {
            this.notification = true;
        }
        if (rights.includes('hybrid')) {
            this.hybrid = true;
        }
        if (rights.includes('contacts')) {
            this.contacts = true;
        }
        if (rights.includes('reporting')) {
            this.reporting = true;
        }
        if (rights.includes('tracker')) {
            this.tracker = true;
        }
        if (rights.includes('pricing')) {
            this.pricing = true;
        }
        if (rights.includes('settings')) {
            this.settings = true;
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.setRights();
        // this.authService.getRights().subscribe(data =>{
        //   console.log(data);
        // });
        if (localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn') == 'true') {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(1095),
            styles: [__webpack_require__(1026)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),
/* 726 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcontactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewcontactComponent = (function () {
    function NewcontactComponent(authService, contactService) {
        this.authService = authService;
        this.contactService = contactService;
    }
    NewcontactComponent.prototype.ngOnInit = function () {
    };
    NewcontactComponent.prototype.registercontact = function () {
        var newContact = {
            fullname: this.fullname,
            phone: this.phone,
            token: this.token,
            description: this.description,
            email: this.email,
            gender: this.gender,
            createdby: this.authService.getSavedEmail()
        };
        this.contactService.registercontact(newContact).subscribe(function (data) {
            if (data.success) {
                alert("New contact addded");
            }
            else {
                alert("There was an error adding a new contact.");
            }
        });
    };
    NewcontactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newcontact',
            template: __webpack_require__(1096),
            styles: [__webpack_require__(1027)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === 'function' && _b) || Object])
    ], NewcontactComponent);
    return NewcontactComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/newcontact.component.js.map

/***/ }),
/* 727 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(1097),
            styles: [__webpack_require__(1028)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/notification.component.js.map

/***/ }),
/* 728 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationreportedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationreportedComponent = (function () {
    function NotificationreportedComponent(route, router, authService, notificationService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.notificationArr = [];
    }
    NotificationreportedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.notificationId = params['notificationid'];
            console.log(_this.notificationId);
            _this.getallreported();
        });
    };
    NotificationreportedComponent.prototype.getallreported = function () {
        var _this = this;
        this.notificationService.getAllnotificationreported(this.notificationId).subscribe(function (data) {
            _this.notificationArr = data[0].payload;
        });
    };
    NotificationreportedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notificationreported',
            template: __webpack_require__(1098),
            styles: [__webpack_require__(1029)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === 'function' && _d) || Object])
    ], NotificationreportedComponent);
    return NotificationreportedComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/notificationreported.component.js.map

/***/ }),
/* 729 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutboxComponent = (function () {
    function OutboxComponent(messagingService, authService) {
        this.messagingService = messagingService;
        this.authService = authService;
        this.mainArray = [];
        this.quickarr = [];
        this.bulkarr = [];
        this.digitalarr = [];
        this._date = new Date();
        this.spinner = true;
        this.localemail = '';
        this.sent = false;
        this.lineChartData = [
            { data: [0], label: 'Jazz' },
            { data: [0], label: 'Zong' },
            { data: [0], label: 'Warid' },
            { data: [0], label: 'Ufone' },
            { data: [0], label: 'Telenor' }
        ];
        // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April'];
        this.lineChartLabels = [new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })];
        this.lineChartColors = [
            {
                // red
                backgroundColor: "rgba(210,48,48,0.00)",
                borderColor: "rgba(255,0,0,0.8)",
                pointBackgroundColor: "rgba(210,48,48,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(210,48,48,0.05)"
            },
            {
                // green
                backgroundColor: "rgba(77,83,96,0.00)",
                borderColor: "rgba(41,242,41,0.8)",
                pointBackgroundColor: "rgba(41,242,41,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(41,242,41,0.05)"
            },
            {
                // navy
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(0,0,128,1)",
                pointBackgroundColor: "rgba(0,0,128,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0,0,128,0.8)"
            },
            {
                // orange
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(255,165,0,1)",
                pointBackgroundColor: "rgba(255,165,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,165,0,0.8)"
            },
            {
                // orange
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(46,197,255,1)",
                pointBackgroundColor: "rgba(46,197,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(46,197,255,0.8)"
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = "line";
        this.options = {
            animation: {
                duration: 0,
                easing: 'linear'
            }
        };
        this.outboxquick = 0;
        this.outboxbulk = 0;
        this.outboxdigital = 0;
        this.q = [];
        this.b = [];
        this.d = [];
        this.l = [];
    }
    OutboxComponent.prototype.reloadChart = function () {
        if (this.chart && this.chart.chart && this.chart.chart.config) {
            //this.chart.chart.destroy();
            //  this.chart.options = this.options;
            //  this.chart.chart = 0;
            //  this.chart.datasets = this.lineChartData;
            //  this.chart.labels = this.lineChartLabels;
            //this.chart.chart.update();
            //this.chart.chart.config.data.labels = this.lineChartLabels;
            //this.chart.chart.config.data.datasets = this.lineChartData;
            this.chart.chart.update();
        }
    };
    OutboxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.localemail = this.authService.getSavedEmail();
        //console.log(AES.decrypt('U2FsdGVkX1+22scdPaZqa42X/QEVMK0ChS+9qemeqrdtpo0BRnzMH7+6nRXPsCqCdI3DXOgGf1tpUxWJNNJwRQ==', 'a@a.com').toString(enc.Utf8));
        //console.log(this.lineChartData, this.lineChartLabels);
        //this.lineChartLabels.push(Date.now());
        this.getoutbox();
        this.gettotaloutbox();
        this.intervalid = setInterval(function () {
            _this.getoutbox();
            _this.gettotaloutbox();
        }, 1000 * 5);
    };
    OutboxComponent.prototype.ngOnInit = function () {
        // this.lineChartData = [
        //   {data:[0], label:'Quick'},
        //   {data:[0], label:'Bulk'},
        //   {data:[0], label:'Digital'}
        // ];
        // console.log(this.lineChartData, this.lineChartLabels);
        // this.lineChartLabels.push(Date.now());
        // this.getoutbox();
        // this.gettotaloutbox();
        // this.intervalid = setInterval(() => {
        //   this.getoutbox();
        //   this.gettotaloutbox();
        // }, 1000 * 5);
    };
    OutboxComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalid);
    };
    OutboxComponent.prototype.getemail = function () {
        alert(this.authService.getSavedEmail());
    };
    OutboxComponent.prototype.getoutbox = function () {
        var _this = this;
        this.sent = false;
        this.spinner = true;
        this.messagingService
            .getalloutboxquicklimit(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.quickarr = [];
                data.data.forEach(function (element) {
                    if (_this.localemail != '') {
                        element.msg = element.encrypted == true ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                    }
                });
                _this.quickarr = data.data;
                // console.log(this.quickarr);
                _this.messagingService
                    .getalloutboxbulklimit(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.bulkarr = [];
                        data.data.forEach(function (element) {
                            if (_this.localemail != '') {
                                element.msg = element.encrypted == true ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                            }
                        });
                        _this.bulkarr = data.data;
                        // console.log(this.bulkarr);
                        _this.messagingService
                            .getalloutboxdigitallimit(_this.authService.getSavedEmail())
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.digitalarr = [];
                                _this.digitalarr = data.data;
                                // console.log(this.digitalarr);
                                _this.spinner = false;
                            }
                        });
                    }
                });
            }
        });
    };
    // lineChart
    // public lineChartData:Array<any> = [
    //   {data: [85,60,85,12], label: 'Quick'},
    //   {data: [90,80,85,88], label: 'Bulk'},
    //   {data: [18,23,1,7], label: 'WhatsApp'}
    // ];
    OutboxComponent.prototype.gettotaloutbox = function () {
        var _this = this;
        if (this.lineChartLabels.length == 10) {
            this.lineChartData[0].data.splice(0, 1);
            this.lineChartData[1].data.splice(0, 1);
            this.lineChartData[2].data.splice(0, 1);
            this.lineChartData[3].data.splice(0, 1);
            this.lineChartData[4].data.splice(0, 1);
            this.lineChartLabels.splice(0, 1);
        }
        this.messagingService
            .getalloutboxquickjazzcount(this.authService.getSavedEmail())
            .subscribe(function (data1) {
            if (data1.success) {
                _this.outboxquick = data1.count;
                _this.q.push(data1.count);
                // console.log('jazz',data1.count);
                _this.messagingService.getalloutboxbulkjazzcount(_this.authService.getSavedEmail())
                    .subscribe(function (data2) {
                    _this.lineChartData[0].data[_this.lineChartData[0].data.length] = data1.count + data2.count;
                });
            }
            _this.messagingService
                .getalloutboxquickzongcount(_this.authService.getSavedEmail())
                .subscribe(function (data) {
                if (data.success) {
                    _this.outboxbulk = data.count;
                    _this.b.push(data.count);
                    // console.log('zong',data.count);
                    _this.messagingService.getalloutboxbulkzongcount(_this.authService.getSavedEmail())
                        .subscribe(function (data2) {
                        _this.lineChartData[1].data[_this.lineChartData[1].data.length] = data.count + data2.count;
                    });
                }
                _this.messagingService
                    .getalloutboxquickwaridcount(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.outboxdigital = data.count;
                        _this.d.push(data.count);
                        // console.log('warid',data.count);
                        _this.messagingService.getalloutboxbulkwaridcount(_this.authService.getSavedEmail())
                            .subscribe(function (data2) {
                            _this.lineChartData[2].data[_this.lineChartData[2].data.length] = data.count + data2.count;
                        });
                        _this.messagingService.getalloutboxquickufonecount(_this.authService.getSavedEmail())
                            .subscribe(function (data) {
                            // console.log('ufone',data1.count);
                            _this.messagingService.getalloutboxbulkufonecount(_this.authService.getSavedEmail())
                                .subscribe(function (data2) {
                                _this.lineChartData[3].data[_this.lineChartData[3].data.length] = data.count + data2.count;
                            });
                            _this.messagingService.getalloutboxquicktelenorcount(_this.authService.getSavedEmail())
                                .subscribe(function (data) {
                                // console.log('tp',data1.count);
                                _this.messagingService.getalloutboxbulktelenorcount(_this.authService.getSavedEmail())
                                    .subscribe(function (data2) {
                                    _this.lineChartData[4].data[_this.lineChartData[4].data.length] = data.count + data2.count;
                                    _this.lineChartLabels[_this.lineChartLabels.length] = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
                                    _this.reloadChart();
                                });
                            });
                        });
                    }
                });
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"]) === 'function' && _a) || Object)
    ], OutboxComponent.prototype, "chart", void 0);
    OutboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-outbox",
            template: __webpack_require__(1099),
            styles: [__webpack_require__(1030)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], OutboxComponent);
    return OutboxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/outbox.component.js.map

/***/ }),
/* 730 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(1100),
            styles: [__webpack_require__(1031)]
        }), 
        __metadata('design:paramtypes', [])
    ], PricingComponent);
    return PricingComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/pricing.component.js.map

/***/ }),
/* 731 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioutboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrioutboxComponent = (function () {
    function PrioutboxComponent(messagingService, authService) {
        this.messagingService = messagingService;
        this.authService = authService;
        this.mainArray = [];
        this.quickarr = [];
        this.bulkarr = [];
        this.digitalarr = [];
        this._date = new Date();
        this.spinner = true;
        this.localemail = '';
        this.sent = false;
        this.lineChartData = [
            { data: [0], label: 'Jazz' },
            { data: [0], label: 'Zong' },
            { data: [0], label: 'Warid' },
            { data: [0], label: 'Ufone' },
            { data: [0], label: 'Telenor' }
        ];
        // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April'];
        this.lineChartLabels = [new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })];
        this.lineChartColors = [
            {
                // red
                backgroundColor: "rgba(210,48,48,0.00)",
                borderColor: "rgba(255,0,0,0.8)",
                pointBackgroundColor: "rgba(210,48,48,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(210,48,48,0.05)"
            },
            {
                // green
                backgroundColor: "rgba(77,83,96,0.00)",
                borderColor: "rgba(41,242,41,0.8)",
                pointBackgroundColor: "rgba(41,242,41,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(41,242,41,0.05)"
            },
            {
                // navy
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(0,0,128,1)",
                pointBackgroundColor: "rgba(0,0,128,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0,0,128,0.8)"
            },
            {
                // orange
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(255,165,0,1)",
                pointBackgroundColor: "rgba(255,165,0,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,165,0,0.8)"
            },
            {
                // orange
                backgroundColor: "rgba(148,159,177,0.00)",
                borderColor: "rgba(46,197,255,1)",
                pointBackgroundColor: "rgba(46,197,255,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(46,197,255,0.8)"
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = "line";
        this.options = {
            animation: {
                duration: 0,
                easing: 'linear'
            }
        };
        this.outboxquick = 0;
        this.outboxbulk = 0;
        this.outboxdigital = 0;
        this.q = [];
        this.b = [];
        this.d = [];
        this.l = [];
    }
    PrioutboxComponent.prototype.reloadChart = function () {
        if (this.chart && this.chart.chart && this.chart.chart.config) {
            //this.chart.chart.destroy();
            //  this.chart.options = this.options;
            //  this.chart.chart = 0;
            //  this.chart.datasets = this.lineChartData;
            //  this.chart.labels = this.lineChartLabels;
            //this.chart.chart.update();
            //this.chart.chart.config.data.labels = this.lineChartLabels;
            //this.chart.chart.config.data.datasets = this.lineChartData;
            this.chart.chart.update();
        }
    };
    PrioutboxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.localemail = this.authService.getSavedEmail();
        //console.log(AES.decrypt('U2FsdGVkX1+22scdPaZqa42X/QEVMK0ChS+9qemeqrdtpo0BRnzMH7+6nRXPsCqCdI3DXOgGf1tpUxWJNNJwRQ==', 'a@a.com').toString(enc.Utf8));
        //console.log(this.lineChartData, this.lineChartLabels);
        //this.lineChartLabels.push(Date.now());
        this.getoutbox();
        this.gettotaloutbox();
        this.intervalid = setInterval(function () {
            _this.getoutbox();
            _this.gettotaloutbox();
        }, 1000 * 5);
    };
    PrioutboxComponent.prototype.ngOnInit = function () {
        // this.lineChartData = [
        //   {data:[0], label:'Quick'},
        //   {data:[0], label:'Bulk'},
        //   {data:[0], label:'Digital'}
        // ];
        // console.log(this.lineChartData, this.lineChartLabels);
        // this.lineChartLabels.push(Date.now());
        // this.getoutbox();
        // this.gettotaloutbox();
        // this.intervalid = setInterval(() => {
        //   this.getoutbox();
        //   this.gettotaloutbox();
        // }, 1000 * 5);
    };
    PrioutboxComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalid);
    };
    PrioutboxComponent.prototype.getemail = function () {
        alert(this.authService.getSavedEmail());
    };
    PrioutboxComponent.prototype.getoutbox = function () {
        var _this = this;
        this.sent = false;
        this.spinner = true;
        this.messagingService
            .getallprioutboxquicklimit(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.quickarr = [];
                data.data.forEach(function (element) {
                    if (_this.localemail != '') {
                        element.msg = element.encrypted == true ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                    }
                });
                _this.quickarr = data.data;
                _this.spinner = false;
            }
        });
    };
    // lineChart
    // public lineChartData:Array<any> = [
    //   {data: [85,60,85,12], label: 'Quick'},
    //   {data: [90,80,85,88], label: 'Bulk'},
    //   {data: [18,23,1,7], label: 'WhatsApp'}
    // ];
    PrioutboxComponent.prototype.gettotaloutbox = function () {
        var _this = this;
        if (this.lineChartLabels.length == 10) {
            this.lineChartData[0].data.splice(0, 1);
            this.lineChartData[1].data.splice(0, 1);
            this.lineChartData[2].data.splice(0, 1);
            this.lineChartData[3].data.splice(0, 1);
            this.lineChartData[4].data.splice(0, 1);
            this.lineChartLabels.splice(0, 1);
        }
        this.messagingService
            .getallprioutboxquickjazzcount(this.authService.getSavedEmail())
            .subscribe(function (data1) {
            if (data1.success) {
                _this.outboxquick = data1.count;
                _this.q.push(data1.count);
                // console.log('jazz',data1.count);
                _this.messagingService.getallprioutboxbulkjazzcount(_this.authService.getSavedEmail())
                    .subscribe(function (data2) {
                    _this.lineChartData[0].data[_this.lineChartData[0].data.length] = data1.count + data2.count;
                });
            }
            _this.messagingService
                .getallprioutboxquickzongcount(_this.authService.getSavedEmail())
                .subscribe(function (data) {
                if (data.success) {
                    _this.outboxbulk = data.count;
                    _this.b.push(data.count);
                    // console.log('zong',data.count);
                    _this.messagingService.getallprioutboxbulkzongcount(_this.authService.getSavedEmail())
                        .subscribe(function (data2) {
                        _this.lineChartData[1].data[_this.lineChartData[1].data.length] = data.count + data2.count;
                    });
                }
                _this.messagingService
                    .getallprioutboxquickwaridcount(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.outboxdigital = data.count;
                        _this.d.push(data.count);
                        // console.log('warid',data.count);
                        _this.messagingService.getallprioutboxbulkwaridcount(_this.authService.getSavedEmail())
                            .subscribe(function (data2) {
                            _this.lineChartData[2].data[_this.lineChartData[2].data.length] = data.count + data2.count;
                        });
                        _this.messagingService.getallprioutboxquickufonecount(_this.authService.getSavedEmail())
                            .subscribe(function (data) {
                            // console.log('ufone',data1.count);
                            _this.messagingService.getallprioutboxbulkufonecount(_this.authService.getSavedEmail())
                                .subscribe(function (data2) {
                                _this.lineChartData[3].data[_this.lineChartData[3].data.length] = data.count + data2.count;
                            });
                            _this.messagingService.getallprioutboxquicktelenorcount(_this.authService.getSavedEmail())
                                .subscribe(function (data) {
                                // console.log('tp',data1.count);
                                _this.messagingService.getallprioutboxbulktelenorcount(_this.authService.getSavedEmail())
                                    .subscribe(function (data2) {
                                    _this.lineChartData[4].data[_this.lineChartData[4].data.length] = data.count + data2.count;
                                    _this.lineChartLabels[_this.lineChartLabels.length] = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
                                    _this.reloadChart();
                                });
                            });
                        });
                    }
                });
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__node_modules_ng2_charts__["BaseChartDirective"]) === 'function' && _a) || Object)
    ], PrioutboxComponent.prototype, "chart", void 0);
    PrioutboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-prioutbox",
            template: __webpack_require__(1101),
            styles: [__webpack_require__(1032)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], PrioutboxComponent);
    return PrioutboxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/prioutbox.component.js.map

/***/ }),
/* 732 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the user id
        var ide = localStorage.getItem('user');
        this.user = JSON.parse(ide);
        //get the user info
        this.authService.getProfile().subscribe(function (data) {
            // this.user = data.user;
            //console.log(data);
            _this.fullname = data.fullname;
            _this.phone = data.phone;
            _this.email = data.email;
            //console.log(this.user);
        }, function (err) {
            //alert('Token Expired!');
            console.log(err);
            _this.authService.onLogout();
            _this.router.navigate(['/home/login']);
            return false;
        });
    };
    ProfileComponent.prototype.onProfileUpdate = function () {
        var _this = this;
        var user = {
            id: this.user.id,
            fullname: this.fullname,
            phone: this.phone,
            email: this.email,
            password: this.password
        };
        this.authService.updateProfile(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                alert(data.msg + " Please re-login.");
                _this.authService.onLogout();
                _this.router.navigate(['/home/login']);
            }
            else {
                alert(data.msg);
            }
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(1102),
            styles: [__webpack_require__(1033)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),
/* 733 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mask_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuickmessageComponent = (function () {
    function QuickmessageComponent(messagingService, maskService, authService, router) {
        this.messagingService = messagingService;
        this.maskService = maskService;
        this.authService = authService;
        this.router = router;
        this.mobilenos = "";
        this.msg = "";
        this.smallmessage = "";
        this.verified = false;
        this.showspinner = false;
        this.mobilenosarr = [];
        this.sent = false;
        this.masksarr = [];
        this.templateArr = [];
    }
    QuickmessageComponent.prototype.pc = function () {
        this.verified = false;
        //this.verifybalance(this.account,this.password,this.mobilenosarr.length);
    };
    QuickmessageComponent.prototype.getallmasks = function () {
        var _this = this;
        this.maskService.getactivatedmasks(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.masksarr = data.data;
            }
        });
    };
    QuickmessageComponent.prototype.verifybalance = function () {
        //this.mobilenosarr = this.mobilenos.trim().split(',');
        var _this = this;
        if (this.mobilenos == '') {
            alert("Enter mobile numbers first!");
            return false;
        }
        this.mobilenosarr = this.mobilenos.trim().split(',');
        this.showspinner = true;
        var creds = {
            loginId: this.account,
            loginPassword: this.password
        };
        this.messagingService.getAccountSummary(creds).subscribe(function (data) {
            console.log(data, _this.verified);
            if (data.success) {
                // verify the condition
                //console.log(data.data.Total_Balance);
                if (_this.mobilenosarr.length > parseInt(data.data.Total_Balance)) {
                    //console.log("return false");
                    //alert("Unsufficient Balance");
                    _this.smallmessage = "Insufficient Balance";
                    _this.verified = false;
                }
                else {
                    //console.log("return true");
                    _this.verified = true;
                    _this.smallmessage = "";
                }
            }
            else {
                _this.smallmessage = "Invalid username/password";
                _this.verified = false;
            }
            _this.showspinner = false;
            //console.log(data);
        });
    };
    QuickmessageComponent.prototype.languagechange = function (ev) {
    };
    QuickmessageComponent.prototype.maskingchange = function (ev) {
    };
    QuickmessageComponent.prototype.templatechange = function (ev) {
        this.msg = ev.target.value;
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    QuickmessageComponent.prototype.messagechange = function (ev) {
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    QuickmessageComponent.prototype.ngOnInit = function () {
        this.getallmasks();
        this.getallstatictemplates();
        this.msgchars = this.msg.length;
        this.noofmsgs = Math.ceil(this.msgchars / 160);
    };
    QuickmessageComponent.prototype.registerquick = function () {
        var _this = this;
        this.sent = true;
        this.mobilenosarr = this.mobilenos.trim().split(',');
        if (this.mobilenosarr.length > 11) {
            alert("Mobile numbers must be less than 11.");
            this.sent = false;
        }
        else {
            var quickObj = {
                name: this.name,
                language: this.language,
                masking: this.masking,
                mobilenos: this.mobilenosarr,
                msg: this.msg,
                msgchars: this.msgchars,
                noofmsgs: this.noofmsgs,
                preference: this.preference,
                createdby: this.authService.getSavedEmail(),
                account: this.account,
                password: this.password
            };
            this.messagingService.registerquick(quickObj).subscribe(function (data) {
                //console.log(data);
                if (data.success) {
                    alert("Quick Message(s) : Sent");
                    location.reload(true);
                }
                else {
                    alert(data.error);
                }
                _this.sent = false;
            });
        }
    };
    QuickmessageComponent.prototype.getallstatictemplates = function () {
        var _this = this;
        this.messagingService.getallstatictemplates(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.templateArr = data.data;
            }
            else {
                console.log("No Templates Found");
            }
        });
    };
    QuickmessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quickmessage',
            template: __webpack_require__(1103),
            styles: [__webpack_require__(1034)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_mask_service__["a" /* MaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], QuickmessageComponent);
    return QuickmessageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/quickmessage.component.js.map

/***/ }),
/* 734 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.type = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        // rights:['dashboard','messaging','notification','hybrid','reporting','contacts','tracker','pricing','settings'],
        if (this.type == '') {
            return false;
        }
        var user = {
            fullname: this.fullname,
            phone: this.phone,
            email: this.email,
            password: this.password,
            rights: ['contacts', 'tracker', 'pricing'],
            isparent: true,
            isdelegate: false,
            parent: null,
            parents: [],
            type: this.type
        };
        if (!this.validateService.validateRegister(user)) {
            console.log("Please fill in all fields.");
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            console.log("Please use a valid email.");
            return false;
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                //this.flashMessagesService.show('You are now registered. You can now login.', { cssClass: 'alert-success', timeout: 2000 });
                alert("You are now registered. You can now login.");
                console.log("You are now registered. You can now login.");
                _this.router.navigate(['/home/login']);
            }
            else {
                //this.flashMessagesService.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 2000 });
                alert("Something went wrong. Email might already be registered");
                console.log("Something went wrong");
                _this.router.navigate(['/home/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(1104),
            styles: [__webpack_require__(1035)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/register.component.js.map

/***/ }),
/* 735 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportingComponent = (function () {
    function ReportingComponent(auth, msgService, _csvService) {
        this.auth = auth;
        this.msgService = msgService;
        this._csvService = _csvService;
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: "dd-MM-yyyy HH:mm:ss",
            defaultOpen: false,
            closeOnSelect: true
        };
        this.selfemail = "";
        this.notfound = false;
        this.spinner = false;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ["Timeline"];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [];
        this.d = new Date();
        this.downloadable = [];
        this.datefrom = this.d.getFullYear() +
            "-" +
            ("0" + (this.d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this.d.getDate()).slice(-2);
        this.dateto = this.d.getFullYear() +
            "-" +
            ("0" + (this.d.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + this.d.getDate()).slice(-2);
        this.localemail = "";
        this._MS_PER_DAY = 1000 * 60 * 60 * 24;
        this.ops = [];
        this.childsArr = [];
        this.variableemail = "";
    }
    // events
    ReportingComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ReportingComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ReportingComponent.prototype.ngOnInit = function () {
        this.localemail = this.auth.getSavedEmail();
        this.getallchilds();
    };
    ReportingComponent.prototype.opchange = function (ev) {
        this.operation = ev.target.value;
        console.log(this.operation);
        if (this.operation == "quick") {
        }
        else if (this.operation == "bulk") {
        }
        else if (this.operation == "drip") {
        }
    };
    ReportingComponent.prototype.opnamechangequick = function (ev) {
        this.operationname = ev.target.value;
    };
    ReportingComponent.prototype.opnamechangeother = function (ev) {
        this.operationname = ev.target.value;
    };
    // a and b are javascript Date objects
    ReportingComponent.prototype.dateDiffInDays = function (a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
    };
    ReportingComponent.prototype.report = function () {
        var _this = this;
        if (this.variableemail == "empty" || this.variableemail == "") {
            alert("Please Select an Account");
            return false;
        }
        this.notfound = false;
        this.barChartData = [];
        this.downloadable = [];
        this.ops = [];
        if (this.operation == "digital") {
            this.spinner = true;
            this.barChartLabels = ["Timeline"];
            //this.ops = [];
            var queryobj = {
                email: this.variableemail,
                datefrom: this.datefrom,
                dateto: this.dateto
            };
            this.msgService
                .getalldigital(JSON.stringify(queryobj))
                .subscribe(function (data) {
                console.log(data);
                if (data.data.length > 0) {
                    // //console.log(data.data);
                    // data.data.forEach(element => {
                    //   if (this.localemail != "") {
                    //     element.msg = AES.decrypt(
                    //       element.msg,
                    //       this.localemail.toString()
                    //     ).toString(enc.Utf8);
                    //   }
                    // });
                    _this.ops = data.data;
                    var countoutbox = 0;
                    var countsent = _this.ops.length;
                    var successful = 0;
                    _this.ops.forEach(function (element) {
                        if (element.status == "0") {
                            countoutbox++;
                        }
                        else {
                            successful++;
                        }
                    });
                    _this.barChartData.push({ data: [countsent], label: "Sent" });
                    _this.barChartData.push({ data: [countoutbox], label: "Outbox" });
                    _this.barChartData.push({ data: [successful], label: "Successful" });
                    _this.downloadable = _this.ops;
                }
                else {
                    console.log("No Digital Messages");
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
        else if (this.operation == "quick") {
            this.barChartLabels = [
                "Total",
                "Jazz",
                "Zong",
                "Warid",
                "Ufone",
                "Telenor"
            ];
            this.spinner = true;
            //this.ops = [];
            var queryobj = {
                email: this.variableemail,
                datefrom: this.datefrom,
                dateto: this.dateto
            };
            this.msgService.getallquick(JSON.stringify(queryobj)).subscribe(function (data) {
                //console.log(data);
                var feed = {
                    joutbox: 0,
                    jsent: 0,
                    jsuccessful: 0,
                    zoutbox: 0,
                    zsent: 0,
                    zsuccessful: 0,
                    woutbox: 0,
                    wsent: 0,
                    wsuccessful: 0,
                    uoutbox: 0,
                    usent: 0,
                    usuccessful: 0,
                    toutbox: 0,
                    tsent: 0,
                    tsuccessful: 0
                };
                if (data.data.length > 0) {
                    data.data.forEach(function (element) {
                        if (_this.localemail != "") {
                            if (element.telco == "jazz") {
                                feed.jsent++;
                                if (element.sentid == "0") {
                                    feed.joutbox++;
                                }
                                else {
                                    feed.jsuccessful++;
                                }
                            }
                            else if (element.telco == "zong") {
                                feed.zsent++;
                                if (element.sentid == "0") {
                                    feed.zoutbox++;
                                }
                                else {
                                    feed.zsuccessful++;
                                }
                            }
                            else if (element.telco == "warid") {
                                feed.wsent++;
                                if (element.sentid == "0") {
                                    feed.woutbox++;
                                }
                                else {
                                    feed.wsuccessful++;
                                }
                            }
                            else if (element.telco == "ufone") {
                                feed.usent++;
                                if (element.sentid == "0") {
                                    feed.uoutbox++;
                                }
                                else {
                                    feed.usuccessful++;
                                }
                            }
                            else if (element.telco == "telenor") {
                                feed.tsent++;
                                if (element.sentid == "0") {
                                    feed.toutbox++;
                                }
                                else {
                                    feed.tsuccessful++;
                                }
                            }
                            element.msg = element.encrypted ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                        }
                    });
                    //console.log(data.data);
                    _this.ops = data.data;
                    var countoutbox = 0;
                    var countsent = _this.ops.length;
                    var successful = 0;
                    _this.ops.forEach(function (element) {
                        if (element.sentid == "0") {
                            countoutbox++;
                        }
                        else {
                            successful++;
                        }
                    });
                    _this.barChartData.push({
                        data: [
                            countsent,
                            feed.jsent,
                            feed.zsent,
                            feed.wsent,
                            feed.usent,
                            feed.tsent
                        ],
                        label: "Sent"
                    });
                    _this.barChartData.push({
                        data: [
                            countoutbox,
                            feed.joutbox,
                            feed.zoutbox,
                            feed.woutbox,
                            feed.uoutbox,
                            feed.toutbox
                        ],
                        label: "Outbox"
                    });
                    _this.barChartData.push({
                        data: [
                            successful,
                            feed.jsuccessful,
                            feed.zsuccessful,
                            feed.wsuccessful,
                            feed.usuccessful,
                            feed.tsuccessful
                        ],
                        label: "Successful"
                    });
                    _this.downloadable = _this.ops;
                }
                else {
                    console.log("No Quick Messages");
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
        else if (this.operation == "bulk") {
            this.barChartLabels = [
                "Total",
                "Jazz",
                "Zong",
                "Warid",
                "Ufone",
                "Telenor"
            ];
            this.spinner = true;
            var queryobj = {
                email: this.variableemail,
                datefrom: this.datefrom,
                dateto: this.dateto
            };
            this.msgService.getallbulk(JSON.stringify(queryobj)).subscribe(function (data) {
                console.log(data);
                var feed = {
                    joutbox: 0,
                    jsent: 0,
                    jsuccessful: 0,
                    zoutbox: 0,
                    zsent: 0,
                    zsuccessful: 0,
                    woutbox: 0,
                    wsent: 0,
                    wsuccessful: 0,
                    uoutbox: 0,
                    usent: 0,
                    usuccessful: 0,
                    toutbox: 0,
                    tsent: 0,
                    tsuccessful: 0
                };
                if (data.data.length > 0) {
                    //console.log(data.data);
                    data.data.forEach(function (element) {
                        if (_this.localemail != "") {
                            if (element.telco == "jazz") {
                                feed.jsent++;
                                if (element.sentid == "0") {
                                    feed.joutbox++;
                                }
                                else {
                                    feed.jsuccessful++;
                                }
                            }
                            else if (element.telco == "zong") {
                                feed.zsent++;
                                if (element.sentid == "0") {
                                    feed.zoutbox++;
                                }
                                else {
                                    feed.zsuccessful++;
                                }
                            }
                            else if (element.telco == "warid") {
                                feed.wsent++;
                                if (element.sentid == "0") {
                                    feed.woutbox++;
                                }
                                else {
                                    feed.wsuccessful++;
                                }
                            }
                            else if (element.telco == "ufone") {
                                feed.usent++;
                                if (element.sentid == "0") {
                                    feed.uoutbox++;
                                }
                                else {
                                    feed.usuccessful++;
                                }
                            }
                            else if (element.telco == "telenor") {
                                feed.tsent++;
                                if (element.sentid == "0") {
                                    feed.toutbox++;
                                }
                                else {
                                    feed.tsuccessful++;
                                }
                            }
                            element.msg = element.encrypted ? __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8) : element.msg;
                        }
                    });
                    _this.ops = data.data;
                    var countoutbox = 0;
                    var countsent = _this.ops.length;
                    var successful = 0;
                    _this.ops.forEach(function (element) {
                        if (element.sentid == "0") {
                            countoutbox++;
                        }
                        else {
                            successful++;
                        }
                    });
                    _this.barChartData.push({
                        data: [
                            countsent,
                            feed.jsent,
                            feed.zsent,
                            feed.wsent,
                            feed.usent,
                            feed.tsent
                        ],
                        label: "Sent"
                    });
                    _this.barChartData.push({
                        data: [
                            countoutbox,
                            feed.joutbox,
                            feed.zoutbox,
                            feed.woutbox,
                            feed.uoutbox,
                            feed.toutbox
                        ],
                        label: "Outbox"
                    });
                    _this.barChartData.push({
                        data: [
                            successful,
                            feed.jsuccessful,
                            feed.zsuccessful,
                            feed.wsuccessful,
                            feed.usuccessful,
                            feed.tsuccessful
                        ],
                        label: "Successful"
                    });
                    _this.downloadable = _this.ops;
                }
                else {
                    console.log("No Bulk Messages");
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
        else if (this.operation == "drip") {
            this.barChartLabels = ["Timeline"];
            this.spinner = true;
            this.msgService.getalldrip(this.variableemail).subscribe(function (data) {
                if (data.data.length > 0) {
                    _this.ops = data.data;
                    // console.log(this.dripArr.length);
                    var from = new Date(_this.datefrom.toString());
                    var to = new Date(_this.dateto.toString());
                    //console.log(this.dateDiffInDays(from, new Date(this.dateto.toString())),to,new Date(this.datefrom.toString()));
                    var driparr = [];
                    _this.barChartData = [];
                    _this.ops.forEach(function (element) {
                        var quickdate = new Date(element.created.toString());
                        var differencefrom = _this.dateDiffInDays(from, quickdate);
                        var differenceto = _this.dateDiffInDays(quickdate, to);
                        // console.log('from', datefrom);
                        // console.log('to', dateto);
                        if (differencefrom >= 0 && differenceto >= 0) {
                            driparr.push(element);
                        }
                    });
                    _this.barChartData.push({ data: [driparr.length], label: "Sent" });
                    _this.barChartData.push({ data: [0], label: "Outbox" });
                    _this.barChartData.push({
                        data: [driparr.length],
                        label: "Submitted to the system"
                    });
                    _this.downloadable = driparr;
                }
                else {
                    console.log("No Bulk Messages");
                    _this.notfound = true;
                }
                _this.spinner = false;
            });
        }
    };
    ReportingComponent.prototype.download = function () {
        this._csvService.download(this.downloadable, this.operation.toString());
    };
    ReportingComponent.prototype.getallchilds = function () {
        var _this = this;
        this.auth.getChildAccess(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                //console.log(data.data);
                _this.childsArr = data.data;
            }
            else {
                console.log("No Childs");
            }
        });
    };
    ReportingComponent.prototype.childchange = function (ev) {
        console.log(ev.target.value);
        this.variableemail = ev.target.value;
    };
    ReportingComponent.prototype.getallquick = function () {
        var _this = this;
        //this.ops = [];
        var queryobj = {
            email: this.auth.getSavedEmail(),
            datefrom: this.datefrom,
            dateto: this.dateto
        };
        this.msgService.getallquick(JSON.stringify(queryobj)).subscribe(function (data) {
            console.log(data);
            if (data.data.length > 0) {
                //console.log(data.data);
                _this.ops = data.data;
            }
            else {
                console.log("No Quick Messages");
            }
        });
    };
    ReportingComponent.prototype.getallbulk = function () {
        var _this = this;
        this.msgService.getallbulk(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                // console.log(data.data);
                _this.ops = data.data;
            }
            else {
                console.log("No Bulk Messages");
            }
        });
    };
    ReportingComponent.prototype.getalldrip = function () {
        var _this = this;
        this.msgService.getalldrip(this.auth.getSavedEmail()).subscribe(function (data) {
            if (data.data.length > 0) {
                _this.ops = data.data;
                console.log(_this.ops);
            }
            else {
                console.log("No Bulk Messages");
            }
        });
    };
    ReportingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-reporting",
            template: __webpack_require__(1105),
            styles: [__webpack_require__(1036)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"]) === 'function' && _c) || Object])
    ], ReportingComponent);
    return ReportingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/reporting.component.js.map

/***/ }),
/* 736 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SentComponent = (function () {
    function SentComponent(messagingService, authService) {
        this.messagingService = messagingService;
        this.authService = authService;
        this.mainArray = [];
        this.quickarr = [];
        this.bulkarr = [];
        this.digitalarr = [];
        this._date = new Date();
        this.spinner = true;
        this.localemail = '';
    }
    SentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localemail = this.authService.getSavedEmail();
        //console.log(AES.decrypt('U2FsdGVkX1+22scdPaZqa42X/QEVMK0ChS+9qemeqrdtpo0BRnzMH7+6nRXPsCqCdI3DXOgGf1tpUxWJNNJwRQ==', 'a@a.com').toString(enc.Utf8));
        //console.log(this.lineChartData, this.lineChartLabels);
        //this.lineChartLabels.push(Date.now());
        this.getsent();
        this.intervalid = setInterval(function () {
            _this.getsent();
            console.log('sent');
        }, 1000 * 5);
    };
    SentComponent.prototype.ngAfterViewInit = function () {
    };
    SentComponent.prototype.ngOnDestroy = function () {
        console.log('sent destroyed');
        clearInterval(this.intervalid);
    };
    SentComponent.prototype.getsent = function () {
        var _this = this;
        this.spinner = true;
        this.messagingService
            .getallsentquicklimit(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.quickarr = [];
                data.data.forEach(function (element) {
                    if (_this.localemail != '') {
                        element.msg = __WEBPACK_IMPORTED_MODULE_3_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_3_crypto_js__["enc"].Utf8);
                    }
                });
                _this.quickarr = data.data;
                // console.log(this.quickarr);
                _this.messagingService
                    .getalloutboxbulklimit(_this.authService.getSavedEmail())
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.bulkarr = [];
                        data.data.forEach(function (element) {
                            if (_this.localemail != '') {
                                element.msg = __WEBPACK_IMPORTED_MODULE_3_crypto_js__["AES"].decrypt(element.msg, _this.localemail.toString()).toString(__WEBPACK_IMPORTED_MODULE_3_crypto_js__["enc"].Utf8);
                            }
                        });
                        _this.bulkarr = data.data;
                        // console.log(this.bulkarr);
                        _this.messagingService
                            .getalloutboxdigitallimit(_this.authService.getSavedEmail())
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.digitalarr = [];
                                _this.digitalarr = data.data;
                                // console.log(this.digitalarr);
                                _this.spinner = false;
                            }
                        });
                    }
                });
            }
        });
    };
    SentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sent',
            template: __webpack_require__(1106),
            styles: [__webpack_require__(1037)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], SentComponent);
    return SentComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/sent.component.js.map

/***/ }),
/* 737 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(1107),
            styles: [__webpack_require__(1038)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/settings.component.js.map

/***/ }),
/* 738 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatictemplatemessagingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatictemplatemessagingComponent = (function () {
    function StatictemplatemessagingComponent(authService, messagingService) {
        this.authService = authService;
        this.messagingService = messagingService;
        this.templateArr = [];
    }
    StatictemplatemessagingComponent.prototype.ngOnInit = function () {
        this.getalltemplates();
    };
    StatictemplatemessagingComponent.prototype.registertemplate = function () {
        var _this = this;
        var template = {
            name: this.name,
            description: this.description,
            type: this.type,
            createdby: this.authService.getSavedEmail()
        };
        this.messagingService.registertemplate(template).subscribe(function (data) {
            if (data.success) {
                alert("Template Registered");
                _this.getalltemplates();
            }
            else {
                alert("Not registered.");
            }
        });
    };
    StatictemplatemessagingComponent.prototype.getalltemplates = function () {
        var _this = this;
        this.messagingService.getalltemplates(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.templateArr = data.data;
            }
            else {
                console.log("No Templates Found");
            }
        });
    };
    StatictemplatemessagingComponent.prototype.removetemplate = function (id) {
        var _this = this;
        this.messagingService.removetemplate(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Removed");
                _this.getalltemplates();
            }
            else {
                alert("Not removed");
            }
        });
    };
    StatictemplatemessagingComponent.prototype.typechange = function (ev) {
    };
    StatictemplatemessagingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statictemplatemessaging',
            template: __webpack_require__(1108),
            styles: [__webpack_require__(1039)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messaging_service__["a" /* MessagingService */]) === 'function' && _b) || Object])
    ], StatictemplatemessagingComponent);
    return StatictemplatemessagingComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/statictemplatemessaging.component.js.map

/***/ }),
/* 739 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatemanagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplatemanagementComponent = (function () {
    function TemplatemanagementComponent() {
    }
    TemplatemanagementComponent.prototype.ngOnInit = function () {
    };
    TemplatemanagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-templatemanagement',
            template: __webpack_require__(1109),
            styles: [__webpack_require__(1040)]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatemanagementComponent);
    return TemplatemanagementComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/templatemanagement.component.js.map

/***/ }),
/* 740 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatenotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplatenotificationComponent = (function () {
    function TemplatenotificationComponent(authService, notificationService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.templatesArr = [];
    }
    TemplatenotificationComponent.prototype.ngOnInit = function () {
        this.getalltemplates();
    };
    TemplatenotificationComponent.prototype.register = function () {
        // console.log("askjdhaksjdhkasjdh");
        var _this = this;
        var newTemplate = {
            type: this.type,
            name: this.name,
            desc: this.desc,
            createdby: this.authService.getSavedEmail()
        };
        // console.log(newTemplate);
        this.notificationService.registerTemplate(newTemplate).subscribe(function (data) {
            if (data.success) {
                alert("Template Created");
                _this.getalltemplates();
            }
            else {
                alert("Not Created");
            }
        });
    };
    TemplatenotificationComponent.prototype.getalltemplates = function () {
        var _this = this;
        this.notificationService.getalltemplates(this.authService.getSavedEmail())
            .subscribe(function (data) {
            if (data.success) {
                _this.templatesArr = data.data;
            }
            else {
                console.log("No templates found.");
            }
        });
    };
    TemplatenotificationComponent.prototype.removetemplate = function (id) {
        var _this = this;
        this.notificationService.removetemplate(id).subscribe(function (data) {
            if (data.success) {
                alert("Template was successfully removed");
                _this.getalltemplates();
            }
            else {
                alert("Not removed");
            }
        });
    };
    TemplatenotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-templatenotification',
            template: __webpack_require__(1110),
            styles: [__webpack_require__(1041)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === 'function' && _b) || Object])
    ], TemplatenotificationComponent);
    return TemplatenotificationComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/templatenotification.component.js.map

/***/ }),
/* 741 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopbarComponent = (function () {
    function TopbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.instanceid = "null";
        //this.loggedIn=false;
        this.sidebarShow = false;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('id_loggedIn') != null && localStorage.getItem('id_loggedIn') == 'true') {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    TopbarComponent.prototype.onLogout = function () {
        this.authService.onLogout();
        //localStorage.clear();
        this.router.navigate(['/home']);
    };
    TopbarComponent.prototype.onNewMessage = function () {
        this.sidebarShow = !this.sidebarShow;
    };
    TopbarComponent.prototype.onProfile = function () {
        this.router.navigate(['/profile']);
    };
    TopbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(1111),
            styles: [__webpack_require__(1042)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], TopbarComponent);
    return TopbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/topbar.component.js.map

/***/ }),
/* 742 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarstaticComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarstaticComponent = (function () {
    function TopbarstaticComponent() {
    }
    TopbarstaticComponent.prototype.ngOnInit = function () {
    };
    TopbarstaticComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topbarstatic',
            template: __webpack_require__(1112),
            styles: [__webpack_require__(1043)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopbarstaticComponent);
    return TopbarstaticComponent;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/topbarstatic.component.js.map

/***/ }),
/* 743 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UacmanagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UacmanagementComponent = (function () {
    function UacmanagementComponent(authService, pricingService) {
        this.authService = authService;
        this.pricingService = pricingService;
        this.accessrightchilds = [];
        this.onchildchangerights = [];
        this.staticrights = ['messaging', 'notification', 'hybrid', 'reporting', 'contacts', 'tracker', 'pricing', 'settings'];
        this.creditchild = "";
        this.delegate = false;
        this.delegateu = false;
        this.smscredit = 0;
        this.whatsappcredit = 0;
        this.expirybundle = null;
        this.smstp = 0;
        this.watp = 0;
        this.encryption = "disable";
        this.derivedrights = [];
        this.checkedarr = [];
        this.newcheckedarr = [];
        this.historychild = "";
        // table
        this.childsarr = [];
        this.parentget = false;
        this.rightsarr = [];
        this.historyarr = [];
    }
    UacmanagementComponent.prototype.ngOnInit = function () {
        this.parentemail = this.authService.getSavedEmail();
        this.getChildAccess();
        this.getallchilds();
        this.getparentbalance();
        this.newcheckedarr = [];
        //this.onChildSubmit();
        var user = localStorage.getItem("user");
        var localrights = JSON.parse(user).rights;
        if (localrights.indexOf('pricing') > -1) {
            localrights.splice(localrights.indexOf('pricing'), 1);
        }
        this.derivedrights = localrights;
        // console.log(this.derivedrights);
    };
    UacmanagementComponent.prototype.getparentbalance = function () {
        var _this = this;
        this.authService.getBalance(this.authService.getSavedEmail()).subscribe(function (data) {
            if (data.success) {
                _this.smscredit = data.data.creditsms;
                _this.whatsappcredit = data.data.creditwhatsapp;
                _this.expirybundle = data.data.expirybundle;
                _this.smstp = data.data.smstp;
                _this.watp = data.data.watp;
                _this.encryption = data.data.encryption;
            }
            else {
                _this.smscredit = 0;
                _this.whatsappcredit = 0;
                _this.expirybundle = '2017-12-09T02:08:20.252Z';
                _this.smstp = 0;
                _this.watp = 0;
                _this.encryption = 'disable';
                alert(data.err);
            }
        });
    };
    UacmanagementComponent.prototype.radiochange = function (e) {
        if (this.delegate) {
            this.smscredit = 0;
            this.whatsappcredit = 0;
        }
        else {
            this.getparentbalance();
        }
    };
    UacmanagementComponent.prototype.getChildAccess = function () {
        var _this = this;
        var email = {
            val: this.parentemail
        };
        this.authService.getChildAccess(email.val).subscribe(function (data) {
            //console.log(data.data);
            for (var i = 0; i < data.data.length; i++) {
                _this.accessrightchilds.push({
                    value: data.data[i].email,
                    name: data.data[i].fullname,
                    rights: data.data[i].rights
                });
            }
            // console.log('accessrightschild',this.accessrightchilds);
        });
    };
    UacmanagementComponent.prototype.getallchilds = function () {
        var _this = this;
        this.childsarr = [];
        this.authService.getChildAccess(this.parentemail).subscribe(function (data) {
            console.log(data.data);
            _this.childsarr = data.data;
        });
    };
    UacmanagementComponent.prototype.onChildChange = function (event) {
        var _this = this;
        this.rightsarr = [];
        this.checkedarr = [];
        this.currentselectedchild = event.target.value;
        this.rightsarr = event.target[event.target.selectedIndex].dataset.payload.trim().split(',');
        this.checkedarr = this.rightsarr;
        // here call the function to get the values of rights from main email address
        this.authService.getRights(event.target.value).subscribe(function (data) {
            _this.onchildchangerights = data.data[0].rights;
            _this.delegateu = data.data[0].isdelegate;
            var childs = _this.onchildchangerights;
            // console.log(childs);
            if (childs.indexOf("messaging") >= 0) {
                _this.messaging = true;
            }
            if (childs.indexOf("notification") >= 0) {
                _this.notification = true;
            }
            if (childs.indexOf("hybrid") >= 0) {
                _this.hybrid = true;
            }
            if (childs.indexOf("reporting") >= 0) {
                _this.reporting = true;
            }
            if (childs.indexOf("contacts") >= 0) {
                _this.contacts = true;
            }
            if (childs.indexOf("tracker") >= 0) {
                _this.tracker = true;
            }
            if (childs.indexOf("pricing") >= 0) {
                _this.pricing = true;
            }
            if (childs.indexOf("settings") >= 0) {
                _this.settings = true;
            }
        });
    };
    UacmanagementComponent.prototype.newcheckChange = function (event, name) {
        if (event.target.checked) {
            this.newcheckedarr.push(name);
        }
        else {
            this.newcheckedarr.splice(this.newcheckedarr.indexOf(name), 1);
        }
        // console.log(this.newcheckedarr);
    };
    UacmanagementComponent.prototype.checkChange = function (event, name) {
        if (event.target.checked) {
            this.checkedarr.push(name);
        }
        else {
            this.checkedarr.splice(this.checkedarr.indexOf(name), 1);
        }
        //console.log(this.checkedarr);
    };
    UacmanagementComponent.prototype.onchildrightsupdate = function () {
        var rights = {
            email: this.currentselectedchild,
            rights: this.checkedarr,
            isdelegate: this.delegateu
        };
        //console.log(JSON.parse(rights));
        //console.log(JSON.stringify(rights));
        //console.log(rights);
        this.authService.updateRights(rights).subscribe(function (data) {
            if (data.success) {
                alert("Rights for this child account were updated.");
                location.reload(true);
            }
            else {
                alert("Rights for this child account were not updated.");
            }
            //console.log(data.success);
        });
    };
    UacmanagementComponent.prototype.onChildSubmit = function () {
        var _this = this;
        if (this.newcheckedarr.length <= 0) {
            alert("Select rights for this user please.");
            return false;
        }
        var local = localStorage.getItem("user");
        //console.log('localparents',JSON.parse(local).parents);
        var parents = JSON.parse(local).parents;
        var type = JSON.parse(local).type;
        parents.push(this.parentemail);
        var user = {
            fullname: this.fullname,
            phone: this.phone,
            email: this.email,
            password: this.password,
            rights: this.newcheckedarr,
            isparent: false,
            isdelegate: this.delegate,
            parent: this.parentemail,
            parents: parents,
            type: type,
            creditsms: 0,
            creditwhatsapp: 0,
            isactivated: true,
            encryption: this.encryption,
            expirybundle: this.expirybundle,
            smstp: this.smstp,
            watp: this.watp
        };
        //  console.log(user);
        //Register new user
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                alert("You just registered a child account.");
                _this.getallchilds();
                _this.getChildAccess();
                console.log("You are now registered. You can now login.");
            }
            else {
                alert("Something went wrong. Email might already be registered");
                _this.getallchilds();
                _this.getChildAccess();
                console.log("Something went wrong");
            }
        });
    };
    UacmanagementComponent.prototype.childdelete = function (id) {
        var _this = this;
        this.authService.removechild(id).subscribe(function (data) {
            if (data.success) {
                alert("Successfully Deleted");
                _this.getallchilds();
                _this.getChildAccess();
            }
            else {
                alert("Not Deleted");
            }
        });
    };
    UacmanagementComponent.prototype.registercredit = function () {
        if (this.creditchild == '') {
            alert("Select a child account");
            return;
        }
        var credit = {
            smscredit: this.smscredit == null ? 0 : this.smscredit,
            whatsappcredit: this.whatsappcredit == null ? 0 : this.whatsappcredit,
            from: this.authService.getSavedEmail(),
            to: this.creditchild,
            cost: 0,
            payment: true,
            createdby: this.authService.getSavedEmail()
        };
        this.pricingService.registercredit(credit).subscribe(function (data) {
            if (data.success) {
                alert('Successfully shared!');
            }
            else {
                alert(data.err);
            }
        });
    };
    UacmanagementComponent.prototype.historycredit = function () {
        var _this = this;
        if (this.historychild == '') {
            alert("Select a child account");
            return;
        }
        this.historyarr = [];
        var query = {
            from: this.authService.getSavedEmail(),
            to: this.historychild
        };
        this.pricingService.credithistory(JSON.stringify(query)).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this.historyarr = data.data;
            }
            else {
                console.log(data.err);
            }
        });
    };
    UacmanagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uacmanagement',
            template: __webpack_require__(1113),
            styles: [__webpack_require__(1044)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__["a" /* PricingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pricing_service__["a" /* PricingService */]) === 'function' && _b) || Object])
    ], UacmanagementComponent);
    return UacmanagementComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/uacmanagement.component.js.map

/***/ }),
/* 744 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasksfilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasksfilterPipe = (function () {
    function MasksfilterPipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    MasksfilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].toLowerCase().includes(value.toLowerCase()); });
    };
    MasksfilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'masksfilter'
        }), 
        __metadata('design:paramtypes', [])
    ], MasksfilterPipe);
    return MasksfilterPipe;
}());
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/masksfilter.pipe.js.map

/***/ }),
/* 745 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Devlabs/SMSProject/Application/meanauthapp/angular-src/src/environment.js.map

/***/ }),
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 410,
	"./af.js": 410,
	"./ar": 417,
	"./ar-dz": 411,
	"./ar-dz.js": 411,
	"./ar-kw": 412,
	"./ar-kw.js": 412,
	"./ar-ly": 413,
	"./ar-ly.js": 413,
	"./ar-ma": 414,
	"./ar-ma.js": 414,
	"./ar-sa": 415,
	"./ar-sa.js": 415,
	"./ar-tn": 416,
	"./ar-tn.js": 416,
	"./ar.js": 417,
	"./az": 418,
	"./az.js": 418,
	"./be": 419,
	"./be.js": 419,
	"./bg": 420,
	"./bg.js": 420,
	"./bm": 421,
	"./bm.js": 421,
	"./bn": 422,
	"./bn.js": 422,
	"./bo": 423,
	"./bo.js": 423,
	"./br": 424,
	"./br.js": 424,
	"./bs": 425,
	"./bs.js": 425,
	"./ca": 426,
	"./ca.js": 426,
	"./cs": 427,
	"./cs.js": 427,
	"./cv": 428,
	"./cv.js": 428,
	"./cy": 429,
	"./cy.js": 429,
	"./da": 430,
	"./da.js": 430,
	"./de": 433,
	"./de-at": 431,
	"./de-at.js": 431,
	"./de-ch": 432,
	"./de-ch.js": 432,
	"./de.js": 433,
	"./dv": 434,
	"./dv.js": 434,
	"./el": 435,
	"./el.js": 435,
	"./en-au": 436,
	"./en-au.js": 436,
	"./en-ca": 437,
	"./en-ca.js": 437,
	"./en-gb": 438,
	"./en-gb.js": 438,
	"./en-ie": 439,
	"./en-ie.js": 439,
	"./en-il": 440,
	"./en-il.js": 440,
	"./en-nz": 441,
	"./en-nz.js": 441,
	"./eo": 442,
	"./eo.js": 442,
	"./es": 445,
	"./es-do": 443,
	"./es-do.js": 443,
	"./es-us": 444,
	"./es-us.js": 444,
	"./es.js": 445,
	"./et": 446,
	"./et.js": 446,
	"./eu": 447,
	"./eu.js": 447,
	"./fa": 448,
	"./fa.js": 448,
	"./fi": 449,
	"./fi.js": 449,
	"./fo": 450,
	"./fo.js": 450,
	"./fr": 453,
	"./fr-ca": 451,
	"./fr-ca.js": 451,
	"./fr-ch": 452,
	"./fr-ch.js": 452,
	"./fr.js": 453,
	"./fy": 454,
	"./fy.js": 454,
	"./gd": 455,
	"./gd.js": 455,
	"./gl": 456,
	"./gl.js": 456,
	"./gom-latn": 457,
	"./gom-latn.js": 457,
	"./gu": 458,
	"./gu.js": 458,
	"./he": 459,
	"./he.js": 459,
	"./hi": 460,
	"./hi.js": 460,
	"./hr": 461,
	"./hr.js": 461,
	"./hu": 462,
	"./hu.js": 462,
	"./hy-am": 463,
	"./hy-am.js": 463,
	"./id": 464,
	"./id.js": 464,
	"./is": 465,
	"./is.js": 465,
	"./it": 466,
	"./it.js": 466,
	"./ja": 467,
	"./ja.js": 467,
	"./jv": 468,
	"./jv.js": 468,
	"./ka": 469,
	"./ka.js": 469,
	"./kk": 470,
	"./kk.js": 470,
	"./km": 471,
	"./km.js": 471,
	"./kn": 472,
	"./kn.js": 472,
	"./ko": 473,
	"./ko.js": 473,
	"./ky": 474,
	"./ky.js": 474,
	"./lb": 475,
	"./lb.js": 475,
	"./lo": 476,
	"./lo.js": 476,
	"./lt": 477,
	"./lt.js": 477,
	"./lv": 478,
	"./lv.js": 478,
	"./me": 479,
	"./me.js": 479,
	"./mi": 480,
	"./mi.js": 480,
	"./mk": 481,
	"./mk.js": 481,
	"./ml": 482,
	"./ml.js": 482,
	"./mn": 483,
	"./mn.js": 483,
	"./mr": 484,
	"./mr.js": 484,
	"./ms": 486,
	"./ms-my": 485,
	"./ms-my.js": 485,
	"./ms.js": 486,
	"./mt": 487,
	"./mt.js": 487,
	"./my": 488,
	"./my.js": 488,
	"./nb": 489,
	"./nb.js": 489,
	"./ne": 490,
	"./ne.js": 490,
	"./nl": 492,
	"./nl-be": 491,
	"./nl-be.js": 491,
	"./nl.js": 492,
	"./nn": 493,
	"./nn.js": 493,
	"./pa-in": 494,
	"./pa-in.js": 494,
	"./pl": 495,
	"./pl.js": 495,
	"./pt": 497,
	"./pt-br": 496,
	"./pt-br.js": 496,
	"./pt.js": 497,
	"./ro": 498,
	"./ro.js": 498,
	"./ru": 499,
	"./ru.js": 499,
	"./sd": 500,
	"./sd.js": 500,
	"./se": 501,
	"./se.js": 501,
	"./si": 502,
	"./si.js": 502,
	"./sk": 503,
	"./sk.js": 503,
	"./sl": 504,
	"./sl.js": 504,
	"./sq": 505,
	"./sq.js": 505,
	"./sr": 507,
	"./sr-cyrl": 506,
	"./sr-cyrl.js": 506,
	"./sr.js": 507,
	"./ss": 508,
	"./ss.js": 508,
	"./sv": 509,
	"./sv.js": 509,
	"./sw": 510,
	"./sw.js": 510,
	"./ta": 511,
	"./ta.js": 511,
	"./te": 512,
	"./te.js": 512,
	"./tet": 513,
	"./tet.js": 513,
	"./tg": 514,
	"./tg.js": 514,
	"./th": 515,
	"./th.js": 515,
	"./tl-ph": 516,
	"./tl-ph.js": 516,
	"./tlh": 517,
	"./tlh.js": 517,
	"./tr": 518,
	"./tr.js": 518,
	"./tzl": 519,
	"./tzl.js": 519,
	"./tzm": 521,
	"./tzm-latn": 520,
	"./tzm-latn.js": 520,
	"./tzm.js": 521,
	"./ug-cn": 522,
	"./ug-cn.js": 522,
	"./uk": 523,
	"./uk.js": 523,
	"./ur": 524,
	"./ur.js": 524,
	"./uz": 526,
	"./uz-latn": 525,
	"./uz-latn.js": 525,
	"./uz.js": 526,
	"./vi": 527,
	"./vi.js": 527,
	"./x-pseudo": 528,
	"./x-pseudo.js": 528,
	"./yo": 529,
	"./yo.js": 529,
	"./zh-cn": 530,
	"./zh-cn.js": 530,
	"./zh-hk": 531,
	"./zh-hk.js": 531,
	"./zh-tw": 532,
	"./zh-tw.js": 532
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 970;


/***/ }),
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 977 */
/***/ (function(module, exports) {

module.exports = "#addressbooksection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 978 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n\r\n}\r\n\r\ntbody label{\r\n    margin:0px;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\ntbody{\r\n    vertical-align: middle;\r\n}\r\n\r\n.item{\r\n    color:#333;\r\n    font-size: small;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    /* background: #1565C0; */\r\n}\r\n\r\n.test{\r\n    color:white;\r\n    font-size: x-small;\r\n    padding:5px;\r\n    border-radius: 0px;\r\n    background: #1565C0;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.outer-div {\r\n    height: 100%;\r\n    width: auto;\r\n  }\r\n  \r\n  div.middle-div {\r\n    position: relative;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }"

/***/ }),
/* 979 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    box-sizing: border-box;\r\n    /* border-right: 1px solid rgba(0,0,0,.1); */\r\n}\r\n\r\n\r\n#sender{\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    background: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    margin: 5px;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.item{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    color:#444;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.item:hover{\r\n    cursor: pointer;\r\n    background: #1565c008;\r\n}\r\n\r\n.thumbnail{\r\n    display: inline-block;\r\n}\r\n\r\n.desc{\r\n    display: inline-block;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n}\r\n\r\n.desc label{\r\n    margin:0px;\r\n}\r\n\r\n.desc p{\r\n    margin: 0px;\r\n}\r\n\r\n.desc small{\r\n    color:#1565C0;\r\n}\r\n\r\n#inboxSection{\r\n    height: 210px;\r\n    /* background:green; */\r\n    overflow-y: auto;\r\n}\r\n\r\n#quickSection{\r\n    /* background:red; */\r\n    overflow-y: auto;\r\n    position: relative;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n    /* background: #e0e0e0; */\r\n}\r\n\r\n#writeSection{\r\n    box-sizing: border-box;\r\n    border-left: 1px solid rgba(0,0,0,.1);\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.footer{\r\n    background-color:#e6e6e6;\r\n}\r\n\r\n#quickcontainer{\r\n    display: block;\r\n    padding:5px;\r\n}\r\n\r\n#quickcontainer p{\r\n    margin:0px;\r\n    padding-left:5px;\r\n    font-size: x-small;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.quick{\r\n    padding:5px;\r\n    display: inline-block;\r\n    margin:3px;\r\n    font-size: small;\r\n    border-radius: 5px;\r\n    border:1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.text{\r\n    color: #333;\r\n}\r\n\r\n#newquick{\r\n    color: #333;\r\n    position: absolute;\r\n    top:4px;\r\n    right:5px;\r\n    z-index: 5;\r\n    cursor: pointer;\r\n}\r\n\r\n.left{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n}\r\n\r\n.left .carot{\r\n    display: inline-block;\r\n    color: #abdde5;\r\n}\r\n\r\n.left .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n\r\n    background: #abdde5;\r\n    color:#333;\r\n}\r\n\r\n.msg p{\r\n    margin: 0px;\r\n}\r\n\r\n\r\n\r\n.right{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n    float: right;\r\n}\r\n\r\n.right .carot{\r\n    display: inline-block;\r\n    color: rgba(0,0,0,.1);\r\n}\r\n\r\n.right .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.messageContainer{\r\n    clear: both;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nsection{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 980 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}\r\n"

/***/ }),
/* 981 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n\r\n\r\n.maintext{\r\n\r\n}\r\n\r\n\r\n.btn{\r\n    font-size:small;\r\n}\r\n\r\n"

/***/ }),
/* 982 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 983 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 984 */
/***/ (function(module, exports) {

module.exports = ".hoverselected{\r\n    color:#fff;\r\n    background: #1565C0;\r\n}\r\n\r\n.btn.focus, .btn:focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0rem;\r\n}"

/***/ }),
/* 985 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}"

/***/ }),
/* 986 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 0px;\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.contactswrapper{\r\n    border-top:1px solid rgba(0,0,0,.1);\r\n    border-bottom:1px solid rgba(0,0,0,.1);\r\n    height: 250px;\r\n    overflow-y: auto;\r\n    padding: 7px;\r\n}\r\n\r\n.contact{\r\n    background:#f0f0f0;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px 10px 5px 10px;\r\n    margin-bottom: 5px;\r\n    margin:5px;\r\n}\r\n\r\n.contact .checkbox{\r\n    \r\n}\r\n\r\n.clearfix{\r\n    height: 20px;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\na{\r\n    background: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.name{\r\n    padding-left:5px;\r\n    padding-right: 5px;\r\n    border-left:1px solid rgba(0,0,0,.1);\r\n    border-right:1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.thumbnail{\r\n    padding-right: 5px;\r\n}\r\n\r\n.thumbnail input{\r\n    margin-top:13px;\r\n}"

/***/ }),
/* 987 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n font-size:small;   \r\n border-radius: 0px;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}"

/***/ }),
/* 988 */
/***/ (function(module, exports) {

module.exports = "#dashboardSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n}\r\n\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitemwrapper:focus{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 989 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.btn{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 990 */
/***/ (function(module, exports) {

module.exports = "#dashboardSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n}\r\n\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.cardbg{\r\n    color:white;\r\n    background-color:#2f3d5a;\r\n    /* background: linear-gradient(to right, #182848, #1565C0); */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitemwrapper:focus{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 991 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:5px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}"

/***/ }),
/* 992 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}\r\n"

/***/ }),
/* 993 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 994 */
/***/ (function(module, exports) {

module.exports = "#footerSection{\r\n    font-size:x-small;\r\n    background-color: #1565C0;\r\n    position: relative;\r\n    width: 100%;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    \r\n}\r\n\r\np{\r\n    color:white;\r\n    margin: 0px;\r\n    padding-top:5px;\r\n    padding-bottom: 5px;\r\n}"

/***/ }),
/* 995 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 0px;\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.contactswrapper{\r\n    border-top:1px solid rgba(0,0,0,.1);\r\n    border-bottom:1px solid rgba(0,0,0,.1);\r\n    height: 250px;\r\n    overflow-y: auto;\r\n    padding: 7px;\r\n}\r\n\r\n.contact{\r\n    background:#f0f0f0;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px 10px 5px 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.contact .checkbox{\r\n    margin-top: 3px;\r\n}\r\n\r\n.clearfix{\r\n    height: 20px;\r\n}\r\n\r\n.groupscontainer{\r\n    padding:5px;\r\n    height:500px;\r\n    display: inline-block;\r\n}\r\n\r\n.group{\r\n    color:#444;\r\n    width:250px;\r\n    height: 197px;\r\n    border:1px solid rgba(0, 0,0, 0.1);\r\n    box-sizing: border-box;\r\n    margin: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.top{\r\n    padding: 10px;\r\n    border-bottom:1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.top i{\r\n    font-size: medium;\r\n}\r\n\r\n.top .action{\r\n    margin-top:3px;\r\n}\r\n\r\n.group .name{\r\n    font-size: medium;\r\n}\r\n\r\n.bottom{\r\n    height:150px;\r\n    font-size: small;\r\n    padding: 10px;\r\n    border-bottom:1px solid rgba(0, 0, 0, 0.1);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n.bcon{\r\n    background: rgba(0, 0, 0, 0.1);\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.bottom .name{\r\n    font-size: small;\r\n}\r\n\r\n.bottom i{\r\n    font-size: small;\r\n}\r\n\r\n.bottom .action{\r\n    margin-top:0px;\r\n}"

/***/ }),
/* 996 */
/***/ (function(module, exports) {

module.exports = "#homeSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n    color: #333;\r\n}\r\n\r\n#homeleft{\r\n    border-right:1px solid rgba(0, 0, 0, .1);\r\n    box-sizing: border-box;\r\n}\r\n\r\n#homeleft img{\r\n    width:100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n}\r\n\r\n.lead{\r\n    padding-top: 10px;\r\n    padding-right: 20px;\r\n    font-size: larger;\r\n}\r\n\r\n.col-md-8 h3{\r\n    margin-bottom: 0px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.arrow{\r\n    color:#1565C0;\r\n    padding-right: 20px;\r\n}\r\n\r\n.margin{\r\n    height:10px;\r\n}"

/***/ }),
/* 997 */
/***/ (function(module, exports) {

module.exports = "#hybridsection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 998 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}"

/***/ }),
/* 999 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.btn{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1000 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 1001 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    box-sizing: border-box;\r\n    /* border-right: 1px solid rgba(0,0,0,.1); */\r\n}\r\n\r\n\r\n#sender{\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    background: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    margin: 5px;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n    border:none;\r\n}\r\n\r\n.item{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    color:#444;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.item:hover{\r\n    cursor: pointer;\r\n    background: #1565c008;\r\n}\r\n\r\n.thumbnail{\r\n    display: inline-block;\r\n}\r\n\r\n.desc{\r\n    display: inline-block;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n}\r\n\r\n.desc label{\r\n    margin:0px;\r\n}\r\n\r\n.desc p{\r\n    margin: 0px;\r\n}\r\n\r\n.desc small{\r\n    color:#1565C0;\r\n}\r\n\r\n#inboxSection{\r\n    height: 210px;\r\n    /* background:green; */\r\n    overflow-y: auto;\r\n}\r\n\r\n#quickSection{\r\n    /* background:red; */\r\n    overflow-y: auto;\r\n    position: relative;\r\n    background: #e0e0e0;\r\n}\r\n\r\n#writeSection{\r\n    box-sizing: border-box;\r\n    border-left: 1px solid rgba(0,0,0,.1);\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.footer{\r\n    background-color:#e6e6e6;\r\n}\r\n\r\n.quickcontainer{\r\n    display: block;\r\n    padding:5px;\r\n}\r\n\r\n.quick{\r\n    padding:5px;\r\n    display: inline-block;\r\n    margin:3px;\r\n    font-size: x-small;\r\n    border-radius: 5px;\r\n    border:1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.text{\r\n    color: #333;\r\n}\r\n\r\n#newquick{\r\n    color: #333;\r\n    position: absolute;\r\n    top:4px;\r\n    right:5px;\r\n    z-index: 5;\r\n    cursor: pointer;\r\n}\r\n\r\n.left{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n}\r\n\r\n.left .carot{\r\n    display: inline-block;\r\n    color: #abdde5;\r\n}\r\n\r\n.left .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n\r\n    background: #abdde5;\r\n    color:#333;\r\n}\r\n\r\n.msg p{\r\n    margin: 0px;\r\n}\r\n\r\n\r\n\r\n.right{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n    float: right;\r\n}\r\n\r\n.right .carot{\r\n    display: inline-block;\r\n    color: rgba(0,0,0,.1);\r\n}\r\n\r\n.right .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.messageContainer{\r\n    clear: both;\r\n}"

/***/ }),
/* 1002 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    box-sizing: border-box;\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n    \r\n}\r\n\r\n#searchbar{\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n    border:none;\r\n}\r\n\r\n.item{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    color:#444;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.item:hover{\r\n    cursor: pointer;\r\n    background: #1565c008;\r\n}\r\n\r\n.thumbnail{\r\n    display: inline-block;\r\n}\r\n\r\n.desc{\r\n    display: inline-block;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n}\r\n\r\n.desc label{\r\n    margin:0px;\r\n}\r\n\r\n.desc p{\r\n    margin: 0px;\r\n}\r\n\r\n.desc small{\r\n    color:#1565C0;\r\n}"

/***/ }),
/* 1003 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1004 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1005 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1006 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 1007 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    box-sizing: border-box;\r\n    /* border-right: 1px solid rgba(0,0,0,.1); */\r\n}\r\n\r\n\r\n#sender{\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    background: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    margin: 5px;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n    border:none;\r\n}\r\n\r\n.item{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    color:#444;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.item:hover{\r\n    cursor: pointer;\r\n    background: #1565c008;\r\n}\r\n\r\n.thumbnail{\r\n    display: inline-block;\r\n}\r\n\r\n.desc{\r\n    display: inline-block;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n}\r\n\r\n.desc label{\r\n    margin:0px;\r\n}\r\n\r\n.desc p{\r\n    margin: 0px;\r\n}\r\n\r\n.desc small{\r\n    color:#1565C0;\r\n}\r\n\r\n#inboxSection{\r\n    height: 210px;\r\n    /* background:green; */\r\n    overflow-y: auto;\r\n}\r\n\r\n#quickSection{\r\n    /* background:red; */\r\n    overflow-y: auto;\r\n    position: relative;\r\n    background: #e0e0e0;\r\n}\r\n\r\n#writeSection{\r\n    box-sizing: border-box;\r\n    border-left: 1px solid rgba(0,0,0,.1);\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.footer{\r\n    background-color:#e6e6e6;\r\n}\r\n\r\n.quickcontainer{\r\n    display: block;\r\n    padding:5px;\r\n}\r\n\r\n.quick{\r\n    padding:5px;\r\n    display: inline-block;\r\n    margin:3px;\r\n    font-size: x-small;\r\n    border-radius: 5px;\r\n    border:1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.text{\r\n    color: #333;\r\n}\r\n\r\n#newquick{\r\n    color: #333;\r\n    position: absolute;\r\n    top:4px;\r\n    right:5px;\r\n    z-index: 5;\r\n    cursor: pointer;\r\n}\r\n\r\n.left{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n}\r\n\r\n.left .carot{\r\n    display: inline-block;\r\n    color: #abdde5;\r\n}\r\n\r\n.left .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n\r\n    background: #abdde5;\r\n    color:#333;\r\n}\r\n\r\n.msg p{\r\n    margin: 0px;\r\n}\r\n\r\n\r\n\r\n.right{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5px;\r\n    float: right;\r\n}\r\n\r\n.right .carot{\r\n    display: inline-block;\r\n    color: rgba(0,0,0,.1);\r\n}\r\n\r\n.right .msg{\r\n    font-size: small;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    border: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.messageContainer{\r\n    clear: both;\r\n}"

/***/ }),
/* 1008 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 1009 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    box-sizing: border-box;\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n    \r\n}\r\n\r\n#searchbar{\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n    border:none;\r\n}\r\n\r\n.item{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    color:#444;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.item:hover{\r\n    cursor: pointer;\r\n    background: #1565c008;\r\n}\r\n\r\n.thumbnail{\r\n    display: inline-block;\r\n}\r\n\r\n.desc{\r\n    display: inline-block;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n}\r\n\r\n.desc label{\r\n    margin:0px;\r\n}\r\n\r\n.desc p{\r\n    margin: 0px;\r\n}\r\n\r\n.desc small{\r\n    color:#1565C0;\r\n}"

/***/ }),
/* 1010 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.btn{\r\n    font-size: x-small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1011 */
/***/ (function(module, exports) {

module.exports = "#issuetrackersection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1012 */
/***/ (function(module, exports) {

module.exports = "#reportingSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.clearfix{\r\n    height: 10px;\r\n}"

/***/ }),
/* 1013 */
/***/ (function(module, exports) {

module.exports = "#loginSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}"

/***/ }),
/* 1014 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1015 */
/***/ (function(module, exports) {

module.exports = "#messagingsection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1016 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1017 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1018 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1019 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1020 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1021 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1022 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}"

/***/ }),
/* 1023 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-success{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btn-default{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1024 */
/***/ (function(module, exports) {

module.exports = "#messagingsection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1025 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.btn{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1026 */
/***/ (function(module, exports) {

module.exports = "#navbarsection{\r\n    /* padding-left: 10px;\r\n    padding-right: 10px; */\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-color: white;\r\n}\r\n\r\n#nbitemscontainer{\r\n    display: inline-block;\r\n}\r\n.nbitems{\r\n    display: block;\r\n    cursor: pointer;\r\n    background: white;\r\n    /* margin-right: 10px; */\r\n    padding: 10px;\r\n    color:#444;\r\n\r\n    \r\n}\r\n\r\n\r\n.nbsubitems{\r\n    display: block;\r\n    cursor: pointer;\r\n    background: white;\r\n    /* margin-right: 10px; */\r\n    padding: 10px;\r\n    color:#444;\r\n    margin-left: 15px;\r\n}\r\n\r\n.nbsubsubitems{\r\n    display: block;\r\n    cursor: pointer;\r\n    background: white;\r\n    /* margin-right: 10px; */\r\n    padding: 10px;\r\n    color:#444;\r\n    margin-left: 30px;\r\n}\r\n\r\n#nbwrapper{\r\n}\r\n\r\n.nbitemsimg{\r\n\r\n}\r\n\r\n.nbitemstext{\r\n    font-size: small;\r\n    position: relative;\r\n}\r\n\r\n.rightarrow{\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.hoverselected{\r\n    color:black;\r\n    box-sizing: border-box;\r\n    /* color: #1565C0; */\r\n    /* border-left: 2px solid #1565C0; */\r\n    /* padding-left: 8px; */\r\n    background: #1565c008;\r\n    /* color: #1565C0; */\r\n    border-left: 2px solid #1565C0;\r\n}\r\n\r\n.hoverselectedsub{\r\n    color:black;\r\n    box-sizing: border-box;\r\n    /* color: #1565C0; */\r\n    /* border-left: 2px solid #1565C0; */\r\n    /* padding-left: 8px; */\r\n    background: #1565c008;\r\n    /* color: #1565C0; */\r\n    border-left: 2px solid #1565C0;\r\n}\r\n\r\n.hoverselectedsubsub{\r\n    color:black;\r\n    box-sizing: border-box;\r\n    /* color: #1565C0; */\r\n    /* border-left: 2px solid #1565C0; */\r\n    /* padding-left: 8px; */\r\n    background: #1565c008;\r\n    /* color: #1565C0; */\r\n    border-left: 2px solid #1565C0;\r\n}\r\n.cardbg{\r\n    color:white;\r\n    background-color:#2f3d5a;\r\n    /* background: linear-gradient(to right, #182848, #1565C0); */\r\n}"

/***/ }),
/* 1027 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 0px;\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}"

/***/ }),
/* 1028 */
/***/ (function(module, exports) {

module.exports = "#notificationsection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1029 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.btn{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1030 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.green{\r\n    color:green;\r\n}\r\n\r\n\r\n.blinker { \r\n    animation-name: blinker;\r\n    animation-duration: 1s;\r\n    animation-timing-function: ease-in-ease-out;\r\n    animation-iteration-count: 3;\r\n\r\n\r\n    -webkit-animation-name: blinker;\r\n    -webkit-animation-duration: 1s;\r\n    -webkit-animation-timing-function: ease-in-ease-out;\r\n    -webkit-animation-iteration-count: 3;\r\n  }\r\n\r\n@keyframes blinker {  \r\n    0% { opacity: 1.0; }\r\n    50% { opacity: 0.2; }\r\n    100% { opacity: 1.0; }\r\n}   "

/***/ }),
/* 1031 */
/***/ (function(module, exports) {

module.exports = "#pricingsection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1032 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n.green{\r\n    color:green;\r\n}\r\n\r\n\r\n.blinker { \r\n    animation-name: blinker;\r\n    animation-duration: 1s;\r\n    animation-timing-function: ease-in-ease-out;\r\n    animation-iteration-count: 3;\r\n\r\n\r\n    -webkit-animation-name: blinker;\r\n    -webkit-animation-duration: 1s;\r\n    -webkit-animation-timing-function: ease-in-ease-out;\r\n    -webkit-animation-iteration-count: 3;\r\n  }\r\n\r\n@keyframes blinker {  \r\n    0% { opacity: 1.0; }\r\n    50% { opacity: 0.2; }\r\n    100% { opacity: 1.0; }\r\n}   "

/***/ }),
/* 1033 */
/***/ (function(module, exports) {

module.exports = "#profileSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}"

/***/ }),
/* 1034 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel{\r\n    font-size: small;\r\n    font-weight: 400;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n}\r\n\r\n.alternatecolor{\r\n    color:white;\r\n    background: #26C6DA;\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n.msghelper{\r\n    color:palevioletred;\r\n}"

/***/ }),
/* 1035 */
/***/ (function(module, exports) {

module.exports = "#registerSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}"

/***/ }),
/* 1036 */
/***/ (function(module, exports) {

module.exports = "#reportingSection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: small;\r\n\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n    width:100%;\r\n}\r\n\r\n.clearfix{\r\n    height: 10px;\r\n}"

/***/ }),
/* 1037 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1038 */
/***/ (function(module, exports) {

module.exports = "#settingssection{\r\n    /* background: grey; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.menuitemscontainer{\r\n    /* display: inline-block; */\r\n}\r\n\r\n.menuitemwrapper{\r\n    cursor: pointer;\r\n    padding-bottom:5px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.menuitemwrapper:hover{\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    background: #1565c008;\r\n}\r\n\r\n.hoverselected{\r\n    box-sizing: border-box;\r\n    color:#1565C0;\r\n    border-left:2px solid #1565C0;\r\n    padding-left: 8px;\r\n    background: #1565c008;\r\n}\r\n\r\n.menuitem div{\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n    color:#333;\r\n}\r\n\r\n.badgecontainer{\r\n    display: block;\r\n}\r\n\r\n.badge{\r\n    background: #1565C0;\r\n    color:white;\r\n}"

/***/ }),
/* 1039 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1040 */
/***/ (function(module, exports) {

module.exports = ".hoverselected{\r\n    color:#fff;\r\n    background: #1565C0;\r\n}\r\n\r\n.btn.focus, .btn:focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0rem;\r\n}"

/***/ }),
/* 1041 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: #1565C0;\r\n\r\n}\r\n\r\n.clearfix{\r\n    height:10px;\r\n}\r\n\r\n#file{\r\n    font-size: x-small;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}"

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\r\n    #topbarsection{\r\n        min-height: 75px;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        background-color:#1565C0;\r\n    }\r\n\r\n    #tpdockright{\r\n        float:none;\r\n    }\r\n}\r\n\r\n.marqueecontainer{\r\n    padding-top: 4px;\r\n    padding-bottom: 3px;\r\n    font-size: small;\r\n    padding-left: 10px;\r\n    color: white;\r\n    background: #1565C0;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #182848, #1565C0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    \r\n}\r\n\r\n#topbarsection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    background-color:#1565C0;\r\n}\r\n\r\n#tpcontainerwrapper{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#api{\r\n    color:white;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\r\n}\r\n\r\n#logotext{\r\n    padding:0px;\r\n    margin:0px;\r\n    color:white;\r\n    font-size: large;\r\n    font-weight:bold;\r\n}\r\n\r\n#tpdockright{\r\n    float:right;\r\n}\r\n\r\n.dockitems{\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    font-size:small;\r\n    padding:10px;\r\n    /* border:1px solid white; */\r\n    color:white;\r\n    margin-left:15px;\r\n}\r\n\r\n#sidebar{\r\n    box-sizing: border-box;\r\n    border-left:2px solid #1565C0;\r\n    border-right:2px solid #1565C0;\r\n    border-bottom:2px solid #1565C0;\r\n    background-color: white;\r\n    position: absolute;\r\n    z-index: 5;\r\n    right: 110px;\r\n    width: 225px;\r\n}\r\n\r\n.cardcontainer{\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    /* padding-left: 10px; */\r\n    background: #e6e6e6;\r\n    font-size: x-small;\r\n    /* padding-right: 10px; */\r\n}\r\n\r\n.cardcontainer label{\r\n    font-weight: bold;\r\n    margin:0px;\r\n}\r\n\r\n.cardcontainer p{\r\n    margin:0px;\r\n}\r\n\r\n.cardcontainer small{\r\n    color: #1565C0;\r\n}\r\n\r\n.header{\r\n    color: #1565C0;\r\n}"

/***/ }),
/* 1043 */
/***/ (function(module, exports) {

module.exports = "\r\n#topbarsection{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    background-color:#1565C0;\r\n}\r\n\r\n#tpcontainerwrapper{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#logotext{\r\n    padding:0px;\r\n    margin:0px;\r\n    color:white;\r\n    font-size: large;\r\n    font-weight:bold;\r\n}\r\n\r\n#tpdockright{\r\n    float:right;\r\n}\r\n\r\n.dockitems{\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    font-size:small;\r\n    padding:10px;\r\n    /* border:1px solid white; */\r\n    color:white;\r\n    margin-left:15px;\r\n}"

/***/ }),
/* 1044 */
/***/ (function(module, exports) {

module.exports = "section{\r\n    font-size: small;\r\n}\r\n\r\n.btn{\r\n    font-size: small;\r\n}\r\n\r\n.form-control{\r\n    font-size: small;\r\n    border-radius: 0px;\r\n}\r\n\r\nth{\r\n    font-weight: 400;\r\n}\r\n\r\n.primary{\r\n    color:#1565C0;\r\n}\r\n\r\n.alternate{\r\n    color:#26C6DA;\r\n}\r\n\r\n\r\n.btn-danger{\r\n    font-size: x-small;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}"

/***/ }),
/* 1045 */
/***/ (function(module, exports) {

module.exports = "<!-- top bar with logos -->\n\n<div>\n    <!-- <app-topbar></app-topbar>\n    <app-navbar></app-navbar> -->\n    <router-outlet></router-outlet>\n</div>"

/***/ }),
/* 1046 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"addressbooksection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./contacts']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-user\"></i></span>\n                </div>\n                <div>\n                  Contacts\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./groups']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-users\"></i></span>\n                </div>\n                <div>\n                  Groups\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./newcontact']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-plus-circle\"></i></span>\n                </div>\n                <div>\n                  Add Contact\n                </div>\n            </div>\n          </div>       \n          \n      </div>\n      <app-navbar></app-navbar>\n\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1047 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <p class=\"lead\"><u>Test APIs</u></p>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n          <label>Operator</label>\n          <select name=\"\" id=\"\" class=\"form-control\">\n            <option value=\"\" disabled selected>Select operator</option>\n            <option value=\"\">Zong</option>\n            <option value=\"\">Telenor</option>\n            <option value=\"\">Jazz</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Testing Number</label>\n        <input type=\"text\" name=\"\" id=\"\" placeholder=\"Enter Number\" class=\"form-control\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"boxcontainer\">\n        <div class=\"box\">\n          <table class=\"table table-sm table-bordered table-hover\">\n            <thead>\n              <tr class=\"table-info\">\n                <th>Operation</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <label class=\"item\">Quick Message Text</label>\n                </td>\n                <td>\n                  <label class=\"test\">Test API</label>\n                </td>\n              </tr>\n              <tr>\n                  <td>\n                    <label class=\"item\">Bulk Message Text</label>\n                  </td>\n                  <td>\n                    <label class=\"test\">Test API</label>\n                  </td>\n              </tr>\n              <tr>\n                  <td>\n                    <label class=\"item\">Dynamic Message Text</label>\n                  </td>\n                  <td>\n                    <label class=\"test\">Test API</label>\n                  </td>\n              </tr>\n              <tr>\n                  <td>\n                    <label class=\"item\">2-way Message Text</label>\n                  </td>\n                  <td>\n                    <label class=\"test\">Test API</label>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n        <div class='outer-div'>\n            <div class='middle-div'>\n                <div class=\"text-center\">\n                    <span class=\"primary\"><i class=\"fa fa-arrow-circle-right fa-5x\"></i></span>\n                </div>\n            </div>\n          </div>\n\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"boxcontainer\">\n          <div class=\"box\">\n            <table class=\"table table-sm table-bordered table-hover\">\n              <thead>\n                <tr class=\"table-info\">\n                  <th>Operation</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <label class=\"item\">Network Node1</label>\n                  </td>\n                  <td>\n                    <label class=\"text-success\"><span><i class=\"fa fa-check-circle-o fa-2x\"></i></span></label>\n                  </td>\n                </tr>\n                <tr>\n                    <td>\n                      <label class=\"item\">Network Node2</label>\n                    </td>\n                    <td>\n                        <label class=\"text-success\"><span><i class=\"fa fa-check-circle-o fa-2x\"></i></span></label>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                      <label class=\"item\">Network Node3</label>\n                    </td>\n                    <td>\n                        <label class=\"text-success\"><span><i class=\"fa fa-check-circle-o fa-2x\"></i></span></label>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                      <label class=\"item\">Network Node4</label>\n                    </td>\n                    <td>\n                        <label class=\"text-danger\"><span><i class=\"fa fa-check-circle-o fa-2x\"></i></span></label>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n\n  </div>\n\n</section>\n"

/***/ }),
/* 1048 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <p class=\"lead\"><u>Select Short Code</u> </p>\n        <select name=\"\" id=\"\" class=\"form-control\">\n          <option value=\"\" selected disabled>Select Short Code</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <div id=\"quickSection\">\n            <div id=\"quickcontainer\">\n              <p class=\"text-muted\">Registered keywords/phrase:</p>\n\n              <div class=\"quick\">\n                <div class=\"text\"> Subscribe &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n              </div>\n              <div class=\"quick\">\n                <div class=\"text\"> I want to subscribe. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n              </div>\n              <div class=\"quick\">\n                <div class=\"text\"> Subscribe me &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n              </div>\n              <div class=\"quick\">\n                <div class=\"text\"> Sub &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n              </div>\n            </div>\n            <div>\n              <textarea name=\"\" id=\"\" cols=\"30\" rows=\"2\" class=\"form-control\">Enter new keyword/phrase here...</textarea>\n            </div>\n            <div class=\"text-right footer\">\n              <button class=\"btn btn-primary btn-sm\">Register New</button>\n            </div>\n        </div>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n        <p class=\"lead\"><u> Summary</u></p>\n        <div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-sm table-hover table-bordered\">\n                  <thead>\n                      <tr class=\"table-info\">\n                        <th>SC</th>\n                        <th>S.Date</th>\n                        <th>E.Date</th>\n                        <th>Recieved</th>\n                        <th>Replied</th>\n                        <th>Unread</th>\n                        <th>Unreplied</th>\n                        <th>Success</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                          <td class=\"text-muted\">SC-786</td>\n                          <td class=\"text-muted\">12/10/2017</td>\n                          <td class=\"text-muted\">12/02/2018</td>\n                          <td class=\"text-muted\">10000</td>\n                          <td class=\"text-muted\">6000</td>\n                          <td class=\"text-muted\">1500</td>\n                          <td class=\"text-muted\">3000</td>\n                          <td class=\"text-muted\">90% | 05% | 05%</td>\n                        </tr>\n                      </tbody>\n              </table>\n            </div>\n          </div>\n\n    </div>\n    \n  </div>\n</section>"

/***/ }),
/* 1049 */
/***/ (function(module, exports) {

module.exports = "<section id=\"quickSection\">\n  <form (submit)=\"registerbulk()\">\n    <p class=\"lead\"><u>Compose Bulk Message</u></p>\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" required id=\"name\" class=\"form-control\" placeholder=\"Enter name for this operation ..\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"language\">Select Language</label>\n                <select [(ngModel)]=\"language\" name=\"language\" id=\"language\" (change)=\"languagechange($event)\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Language</option>\n                  <option value=\"english\">English</option>\n                  <option value=\"urdu\">Urdu</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label>Operation Type</label>\n                <br>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" (change)=\"opchange($event)\" name=\"optype\" value=\"\"> No Template\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"optype\" (change)=\"opchange($event)\" value=\"static\"> Static Template\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"optype\" (change)=\"opchange($event)\" value=\"dynamic\"> Dynamic Template\n                </label>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"masking\">Select Masking</label>\n                <select [(ngModel)]=\"masking\" (change)=\"maskingchange($event)\" name=\"masking\" id=\"masking\" class=\"form-control\" required>\n                  <option value=\"\" disabled selected>Select Masking</option>\n                  <option *ngFor=\"let item of masksarr\" [value]=\"item.mask\">{{item.mask}} ({{item.type}})</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"campaign\">Campaign Name</label>\n                <select (change)=\"campaignchange($event)\" name=\"campaign\" id=\"campaign\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Campaign</option>\n                  <option *ngFor=\"let item of campaignsArr\" [value]=\"item.path\">{{item.name}}</option>\n                </select>\n            </div>\n\n        </div>\n        <div class=\"col-md-6 form-group\">\n\n            <div class=\"form-group\">\n                <label for=\"template\">Select Template</label>\n                <select (change)=\"templatechange($event)\" name=\"template\" id=\"template\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Template</option>\n                  <option *ngFor=\"let item of templatesArr\" [value]=\"item.description\">{{item.name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"msg\">Message / SMS</label>\n                <textarea (change)=\"msgchange()\" (input)=\"msgchange()\" [(ngModel)]=\"msg\" name=\"msg\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\" required></textarea>\n                <small class=\"text-muted\">Characters: <span class=\"msghelper\">{{msgchars}}</span> &nbsp;&nbsp;|&nbsp;&nbsp; No. of Messages:  <span class=\"msghelper\">{{msgcount}}</span></small>\n            </div>\n            <!-- <div class=\"form-group\">\n                <label for=\"cdate\">Date (MM/dd/yyyy hh:mm:ss am/pm)</label>\n                <input type=\"text\" [(ngModel)]=\"cdate\" name=\"cdate\" id=\"cdate\" class=\"form-control\" placeholder=\"Enter date here ..\" required>\n            </div> -->\n\n\n\n          <div class=\"form-group text-center\">\n            <div class=\"clearfix\"></div>\n            <hr>\n              <input [disabled]=\"sent==true\" type=\"submit\" value=\"Send Bulk SMS\" class=\"btn btn-primary\">\n            <hr>\n            <div class=\"clearfix\"></div>\n            <div *ngIf=\"sent == true\">Please Wait .. <span><i class=\"fa fa-spinner fa-spin\"></i></span></div>\n          </div>\n        </div>            \n\n  </div>\n</form>\n</section>\n\n"

/***/ }),
/* 1050 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <table class=\"table table-sm table-bordered\">\n        <tbody class=\"text-center\">\n          <tr>\n            <td>\n              <div><h6>Silver</h6></div>\n              <div><h1>24<sup><span class=\"text-muted\"><i class=\"fa fa-dollar\"></i></span></sup></h1></div>\n              <div><small class=\"text-muted\">per month</small></div>\n            </td>\n            <td>\n              <div><h6>Gold</h6></div>\n              <div><h1>34<sup><span class=\"text-muted\"><i class=\"fa fa-dollar\"></i></span></sup></h1></div>\n              <div><small class=\"text-muted\">per month</small></div>\n            </td>\n            <td>\n              <div><h6>Diamond</h6></div>\n              <div><h1>54<sup><span class=\"text-muted\"><i class=\"fa fa-dollar\"></i></span></sup></h1></div>\n              <div><small class=\"text-muted\">per month</small></div>\n            </td>\n          </tr>\n          <tr>\n              <td>\n                <div><span class=\"text-muted\"><i class=\"fa fa-user\"></i></span>&nbsp;&nbsp;<span>3 Members</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-user\"></i></span>&nbsp;&nbsp;<span>5 Members</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-user\"></i></span>&nbsp;&nbsp;<span>15 Members</span></div>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                <div><span class=\"text-muted\"><i class=\"fa fa-refresh\"></i></span>&nbsp;&nbsp;<span>Monthly Backups</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-refresh\"></i></span>&nbsp;&nbsp;<span>Monthly Backups</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-refresh\"></i></span>&nbsp;&nbsp;<span>Monthly Backups</span></div>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                <div><span class=\"text-muted\"><i class=\"fa fa-lock\"></i></span>&nbsp;&nbsp;<span>Encryption</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-lock\"></i></span>&nbsp;&nbsp;<span>Encryption</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-lock\"></i></span>&nbsp;&nbsp;<span>Encryption</span></div>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                <div><span class=\"text-muted\"><i class=\"fa fa-envelope\"></i></span>&nbsp;&nbsp;<span>1,000 Messages</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-envelope\"></i></span>&nbsp;&nbsp;<span>10,000 Messages</span></div>\n              </td>\n              <td>\n                  <div><span class=\"text-muted\"><i class=\"fa fa-envelope\"></i></span>&nbsp;&nbsp;<span>100,000 Messages</span></div>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                <input type=\"button\" value=\"Buy Bundle\" [routerLink]=\"['/pricing/buy']\" class=\"btn btn-primary btn-sm\">\n              </td>\n              <td>\n                  <input type=\"button\" value=\"Buy Bundle\" [routerLink]=\"['/pricing/buy']\" class=\"btn btn-primary btn-sm\">\n              </td>\n              <td>\n                  <input type=\"button\" value=\"Buy Bundle\" [routerLink]=\"['/pricing/buy']\" class=\"btn btn-primary btn-sm\">\n              </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</section>"

/***/ }),
/* 1051 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div *ngIf=\"bundlearr==0\" class=\"row\">\n    <!-- <form (submit)=\"createbundle()\"> -->\n    <div class=\"col-md-4 form-group\">\n      <u>\n        <p class=\"lead\">Create configuration</p>\n      </u>\n\n      <div class=\"form-group\">\n        <label>Expiry</label>\n        <select (change)=\"selectchange($event)\" [(ngModel)]=\"_expiry\" name=\"_expiry\" class=\"form-control\" required>\n          <option value=\"\" disabled selected>Select Expiry</option>\n          <option value=\"1\">1 Month</option>\n          <option value=\"2\">2 Month</option>\n          <option value=\"3\">3 Month</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Encryption</label>\n        <select (change)=\"selectchange($event)\" [(ngModel)]=\"_encryption\" name=\"_encryption\" class=\"form-control\"\n          required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"enable\">Yes</option>\n          <option value=\"disable\">No</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Featureset</label>\n        <select (change)=\"selectchange($event)\" [(ngModel)]=\"_featureset\" name=\"_featureset\" class=\"form-control\"\n          required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"messaging\">SMS</option>\n          <option value=\"digital\">WhatsApp</option>\n          <option value=\"messaging,digital\">SMS & WhatsApp</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Throughput SMS</label>\n        <select (change)=\"selectchange($event)\" [(ngModel)]=\"_tpsms\" name=\"_tpsms\" class=\"form-control\" required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"0\">Don't buy throughput</option>\n          <option value=\"10\">10/minute</option>\n          <option value=\"50\">50/minute</option>\n          <option value=\"100\">100/minute</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Throughput WhatsApp</label>\n        <select (change)=\"selectchange($event)\" [(ngModel)]=\"_tpwa\" name=\"_tpwa\" class=\"form-control\" required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"0\">Don't buy throughput</option>\n          <option value=\"10\">10/minute</option>\n          <option value=\"50\">50/minute</option>\n          <option value=\"100\">100/minute</option>\n        </select>\n      </div>\n\n    </div>\n    <div class=\"col-md-4 text-center\" style=\"white-space: pre-line;\">\n      <!-- <p *ngIf=\"items!=''\" class=\"lead\" style=\"border:1px solid grey;\" >{{items}}</p> -->\n      <div *ngIf=\"items!=''\" [innerHTML]=\"items\" class=\"lead\" style=\"border:1px solid grey;\"></div>\n    </div>\n    <div class=\"col-md-4 text-center\">\n      <h6>The selected configuration will cost you:</h6>\n      <h1 style=\"font-size: 50px\">{{cost}} PKR</h1>\n      <div class=\"form-group\">\n        <hr>\n        <input type=\"button\" (click)=\"createbundle()\" value=\"Buy configuration\" class=\"btn btn-primary\">\n        <hr>\n      </div>\n    </div>\n    <!-- </form> -->\n  </div>\n\n  <div class=\"row\" *ngIf=\"bundlearr.length>0\">\n      <div class=\"col-md-12\">\n        <u> <p class=\"lead\">Configuration History</p></u>\n        <table class=\"table table-sm table-condensed table-bordered table-hover\">\n  \n          <thead>\n            <tr class=\"table-info\">\n              <th>ID</th>\n              <th>Encryption</th>\n              <th>Features</th>\n              <th>SMS TP</th>\n              <th>WA TP</th>\n              <th>Cost</th>\n              <th>Payment</th>\n              <th>Created</th>\n              <th>Expiry</th>\n              <th>CreatedBy</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of bundlearr\">\n              <td class=\"text-muted\">{{item._id}}</td>\n              <td class=\"text-muted\">{{item.encryption}}</td>\n              <td class=\"text-muted\">{{item.featureset}}</td>\n              <td class=\"text-muted\">{{item.smstp}}</td>\n              <td class=\"text-muted\">{{item.watp}}</td>\n              <td class=\"text-muted\">{{item.cost}}</td>\n              <td class=\"text-muted\">{{item.payment}}</td>\n              <td class=\"text-muted\">{{item.created}}</td>\n              <td class=\"text-muted\">{{item.expiry}}</td>\n              <td class=\"text-muted\">{{item.createdby}}</td>\n              <!-- <td class=\"text-muted text-danger\"><button (click)=\"ondelete( item._id )\" class=\"btn btn-danger\"><span>Delete\n                    <i class=\"fa fa-times\"></i></span></button></td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <hr>\n\n\n  <div class=\"row\" *ngIf=\"bundlearr.length > 0 && bundlearr[0].payment==true\">\n    <div class=\"col-md-4\">\n      <u>\n        <p class=\"lead\">Buy TopUp</p>\n      </u>\n      <div class=\"form-group\">\n        <label>SMS Credit</label>\n        <select (change)=\"selectchangecredit($event)\" [(ngModel)]=\"_smscredit\" name=\"_smscredit\" class=\"form-control\"\n          required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"1000\">1000</option>\n          <option value=\"10000\">10000</option>\n          <option value=\"100000\">100000</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>WhatsApp Credit</label>\n        <select (change)=\"selectchangecredit($event)\" [(ngModel)]=\"_whatsappcredit\" name=\"_whatsappcredit\" class=\"form-control\"\n          required>\n          <option value=\"\" disabled selected>Select</option>\n          <option value=\"1000\">1000</option>\n          <option value=\"10000\">10000</option>\n          <option value=\"100000\">100000</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-4 text-center\" style=\"white-space: pre-line;\">\n        <!-- <p *ngIf=\"itemscredit!=''\" class=\"lead\" style=\"border:1px solid grey;\">{{itemscredit}}</p> -->\n        <div *ngIf=\"itemscredit!=''\" [innerHTML]=\"itemscredit\" class=\"lead\" style=\"border:1px solid grey;\"></div>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <h6>Total Cost:</h6>\n        <h1 style=\"font-size: 50px\">{{costcredit}} PKR</h1>\n        <br>\n        <div class=\"form-group\">\n          <hr>\n          <input type=\"button\" (click)=\"buycredit()\" value=\"Buy credit\" class=\"btn btn-primary\">\n          <hr>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"creditarr.length>0\">\n      <div class=\"col-md-12\">\n        <u> <p class=\"lead\">TopUp History</p></u>\n        <table class=\"table table-sm table-condensed table-bordered table-hover\">\n  \n          <thead>\n            <tr class=\"table-info\">\n              <th>ID</th>\n              <th>SMS</th>\n              <th>WhatsApp</th>\n              <th>Cost</th>\n              <th>Payment</th>\n              <th>Created</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of creditarr\">\n              <td class=\"text-muted\">{{item._id}}</td>\n              <td class=\"text-muted\">{{item.smscredit}}</td>\n              <td class=\"text-muted\">{{item.whatsappcredit}}</td>\n              <td class=\"text-muted\">{{item.cost}}</td>\n              <td class=\"text-muted\">{{item.payment}}</td>\n              <td class=\"text-muted\">{{item.created}}</td>\n              <!-- <td class=\"text-muted text-danger\"><button (click)=\"ondelete( item._id )\" class=\"btn btn-danger\"><span>Delete\n                    <i class=\"fa fa-times\"></i></span></button></td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n\n</section>\n"

/***/ }),
/* 1052 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n\n  </div>\n\n\n  <p class=\"lead text-underline\"><u> Create Campaign </u></p>\n  <form (submit)=\"registercampaign()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n          <div class=\"form-group\" >\n              <label for=\"name\">Campaign File Upload</label>\n    \n              <!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n              <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n              <!-- button to trigger the file upload when submitted -->\n\n              <!-- <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    Upload\n              </button> -->\n    \n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">Please upload the contacts csv.</small>\n              <div class=\"row\" *ngFor=\"let item of uploader.queue\">\n                <div class=\"col-md-4\">\n                  {{item.file.name}}\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                  </div>\n                  \n                </div>\n                <div class=\"col-md-4 text-right\">\n                  <input type=\"button\" value=\"Upload\" (click)=\"item.upload()\" [disabled]=\"!uploader.getNotUploadedItems().length\" class=\"btn btn-sm btn-link\">\n                  <input type=\"button\" value=\"Cancel\" (click)=\"item.remove()\" class=\"btn btn-sm btn-link\">\n                </div>\n              </div>\n          </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Campaign Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Enter Campaign Name\" required>\n            <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name is unique throughout this application.</small>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Campaign Type</label>\n            <select class=\"form-control\" [(ngModel)]=\"type\" name=\"type\" required (change)=\"typechange($event)\">\n              <option value=\"\" disabled selected>Select Type</option>\n              <option value=\"static\">Static</option>\n              <option value=\"dynamic\">Dynamic</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"desc\">Desription</label>\n            <textarea name=\"description\" [(ngModel)]=\"description\" id=\"desc\" cols=\"30\" rows=\"4\" class=\"form-control\" required>Enter text here ..</textarea>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n\n        <div class=\"form-group\">\n            <label for=\"name\">Campaign File Upload Path</label>\n            <input type=\"text\" [(ngModel)]=\"path\" name=\"path\" class=\"form-control\"  placeholder=\"Please select and upload the file first\" required>\n            \n        </div>\n\n        <div class=\"clearfix\"></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"form-group text-center\">\n          <hr>\n          <input type=\"submit\" value=\"Create Campaign\" class=\"btn btn-primary btn-sm\">\n          <hr>\n        </div>\n      </div>\n\n    </div>\n  </form>\n</section>\n\n<section>\n  <p class=\"lead\"><u>Previous Campaigns</u></p>\n  <div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-sm table-hover table-bordered\">\n          <thead>\n              <tr class=\"table-info\">\n                <th>ID</th>\n                <th>Name</th>\n                <th>Desription</th>\n                <th>Type</th>\n                <th>File</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of campaignsArr\">\n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td class=\"text-muted\">{{item.name}}</td>\n                  <td class=\"text-muted\">{{item.description}}</td>\n                  <td class=\"text-muted\">{{item.type}}</td>\n                  <td class=\"text-muted\"><button class=\"btn btn-sm btn-link\" (click)=\"download(item.path)\">{{item.path}}</button></td>\n                  <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" (click)=\"removecampaign(item._id)\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                </tr>\n              </tbody>\n      </table>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1053 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <router-outlet></router-outlet> \n  </div>\n</section>\n"

/***/ }),
/* 1054 */
/***/ (function(module, exports) {

module.exports = "<section id=\"quickSection\">\n  <form (submit)=\"register()\">\n      <p class=\"lead\"><u>Create Campaign</u></p>\n  <div class=\"row\">\n        \n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <div><label>Preference</label></div>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" [(ngModel)]=\"preference\" (change)=\"prefchange($event)\" name=\"preference\" value=\"topic\" required> To Topic\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" [(ngModel)]=\"preference\" name=\"preference\" (change)=\"prefchange($event)\" value=\"db\" required> To DB\n                </label>\n            </div>\n            <div class=\"form-group\" *ngIf=\"preferenceselected\">\n                <label for=\"subject\">Select Topic</label>\n                <select name=\"topic\" [(ngModel)]=\"topic\" id=\"topic\" class=\"form-control\">\n                  <option value=\"none\" disabled selected>Select topic</option>\n                </select>\n            </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name for this notifciation ..\" required>\n              <small class=\"text-muted\">This name will be used to identify this campaign.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"subject\">Select category</label>\n              <select name=\"category\" [(ngModel)]=\"category\" id=\"subject\" class=\"form-control\" required>\n                  <option value=\"\" disabled selected>Select category</option>\n                  <option value=\"electricity\">Electricity</option>\n                  <option value=\"security\">Security</option>\n                  <option value=\"water\">Water</option>\n                  <option value=\"gas\">Gas</option>\n                  <option value=\"misc\">Misc</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"language\">Select Language</label>\n              <select name=\"language\" [(ngModel)]=\"language\" id=\"language\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Language</option>\n                <option value=\"english\">English</option>\n                <option value=\"urdu\">Urdu</option>\n              </select>\n          </div>\n\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div class=\"form-group\">\n              <label for=\"template\">Select Template</label>\n              <select id=\"template\" (change)=\"templatechange($event)\" class=\"form-control\">\n                <option value=\"\" disabled selected>Select Template</option>\n                <option   *ngFor = \"let item of templatesArr\" [value]=\"item.desc\">{{item.name}}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"msg\">Message / SMS</label>\n              <input type=\"text\" name=\"message\" [(ngModel)]=\"message\" id=\"msg\" class=\"form-control\" (change)=\"k($e)\"  placeholder=\"Enter text here\" required>\n              <small class=\"text-muted\">Characters: <span class=\"msghelper\">{{messagelen}}</span> </small>\n          </div>\n          <div class=\"form-group text-center\">\n            <br><br><br>\n            <hr>\n              <input type=\"submit\" value=\"Send Notification\" class=\"btn btn-primary\">\n            <hr>\n          </div>\n        </div>            \n\n  </div>\n</form>\n</section>\n"

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p class=\"lead\"><u>Contacts</u></p>\n  <div class=\"row\">\n    \n    <div class=\"col-md-3 form-group\">\n        <label>Search Contact</label>\n      <input type=\"text\" [(ngModel)]=\"searchString\" name=\"searchString\" class=\"form-control\" name=\"\" id=\"\" placeholder=\"Search Contact ...\">\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n        <small>Saved Contacts : {{contactsArr.length}}</small>\n        <div class=\"contactswrapper\">\n\n\n            <div class=\"contact\" *ngFor=\"let item of contactsArr | masksfilter : 'fullname' : searchString;\">\n              <div class=\"thumbnail\">\n                <input type=\"checkbox\" (change)=\"checkchange($event, item._id, item.fullname)\" [value]=\"item._id\">\n                <!-- <span><i class=\"fas fa-user-circle\"></i></span>&nbsp;&nbsp; -->\n              </div>\n              <div class=\"name\">\n                <div>{{item.fullname}}</div>\n                <div> ({{item.phone}})</div>\n              </div>\n              &nbsp;&nbsp;&nbsp;\n              <div class=\"checkbox\">\n                <span (click)=\"deletecontact(item._id)\"><i class=\"fa fa-times\"></i></span>\n                \n              </div>\n            </div>\n\n        </div>\n        \n    </div>\n\n  </div>\n\n    <div class=\"clearfix\"></div>\n    <form (submit)=\"registergroup()\">\n      <p class=\"lead\"><u>Create New Group</u></p>\n      <div class=\"row\">\n      <div class=\"col-md-3 form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"\" placeholder=\"Enter Name ...\" required>\n      </div>\n      <div class=\"col-md-3 form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" id=\"\" placeholder=\"Short Description ...\" required>\n      </div>\n      <div class=\"col-md-3 form-group\">\n          <div><label style=\"visibility:hidden\">Description</label></div>\n          <input type=\"submit\" value=\"Create New Group\" class=\"btn btn-primary\">\n        </div>\n      \n    </div>\n  </form>\n\n\n  <hr>\n\n  <p class=\"lead\"><u>Update Group</u></p>\n  <form (submit)=\"updategroup()\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <select class=\"form-control\" (change)=\"groupschange($event)\" [(ngModel)]=\"groups\" name=\"groups\" required>\n        <option value=\"\" selected disabled>Select a value</option>\n        <option [value]=\"item._id\" *ngFor=\"let item of allgroups\">{{item.name}}</option>\n      </select>\n      <br>\n      <input type=\"submit\" value=\"Update\" class=\"btn btn-primary\">\n    </div>\n  </div>\n</form>\n  \n</section>\n\n\n{{localcontact}}\n"

/***/ }),
/* 1056 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <form (submit)=\"registerissue()\">\n\n  <p class=\"lead\"><u>Create New Ticket</u></p>\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <div class=\"form-group\">\n        <label>Select Mask/Shortcode</label>\n        <select tabindex=\"1\" [(ngModel)]=\"maskforiegn\" (change)=\"maskchange($event)\" name=\"maskforiegn\" id=\"\" class=\"form-control\" required>\n          <option value=\"\" disabled selected>Select Mask/Shortcode</option>\n          <option value=\"nomask\" >It is not a masking/shortcode issue!</option>\n          <option [value]=\"item.mask\" *ngFor=\"let item of masksArr\">{{item.mask}} ({{item.type}})</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Reason for a problem</label>\n        <input tabindex=\"3\" type=\"text\" [(ngModel)]=\"problem\" name=\"problem\" id=\"\" class=\"form-control\" placeholder=\"Enter reason for a problem ..\" required>\n      </div>\n      <div class=\"form-group\">\n        <input tabindex=\"5\" type=\"submit\" class=\"btn btn-primary\" value=\"Report Problem\">\n      </div>\n    </div>\n    <div class=\"col-md-6 form-group\">\n        <div class=\"form-group\">\n            <label>Select Problematic Feature</label>\n            <select tabindex=\"2\" name=\"feature\" [(ngModel)]=\"feature\" (change)=\"featurechange($event)\" class=\"form-control\" required>\n              <option value=\"\" disabled selected>Select Type</option>\n              <option value=\"send\">Message Sending</option>\n              <option value=\"receive\">Message Receiving</option>\n              <option value=\"delivery\">Message Delivery</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Remarks over the issue</label>\n            <input tabindex=\"4\" type=\"text\" [(ngModel)]=\"remarks\" name=\"remarks\" id=\"\" class=\"form-control\" placeholder=\"Enter Remarks over the issue ..\" required>\n          </div>\n    </div>\n  </div>\n\n\n</form>\n</section>\n\n\n\n"

/***/ }),
/* 1057 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"dashboardSection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n\n          <div class=\"form-group\">\n            <select (change)=\"childchange($event)\">\n              <option value=\"\" disabled selected>Select Account</option>\n              <option value={{selfemail}} >Master ({{selfemail}})</option>\n              <option *ngFor=\"let item of childsArr\" [value]=\"item.email\">{{item.fullname}} ({{item.email}})</option>\n            </select><br>\n            <small class=\"text-muted\">Select and get the information</small><br>\n            <label *ngIf=\"doughnutChartData.length==0\"  class=\"text-danger\">No information found.</label>\n          </div>\n\n\n\n\n\n\n\n\n        <div *ngIf=\"wanted\">\n          <label>Account Transaction Volume</label>\n          <div style=\"display: block\">\n            <canvas baseChart\n                    [datasets]=\"barChartData\"\n                    [labels]=\"barChartLabels\"\n                    [options]=\"barChartOptions\"\n                    [legend]=\"barChartLegend\"\n                    [chartType]=\"barChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </div>\n\n\n        </div>\n      </div>\n\n      \n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div *ngIf=\"doughnutChartData.length>0\" class=\"col-md-10 offset-md-1\">\n                <div style=\"display: block\">\n                    <canvas baseChart\n                                [data]=\"doughnutChartData\"\n                                [labels]=\"doughnutChartLabels\"\n                                [chartType]=\"doughnutChartType\"\n                                (chartHover)=\"chartHovered($event)\"\n                                (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                  </div>\n            </div>\n        </div>\n      </div>\n\n      <br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <div class=\"row\" *ngIf=\"wanted\">\n        <div class=\"col-md-8\">\n          <label>Schduling Tracker</label>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n            <thead>\n              <tr class=\"table-info\">\n                <th>Type</th>\n                <th>Content</th>\n                <th>Created</th>\n                <th>Sent</th>\n                <th>Outbox</th>\n                <th>Total</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Quick</td>\n                <td class=\"text-muted\">Do as ...</td>\n                <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                <td class=\"text-muted\">500</td>\n                <td class=\"text-muted\">200</td>\n                <td class=\"text-muted\">700</td>\n                <td class=\"text-muted\">Pending</td>\n              </tr>\n              <tr>\n                <td>Drip/Bulk</td>\n                <td class=\"text-muted\">Do as ...</td>\n                <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                <td class=\"text-muted\">--</td>\n                <td class=\"text-muted\">--</td>\n                <td class=\"text-muted\">--</td>\n                <td class=\"text-muted\">Scheduled (29/6/2018 6:00:00)</td>\n              </tr>\n              <tr>\n                <td>Bulk</td>\n                <td class=\"text-muted\">Do as ...</td>\n                <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                <td class=\"text-muted\">500</td>\n                <td class=\"text-muted\">200</td>\n                <td class=\"text-muted\">700</td>\n                <td class=\"text-muted\">Completed</td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-4\">\n          <label>Credit Usage</label>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n            <thead>\n              <tr class=\"table-info\">\n                <th>&nbsp;</th>\n                <th>Sent</th>\n                <th>Recieved</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Yesterday</td>\n                <td class=\"text-muted\">500</td>\n                <td class=\"text-muted\">200</td>\n              </tr>\n              <tr>\n                <td>This Month</td>\n                <td class=\"text-muted\">500</td>\n                <td class=\"text-muted\">200</td>\n              </tr>\n              <tr>\n                <td>Previous Month</td>\n                <td class=\"text-muted\">500</td>\n                <td class=\"text-muted\">200</td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),
/* 1058 */
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n    <p class=\"lead\"><u> Summary</u></p>\n    <p class=\"text-muted\">Total # of jobs created.</p>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"row\">\n            <div *ngIf=\"doughnutChartData.length>0\" class=\"col-md-10 offset-md-1\">\n                <div style=\"display: block\">\n                    <canvas baseChart\n                                [data]=\"doughnutChartData\"\n                                [labels]=\"doughnutChartLabels\"\n                                [chartType]=\"doughnutChartType\"\n                                (chartHover)=\"chartHovered($event)\"\n                                (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                  </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n            <section id=\"quick\">\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <div>\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-sm table-bordered table-hover\">\n                              <thead>\n                                <tr class=\"table-info\">\n                                  <th>Name</th>\n                                  <th>Created</th>\n                                  <th>Category</th>\n                                  <th>Message</th>\n                                  <th>Sent</th>\n                                  <th>Seen</th>\n                                  <th>Ack'd</th>\n                                  <th>Reported</th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let item of notificationsArr\">\n                                  <td class=\"text-muted\">{{item.name}}</td>\n                                  <td class=\"text-muted\">{{item.created}}</td>\n                                  <td class=\"text-muted\">{{item.category}}</td>\n                                  <td class=\"text-muted\">{{item.message}}</td>\n                                  <td class=\"text-muted\">{{item.sent}}</td>\n                                  <td class=\"text-muted\">{{item.seen}}</td>\n                                  <td class=\"text-muted\">{{item.ack}}</td>\n                                  <td ><button class=\"btn btn-warning btn-sm\" (click)=\"reportedclick(item.notificationid)\" [disabled]=\"item.reported==0\" >{{item.reported}}</button></td>\n                                </tr>\n                              </tbody>\n                            </table>\n                      </div>\n                    </div>\n              </div>\n              <div class=\"col-md-2\">\n              </div>\n            </div>\n              \n          </section>\n  \n    \n  \n      </div>\n  \n      <div class=\"col-md-4\">\n  \n      </div>\n    </div>\n  \n  </section>\n  "

/***/ }),
/* 1059 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"dashboardSection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\"  style=\"border-left:1px solid rgba(0,0,0,.1)\">\n\n      <p>\n        <u>My Account:</u>\n      </p>\n      <div class=\"row\" *ngIf=\"obj!=null\">\n        <div class=\"col-md-3\">\n          <div class=\"card cardbg mb-3\">\n            <div class=\"card-header\">Welcome, {{user.fullname}}</div>\n            <div class=\"card-body\" style=\"min-height:66px\">\n              <p class=\"card-text\">ID: {{user.id}}</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"card cardbg mb-3\">\n            <div class=\"card-header\">Email</div>\n            <div class=\"card-body\" style=\"min-height:66px\">\n              <p class=\"card-text\">{{obj.email}}</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"card cardbg mb-3\">\n            <div class=\"card-header\">Phone</div>\n            <div class=\"card-body\" style=\"min-height:66px\">\n              <p class=\"card-text\">{{obj.phone}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <p>\n        <u>My Resources:</u>\n      </p>\n      <div class=\"row\" *ngIf=\"obj!=null\">\n\n        <div class=\"col-md-3\">\n          <div class=\"card cardbg mb-3\">\n            <div class=\"card-header\">Expiration (Bundle)</div>\n            <div class=\"card-body\" style=\"min-height:66px\">\n              <p class=\"card-text\">{{obj.expirybundle}}</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"card cardbg mb-3\">\n            <div class=\"card-header\">Encryption</div>\n            <div class=\"card-body\" style=\"min-height:66px\">\n              <p class=\"card-text\">{{obj.encryption}}</p>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"row\" *ngIf=\"obj!=null\">\n          <div class=\"col-md-3\">\n            <div class=\"card cardbg mb-3\">\n              <div class=\"card-header\">Throuput (SMS)</div>\n              <div class=\"card-body\" style=\"min-height:66px\">\n                <p class=\"card-text\">{{obj.smstp}}</p>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-3\">\n            <div class=\"card cardbg mb-3\">\n              <div class=\"card-header\">Throuput (Digital)</div>\n              <div class=\"card-body\" style=\"min-height:66px\">\n                <p class=\"card-text\">{{obj.watp}}</p>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-3\">\n            <div class=\"card cardbg mb-3\">\n              <div class=\"card-header\">Remaining (SMS)</div>\n              <div class=\"card-body\" style=\"min-height:66px\">\n                <p class=\"card-text\">{{obj.creditsms}}</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n              <div class=\"card cardbg mb-3\">\n                <div class=\"card-header\">Remaining (Digital)</div>\n                <div class=\"card-body\" style=\"min-height:66px\">\n                  <p class=\"card-text\">{{obj.creditwhatsapp}}</p>\n                </div>\n              </div>\n            </div>\n  \n  \n        </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

module.exports = "<section id=\"quickSection\">\n  <form (submit)=\"registerwhatsapp()\">\n    <p class=\"lead\"><u>Compose WhatsApp Message</u></p>\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" required id=\"name\" class=\"form-control\" placeholder=\"Enter name for this operation ..\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"language\">Select Language</label>\n                <select [(ngModel)]=\"language\" name=\"language\" id=\"language\"  class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Language</option>\n                  <option value=\"english\">English</option>\n                  <option value=\"urdu\">Urdu</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label>Operation Type</label>\n                <br>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" (change)=\"opchange($event)\" name=\"optype\" value=\"\"> No Template\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"optype\" (change)=\"opchange($event)\" value=\"static\"> Static Template\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"optype\" (change)=\"opchange($event)\" value=\"dynamic\"> Dynamic Template\n                </label>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"campaign\">Campaign Name</label>\n                <select (change)=\"campaignchange($event)\" name=\"campaign\" id=\"campaign\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Campaign</option>\n                  <option *ngFor=\"let item of campaignsArr\" [value]=\"item.path\">{{item.name}}</option>\n                </select>\n            </div>\n\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n                <label for=\"template\">Select Template</label>\n                <select (change)=\"templatechange($event)\" name=\"template\" id=\"template\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Template</option>\n                  <option *ngFor=\"let item of templatesArr\" [value]=\"item.description\">{{item.name}}</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"msg\">Message / SMS</label>\n                <textarea (change)=\"msgchange()\" (input)=\"msgchange()\" [(ngModel)]=\"msg\" name=\"msg\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\" required></textarea>\n                <small class=\"text-muted\">Characters: <span class=\"msghelper\">{{msgchars}}</span> &nbsp;&nbsp;</small>\n            </div>\n\n\n          <div class=\"form-group text-center\">\n            <div class=\"clearfix\"></div>\n            <hr>\n              <input type=\"submit\" value=\"Send WhatsApp Messages\" class=\"btn btn-primary\">\n            <hr>\n          </div>\n        </div>            \n\n  </div>\n</form>\n</section>\n\n\n"

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

module.exports = "  <section id=\"quickSection\">\n  <p class=\"lead\"><u>Compose Drip Message(s)</u></p>\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" placeholder=\"Enter name for this operation ..\" required>\n            </div>\n          <div class=\"form-group\">\n              <label for=\"language\">Select Language</label>\n              <select name=\"language\" [(ngModel)]=\"language\" (change)=\"langchange($event)\" id=\"language\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Language</option>\n                <option value=\"english\">English</option>\n                <option value=\"urdu\">Urdu</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"masking\">Select Masking</label>\n              <select name=\"masking\" (change)=\"maskingchange($event)\" [(ngModel)]=\"masking\" id=\"masking\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Masking</option>\n                <option *ngFor=\"let item of masksarr\" [value]=\"item.mask\">{{item.mask}} ({{item.type}})</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"campaign\">Campaign Name</label>\n            <select name=\"campaign\" [(ngModel)]=\"campaign\" required (change)=\"campchange($event)\" id=\"campaign\" class=\"form-control\">\n              <option value=\"\" disabled selected>Select Campaign</option>\n              <option *ngFor=\"let item of campaignsArr\" [value]=\"item.path\">{{item.name}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"template\">Template Type</label>\n          <select (change)=\"templatechange($event)\" id=\"template\" class=\"form-control\">\n            <option value=\"\" disabled selected>Select Template</option>\n            <option *ngFor=\"let item of templatesArr\" [value]=\"item.description\">{{item.name}}</option>\n          </select>\n        </div>\n          <div class=\"form-group\">\n              <label for=\"msg\">Message / SMS</label>\n              <textarea name=\"msg\" [(ngModel)]=\"msg\" (input)=\"msgchange($event)\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\"></textarea>\n              <small class=\"text-muted\">Characters Remaining: <span class=\"msghelper\">{{msgchars}}</span> &nbsp;&nbsp;|&nbsp;&nbsp; No. of Messages:  <span class=\"msghelper\">{{msgcount}}</span></small>\n          </div>\n\n        </div>\n        <div class=\"col-md-6\">\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Date e.g. (YYYY-MM-DD) 2018-07-20</label>\n                    <input type=\"text\" name=\"datefrom\" [(ngModel)]=\"datefrom\" required class=\"form-control\" placeholder=\"Date From\">\n                </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Date e.g. (YYYY-MM-DD) 2018-07-20</label>\n                    <input type=\"text\" name=\"dateto\" [(ngModel)]=\"dateto\" required class=\"form-control\" placeholder=\"Date To\">\n                </div>\n                </div>\n              </div>\n            </div>\n            \n\n          <div class=\"form-group\">\n            <label for=\"template\">Frequency</label>\n            <select (change)=\"frequencychange($event)\" name=\"frequency\" [(ngModel)]=\"frequency\" required class=\"form-control\">\n              <option value=\"\" selected disabled>Select Frequency</option>\n              <option value=1>1</option>\n              <option value=2>2</option>\n              <option value=3>3</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\" *ngFor=\"let item of arr\">\n          <label for=\"name\">{{item.value}} Message Time</label>\n          <input type=\"text\" id={{item.value}} class=\"form-control\" placeholder=\" e.g. (hh:mm a) 08:30 pm\">\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"clearfix\"></div>\n          <hr>\n            <!-- <input type=\"button\" (click)=\"test()\" value=\"Test SMS\" class=\"btn alternatecolor\"> -->\n            <input type=\"button\" (click)=\"register()\" value=\"Send SMS\" class=\"btn btn-primary\">\n            <!-- <input type=\"button\" value=\"Flash\" class=\"btn alternatecolor\"> -->\n          <hr>\n        </div>\n      </div>            \n\n  </div>\n</section>\n\n\n"

/***/ }),
/* 1062 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p class=\"lead text-underline\"><u> Create Template </u></p>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Enter Campaign Name\">\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name is unique throughout this application.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Desription</label>\n              <textarea name=\"desc\" id=\"desc\" cols=\"30\" rows=\"4\" class=\"form-control\">Enter text here ..</textarea>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template File Upload</label>\n              <input type=\"file\" class=\"form-control\" id=\"file\" aria-describedby=\"file\" placeholder=\"Choose File\">\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">Please upload the contacts csv.</small>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"clearfix\"></div>\n          <div class=\"form-group text-center\">\n            <hr>\n            <input type=\"button\" value=\"Create Template\" class=\"btn btn-primary btn-sm\">\n            <hr>\n          </div>\n        </div>\n  \n      </div>\n    </form>\n  </section>\n  \n  <section>\n    <p class=\"lead\"><u>Previous Template</u></p>\n    <div>\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover table-bordered\">\n            <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Name</th>\n                  <th>Desription</th>\n                  <th>File</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr>\n                    <td class=\"text-muted\">124</td>\n                    <td class=\"text-muted\">Template 1</td>\n                    <td class=\"text-muted\">Test Template</td>\n                    <td class=\"text-muted\">template_1.csv</td>\n                    <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" disabled><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-muted\">421</td>\n                      <td class=\"text-muted\">Template 2</td>\n                      <td class=\"text-muted\">Test Template 2</td>\n                      <td class=\"text-muted\">template_2.csv</td>\n                      <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" disabled><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1063 */
/***/ (function(module, exports) {

module.exports = "<br>\n<section id=\"footerSection\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1 text-center\">\n        <p >&copy; All Rights Reserved | 2018 | DevLabs Inc.</p>\n    </div>\n    \n  </div>\n</section>"

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <p class=\"lead\"><u>Groups</u></p>\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"groupscontainer\">\n\n\n\n        <div class=\"group\" *ngFor=\"let item of groupsArr\">\n          <div class=\"top\">\n            <span class=\"thumbnail\">\n                <span><i class=\"fas fa-user-circle\"></i></span>&nbsp;&nbsp;\n            </span>\n            <span class=\"name\">\n                {{item.name}}\n            </span>\n            <span class=\"action float-right\">\n                <span (click)=\"removegroup(item._id)\"><i class=\"fa fa-times\"></i></span>\n            </span>\n          </div>\n          <div class=\"bottom\">\n\n            <div class=\"bcon\" *ngFor=\"let contact of item.contacts \">\n                <span class=\"thumbnail\">\n                    <span><i class=\"fas fa-user-circle\"></i></span>&nbsp;&nbsp;\n                </span>\n                <span class=\"name\">\n                    {{contact.name}}\n                    <!-- {{name}} -->\n                </span>\n                <span class=\"action float-right\">\n                    <span (click)=\"removecontactfromgroup(contact.contact,item._id)\"><i class=\"fa fa-times\"></i></span>\n                </span>\n            </div>\n\n\n\n          </div>\n        </div>\n\n      \n      \n      </div>\n      \n\n\n    </div>\n    \n  </div>\n  <br>\n\n    \n  </section>\n  "

/***/ }),
/* 1065 */
/***/ (function(module, exports) {

module.exports = "<app-topbarstatic></app-topbarstatic>\n\n<br>\n<section id=\"homeSection\">\n\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"row\">\n        <div class=\"col-md-8\" id=\"homeleft\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img src=\"https://cdnb.artstation.com/p/assets/images/images/009/584/165/original/abhilash-nair-mango-plucking-for-gif.gif?1519794381\">\n            </div>\n            <div class=\"col-md-8\">\n                <h3 style=\"color:#333\">Some things that we offer ..</h3>\n                <p class=\"lead text-muted \">\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Minus labore commodi vero obcaecati unde debitis, quis, \n                    magni, ea cumque beatae animi! Ex animi deserunt libero distinctio suscipit nulla repudiandae id?\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                </p>\n                <p class=\"lead text-muted\">\n                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Esse, pariatur consectetur laudantium voluptatibus, quam deleniti at, \n                  architecto doloremque aspernatur dolorem neque earum rerum. Est nostrum cupiditate cumque ab atque aliquid?\n                </p>\n                <br>\n                <div class=\"text-right arrow\">\n                  <span><i class=\"fa fa-arrow-circle-o-right fa-3x\"></i></span>\n                </div>\n            </div>\n          </div>\n        </div>\n    \n        <div class=\"col-md-4\">\n          <div class=\"margin\"></div>\n          <router-outlet></router-outlet>\n        </div>\n      </div>  \n    </div>\n    \n  </div>\n\n\n\n  \n</section>\n\n\n"

/***/ }),
/* 1066 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"hybridsection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <app-navbar></app-navbar>\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./compose']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-plus-circle\"></i></span>\n                </div>\n                <div>\n                  Compose\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./inbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <div>\n                  Inbox\n                </div>\n                <div>\n                  <span class=\"badge\">10</span>\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./outbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-tasks\"></i></span>\n                </div>\n                <div>\n                  Outbox\n                </div>\n                <div>\n                  <span class=\"badge\">5</span>\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./sent']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-paper-plane\"></i></span>\n                </div>\n                <div>\n                  Sent\n                </div>\n                <div>\n                  <span class=\"badge\">2</span>\n                </div>\n            </div>\n          </div>\n          \n          <hr>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./dashboard']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-anchor\"></i></span>\n                </div>\n                <div>\n                  Dashboard\n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" *ngIf=\"required\" [routerLink]=\"['./templates']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-bullseye\"></i></span>\n                </div>\n                <div>\n                  Templates\n                </div>\n            </div>\n          </div>\n          \n          \n      </div>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1067 */
/***/ (function(module, exports) {

module.exports = "<section id=\"quickSection\">\n  <form (submit)=\"register()\">\n    <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input tabindex=\"1\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name for this notifciation ..\" required>\n                <small class=\"text-muted\">This name will be used to identify this operation.</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"subject\">Select masking</label>\n                <select (change)=\"maskingchange($event)\" required tabindex=\"3\" name=\"masking\" [(ngModel)]=\"masking\" id=\"masking\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select masking</option>\n                  <option value=\"Test\">Test</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"language\">Select Language</label>\n                <select (change)=\"langchange($event)\" tabindex=\"4\" name=\"language\" [(ngModel)]=\"language\" required id=\"language\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Language</option>\n                  <option value=\"english\">English</option>\n                  <option value=\"urdu\">Urdu</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"msg\">Message / SMS</label>\n                <textarea (input)=\"msgchange($event)\" required tabindex=\"6\" name=\"msg\" [(ngModel)]=\"msg\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\"></textarea>\n                <small class=\"text-muted\">Characters Count: <span class=\"msghelper\">{{msgchars}}</span>&nbsp;Messages: <span class=\"msghelper\">{{msgcount}}</span> </small>\n            </div>\n\n          </div>\n          <div class=\"col-md-6 form-group\">\n\n            <div tabindex=\"7\" class=\"form-group\">\n                <label>Double Locking</label>\n                <br>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"locking\" required value=\"enabled\" (change)=\"lockchange($event)\" required> Enabled\n                </label>&nbsp;&nbsp;&nbsp;\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" name=\"locking\" required value=\"disabled\"  (change)=\"lockchange($event)\" required> Disabled\n                </label>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"account\">Account #</label>\n                <input tabindex=\"8\" type=\"text\" [(ngModel)]=\"account\" name=\"account\" id=\"account\" class=\"form-control\" placeholder=\"Enter account number ..\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"Password\">Password</label>\n                <input tabindex=\"9\" type=\"password\" (input)=\"pc($event)\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Enter account number ..\" required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"button\" value=\"Verify\" class=\"btn btn-dark btn-sm\" (click)=\"verify()\"><span *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-spin\"></i></span>\n            </div>\n            <div class=\"form-group text-center\">\n                \n                <hr>\n                  <input [disabled]=\"!verified\" tabindex=\"11\" type=\"submit\" value=\"Send Message\" class=\"btn btn-primary\">\n                <hr>\n              </div>\n\n          </div>            \n  \n    </div>\n  </form>\n  </section>\n  \n  "

/***/ }),
/* 1068 */
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n    <p class=\"lead\"><u> Summary</u></p>\n    <p class=\"text-muted\">Total # of jobs created for each respective category</p>\n    <div class=\"row\" *ngIf=\"something\">\n      <div class=\"col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1\">\n              <div style=\"display: block\">\n                  <canvas baseChart\n                              [data]=\"doughnutChartData\"\n                              [labels]=\"doughnutChartLabels\"\n                              [chartType]=\"doughnutChartType\"\n                              (chartHover)=\"chartHovered($event)\"\n                              (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n              <section id=\"quick\">\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                    <div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-sm table-bordered table-hover\">\n                                <thead>\n                                  <tr class=\"table-info\">\n                                    <th>Name</th>\n                                    <th>Created</th>\n                                    <th>Locking</th>\n                                    <th>Content</th>\n                                    <th>Sent</th>\n                                    <th>N. Sent</th>\n                                    <th>Seen</th>\n                                    <th>Ack'd</th>\n                                    <th>Reported</th>\n                                    <th>Status</th>\n                                    <th>Action</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor = \"let item of hybridArr\">\n                                    <td class=\"text-muted\">{{item.name}}</td>\n                                    <td class=\"text-muted\">{{item.created}}</td>\n                                    <td class=\"text-muted\">{{item.locking}}</td>\n                                    <td class=\"text-muted\">{{item.msg}}</td>\n                                    <td class=\"text-muted\">{{item.numbers.length}}</td>\n                                    <td class=\"text-muted\">{{item.tokens.length}}</td>\n                                    <td class=\"text-muted\">0</td>\n                                    <td class=\"text-muted\">0</td>\n                                    <td class=\"text-muted\">0</td>\n                                    <td class=\"text-muted\">sent</td>\n                                    <td ><button class=\"btn btn-warning btn-sm\" (click)=\"removehybrid(item.name)\">Delete</button></td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"col-md-2\">\n                </div>\n              </div>\n                \n            </section>\n    \n      \n    \n        </div>\n    \n        <div class=\"col-md-4\">\n    \n        </div>\n      </div>\n  \n  </section>\n  "

/***/ }),
/* 1069 */
/***/ (function(module, exports) {

module.exports = "<section id=\"inboxSection\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-hybridinboxsender></app-hybridinboxsender>\n      </div>\n      <div class=\"col-md-9\">\n        <app-hybridinboxdetails></app-hybridinboxdetails>\n      </div>\n    </div>\n </section>\n  "

/***/ }),
/* 1070 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div>\n      <input type=\"text\" class=\"form-control\" readonly id=\"sender\" value=\"+921234567\">\n    </div>\n  \n    <div id=\"inboxSection\">\n  \n  \n      <!-- senders -->\n      <div class=\"messageContainer\">\n          <div class=\"left\">\n              <div class=\"carot\">\n                <span><i class=\"fa fa-caret-left\"></i></span>\n              </div>\n              <div class=\"msg\">\n                <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n                <b><small>10:00am</small></b>\n              </div>\n            </div>\n      </div>\n  \n      <!-- ours -->\n      <div class=\"messageContainer\">\n          <div class=\"right\">\n              <div class=\"msg\">\n                <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n                <b><small>10:00am</small></b>\n              </div>\n              <div class=\"carot\">\n                  <span><i class=\"fa fa-caret-right\"></i></span>\n                </div>\n            </div>\n      </div>\n  \n      <!-- senders -->\n      <div class=\"messageContainer\">\n          <div class=\"left\">\n              <div class=\"carot\">\n                <span><i class=\"fa fa-caret-left\"></i></span>\n              </div>\n              <div class=\"msg\">\n                <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n                <b><small>10:00am</small></b>\n              </div>\n            </div>\n      </div>\n  \n      <!-- ours -->\n      <div class=\"messageContainer\">\n          <div class=\"right\">\n              <div class=\"msg\">\n                <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n                <b><small>10:00am</small></b>\n              </div>\n              <div class=\"carot\">\n                  <span><i class=\"fa fa-caret-right\"></i></span>\n                </div>\n            </div>\n      </div>\n  \n  \n  \n  \n  \n  \n  \n      \n    </div>\n  \n    <div id=\"quickSection\">\n      <div id=\"quickcontainer\">\n        <div class=\"quick\">\n          <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n        </div>\n        <div class=\"quick\">\n          <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n        </div>\n        <div class=\"quick\">\n          <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n        </div>\n        <div class=\"quick\">\n          <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n        </div>\n      </div>\n      <div id=\"newquick\">\n        <span><i class=\"fas fa-plus-circle\"></i></span>\n      </div>\n    </div>\n  \n    <div id=\"writeSection\">\n      <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"4\" class=\"form-control\">Write Something Here..</textarea>\n      <div class=\"footer\"><button class=\"btn btn-primary\">Send</button></div>\n    </div>\n  \n  </section>"

/***/ }),
/* 1071 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div>\n      <input type=\"text\" name=\"searchbar\" id=\"searchbar\" class=\"form-control\" placeholder=\"Search Contact\">\n    </div>\n    <!-- sender container -->\n    <div id=\"sendercontainer\">\n      <!-- single item -->\n      <div class=\"item\">\n              <div class=\"thumbnail\">\n                  <span><i class=\"far fa-user-circle\"></i></span>\n              </div>\n              <div class=\"desc\">\n                  <label>+12345678</label>\n                  <p>I want to avail your services but i dont know</p>\n                  <small>9:30 pm</small>\n              </div>\n      </div>\n  \n  \n      <div class=\"item\">\n          <div class=\"thumbnail\">\n              <span><i class=\"far fa-user-circle\"></i></span>\n          </div>\n          <div class=\"desc\">\n              <label>+12345678</label>\n              <p>I want to avail your services but i dont know</p>\n              <small>9:30 pm</small>\n          </div>\n      </div>\n  \n  \n      <div class=\"item\">\n          <div class=\"thumbnail\">\n              <span><i class=\"far fa-user-circle\"></i></span>\n          </div>\n          <div class=\"desc\">\n              <label>+12345678</label>\n              <p>I want to avail your services but i dont know</p>\n              <small>9:30 pm</small>\n          </div>\n      </div>\n  \n            \n    </div>\n  </section>\n  "

/***/ }),
/* 1072 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"\">\n      <div class=\"table-responsive\">\n          <p class=\"text-muted\">These messages are currently being sent.</p>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n              \n              <thead>\n                <tr class=\"table-info\">\n                  <th>To</th>\n                  <th>Message</th>\n                  <th>Created</th>\n                  <th>Status</th>\n                  <th>Msg ID</th>\n                  <th>Server ID</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>921234567</td>\n                  <td class=\"text-muted\">Do as they ...</td>\n                  <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                  <td class=\"text-muted\">\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span><i class=\"fa fa-circle\"></i></span>\n                  </td>\n                  <td class=\"text-muted\">1325725_a4</td>\n                  <td class=\"text-muted\">172.567.15.113</td>\n                </tr>\n                <tr>\n                    <td>921234567</td>\n                    <td class=\"text-muted\">Do as they ...</td>\n                    <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                    <td class=\"text-muted\">\n                      <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                      <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                      <span><i class=\"fa fa-circle\"></i></span>\n                      <span><i class=\"fa fa-circle\"></i></span>\n                    </td>\n                    <td class=\"text-muted\">1325725_a4</td>\n                    <td class=\"text-muted\">172.567.15.113</td>\n                  </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1073 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"\">\n      <div class=\"table-responsive\">\n          <p class=\"text-muted\">These messages sent from the system.</p>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n              \n              <thead>\n                <tr class=\"table-info\">\n                  <th>To</th>\n                  <th>Message</th>\n                  <th>Sent</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>921234567</td>\n                  <td class=\"text-muted\">Do as they ...</td>\n                  <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                  <td class=\"text-muted\">\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span><i class=\"fa fa-circle\"></i></span>\n                  </td>\n                </tr>\n                <tr>\n                    <td>921234567</td>\n                    <td class=\"text-muted\">Do as they ...</td>\n                    <td class=\"text-muted\">2017/05/25 5:00:00</td>\n                    <td class=\"text-muted\">\n                      <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                      <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                      <span><i class=\"fa fa-circle\"></i></span>\n                      <span><i class=\"fa fa-circle\"></i></span>\n                    </td>\n                  </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1074 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p class=\"lead text-underline\"><u> Create Template </u></p>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Enter Campaign Name\">\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name is unique throughout this application.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Desription</label>\n              <textarea name=\"desc\" id=\"desc\" cols=\"30\" rows=\"4\" class=\"form-control\">Enter text here ..</textarea>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template File Upload</label>\n              <input type=\"file\" class=\"form-control\" id=\"file\" aria-describedby=\"file\" placeholder=\"Choose File\">\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">Please upload the contacts csv.</small>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"clearfix\"></div>\n          <div class=\"form-group text-center\">\n            <hr>\n            <input type=\"button\" value=\"Create Template\" class=\"btn btn-primary btn-sm\">\n            <hr>\n          </div>\n        </div>\n  \n      </div>\n    </form>\n  </section>\n  \n  <section>\n    <p class=\"lead\"><u>Previous Template</u></p>\n    <div>\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover table-bordered\">\n            <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Name</th>\n                  <th>Desription</th>\n                  <th>File</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr>\n                    <td class=\"text-muted\">124</td>\n                    <td class=\"text-muted\">Template 1</td>\n                    <td class=\"text-muted\">Test Template</td>\n                    <td class=\"text-muted\">template_1.csv</td>\n                    <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" disabled><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-muted\">421</td>\n                      <td class=\"text-muted\">Template 2</td>\n                      <td class=\"text-muted\">Test Template 2</td>\n                      <td class=\"text-muted\">template_2.csv</td>\n                      <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" disabled><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1075 */
/***/ (function(module, exports) {

module.exports = "<section id=\"inboxSection\">\n  <p class=\"lead\"><u>My Inbox</u></p>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-inboxsender></app-inboxsender>\n    </div>\n    <div class=\"col-md-9\">\n      <app-inboxdetails></app-inboxdetails>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1076 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <input type=\"text\" class=\"form-control\" readonly id=\"sender\" value=\"+921234567\">\n  </div>\n\n  <div id=\"inboxSection\">\n\n\n    <!-- senders -->\n    <div class=\"messageContainer\">\n        <div class=\"left\">\n            <div class=\"carot\">\n              <span><i class=\"fa fa-caret-left\"></i></span>\n            </div>\n            <div class=\"msg\">\n              <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n              <b><small>10:00am</small></b>\n            </div>\n          </div>\n    </div>\n\n    <!-- ours -->\n    <div class=\"messageContainer\">\n        <div class=\"right\">\n            <div class=\"msg\">\n              <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n              <b><small>10:00am</small></b>\n            </div>\n            <div class=\"carot\">\n                <span><i class=\"fa fa-caret-right\"></i></span>\n              </div>\n          </div>\n    </div>\n\n    <!-- senders -->\n    <div class=\"messageContainer\">\n        <div class=\"left\">\n            <div class=\"carot\">\n              <span><i class=\"fa fa-caret-left\"></i></span>\n            </div>\n            <div class=\"msg\">\n              <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n              <b><small>10:00am</small></b>\n            </div>\n          </div>\n    </div>\n\n    <!-- ours -->\n    <div class=\"messageContainer\">\n        <div class=\"right\">\n            <div class=\"msg\">\n              <p>lkjasd lkajs dlkasj dlkasjdlkasjd</p>\n              <b><small>10:00am</small></b>\n            </div>\n            <div class=\"carot\">\n                <span><i class=\"fa fa-caret-right\"></i></span>\n              </div>\n          </div>\n    </div>\n\n\n\n\n\n\n\n    \n  </div>\n\n  <div id=\"quickSection\">\n    <div id=\"quickcontainer\">\n      <div class=\"quick\">\n        <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n      </div>\n      <div class=\"quick\">\n        <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n      </div>\n      <div class=\"quick\">\n        <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n      </div>\n      <div class=\"quick\">\n        <div class=\"text\"> Hi! I am really sorry but .. &nbsp;&nbsp;&nbsp; <span><i class=\"fa fa-times\"></i></span></div>\n      </div>\n    </div>\n    <div id=\"newquick\">\n      <span><i class=\"fas fa-plus-circle\"></i></span>\n    </div>\n  </div>\n\n  <div id=\"writeSection\">\n    <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"4\" class=\"form-control\">Write Something Here..</textarea>\n    <div class=\"footer\"><button class=\"btn btn-primary\">Send</button></div>\n  </div>\n\n</section>"

/***/ }),
/* 1077 */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 Not Found!\n</p>\n"

/***/ }),
/* 1078 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <input type=\"text\" name=\"searchbar\" id=\"searchbar\" class=\"form-control\" placeholder=\"Search Contact\">\n  </div>\n  <!-- sender container -->\n  <div id=\"sendercontainer\">\n    <!-- single item -->\n    <div class=\"item\">\n            <div class=\"thumbnail\">\n                <span><i class=\"far fa-user-circle\"></i></span>\n            </div>\n            <div class=\"desc\">\n                <label>+12345678</label>\n                <p>I want to avail your services but i dont know</p>\n                <small>9:30 pm</small>\n            </div>\n    </div>\n\n\n    <div class=\"item\">\n        <div class=\"thumbnail\">\n            <span><i class=\"far fa-user-circle\"></i></span>\n        </div>\n        <div class=\"desc\">\n            <label>+12345678</label>\n            <p>I want to avail your services but i dont know</p>\n            <small>9:30 pm</small>\n        </div>\n    </div>\n\n\n    <div class=\"item\">\n        <div class=\"thumbnail\">\n            <span><i class=\"far fa-user-circle\"></i></span>\n        </div>\n        <div class=\"desc\">\n            <label>+12345678</label>\n            <p>I want to avail your services but i dont know</p>\n            <small>9:30 pm</small>\n        </div>\n    </div>\n\n          \n  </div>\n</section>\n"

/***/ }),
/* 1079 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"\">\n      <p class=\"lead\"><u>Summary</u></p>\n      <div class=\"table-responsive\">\n          <p class=\"text-muted\">These issues were generated by this account.</p>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n              \n              <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Mask</th>\n                  <th>Created</th>\n                  <th>Feature</th>\n                  <th>Reason</th>\n                  <th>Remarks</th>\n                  <th>Status</th>\n                  <!-- <th>Action</th> -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr colspan=\"8\" *ngIf=\"issuesArr.length == 0\">\n                  <p class=\"text-muted\">No records found.</p>\n                </tr>\n                <tr *ngFor=\"let item of issuesArr\">\n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td class=\"text-muted\">{{item.maskname}}</td>\n                  <td class=\"text-muted\">{{item.created}}</td>\n                  <td class=\"text-muted\">{{item.feature}}</td>\n                  <td class=\"text-muted\">{{item.problem}}</td>\n                  <td class=\"text-muted\">{{item.remarks}}</td>\n                  <td class=\"text-muted\">{{item.status}}</td>\n                  <!-- <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" (click)=\"remove(item._id)\" [disabled]=\"\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td> -->\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1080 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"issuetrackersection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./dashboard']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"far fa-clock\"></i></span>\n                </div>\n                <div>\n                  Dashboard\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./create']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-plus-circle\"></i></span>\n                </div>\n                <div>\n                  Create\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./apitest']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-check-circle\"></i></span>\n                </div>\n                <div>\n                  Api Test\n                </div>\n            </div>\n          </div>       \n          \n      </div>\n      <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1081 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"reportingSection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\">\n      <p class=\"lead\">\n        <u>Generate Report</u>\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"type\">Account Type</label>\n            <select *ngIf=\"accountsArr.length>0\" (change)=\"acchange($event)\" name=\"\" id=\"\" class=\"form-control\">\n                    <option value=\" \" disabled selected>Select Account</option>\n                    <option  *ngFor=\"let item of accountsArr\" [value]=\"item.email\">{{item.fullname}}</option>\n                  </select>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"type\">Operation Type</label>\n            <select (change)=\"opchange($event)\" name=\"\" id=\"\" class=\"form-control\">\n                    <option value=\"type\" disabled selected>Select Type</option>\n                    <option value=\"quick\">Quick</option>\n                    <option value=\"bulk\">Bulk</option>\n                  </select>\n          </div>\n\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"type\">From </label>\n            <input type=\"text\" [(ngModel)]=\"datefrom\" class=\"form-control\">\n            <small>Select from date/time</small>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"type\">To</label>\n            <input type=\"text\" [(ngModel)]=\"dateto\" class=\"form-control\">\n            <small>Select to date/time</small>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"type\">Action</label>\n            <input [disabled]=\"spinner\" type=\"button\" (click)=\"report()\" value=\"Generate Report\" class=\"btn btn-primary\">\n            <small *ngIf=\"notfound\">No data found.</small>\n            <small *ngIf=\"spinner\">Please wait .. <span><i class=\"fa fa-spinner fa-spin fa-1x\"></i></span></small>\n          </div>\n        </div>\n        <div class=\"col-md-2\" *ngIf=\"downloadable.length>0\">\n          <div class=\"form-group\">\n            <label for=\"type\">Download</label>\n            <div><small><span (click)=\"download()\" style=\"color:green;cursor:pointer;\"><i class=\"fas fa-file-excel-o fa-3x\"></i></span></small></div>\n\n          </div>\n        </div>\n\n      </div>\n\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"row\">\n              <div *ngIf=\"barChartData.length > 0\" class=\"col-md-9\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n                  <div style=\"display: block\">\n                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n                      [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n                </div>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n\n\n  </div>\n</section>"

/***/ }),
/* 1082 */
/***/ (function(module, exports) {

module.exports = "<section id=\"loginSection\">\n  <div>\n      <form (submit)=\"onLogin()\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\n            <small id=\"emailHelp\" class=\"form-text text-muted\">By signing in, you declare to abide by the terms and conditions of this platform.</small>\n          </div>\n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n              <div class=\"clearfix\"></div>\n              <button class=\"btn btn-default\" [routerLink]=\"['../register']\">Want to Join? Sign Up</button>\n          </div>\n          \n        </form>\n  </div>\n</section>\n"

/***/ }),
/* 1083 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\">\n        <u>\n           Create New Mask/Shortcode\n        </u>\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (submit)=\"createMask()\">\n          <div class=\"form-group\">\n            <label for=\"fullname\">Mask/Shortcode</label>\n            <input type=\"text\" [(ngModel)]=\"mask\" name=\"mask\" class=\"form-control\" id=\"mask\" aria-describedby=\"mask\" placeholder=\"Enter Mask Name ..\" required>\n            <small id=\"mask\" class=\"form-text text-muted\">Messages will be sent via this mask/shortcode when required.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Select Type</label>\n            <select (change)=\"createmasktypechange($event)\" [(ngModel)]=\"type\" name=\"type\" class=\"form-control\" required>\n              <option value=\"\" selected disabled>Select Type</option>\n              <option value=\"telenor\">Telenor</option>\n              <option value=\"jazz\">Jazz</option>\n              <option value=\"warid\">Warid</option>\n              <option value=\"ufone\">Ufone</option>\n              <option value=\"zong\">Zong</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Description</label>\n              <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" id=\"desc\" aria-describedby=\"desc\" placeholder=\"Enter description ..\" required>\n              <small id=\"desc\" class=\"form-text text-muted\">Write something about this masking.</small>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\">Create New</button>\n            </div>\n\n          </form>\n    </div>\n  </div>\n\n    <br>\n    <hr>\n    <br>\n\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n          <p class=\"lead\"><u> Registered Masks </u></p>\n          <form>\n              <input [(ngModel)]=\"searchString\" type=\"text\" name=\"searchString\" id=\"\" class=\"form-control input-sm\" placeholder=\"Search Masks ...\">\n          </form>\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n              \n              <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Mask</th>\n                  <th>Type</th>\n                  <th>Desc</th>\n                  <th>Created</th>\n                  <th>Status</th>\n                  <!-- <th>Action</th> -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of dataArr | masksfilter : 'mask' : searchString; let i = index\">\n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td class=\"text-muted\">{{item.mask}}</td>\n                  <td class=\"text-muted\">{{item.type}}</td>\n                  <td class=\"text-muted\">{{item.description}}</td>\n                  <td class=\"text-muted\">{{item.created}}</td>\n                  <td class=\"text-muted\">{{item.status}}</td>\n                  <!-- <td class=\"text-muted text-danger\"><button (click)=\"ondelete( item._id )\" class=\"btn btn-danger\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td> -->\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n\n    <br>\n</section>\n"

/***/ }),
/* 1084 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"messagingsection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <app-navbar></app-navbar>\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./newaccount']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  New Account\n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./moderate']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Account Moderation\n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./accounts']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Manage Account\n                </div>\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./bundle']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Bundles \n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./credit']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Top-ups \n                </div>\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./masks']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Masks/Shortcodes \n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./issues']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Issues \n                </div>\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./reports']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-long-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Reports\n                </div>\n            </div>\n          </div>\n\n          <hr>\n\n          \n          \n          \n      </div>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1085 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\"><u>Pending Accounts</u></p>\n      <div *ngIf=\"usersarr.length > 0\">\n          <table class=\"table table-sm table-hovered table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Type</th>\n                  <th>Created</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of usersarr\">\n                  <td>{{item.fullname}}</td>\n                  <td>{{item.email}}</td>\n                  <td>{{item.phone}}</td>\n                  <td>{{item.type}}</td>\n                  <td>{{item.created}}</td>\n                  <td><input type=\"button\" class=\"btn btn-xs btn-success \" value=\"Activate\" (click)=\"activate(item.email)\"></td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1086 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\"><u>Pending Configurations</u></p>\n      <div>\n          <table class=\"table table-sm table-hovered table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>User</th>\n                  <th>Featureset</th>\n                  <th>Encryption</th>\n                  <th>SMSTP</th>\n                  <th>WATP</th>\n                  <th>Created</th>\n                  <th>Expiry</th>\n                  <th>Cost</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of configarr\">\n                  <td>{{item.createdby}}</td>\n                  <td><tr *ngFor=\"let feats of item.featureset\">{{feats}}</tr></td>\n                  <td>{{item.encryption}}</td>\n                  <td>{{item.smstp}}</td>\n                  <td>{{item.watp}}</td>\n                  <td>{{item.created}}</td>\n                  <td>{{item.expiry}}</td>\n                  <td>{{item.cost}}</td>\n                  <td><input type=\"button\" value=\"Receive payment\" class=\"btn btn-xs btn-success\" (click)=\"receive(item._id,item.createdby)\"></td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1087 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p class=\"lead\"><u>Pending Top-ups</u></p>\n        <div>\n            <table class=\"table table-sm table-hovered table-bordered table-striped\">\n                <thead>\n                  <tr>\n                    <th>Username</th>\n                    <th>SMS</th>\n                    <th>WhatsApp</th>\n                    <th>Cost</th>\n                    <th>Created</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of configarr\">\n                    <td>{{item.createdby}}</td>\n                    <td>{{item.smscredit}}</td>\n                    <td>{{item.whatsappcredit}}</td>\n                    <td>{{item.cost}}</td>\n                    <td>{{item.created}}</td>\n                    <td><input type=\"button\" value=\"Receive payment\" class=\"btn btn-xs btn-success\" (click)=\"receive(item._id,item.createdby)\"></td>\n                  </tr>\n                </tbody>\n              </table>\n        </div>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1088 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\"><u>Pending Issues</u></p>\n      <div>\n          <table class=\"table table-sm table-hovered table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>Username</th>\n                  <th>Mask/SC</th>\n                  <th>Feature</th>\n                  <th>Problem</th>\n                  <th>Remarks</th>\n                  <th>Created</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of configarr\">\n                  <td>{{item.createdby}}</td>\n                  <td>{{item.maskname}}</td>\n                  <td>{{item.feature}}</td>\n                  <td>{{item.problem}}</td>\n                  <td>{{item.remarks}}</td>\n                  <td>{{item.created}}</td>\n                  <td><input type=\"button\" value=\"Mark Resolved\" class=\"btn btn-xs btn-success\" (click)=\"resolve(item._id)\"></td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1089 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\" *ngIf=\"accountsarr.length>0\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\">\n        <u>Registered Accounts</u>\n      </p>\n      <div style=\"height:150px; overflow-y:auto\">\n        <table class=\"table table-sm table-bordered table-striped table-condensed\">\n          <thead>\n            <tr>\n              <th>Fullname</th>\n              <th>Phone</th>\n              <th>Email</th>\n              <th>Type</th>\n              <th>CreatedOn</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of accountsarr\">\n              <td>{{item.fullname}}</td>\n              <td>{{item.phone}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.type}}</td>\n              <td>{{item.created}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p class=\"lead\">\n        <u>Search Account (via email)</u>\n      </p>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" [readonly]=\"enable\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"button\" value=\"Search\" class=\"btn btn-primary\" (click)=\"search()\">\n        <input type=\"button\" value=\"Clear\" class=\"btn btn-primary\" (click)=\"clear()\">\n      </div>\n    </div>\n  </div>\n\n  <hr>\n  <br>\n\n  <div class=\"row\" *ngIf=\"enable\">\n\n    <div class=\"col-md-12\">\n      <h6>User Information</h6>\n      <table class=\"table table-sm table-bordered table-striped table-condensed\">\n        <thead>\n          <tr>\n            <th>Fullname</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Type</th>\n            <th>Activated</th>\n            <th>Suspended</th>\n            <th>Created</th>\n            <th>Expiry</th>\n            <th>SMSTP</th>\n            <th>SMS</th>\n            <th>WATP</th>\n            <th>WA</th>\n            <th>Action</th>\n            <th>Usage</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{userobj.fullname}}</td>\n            <td>{{userobj.phone}}</td>\n            <td>{{userobj.email}}</td>\n            <td>{{userobj.type}}</td>\n            <td>{{userobj.isactivated}}</td>\n            <td>{{userobj.issuspended}}</td>\n            <td>{{userobj.created}}</td>\n            <td>{{userobj.expirybundle}}</td>\n            <td>{{userobj.smstp}}</td>\n            <td>{{userobj.creditsms}}</td>\n            <td>{{userobj.watp}}</td>\n            <td>{{userobj.creditwhatsapp}}</td>\n            <td>\n              <input [hidden]=\"userobj.issuspended != false\" type=\"button\" value=\"Suspend\" class=\"btn btn-xs btn-danger\" (click)=\"suspend(userobj.email)\">\n              <input type=\"button\" [hidden]=\"userobj.issuspended != true\" value=\"Allow\" class=\"btn btn-xs btn-success\" (click)=\"allow(userobj.email)\">              &nbsp;\n              <input type=\"button\" value=\"Reset Password\" class=\"btn btn-xs btn-default\" (click)=\"resetpassword(userobj.email)\">\n            </td>\n            <td>\n              <input type=\"button\" value=\"Quick\" class=\"btn btn-xs btn-default\" (click)=\"quick(userobj.email)\"> &nbsp;\n              <input type=\"button\" value=\"Bulk\" class=\"btn btn-xs btn-default\" (click)=\"bulk(userobj.email)\"> &nbsp;\n              <input type=\"button\" value=\"WhatsApp\" class=\"btn btn-xs btn-default\" (click)=\"whatsapp(userobj.email)\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr>\n\n      <h6>Childs Information</h6>\n      <table class=\"table table-sm table-bordered table-striped table-condensed\">\n        <thead>\n          <tr>\n            <th>Fullname</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Type</th>\n            <th>Activated</th>\n            <th>Suspended</th>\n            <th>Created</th>\n            <th>Expiry</th>\n            <th>SMS</th>\n            <th>WhatsApp</th>\n            <th>Action</th>\n            <th>Usage</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let obj of childsarr\">\n            <td>{{obj.fullname}}</td>\n            <td>{{obj.phone}}</td>\n            <td>{{obj.email}}</td>\n            <td>{{obj.type}}</td>\n            <td>{{obj.isactivated}}</td>\n            <td>{{obj.issuspended}}</td>\n            <td>{{obj.created}}</td>\n            <td>{{obj.expirybundle}}</td>\n            <td>{{obj.creditsms}}</td>\n            <td>{{obj.creditwhatsapp}}</td>\n            <td>\n              <input [hidden]=\"obj.issuspended != false\" type=\"button\" value=\"Suspend\" class=\"btn btn-xs btn-danger\" (click)=\"suspend(obj.email)\">\n              <input type=\"button\" [hidden]=\"obj.issuspended != true\" value=\"Allow\" class=\"btn btn-xs btn-success\" (click)=\"allow(obj.email)\">              &nbsp;\n              <input type=\"button\" value=\"Reset Password\" class=\"btn btn-xs btn-default\" (click)=\"resetpassword(obj.email)\">\n            </td>\n            <td>\n              <input type=\"button\" value=\"Quick\" class=\"btn btn-xs btn-default\" (click)=\"quick(obj.email)\"> &nbsp;\n              <input type=\"button\" value=\"Bulk\" class=\"btn btn-xs btn-default\" (click)=\"bulk(obj.email)\"> &nbsp;\n              <input type=\"button\" value=\"WhatsApp\" class=\"btn btn-xs btn-default\" (click)=\"whatsapp(obj.email)\">\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr>\n\n      <h6>Extend Resources</h6>\n      <div>\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Extend by 1 Week\" (click)=\"week1(userobj.email,userobj.expirybundle)\">\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Replace SMS Throuput (10)\" (click)=\"smstp10(userobj.email)\">\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Replace WA Throuput (10)\" (click)=\"watp10(userobj.email)\">\n      </div>\n      <br>\n      <h6>Add Credit</h6>\n      <div>\n        <input type=\"number\" [(ngModel)]=\"promocredit\">\n      </div>\n      <br>\n      <div>\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Add SMS Credit\" (click)=\"psms(userobj.email)\">\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Add WhatsApp Credit\" (click)=\"pwhatsapp(userobj.email)\">\n      </div>\n\n      <hr>\n\n\n    </div>\n  </div>\n</section>"

/***/ }),
/* 1090 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\"><u>Pending Masks/Shortcodes Requests</u></p>\n      <div>\n          <table class=\"table table-sm table-hovered table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>Username</th>\n                  <th>Mask/SC</th>\n                  <th>Desc</th>\n                  <th>Type</th>\n                  <th>Created</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of configarr\">\n                  <td>{{item.createdby}}</td>\n                  <td>{{item.mask}}</td>\n                  <td>{{item.description}}</td>\n                  <td>{{item.type}}</td>\n                  <td>{{item.created}}</td>\n                  <td><input type=\"button\" value=\"Activate Mask\" class=\"btn btn-xs btn-success\" (click)=\"activate(item._id)\">&nbsp;<button (click)=\"ondelete(item._id)\" class=\"btn btn-danger\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1091 */
/***/ (function(module, exports) {

module.exports = "<section id=\"registerSection\">\n  <div>\n      <form (submit)=\"onRegister()\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <p class=\"lead\"><u>Register New Account</u></p>\n              <div class=\"form-group\">\n                  <label for=\"fullname\">Account Type</label>\n                  <select name=\"type\" [(ngModel)]=\"type\" class=\"form-control\" required>\n                    <option value=\"regular\">Regular</option>\n                    <option value=\"telco\">Telecom</option>\n                    <option value=\"lea\">LEA</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"fullname\">Full Name</label>\n                  <input type=\"text\" [(ngModel)]=\"fullname\" name=\"fullname\" class=\"form-control\" id=\"fullname\" aria-describedby=\"fullnameHelp\" placeholder=\"Enter fullname\" required>\n                  <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name will be used to address you in emails.</small>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"phone\">Phone</label>\n                    <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" id=\"phone\" aria-describedby=\"phoneHelp\" placeholder=\"Enter Phone #\" required>\n                    <small id=\"phonehelp\" class=\"form-text text-muted\">We'll never share your personal phone with anyone else.</small>\n                  </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required>\n                    <small id=\"passwordhelp\" class=\"form-text text-muted\">By signing in, you declare to abide by the terms and conditions of this platform.</small>\n                  </div>\n                  <div class=\"form-group\">\n                      <button type=\"submit\" class=\"btn btn-primary\">Register User</button>\n                  </div>\n          </div>\n        </div>\n\n          \n        </form>\n  </div>\n</section>\n"

/***/ }),
/* 1092 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p class=\"lead\"><u>Date Range</u></p>\n      <div class=\"form-group\">\n        <label for=\"type\">From </label>\n        <input type=\"text\" [(ngModel)]=\"datefrom\" class=\"form-control\">\n        <small>Select from date</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"type\">To</label>\n        <input type=\"text\" [(ngModel)]=\"dateto\" class=\"form-control\">\n        <small>Select to date</small>\n      </div>\n\n      <hr>\n\n      <h6><u>Revenue</u></h6>\n      <div class=\"form-group\">\n        <input type=\"button\" value=\"Configuration HIstory\" (click)=\"config()\" class=\"btn btn-sm btn-primary\">\n        &nbsp;\n        <input type=\"button\" value=\"Credit History\" (click)=\"credit()\"  class=\"btn btn-sm btn-primary\">\n      </div>\n\n      <hr>\n\n      <h6><u>Dumps</u></h6>\n      <div class=\"form-group\">\n        <input type=\"button\" value=\"Quick\" (click)=\"quick()\" class=\"btn btn-sm btn-primary\">\n        &nbsp;\n        <input type=\"button\" value=\"Bulk\" (click)=\"bulk()\" class=\"btn btn-sm btn-primary\">\n        &nbsp;\n        <input type=\"button\" value=\"Drip\" (click)=\"drip()\" class=\"btn btn-sm btn-primary\">\n        &nbsp;\n        <input type=\"button\" value=\"Digital\" (click)=\"digital()\" class=\"btn btn-sm btn-primary\">\n        &nbsp;\n        <input type=\"button\" value=\"Accounts\" (click)=\"accounts()\" class=\"btn btn-sm btn-primary\">\n      </div>\n\n      <hr>\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1093 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"messagingsection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./compose']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-plus-circle\"></i></span>\n                </div>\n                <div>\n                  Compose\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./inbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <div>\n                  Inbox\n                </div>\n                <!-- <div>\n                  <span class=\"badge\">0</span>\n                </div> -->\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div  class=\"menuitemwrapper\" [routerLink]=\"['./outbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-tasks\"></i></span>\n                </div>\n                <div>\n                  Outbox\n                </div>\n                <div>\n                  <span class=\"badge\">{{totalOutbox}} </span> &nbsp; <span *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-1x fa-spin\"></i></span>\n                </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"telco\" class=\"menuitemwrapper\" [routerLink]=\"['./prioutbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-star\"></i></span>\n                </div>\n                <div>\n                  Priority Outbox\n                </div>\n                <div>\n                  <span class=\"badge\">{{totalPriOutbox}} </span> &nbsp; \n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./sent']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-paper-plane\"></i></span>\n                </div>\n                <div>\n                  Sent\n                </div>\n                <!-- <div>\n                  <span class=\"badge\">0</span>\n                </div> -->\n            </div>\n          </div>\n          \n          <hr>\n\n\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./campaignmanagement']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-calendar\"></i></span>\n                </div>\n                <div>\n                  Campaigns \n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./templatemanagement']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-bullseye\"></i></span>\n                </div>\n                <div>\n                  Templates\n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./autorespond']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-bolt\"></i></span>\n                </div>\n                <div>\n                  Auto Response\n                </div>\n            </div>\n          </div>\n          \n          \n      </div>\n\n      <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1094 */
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n  <p class=\"lead\"><u> Summary</u></p>\n  <p class=\"text-muted\">Total # of jobs created for each respective category</p>\n\n      <div class=\"row\" *ngIf=\"2==1\">\n        <div class=\"col-md-12\">\n            <div *ngIf=\"doughnutChartData.length>0\" class=\"col-md-8 offset-md-2\">\n                <div style=\"display: block\">\n                    <canvas baseChart\n                                [data]=\"doughnutChartData\"\n                                [labels]=\"doughnutChartLabels\"\n                                [chartType]=\"doughnutChartType\">\n                    </canvas>\n                  </div>\n            </div>\n        </div>\n      </div>\n\n      <br><br>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div  *ngIf=\"doughnutChartData.length>0\" class=\"col-md-8\">\n                <canvas baseChart\n                        [datasets]=\"barChartData\"\n                        [labels]=\"barChartLabels\"\n                        [options]=\"barChartOptions\"\n                        [legend]=\"barChartLegend\"\n                        [chartType]=\"barChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n              </div>\n        </div>\n      </div>\n\n  <!-- <div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <section id=\"quick\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div>\n                    <div class=\"table-responsive\">\n                        <p class=\"text-muted\"><u>Quick</u></p>\n                        <table class=\"table table-sm table-condensed table-bordered table-hover\">\n                            <thead>\n                              <tr class=\"table-info\">\n                                <th>Name</th>\n                                <th>Message</th>\n                                <th>Created</th>\n                                <th>Sent</th>\n                                <th>Status</th>\n                                <th>Action</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of quickArr\">\n                                <td>{{item._id}}</td>\n                                <td class=\"text-muted\">{{item.quick[0].msg}}</td>\n                                <td class=\"text-muted\">{{item.quick[0].created}}</td>\n                                <td class=\"text-muted\">{{item.quick.length}}</td>\n                                <td class=\"text-muted\">Sent</td>\n                                <td class=\"text-muted text-danger\"><button (click)=\"removequick(item._id)\" class=\"btn btn-danger\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n          </div>\n            \n        </section>\n\n\n        <section id=\"bulk\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div>\n                    <div class=\"table-responsive\">\n                        <p class=\"text-muted\"><u>Bulk</u></p>\n                        <table class=\"table table-sm table-condensed table-bordered table-hover\">\n                            <thead>\n                              <tr class=\"table-info\">\n                                <th>Name</th>\n                                <th>Message</th>\n                                <th>Type</th>\n                                <th>Created</th>\n                                <th>Campaign</th>\n                                <th>Status</th>\n                                <th>Action</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of bulkArr\">\n                                <td>{{item.name}}</td>\n                                <td class=\"text-muted\">{{item.msg}}</td>\n                                <td class=\"text-muted\">{{item.type}}</td>\n                                <td class=\"text-muted\">{{item.created}}</td>\n                                <td class=\"text-muted\">{{item.campaign}}</td>\n                                <td class=\"text-muted\">sent</td>\n                                <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" (click)=\"removebulk(item.name)\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n          </div>\n\n        </section>\n\n\n        <section id=\"drip\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">  \n                <div>\n                    <div class=\"table-responsive\">\n                        <p class=\"text-muted\"><u>Drip</u></p>\n                        <table class=\"table table-sm table-condensed table-bordered table-hover\">\n                            <thead>\n                              <tr class=\"table-info\">\n                                <th>Name</th>\n                                <th>Message</th>\n                                <th>Created</th>\n                                <th>From</th>\n                                <th>To</th>\n                                <th>Campaign</th>\n                                <th>Payload</th>\n                                <th>Status</th>\n                                <th>Action</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of dripArr\">\n                                <td>{{item.name}}</td>\n                                <td class=\"text-muted\">{{item.msg}}</td>\n                                <td class=\"text-muted\">{{item.created}}</td>\n                                <td class=\"text-muted\">{{item.datefrom}}</td>\n                                <td class=\"text-muted\">{{item.dateto}}</td>\n                                <td class=\"text-muted\">{{item.campaign}}</td>\n                                <td class=\"text-muted\">\n                                  <span *ngFor=\"let payload of item.timespayload\">\n                                    ({{payload.time}} : {{payload.status}})\n                                  </span>\n                                </td>\n                                <td class=\"text-muted\">{{item.status}}</td>\n                                <td class=\"text-muted text-danger\"><button (click)=\"removedrip(item.name)\" class=\"btn btn-danger\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n\n            </div>\n          </div>\n            \n        </section>\n      \n\n\n    </div>\n\n    <div class=\"col-md-4\">\n\n    </div>\n  </div> -->\n\n</section>\n"

/***/ }),
/* 1095 */
/***/ (function(module, exports) {

module.exports = "<section id=\"navbarsection\" *ngIf=\"loggedIn\">\n  <div class=\"\" id=\"nbwrapper\">\n    <div id=\"nditemscontainer\">\n\n\n      <div class=\"nbitems  \" routerLinkActive=\"hoverselected\" [routerLink]=\"['/default']\">\n        <div class=\"nbitemsimg\">\n\n        </div>\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-desktop\"></i></span>&nbsp;&nbsp;&nbsp;Home\n        </div>\n      </div>\n\n      <!-- dashboard -->\n      <div class=\"nbitems\" *ngIf=\"dashboard\" routerLinkActive=\"hoverselected\" [routerLink]=\"['/dashboard']\">\n        <div class=\"nbitemsimg\">\n\n        </div>\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-bar-chart\"></i></span>&nbsp;&nbsp;&nbsp;Dashboard\n        </div>\n      </div>\n\n\n      <!-- messaging -->\n      <div class=\"nbitems\" *ngIf=\"messaging\" (click)=\"onmessagingclicked()\" routerLinkActive=\"hoverselected\" >\n        <div class=\"nbitemstext\">\n          <div><span><i class=\"fa fa-envelope-open\"></i></span>&nbsp;&nbsp;&nbsp;Messaging <span class=\"rightarrow\" *ngIf=\"messagingclicked==true\"\n              ><i class=\"fa fa-caret-down\"></i></span><span class=\"rightarrow\" *ngIf=\"messagingclicked==false\"\n              ><i class=\"fa fa-caret-right\"></i></span></div>\n        </div>\n      </div>\n      <div *ngIf=\"messagingclicked==true\">\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/messagingdashboard']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-cloud\"></i></span>&nbsp;&nbsp;&nbsp;Dashboard</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" (click)=\"oncomposeclicked()\" routerLinkActive=\"hoverselectedsub\" >\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-pencil\"></i></span>&nbsp;&nbsp;&nbsp;Compose <span *ngIf=\"composeclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n              <span class=\"rightarrow\" *ngIf=\"composeclicked==false\" ><i class=\"fa fa-caret-right\"></i></span>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"composeclicked==true\">\n          <div class=\"nbsubsubitems\" routerLinkActive=\"hoverselectedsubsub\" [routerLink]=\"['/messaging/compose/quick']\">\n            <div class=\"nbitemstext\">\n              <div><span><i class=\"fa fa-angle-right\"></i></span>&nbsp;&nbsp;&nbsp;Quick</div>\n            </div>\n          </div>\n          <div class=\"nbsubsubitems\" routerLinkActive=\"hoverselectedsubsub\" [routerLink]=\"['/messaging/compose/bulk']\">\n            <div class=\"nbitemstext\">\n              <div><span><i class=\"fa fa-angle-right\"></i></span>&nbsp;&nbsp;&nbsp;Bulk</div>\n            </div>\n          </div>\n          <div class=\"nbsubsubitems\" routerLinkActive=\"hoverselectedsubsub\" [routerLink]=\"['/messaging/compose/drip']\">\n            <div class=\"nbitemstext\">\n              <div><span><i class=\"fa fa-angle-right\"></i></span>&nbsp;&nbsp;&nbsp;Drip</div>\n            </div>\n          </div>\n          <div class=\"nbsubsubitems\" *ngIf=\"digital\" routerLinkActive=\"hoverselectedsubsub\" [routerLink]=\"['/messaging/compose/digital']\">\n            <div class=\"nbitemstext\">\n              <div><span><i class=\"fa fa-angle-right\"></i></span>&nbsp;&nbsp;&nbsp;WhatsApp</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/inbox']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-inbox\"></i></span>&nbsp;&nbsp;&nbsp;Inbox</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/outbox']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-send\"></i></span>&nbsp;&nbsp;&nbsp;Outbox</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/prioutbox']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-send\"></i></span>&nbsp;&nbsp;&nbsp;Priority Outbox</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/sent']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-rocket\"></i></span>&nbsp;&nbsp;&nbsp;Sent</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/campaignmanagement']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-map-signs\"></i></span>&nbsp;&nbsp;&nbsp;Campaigns</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/templatemanagement']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-puzzle-piece\"></i></span>&nbsp;&nbsp;&nbsp;Templates</div>\n          </div>\n        </div>\n        <div class=\"nbsubitems\" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/messaging/autorespond']\">\n          <div class=\"nbitemstext\">\n            <div><span><i class=\"fa fa-mail-reply-all\"></i></span>&nbsp;&nbsp;&nbsp;Auto Response</div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- messaging end -->\n\n\n\n\n\n\n\n\n      <!-- notification -->\n      <div class=\"nbitems  \" *ngIf=\"notification\" (click)=\"onnotificationclicked()\" routerLinkActive=\"hoverselected\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-bell\"></i></span>&nbsp;&nbsp;&nbsp;Notification<span *ngIf=\"notificationclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n          <span *ngIf=\"notificationclicked==false\" class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"notificationclicked==true\">\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/notification/dashboard']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-cloud\"></i></span>&nbsp;&nbsp;&nbsp;Dashboard\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/notification/composen']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-pencil\"></i></span>&nbsp;&nbsp;&nbsp;Compose\n          </div>\n        </div>\n\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/notification/templates']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-puzzle-piece\"></i></span>&nbsp;&nbsp;&nbsp;Templates\n          </div>\n        </div>\n      </div>\n      <!-- notification end -->\n\n\n\n\n      <!-- hybrid -->\n      <div class=\"nbitems\" *ngIf=\"hybrid\" (click)=\"onhybridclicked()\" routerLinkActive=\"hoverselected\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-sliders\"></i></span>&nbsp;&nbsp;&nbsp;Hybrid<span *ngIf=\"hybridclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n          <span *ngIf=\"hybridclicked==false\" class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"hybridclicked==true\">\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/hybrid/dashboard']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-cloud\"></i></span>&nbsp;&nbsp;&nbsp;Dashboard\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/hybrid/compose']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-pencil\"></i></span>&nbsp;&nbsp;&nbsp;Compose\n          </div>\n        </div>\n\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/hybrid/inbox']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-inbox\"></i></span>&nbsp;&nbsp;&nbsp;Inbox\n          </div>\n        </div>\n\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/hybrid/outbox']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-send\"></i></span>&nbsp;&nbsp;&nbsp;Outbox\n          </div>\n        </div>\n\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/hybrid/sent']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-rocket\"></i></span>&nbsp;&nbsp;&nbsp;Sent\n          </div>\n        </div>\n      </div>\n      <!-- hybrid end -->\n\n\n\n\n      <!-- reporting -->\n      <div class=\"nbitems  \" *ngIf=\"reporting\" routerLinkActive=\"hoverselected\" [routerLink]=\"['/reporting']\">\n        <div class=\"nbitemsimg\">\n\n        </div>\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-table\"></i></span>&nbsp;&nbsp;&nbsp;Reporting\n        </div>\n      </div>\n      <div class=\"nbitems  \" *ngIf=\"lea\" routerLinkActive=\"hoverselected\" [routerLink]=\"['/leareporting']\">\n        <div class=\"nbitemsimg\">\n\n        </div>\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-table\"></i></span>&nbsp;&nbsp;&nbsp;LEA Reporting\n        </div>\n      </div>\n      <!-- address -->\n      <div class=\"nbitems  \" *ngIf=\"contacts\" (click)=\"onaddressbookclicked()\" routerLinkActive=\"hoverselected\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-address-book\"></i></span>&nbsp;&nbsp;&nbsp;Address Book <span *ngIf=\"addressbookclicked==true\"\n            class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span><span *ngIf=\"addressbookclicked==false\"\n            class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"addressbookclicked == true\">\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/addressbook/newcontact']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-user-circle-o\"></i></span>&nbsp;&nbsp;&nbsp;New Contact\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/addressbook/contacts']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-file-text-o\"></i></span>&nbsp;&nbsp;&nbsp;Contacts\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/addressbook/groups']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-group\"></i></span>&nbsp;&nbsp;&nbsp;Groups\n          </div>\n        </div>\n      </div>\n\n\n\n      <!-- Issue -->\n      <div class=\"nbitems  \" *ngIf=\"tracker\" (click)=\"ontrackerclicked()\" routerLinkActive=\"hoverselected\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-balance-scale\"></i></span>&nbsp;&nbsp;&nbsp;Tracker <span *ngIf=\"trackerclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n          <span *ngIf=\"trackerclicked==false\" class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"trackerclicked == true\">\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/issuestracker/dashboard']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-cloud\"></i></span>&nbsp;&nbsp;&nbsp;Dashboard\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/issuestracker/create']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-pencil\"></i></span>&nbsp;&nbsp;&nbsp;New Ticket\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/issuestracker/apitest']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-filter\"></i></span>&nbsp;&nbsp;&nbsp;Test APIs\n          </div>\n        </div>\n      </div>\n      <!-- prcing -->\n      <div class=\"nbitems\" *ngIf=\"pricing\" routerLinkActive=\"hoverselected\" [routerLink]=\"['/pricing/buy']\">\n        <div class=\"nbitemstext\">\n          <span><i class=\"far fa-money-bill-alt\"></i></span>&nbsp;&nbsp;&nbsp;Pricing\n        </div>\n      </div>\n\n      <!-- settings -->\n      <div class=\"nbitems\" *ngIf=\"settings\" routerLinkActive=\"hoverselected\" (click)=\"onsettingsclicked()\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-cog\"></i></span>&nbsp;&nbsp;&nbsp;Settings <span *ngIf=\"settingsclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n          <span *ngIf=\"settingsclicked==false\" class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"settingsclicked == true\">\n\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/settings/uac']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-lock\"></i></span>&nbsp;&nbsp;&nbsp;User Access\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/settings/masks']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-wrench\"></i></span>&nbsp;&nbsp;&nbsp;Manage Masks\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n      <!-- master -->\n      <div class=\"nbitems\" *ngIf=\"master\" routerLinkActive=\"hoverselected\" (click)=\"onmasterclicked()\" >\n        <div class=\"nbitemstext\">\n          <span><i class=\"fa fa-user-secret\"></i></span>&nbsp;&nbsp;&nbsp;Master<span *ngIf=\"masterclicked==true\" class=\"rightarrow\"><i class=\"fa fa-caret-down\"></i></span>\n          <span *ngIf=\"masterclicked==false\" class=\"rightarrow\"><i class=\"fa fa-caret-right\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"masterclicked == true\">\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/newaccount']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-pencil-square\"></i></span>&nbsp;&nbsp;&nbsp;New Account\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/moderate']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-tasks\"></i></span>&nbsp;&nbsp;&nbsp;Account Moderation\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/accounts']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-suitcase\"></i></span>&nbsp;&nbsp;&nbsp;Accounts\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/bundle']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-tty\"></i></span>&nbsp;&nbsp;&nbsp;Bundle\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/credit']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-credit-card\"></i></span>&nbsp;&nbsp;&nbsp;Top-Ups\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/masks']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-window-restore\"></i></span>&nbsp;&nbsp;&nbsp;Masks/Shortcodes\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/issues']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-database\"></i></span>&nbsp;&nbsp;&nbsp;Manage Issues\n          </div>\n        </div>\n        <div class=\"nbsubitems  \" routerLinkActive=\"hoverselectedsub\" [routerLink]=\"['/master/reports']\">\n          <div class=\"nbitemstext\">\n            <span><i class=\"fa fa-download\"></i></span>&nbsp;&nbsp;&nbsp;Reports\n          </div>\n        </div>\n      </div>\n\n\n\n      <br>\n      <div class=\"nbitems\">\n        <input type=\"button\" value=\"@DevLabsPk\" class=\"btn btn-block btn-sm cardbg btn-xs\" >\n      </div>\n\n\n    </div>\n  </div>\n</section>"

/***/ }),
/* 1096 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <form (submit)=\"registercontact()\">\n        <p class=\"lead\"><u>Create New Contact</u></p>\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">\n      <div class=\"form-group\">\n          <label>Full Name</label>\n          <input type=\"text\" [(ngModel)]=\"fullname\" name=\"fullname\" class=\"form-control\"  id=\"\" placeholder=\"Enter Full Name\" required>\n      </div>\n      <div class=\"form-group\">\n          <label>Number</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" id=\"\" placeholder=\"Enter Number\" required>\n      </div>\n      <div class=\"form-group\">\n            <label>Token</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"token\" name=\"token\" id=\"\" placeholder=\"Enter Token\" required>\n        </div>\n      <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" id=\"\" placeholder=\"Enter Short Description ..\" required>\n      </div>\n      <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"\" placeholder=\"Enter Email\" required>\n      </div>\n\n\n      \n    </div>\n    <div class=\"col-md-6 form-group\">\n        <div class=\"form-group\">\n            <div><label>Gender</label></div>\n            <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"male\" required> Male\n              </label>&nbsp;&nbsp;&nbsp;\n              <label class=\"radio-inline\">\n                <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"female\" required> Female\n              </label>\n        </div>\n        <div class=\"form-group text-center\">\n          <hr>\n            <input type=\"submit\" value=\"Create New\" class=\"btn btn-primary\">\n            <hr>\n        </div>\n    </div>\n  </div>\n\n</form>\n</section>"

/***/ }),
/* 1097 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"notificationsection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./composen']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-plus-circle\"></i></span>\n                </div>\n                <div>\n                  Compose\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <!-- <div class=\"menuitemwrapper\" [routerLink]=\"['./inbox']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <div>\n                  Inbox\n                </div>\n                <div>\n                  <span class=\"badge\">10</span>\n                </div>\n            </div>\n          </div> -->\n          \n          <hr>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./dashboard']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-anchor\"></i></span>\n                </div>\n                <div>\n                  Dashboard\n                </div>\n            </div>\n          </div>\n\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./templates']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-bullseye\"></i></span>\n                </div>\n                <div>\n                  Templates\n                </div>\n            </div>\n          </div>\n         \n          \n      </div>\n      <app-navbar></app-navbar>\n    </div>\n\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1098 */
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n  <p class=\"lead\"><u> Reports Generated</u></p>\n  <p class=\"text-muted\">Total # of reports generated against this notificaiton.</p>\n\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n          <section id=\"quick\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div>\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-sm table-bordered table-hover\">\n                            <thead>\n                              <tr class=\"table-info\">\n                                <th>Created</th>\n                                <th>Name</th>\n                                <th>Phone</th>\n                                <th>Email</th>\n                                <th>Message</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of notificationArr\">\n                                <td class=\"text-muted\">{{item.reportedat}}</td>\n                                <td class=\"text-muted\">{{item.username}}</td>\n                                <td class=\"text-muted\">{{item.userphone}}</td>\n                                <td class=\"text-muted\">{{item.useremail}}</td>\n                                <td class=\"text-muted\">{{item.reportmsg}}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n          </div>\n            \n        </section>\n\n  \n\n    </div>\n\n    <div class=\"col-md-4\">\n\n    </div>\n  </div>\n\n</section>\n"

/***/ }),
/* 1099 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"\">\n      <p class=\"lead\"><u>My Outbox</u></p>\n    <p class=\"text-muted\">These messages are currently being sent ... <span *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-1x fa-spin\"></i></span></p>\n    \n    <div  style=\"display: block; min-height: 70px;\" >\n      <canvas baseChart #baseChart=\"base-chart\" \n        width=\"auto\" height=\"70\" \n        [datasets]=\"lineChartData\" \n        [labels]=\"lineChartLabels\"\n        [colors]=\"lineChartColors\" \n        [chartType]=\"lineChartType\"\n        ></canvas>\n    </div>\n\n    <div >\n\n\n\n      <div >\n        <br>\n        <b >\n          <p>Outbox (recent entries)</p>\n        </b>\n      \n        <table style=\"word-break: break-word\"  class=\"table table-sm table-condensed table-bordered table-hover\">\n          <thead>\n            <tr class=\"table-info\">\n              <th >Type</th>\n              <th >Msg ID</th>\n              <th >To</th>\n              <th >Message</th>\n              <th >MNP</th>\n              <th >Intended</th>\n              <th >Found</th>\n              <th >Created</th>\n              <th >Status</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let item of quickarr\">\n                  <td class=\"text-muted\">Quick</td>  \n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td>{{item.mobileno}}</td>\n                  <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                  <td class=\"text-muted\">{{item.mnp}}</td>\n                  <td class=\"text-muted\">{{item.intended}}</td>\n                  <td class=\"text-muted\">{{item.telco}}</td>\n                  <td class=\"text-muted\">{{item.created}}</td>\n                  <td class=\"text-muted\">\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"primary blinker \"><i class=\"fa fa-circle\"></i></span>\n                    <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                  </td>\n                </tr>\n            <tr *ngFor=\"let item of bulkarr\">\n              <td class=\"text-muted\">Bulk</td>\n              <td class=\"text-muted\">{{item._id}}</td>\n              <td>{{item.mobileno}}</td>\n              <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n              <td class=\"text-muted\">{{item.mnp}}</td>\n              <td class=\"text-muted\">{{item.intended}}</td>\n              <td class=\"text-muted\">{{item.telco}}</td>\n              <td class=\"text-muted\">{{item.created}}</td>\n              <td class=\"text-muted\">\n                <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                <span class=\"primary blinker \"><i class=\"fa fa-circle\"></i></span>\n                <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n              </td>\n            </tr>\n            <tr *ngFor=\"let item of digitalarr\">\n                <td class=\"text-muted\">Digital</td>\n                <td class=\"text-muted\">{{item._id}}</td>\n                <td>{{item.mobileno}}</td>\n                <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                <td class=\"text-muted\">0</td>\n                <td class=\"text-muted\">WhatsApp</td>\n                <td class=\"text-muted\">WhatsApp</td>\n                <td class=\"text-muted\">{{item.created}}</td>\n                <td class=\"text-muted\">\n                  <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"primary blinker\"><i class=\"fa fa-circle\"></i></span>\n                  <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                  <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n                </td>\n              </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1100 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n\n<br>\n<section id=\"pricingsection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <app-navbar></app-navbar>\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <!-- <div class=\"menuitemwrapper\" [routerLink]=\"['./details']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Details\n                </div>\n            </div>\n          </div> -->\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./buy']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-money\"></i></span>\n                </div>\n                <div>\n                  Configuration\n                </div>\n            </div>\n          </div>\n\n      </div>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1101 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"\">\n        <p class=\"lead\"><u>My Outbox (Priority)</u></p>\n      <p class=\"text-muted\">These messages are currently being sent ... <span *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-1x fa-spin\"></i></span></p>\n      \n      <div  style=\"display: block; min-height: 70px;\" >\n        <canvas baseChart #baseChart=\"base-chart\" \n          width=\"auto\" height=\"70\" \n          [datasets]=\"lineChartData\" \n          [labels]=\"lineChartLabels\"\n          [colors]=\"lineChartColors\" \n          [chartType]=\"lineChartType\"\n          ></canvas>\n      </div>\n  \n      <div >\n  \n  \n  \n        <div >\n          <br>\n          <b >\n            <p>Outbox (recent entries)</p>\n          </b>\n        \n          <table style=\"word-break: break-word\"  class=\"table table-sm table-condensed table-bordered table-hover\">\n            <thead>\n              <tr class=\"table-info\">\n                <th >Type</th>\n                <th >Msg ID</th>\n                <th >To</th>\n                <th >Message</th>\n                <th >MNP</th>\n                <th >Intended</th>\n                <th >Found</th>\n                <th >Created</th>\n                <th >Status</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of quickarr\">\n                    <td class=\"text-muted\">API</td>  \n                    <td class=\"text-muted\">{{item._id}}</td>\n                    <td>{{item.mobileno}}</td>\n                    <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                    <td class=\"text-muted\">{{item.mnp}}</td>\n                    <td class=\"text-muted\">{{item.intended}}</td>\n                    <td class=\"text-muted\">{{item.telco}}</td>\n                    <td class=\"text-muted\">{{item.created}}</td>\n                    <td class=\"text-muted\">\n                      <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                      <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                      <span class=\"primary blinker \"><i class=\"fa fa-circle\"></i></span>\n                      <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                    </td>\n                  </tr>\n              <tr *ngFor=\"let item of bulkarr\">\n                <td class=\"text-muted\">Bulk</td>\n                <td class=\"text-muted\">{{item._id}}</td>\n                <td>{{item.mobileno}}</td>\n                <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                <td class=\"text-muted\">{{item.mnp}}</td>\n                <td class=\"text-muted\">{{item.intended}}</td>\n                <td class=\"text-muted\">{{item.telco}}</td>\n                <td class=\"text-muted\">{{item.created}}</td>\n                <td class=\"text-muted\">\n                  <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"primary blinker \"><i class=\"fa fa-circle\"></i></span>\n                  <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                  <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n                </td>\n              </tr>\n              <tr *ngFor=\"let item of digitalarr\">\n                  <td class=\"text-muted\">Digital</td>\n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td>{{item.mobileno}}</td>\n                  <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                  <td class=\"text-muted\">0</td>\n                  <td class=\"text-muted\">WhatsApp</td>\n                  <td class=\"text-muted\">WhatsApp</td>\n                  <td class=\"text-muted\">{{item.created}}</td>\n                  <td class=\"text-muted\">\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"primary blinker\"><i class=\"fa fa-circle\"></i></span>\n                    <span style=\"color:#f0f0f0\"><i class=\"fa fa-circle\"></i></span>\n                    <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n                  </td>\n                </tr>\n            </tbody>\n          </table>\n  \n        </div>\n  \n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1102 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"profileSection\">\n    <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n            <div>\n                <div class=\"container\">\n                        <div>\n                            <form (submit)=\"onProfileUpdate()\">\n                                <div class=\"form-group text-center\">\n                                    <span style=\"color:#1565C0\"><i class=\"fas fa-user-circle fa-6x\"></i></span>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"fullname\">Full Name</label>\n                                    <input type=\"fullname\" class=\"form-control\" [(ngModel)]=\"fullname\" name=\"fullname\" id=\"fullname\" aria-describedby=\"fullnameHelp\" placeholder=\"Enter fullname\" required>\n                                    <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name will be used to address you in emails.</small>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"phone\">Phone</label>\n                                    <input type=\"number\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"phone\" name=\"phone\" aria-describedby=\"phoneHelp\" placeholder=\"Enter Phone #\" required>\n                                    <small id=\"phonehelp\" class=\"form-text text-muted\">We'll never share your personal phone with anyone else.</small>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"email\">Email address</label>\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" readonly required>\n                                    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"email\">Password</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" aria-describedby=\"passowrdHelp\" placeholder=\"(unchanged password)\">\n                                    <small id=\"passwordHelp\" class=\"form-text text-muted\">Be sure to choose an alphanumeric password for strength.</small>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                                </div>\n                                \n                            </form>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

module.exports = "<section id=\"quickSection\">\n  <form (submit)=\"registerquick()\">\n    <p class=\"lead\"><u>Compose Quick Message</u></p>\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name for this operation ..\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"language\">Select Language</label>\n              <select (change)=\"languagechange($event)\" [(ngModel)]=\"language\" name=\"language\" id=\"language\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Language</option>\n                <option value=\"english\">English</option>\n                <option value=\"urdu\">Urdu</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"masking\">Select Masking</label>\n              <select (change)=\"maskingchange($event)\" [(ngModel)]=\"masking\" name=\"masking\" id=\"masking\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Masking</option>\n                <option *ngFor=\"let item of masksarr\" [value]=\"item.mask\">{{item.mask}} ({{item.type}})</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"mobilenos\">Mobile Numbers</label>\n              <input type=\"text\" [(ngModel)]=\"mobilenos\" name=\"mobilenos\" id=\"mobilenos\" class=\"form-control\" placeholder=\"Enter mobile numbers with commas\" required>\n          </div>\n\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div class=\"form-group\">\n              <label for=\"template\">Select Template</label>\n              <select (change)=\"templatechange($event)\" id=\"template\" class=\"form-control\">\n                <option value=\"\" disabled selected>Select Template</option>\n                <option *ngFor=\"let item of templateArr\" [value]=\"item.description\">{{item.name}}</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"msg\">Message / SMS</label>\n              <textarea (change)=\"messagechange($event)\" (input)=\"messagechange($event)\"  [(ngModel)]=\"msg\" name=\"msg\" id=\"\" cols=\"20\" rows=\"4\" class=\"form-control\" required></textarea>\n              <small class=\"text-muted\">Characters: <span class=\"msghelper\">{{msgchars}}</span> &nbsp;&nbsp;|&nbsp;&nbsp; No. of Messages:  <span class=\"msghelper\">{{noofmsgs}}</span></small>\n          </div>\n          <div class=\"form-group\">\n              <label>Message Preference</label>\n              <br>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" [(ngModel)]=\"preference\" name=\"preference\" value=\"withmask\" required> With Mask\n              </label>&nbsp;&nbsp;&nbsp;\n              <label class=\"radio-inline\">\n                <input type=\"radio\" [(ngModel)]=\"preference\" name=\"preference\" value=\"withoutmask\" required> Without Mask\n              </label>\n          </div>\n          <div class=\"form-group text-center\">\n            <br>\n            <hr>\n              <input type=\"submit\" value=\"Send SMS\" class=\"btn btn-primary\">\n            <hr>\n            <div class=\"clearfix\"></div>\n            <div *ngIf=\"sent == true\">Please Wait .. <span><i class=\"fa fa-spinner fa-spin\"></i></span></div>\n          </div>\n        </div>            \n\n  </div>\n\n</form>\n</section>\n\n\n"

/***/ }),
/* 1104 */
/***/ (function(module, exports) {

module.exports = "<section id=\"registerSection\">\n    <div>\n        <form (submit)=\"onRegister()\">\n          <div class=\"form-group\">\n            <label for=\"fullname\">Account Type</label>\n            <select name=\"type\" [(ngModel)]=\"type\" class=\"form-control\" required>\n              <option value=\"regular\">Regular</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"fullname\">Full Name</label>\n            <input type=\"text\" [(ngModel)]=\"fullname\" name=\"fullname\" class=\"form-control\" id=\"fullname\" aria-describedby=\"fullnameHelp\" placeholder=\"Enter fullname\" required>\n            <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name will be used to address you in emails.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"phone\">Phone</label>\n              <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" id=\"phone\" aria-describedby=\"phoneHelp\" placeholder=\"Enter Phone #\" required>\n              <small id=\"phonehelp\" class=\"form-text text-muted\">We'll never share your personal phone with anyone else.</small>\n            </div>\n          <div class=\"form-group\">\n              <label for=\"email\">Email address</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" required>\n              <small id=\"passwordhelp\" class=\"form-text text-muted\">By signing in, you declare to abide by the terms and conditions of this platform.</small>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n                <div class=\"clearfix\"></div>\n                <button class=\"btn btn-default\" [routerLink]=\"['../login']\">Already a Member? Log In</button>\n            </div>\n            \n          </form>\n    </div>\n  </section>\n  "

/***/ }),
/* 1105 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"reportingSection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left: 1px solid rgba(0,0,0,.1)\">\n        <p class=\"lead\"><u>Generate Report</u></p>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"type\">Operation Type</label>\n                <select (change)=\"opchange($event)\" name=\"\" id=\"\" class=\"form-control\">\n                  <option value=\"type\" disabled selected>Select Type</option>\n                  <option value=\"quick\">Quick</option>\n                  <option value=\"bulk\">Bulk</option>\n                  <option value=\"drip\">Drip</option>\n                  <option value=\"digital\">WhatsApp</option>\n                </select>\n              </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"type\">Account</label>\n              <select class=\"form-control\" (change)=\"childchange($event)\">\n                <option value=\"empty\" disabled selected>Select Account</option>\n                <option value={{localemail}} >Master ({{localemail}})</option>\n                <option *ngFor=\"let item of childsArr\" [value]=\"item.email\">{{item.fullname}} ({{item.email}})</option>\n              </select>\n            </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"type\">From </label>\n                <input type=\"text\" [(ngModel)]=\"datefrom\" class=\"form-control\">\n                <small>Select from date/time</small>\n              </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"type\">To</label>\n                <input type=\"text\" [(ngModel)]=\"dateto\" class=\"form-control\">\n                <small>Select to date/time</small>\n              </div>\n        </div>\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n                <label for=\"type\">Action</label>\n                <input [disabled]=\"spinner\" type=\"button\" (click)=\"report()\" value=\"Generate Report\" class=\"btn btn-primary\">\n                <small *ngIf=\"notfound\">No data found.</small>\n                <small *ngIf=\"spinner\">Please wait .. <span><i class=\"fa fa-spinner fa-spin fa-1x\"></i></span></small>\n              </div>\n        </div>\n        <div class=\"col-md-2\" *ngIf=\"downloadable.length>0\">\n            <div class=\"form-group\">\n                <label for=\"type\">Download</label>\n                <div><small><span (click)=\"download()\" style=\"color:green;cursor:pointer;\"><i class=\"fas fa-file-excel-o fa-3x\"></i></span></small></div>\n\n              </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"row\">\n              <div *ngIf = \"barChartData.length > 0\" class=\"col-md-9\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n                  <div style=\"display: block\">\n                    <canvas baseChart\n                            [datasets]=\"barChartData\"\n                            [labels]=\"barChartLabels\"\n                            [options]=\"barChartOptions\"\n                            [legend]=\"barChartLegend\"\n                            [chartType]=\"barChartType\"\n                            (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n                </div>\n                <div class=\"col-md-2\" style=\"display:none\" *ngIf=\"downloadable.length>0\">\n                  <small>Download the excel file for this report</small>\n                  <span (click)=\"download()\" style=\"color:green;cursor:pointer;\"><i class=\"fas fa-file-excel-o\"></i></span>\n                </div>\n          </div>\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n        \n\n        \n    </div>\n\n  </div>\n</section>"

/***/ }),
/* 1106 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"\">\n      <p class=\"lead\"><u>Sent</u></p>\n    <p class=\"text-muted\">These messages were recently sent ... <span *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-1x fa-spin\"></i></span></p>\n    <div >\n      <div >\n      \n        <table style=\"word-break: break-word\"  class=\"table table-sm table-condensed table-bordered table-hover\">\n          <thead>\n            <tr class=\"table-info\">\n              <th >Msg ID</th>\n              <th >To</th>\n              <th >Message</th>\n              <th >MNP</th>\n              <th >Intended</th>\n              <th >Found</th>\n              <th >Sent At</th>\n              <th >Status</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let item of quickarr\">\n                  <td class=\"text-muted\">{{item._id}}</td>\n                  <td>{{item.mobileno}}</td>\n                  <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                  <td class=\"text-muted\">{{item.mnp}}</td>\n                  <td class=\"text-muted\">{{item.intended}}</td>\n                  <td class=\"text-muted\">{{item.telco}}</td>\n                  <td class=\"text-muted\">{{item.created}}</td>\n                  <td class=\"text-muted\">\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                    <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                  </td>\n                </tr>\n            <tr *ngFor=\"let item of bulkarr\">\n              <td class=\"text-muted\">{{item._id}}</td>\n              <td>{{item.mobileno}}</td>\n              <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n              <td class=\"text-muted\">{{item.mnp}}</td>\n              <td class=\"text-muted\">{{item.intended}}</td>\n              <td class=\"text-muted\">{{item.telco}}</td>\n              <td class=\"text-muted\">{{item.created}}</td>\n              <td class=\"text-muted\">\n                <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n              </td>\n            </tr>\n            <tr *ngFor=\"let item of digitalarr\">\n                <td class=\"text-muted\">{{item._id}}</td>\n                <td>{{item.mobileno}}</td>\n                <td class=\"text-muted\">{{item.msg | slice:0:20}} ...</td>\n                <td class=\"text-muted\">{{item.created}}</td>\n                <td class=\"text-muted\">\n                  <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"alternate\"><i class=\"fa fa-circle\"></i></span>\n                  <span class=\"primary\"><i class=\"fa fa-circle\"></i></span>\n                  <!-- <span><i class=\"fa fa-circle\"></i></span> -->\n                </td>\n              </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),
/* 1107 */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n\n<br>\n<section id=\"settingssection\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        <app-navbar></app-navbar>\n      <div class=\"menuitemscontainer\" style=\"display:none\">\n          <!-- compose -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./uac']\"  routerLinkActive=\"hoverselected\" >\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fa fa-lock\"></i></span>\n                </div>\n                <div>\n                  User Access\n                </div>\n            </div>\n          </div>\n\n          <!-- inbox -->\n          <div class=\"menuitemwrapper\" [routerLink]=\"['./masks']\" routerLinkActive=\"hoverselected\">\n            <div class=\"menuitem\">\n                <div>\n                  <span><i class=\"fas fa-arrow-right\"></i></span>\n                </div>\n                <div>\n                  Masks\n                </div>\n            </div>\n          </div>\n   \n          \n      </div>\n    </div>\n    <div class=\"col-md-10\" style=\"border-left:1px solid rgba(0,0,0,.1)\">\n      <div class=\"menuitemsviewscontainer\">\n          <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1108 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p class=\"lead text-underline\"><u> Create Template </u></p>\n    <form (submit)=\"registertemplate()\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" aria-describedby=\"name\" placeholder=\"Enter Template Name\" required>\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name is unique throughout this application.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Desription</label>\n              <textarea [(ngModel)]=\"description\" name=\"description\"  id=\"desc\" cols=\"30\" rows=\"4\" class=\"form-control\" required>Enter text here ..</textarea>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Type</label>\n              <select (change)=\"typechange($event)\" [(ngModel)]=\"type\" name=\"type\" id=\"\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select Type</option>\n                <option value=\"static\">Static</option>\n                <option value=\"dynamic\">Dynamic</option>\n              </select>\n          </div>\n          <div class=\"form-group text-center\">\n              <hr>\n              <input type=\"submit\" value=\"Create Template\" class=\"btn btn-primary btn-sm\">\n              <hr>\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n        </div>\n  \n      </div>\n    </form>\n  </section>\n  \n  <section>\n    <p class=\"lead\"><u>Previous Templates</u></p>\n    <div>\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover table-bordered\">\n            <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Name</th>\n                  <th>Desription</th>\n                  <th>Type</th>\n                  <th>Created</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor = \"let item of templateArr\">\n                    <td class=\"text-muted\">{{item._id}}</td>\n                    <td class=\"text-muted\">{{item.name}}</td>\n                    <td class=\"text-muted\">{{item.description}}</td>\n                    <td class=\"text-muted\">{{item.type}}</td>\n                    <td class=\"text-muted\">{{item.created}}</td>\n                    <td class=\"text-muted text-danger\"><button class=\"btn btn-danger\" (click)=\"removetemplate(item._id)\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"routerarea text-center\" style=\"display:none\">\n      <input type=\"button\" value=\"Static\" [routerLink]=\"['./sttmsg']\"  routerLinkActive=\"hoverselected\" class=\"btn btn-default btn-sm\">\n      &nbsp;\n      <input type=\"button\" value=\"Dynamic\" [routerLink]=\"['./dytmsg']\"  routerLinkActive=\"hoverselected\" class=\"btn btn-default btn-sm\">\n    </div>\n    <div>\n      <router-outlet></router-outlet> \n    </div>\n  </section>"

/***/ }),
/* 1110 */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p class=\"lead text-underline\"><u> Create Template </u></p>\n    <form (submit)=\"register()\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n              <label for=\"name\">Template Type</label>\n              <select [(ngModel)]=\"type\" name=\"type\" class=\"form-control\" required>\n                <option value=\"\" disabled selected>Select type</option>\n                <option value=\"electricity\">Electricity</option>\n                <option value=\"security\">Security</option>\n                <option value=\"water\">Water</option>\n                <option value=\"gas\">Gas</option>\n                <option value=\"misc\">Misc</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Template Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" aria-describedby=\"name\" placeholder=\"Enter Campaign Name\" required>\n              <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name is unique throughout this application.</small>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"desc\">Desription</label>\n              <textarea [(ngModel)]=\"desc\" name=\"desc\" id=\"desc\" cols=\"30\" rows=\"4\" class=\"form-control\" required></textarea>\n          </div>\n          <div class=\"form-group\">\n              <input type=\"submit\" value=\"Create Template\" class=\"btn btn-primary btn-sm\">\n          </div>\n        </div>\n  \n      </div>\n    </form>\n  </section>\n  \n\n  <hr>\n  <section>\n    <p class=\"lead\"><u>Saved Templates</u></p>\n    <div>\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm table-hover table-bordered\">\n            <thead>\n                <tr class=\"table-info\">\n                  <th>ID</th>\n                  <th>Type</th>\n                  <th>Name</th>\n                  <th>Desription</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of templatesArr\">\n                    <td class=\"text-muted\">{{item._id}}</td>\n                    <td class=\"text-muted\">{{item.type}}</td>\n                    <td class=\"text-muted\">{{item.name}}</td>\n                    <td class=\"text-muted\">{{item.desc}}</td>\n                    <td class=\"text-muted text-danger\"><button (click)=\"removetemplate(item._id)\" class=\"btn btn-danger\"><span>Delete <i class=\"fa fa-times\"></i></span></button></td>\n                  </tr>\n                </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

module.exports = "<section id=\"topbarsection\">\n  <div class=\"\" id=\"tpcontainerwrapper\">\n    <div >\n      <div id=\"container\">\n        <span [routerLink]=\"['/default']\" ><label id=\"logotext\"><strong>Mango</strong>Tree</label>&nbsp;&nbsp;</span>\n        <!-- <label id=\"api\">(Instance ID: {{instanceid}})</label> -->\n        <span id=\"tpdockright\" *ngIf=\"loggedIn\">\n\n\n          <!-- new messages -->\n          <!-- <span class=\"dockitems\">\n              <span (click)=\"onNewMessage()\" ><i class=\"fa fa-retweet\"></i>&nbsp;<span>Inbox</span></span>\n          </span> -->\n\n          <!-- name -->\n          <span class=\"dockitems\">\n              <span (click)=\"onProfile()\" ><i class=\"fas fa-user-circle\"></i>&nbsp;<span>Profile</span></span>\n          </span>\n\n          <!-- logout -->\n          <span class=\"dockitems\">\n              <span (click)=\"onLogout()\" ><i class=\"fa fa-arrow-right\"></i>&nbsp;<span>Logout</span></span>\n          </span>\n          \n        </span>\n        \n      </div>\n    </div>\n  </div>\n\n  <div id=\"sidebar\" *ngIf=\"sidebarShow\">\n    <div class=\"header text-center\">\n      <span><i class=\"fa fa-caret-down\"></i></span>\n    </div>\n\n    <!-- messages -->\n    <div class=\"cardcontainer\">\n      <label >+92123456</label>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa ...</p>\n      <small>9:30 pm</small>\n    </div>\n\n    <div class=\"cardcontainer\">\n      <label >+92123456</label>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa ...</p>\n      <small>9:30 pm</small>\n    </div>\n\n    <div class=\"cardcontainer\">\n        <label >+92123456</label>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa ...</p>\n        <small>9:30 pm</small>\n      </div>\n\n  </div>\n</section>\n\n<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"marqueecontainer\">\n          <marquee behaviour=\"scroll\" scrollamount=\"4\" onmouseover=\"this.stop()\" onmouseout=\"this.start()\"> Some important information to show here &emsp;&emsp;|&emsp;&emsp; Something else got launched &emsp;&emsp;|&emsp;&emsp; Have you tried this yet?  </marquee>\n      </div>\n      \n    </div>\n  </div>\n</section>"

/***/ }),
/* 1112 */
/***/ (function(module, exports) {

module.exports = "<section id=\"topbarsection\">\n    <div class=\"\" id=\"tpcontainerwrapper\">\n      <div >\n        <div id=\"container\">\n          <span [routerLink]=\"['/home']\"><label id=\"logotext\"><strong>Mango</strong>Tree</label></span>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),
/* 1113 */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\">\n        <u (click)=\"getChildAccess()\">\n          Create New Child\n        </u>\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (submit)=\"onChildSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"fullname\">Full Name</label>\n          <input type=\"text\" [(ngModel)]=\"fullname\" name=\"fullname\" class=\"form-control\" id=\"fullname\" aria-describedby=\"fullnameHelp\"\n            placeholder=\"Enter fullname\" required>\n          <small id=\"fullnamhelp\" class=\"form-text text-muted\">This name will be used to address you in emails.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" aria-describedby=\"phoneHelp\"\n            placeholder=\"Enter Phone #\" required>\n          <small id=\"phonehelp\" class=\"form-text text-muted\">We'll never share your personal phone with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\"\n            placeholder=\"Enter email\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\"\n            required>\n          <small id=\"passwordhelp\" class=\"form-text text-muted\">By signing in, you declare to abide by the terms and\n            conditions of this platform.</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"derivedrights.length>0\">\n          <div><label><b>Privilages (Allow Access)</b></label></div>\n\n          <div class=\"form-check form-check-inline\" *ngFor=\"let i of derivedrights\">\n            <input class=\"form-check-input\" type=\"checkbox\" [id]=\"i\" [value]=\"i\" (change)=\"newcheckChange($event, i);\">\n            <label class=\"form-check-label\" [for]=\"i\">{{i}}</label>\n          </div>\n\n        </div>\n        <div class=\"form-group\">\n          <b><label>Delegate Access</label></b>\n          <br>\n          <label class=\"radio-inline\">\n            <input (change)=\"radiochange($event)\" type=\"radio\" [(ngModel)]=\"delegate\" name=\"delegate\" [checked]=\"delegate == true\"\n              [value]=true required> Give Access\n          </label>&nbsp;&nbsp;&nbsp;\n          <label class=\"radio-inline\">\n            <input (change)=\"radiochange($event)\" type=\"radio\" [(ngModel)]=\"delegate\" name=\"delegate\" [checked]=\"delegate == false\"\n              [value]=false required> Don't Give Access\n          </label>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Create Child</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p class=\"lead\">\n        <u>\n          Access Rights\n        </u>\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"fullname\">Select Child Account</label>\n        <select (change)=\"onChildChange($event)\" name=\"\" id=\"\" class=\"form-control\">\n          <option value=\"\" selected disabled>Select Account</option>\n          <option [value]=\"child.value\" [attr.data-payload]=\"child.rights\" *ngFor=\"let child of accessrightchilds\">{{child.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\" *ngIf=\"onchildchangerights.length > 0\">\n        <div><label><b>Privilages (Allow Access)</b></label></div>\n\n        <div class=\"form-check form-check-inline\" *ngFor=\"let i of derivedrights\">\n          <input class=\"form-check-input\" type=\"checkbox\" [id]=\"i\" [checked]=\"rightsarr.indexOf(i)>=0\" [value]=\"i\"\n            (change)=\"checkChange($event, i);\">\n          <label class=\"form-check-label\" [for]=\"i\">{{i}}</label>\n        </div>\n\n      </div>\n      <div class=\"form-group\" *ngIf=\"onchildchangerights.length > 0\">\n        <b><label>Delegate Access</label></b>\n        <br>\n        <label class=\"radio-inline\">\n          <input type=\"radio\" [(ngModel)]=\"delegateu\" name=\"delegateu\" [checked]=\"delegateu == true\" [value]=true\n            required> Give Access\n        </label>&nbsp;&nbsp;&nbsp;\n        <label class=\"radio-inline\">\n          <input type=\"radio\" [(ngModel)]=\"delegateu\" name=\"delegateu\" [checked]=\"delegateu == false\" [value]=false\n            required> Don't Give Access\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"onchildchangerights.length > 0\">\n        <small>Child Accounts will only be able to use the features selected above.</small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"onchildchangerights.length > 0\">\n        <button type=\"button\" (click)=\"onchildrightsupdate()\" class=\"btn btn-primary\">Update Privilages</button>\n      </div>\n      <!-- <div>\n                {{checkedarr}}\n              </div> -->\n\n    </div>\n  </div>\n\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <u>\n        <p class=\"lead\">Share Credit</p>\n      </u>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"fullname\">Select Child Account</label>\n        <select [(ngModel)]=\"creditchild\" class=\"form-control\">\n          <option value=\"\" selected disabled>Select Account</option>\n          <option [value]=\"child.value\" [attr.data-payload]=\"child.rights\" *ngFor=\"let child of accessrightchilds\">{{child.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"smscredit\">SMS Credit <small>(This is the maximum you can share)</small> </label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"smscredit\" name=\"smscredit\" id=\"smscredit\"\n          aria-describedby=\"emailHelp\" placeholder=\"Enter Credit SMS\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"whatsappcredit\">WhatsApp Credit <small>(This is the maximum you can share)</small> </label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"whatsappcredit\" name=\"whatsappcredit\" id=\"whatsappcredit\"\n          aria-describedby=\"emailHelp\" placeholder=\"Enter Credit WhatsApp\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"button\" value=\"Share Credit\" class=\"btn btn-primary\" (click)=\"registercredit()\">\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n  <!-- credit history -->\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <u>\n          <p class=\"lead\">Child Credit Share History</p>\n        </u>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"fullname\">Select Child Account</label>\n          <select [(ngModel)]=\"historychild\" class=\"form-control\">\n            <option value=\"\" selected disabled>Select Account</option>\n            <option [value]=\"child.value\" [attr.data-payload]=\"child.rights\" *ngFor=\"let child of accessrightchilds\">{{child.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"button\" value=\"View History\" class=\"btn btn-primary\" (click)=\"historycredit()\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"historyarr.length>0\">\n      <div class=\"col-md-10\">\n\n        <div class=\"form-group\">\n          <table class=\"table table-sm table-condensed table-bordered table-hover\">\n\n            <thead>\n              <tr class=\"table-info\">\n                <th>ID</th>\n                <th>Date</th>\n                <th>SMS</th>\n                <th>WhatsApp</th>\n                <th>Cost(Rs)</th>\n                <th>Payment</th>\n                <th>SharedBy</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of historyarr\">\n                <td class=\"text-muted\">{{item._id}}</td>\n                <td class=\"text-muted\">{{item.created}}</td>\n                <td class=\"text-muted\">{{item.smscredit}}</td>\n                <td class=\"text-muted\">{{item.whatsappcredit}}</td>\n                <td class=\"text-muted\">{{item.cost}}</td>\n                <td class=\"text-muted\">{{item.payment}}</td>\n                <td class=\"text-muted\">{{item.from}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <p class=\"lead\"><u> Registered Child Accounts </u></p>\n      <input type=\"text\" [(ngModel)]=\"searchString\" name=\"searchString\" id=\"\" class=\"form-control input-sm\" placeholder=\"Search Childs ...\">\n      <table class=\"table table-sm table-condensed table-bordered table-hover\">\n\n        <thead>\n          <tr class=\"table-info\">\n            <th>Name</th>\n            <th>Email</th>\n            <th>SMS Resources</th>\n            <th>WApp Resources</th>\n            <th>Expiry</th>\n            <th>Delegate Access</th>\n            <th>Suspended</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of childsarr | masksfilter : 'email' : searchString; let i = index\">\n            <td class=\"text-muted\">{{item.fullname}}</td>\n            <td class=\"text-muted\">{{item.email}}</td>\n            <td class=\"text-muted\">{{item.creditsms}}</td>\n            <td class=\"text-muted\">{{item.creditwhatsapp}}</td>\n            <td class=\"text-muted\">{{item.expirybundle}}</td>\n            <td class=\"text-muted\">{{item.isdelegate}}</td>\n            <td class=\"text-muted\">{{item.issuspended}}</td>\n            \n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n\n\n\n  <br>\n</section>\n"

/***/ }),
/* 1114 */,
/* 1115 */,
/* 1116 */,
/* 1117 */,
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */,
/* 1123 */,
/* 1124 */,
/* 1125 */,
/* 1126 */,
/* 1127 */,
/* 1128 */,
/* 1129 */,
/* 1130 */,
/* 1131 */,
/* 1132 */,
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */,
/* 1152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(557);


/***/ })
],[1152]);
//# sourceMappingURL=main.bundle.map