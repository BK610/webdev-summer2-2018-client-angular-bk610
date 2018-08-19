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

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Welcome to WhiteBoard</h1>\r\n\r\n  <!--<a routerLink=\"quizzes\">Quizzes</a> |-->\r\n  <a routerLink=\"home\">Home</a> |\r\n  <a routerLink=\"enrollments\">Enrollments (delete)</a> |\r\n  <a routerLink=\"sections\">Sections (delete)</a> |\r\n  <span *ngIf=\"currentUser.username === 'null'\">\r\n    <a routerLink=\"login\">\r\n      Login\r\n    </a>\r\n    |\r\n  </span>\r\n  <a *ngIf=\"currentUser.username !== 'null'\"\r\n     (click)=\"logout()\"\r\n     routerLink=\"login\">Logout</a>\r\n  <a *ngIf=\"currentUser.username === 'null'\"\r\n     routerLink=\"register\">Register</a> |\r\n  <a routerLink=\"profile\">Profile</a>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'app';
        this.currentUser = {
            username: 'null'
        };
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            _this.currentUser = {
                username: 'null'
            };
            _this.router.navigate(['/login']);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser()
            .then(function (user) { return _this.currentUser = user; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _true_false_question_true_false_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./true-false-question/true-false-question.component */ "./src/app/true-false-question/true-false-question.component.ts");
/* harmony import */ var _fill_blanks_question_fill_blanks_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fill-blanks-question/fill-blanks-question.component */ "./src/app/fill-blanks-question/fill-blanks-question.component.ts");
/* harmony import */ var _multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./multiple-choice-question/multiple-choice-question.component */ "./src/app/multiple-choice-question/multiple-choice-question.component.ts");
/* harmony import */ var _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./essay-question/essay-question.component */ "./src/app/essay-question/essay-question.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__["SectionsComponent"],
                _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_13__["EnrollmentComponent"],
                _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_14__["QuizListComponent"],
                _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_16__["QuizTakerComponent"],
                _true_false_question_true_false_question_component__WEBPACK_IMPORTED_MODULE_17__["TrueFalseQuestionComponent"],
                _fill_blanks_question_fill_blanks_question_component__WEBPACK_IMPORTED_MODULE_18__["FillBlanksQuestionComponent"],
                _multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_19__["MultipleChoiceQuestionComponent"],
                _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_20__["EssayQuestionComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_10__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_12__["SectionServiceClient"],
                _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_15__["QuizServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");










var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'enrollments', component: _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["EnrollmentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'courses/:courseId', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorComponent"] },
    { path: 'sections', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"] },
    { path: 'quizzes', component: _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_7__["QuizListComponent"] },
    { path: 'quiz/:quizId', component: _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_8__["QuizTakerComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <h2>Modules</h2>\r\n    <ul class=\"list-group\">\r\n      <li (click)=\"selectModule(module)\"\r\n          *ngFor=\"let module of modules\"\r\n          [ngClass]=\"{'active': module === selectedModule}\"\r\n          class=\"list-group-item\">\r\n        {{module.title}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <h2>Lessons</h2>\r\n    <ul class=\"list-group\">\r\n      <li (click)=\"selectLesson(lesson)\"\r\n          *ngFor=\"let lesson of selectedModule.lessons\"\r\n          [ngClass]=\"{'active': lesson === selectedLesson}\"\r\n          class=\"list-group-item\">\r\n        {{lesson.title}}\r\n      </li>\r\n    </ul>\r\n    <h3>Widgets</h3>\r\n    <ul class=\"list-group\">\r\n      <div *ngFor=\"let widget of selectedLesson.widgets\"\r\n           class=\"list-group-item\">\r\n        {{widget.title}}\r\n        <li *ngIf=\"widget.widgetType == 'HEADING_WIDGET'\"\r\n            class=\"list-group-item\">\r\n          <h1 *ngIf=\"widget.size == 1\">\r\n            {{widget.text}}\r\n          </h1>\r\n          <h2 *ngIf=\"widget.size == 2\">\r\n            {{widget.text}}\r\n          </h2>\r\n          <h3 *ngIf=\"widget.size == 3\">\r\n            {{widget.text}}\r\n          </h3>\r\n        </li>\r\n        <li *ngIf=\"widget.widgetType == 'PARAGRAPH_WIDGET'\"\r\n            class=\"list-group-item\">\r\n          <p>\r\n            {{widget.text}}\r\n          </p>\r\n        </li>\r\n        <li *ngIf=\"widget.widgetType == 'LIST_WIDGET'\"\r\n            class=\"list-group-item\">\r\n          <div *ngIf=\"widget.listType == 'ul'\">\r\n            <ul *ngFor=\"let item of newLineSplit(widget.text)\">\r\n              <li>\r\n                {{item}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div *ngIf=\"widget.listType == 'ol'\">\r\n            <ol *ngFor=\"let item of newLineSplit(widget.text)\">\r\n              <li>\r\n                {{widget.listItems}}\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </li>\r\n        <li *ngIf=\"widget.widgetType == 'IMAGE_WIDGET'\"\r\n            class=\"list-group-item\">\r\n          <img src=\"{{widget.url}}\"\r\n               height=\"300\"\r\n               width=\"300\"/>\r\n        </li>\r\n        <li *ngIf=\"widget.widgetType == 'LINK_WIDGET'\">\r\n          Unsupported widget type.\r\n        </li>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(activatedRoute, courseService, userService) {
        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        this.userService = userService;
        this.user = {};
        this.courseId = {};
        this.modules = [];
        this.selectedModule = {
            lessons: []
        };
        this.selectedLesson = {
            widgets: []
        };
    }
    CourseNavigatorComponent.prototype.selectModule = function (module) {
        this.selectedModule = module;
        this.selectedLesson = { widgets: [] };
    };
    CourseNavigatorComponent.prototype.selectLesson = function (lesson) {
        this.selectedLesson = lesson;
    };
    CourseNavigatorComponent.prototype.newLineSplit = function (text) {
        return text.split('\n');
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseId = params['courseId'];
        });
        this.courseService
            .findAllModulesForCourse(this.courseId)
            .then(function (modules) { return _this.modules = modules; })
            .then(function () { return _this.userService.currentUser()
            .then(function (user) { return _this.user = user; }); });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/enrollment/enrollment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.html":
/*!******************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enrollments</h2>\r\n\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let section of sections\" class=\"list-group-item\">\r\n    {{section.title}}, <b>{{section.seats}}</b> seats remaining\r\n    <button class=\"float-right\" (click)=\"enroll(section._id)\">Enroll</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.ts ***!
  \****************************************************/
/*! exports provided: EnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentComponent", function() { return EnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnrollmentComponent = /** @class */ (function () {
    function EnrollmentComponent(sectionService, userService) {
        var _this = this;
        this.sectionService = sectionService;
        this.userService = userService;
        this.sections = [];
        this.currentUser = {
            _id: 0,
        };
        this.enroll = function (sectionId) {
            _this.sectionService.enroll(_this.currentUser._id, sectionId)
                .then(function (response) { return response.json(); });
        };
    }
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionService
            .findAllSections()
            .then(function (sections) {
            _this.sections = sections;
            _this.userService.currentUser()
                .then(function (user) { return _this.currentUser = user; });
        });
    };
    EnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrollment',
            template: __webpack_require__(/*! ./enrollment.component.html */ "./src/app/enrollment/enrollment.component.html"),
            styles: [__webpack_require__(/*! ./enrollment.component.css */ "./src/app/enrollment/enrollment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/essay-question/essay-question.component.css":
/*!*************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/essay-question/essay-question.component.html":
/*!**************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea [(ngModel)]=\"question.essayAnswer\" class=\"form-control\"></textarea>\r\n\r\n{{question.essayAnswer}}\r\n"

/***/ }),

/***/ "./src/app/essay-question/essay-question.component.ts":
/*!************************************************************!*\
  !*** ./src/app/essay-question/essay-question.component.ts ***!
  \************************************************************/
/*! exports provided: EssayQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayQuestionComponent", function() { return EssayQuestionComponent; });
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

var EssayQuestionComponent = /** @class */ (function () {
    function EssayQuestionComponent() {
    }
    EssayQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EssayQuestionComponent.prototype, "question", void 0);
    EssayQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-essay-question',
            template: __webpack_require__(/*! ./essay-question.component.html */ "./src/app/essay-question/essay-question.component.html"),
            styles: [__webpack_require__(/*! ./essay-question.component.css */ "./src/app/essay-question/essay-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EssayQuestionComponent);
    return EssayQuestionComponent;
}());



/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [ngSwitch]=\"blank.indexOf('*')\" *ngFor=\"let blank of question.blanks\">\r\n  <span *ngSwitchCase=\"-1\">{{blank}}</span>\r\n  <span *ngSwitchCase=\"0\">\r\n    <input [(ngModel)]=\"question.fillBlanksAnswers[blank.split('=')[0].replace('*','')]\"\r\n           placeholder=\"{{blank.split('=')[0].replace('*','')}}\"\r\n           style=\"border-color:black\">\r\n  </span>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/fill-blanks-question/fill-blanks-question.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/fill-blanks-question/fill-blanks-question.component.ts ***!
  \************************************************************************/
/*! exports provided: FillBlanksQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillBlanksQuestionComponent", function() { return FillBlanksQuestionComponent; });
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

var FillBlanksQuestionComponent = /** @class */ (function () {
    function FillBlanksQuestionComponent() {
    }
    FillBlanksQuestionComponent.prototype.ngOnInit = function () {
        this.question.fillBlanksAnswers = {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FillBlanksQuestionComponent.prototype, "question", void 0);
    FillBlanksQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fill-blanks-question',
            template: __webpack_require__(/*! ./fill-blanks-question.component.html */ "./src/app/fill-blanks-question/fill-blanks-question.component.html"),
            styles: [__webpack_require__(/*! ./fill-blanks-question.component.css */ "./src/app/fill-blanks-question/fill-blanks-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FillBlanksQuestionComponent);
    return FillBlanksQuestionComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-12\">\r\n    <h2>Available Courses</h2>\r\n    <ul class=\"list-group\">\r\n      <li [ngClass]=\"{'active': course.id == selectedCourse._id}\"\r\n          *ngFor=\"let course of courses\"\r\n          class=\"list-group-item\">\r\n        <p>\r\n          {{course.title}}\r\n        </p>\r\n        <div>\r\n          <button [routerLink]=\"['/courses/', course.id]\">\r\n            View\r\n          </button>\r\n          <button [routerLink]=\"['/sections/']\">\r\n            Enroll\r\n          </button>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, courseService, userService) {
        this.router = router;
        this.courseService = courseService;
        this.userService = userService;
        this.courses = [];
        this.selectedCourse = {
            _id: ''
        };
        this.user = {};
    }
    HomeComponent.prototype.navigateToCourse = function (course) {
        this.selectedCourse = course;
        var url = '/courses/' + course.id;
        this.router.navigate([url]);
    };
    HomeComponent.prototype.navigateToEnrollment = function (course) {
        this.selectedCourse = course;
        var url = '/sections/' + course.id;
        this.router.navigate([url]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
        this.userService.currentUser()
            .then(function (user) { return _this.user = user; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<input [(ngModel)]=\"username\"\r\n       placeholder=\"Username\"\r\n       class=\"form-control\"/>\r\n<input [(ngModel)]=\"password\"\r\n       placeholder=\"Password\"\r\n       class=\"form-control\"/>\r\n<button (click)=\"login(username, password)\"\r\n        class=\"btn btn-primary btn-block\">\r\n  Login\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.login = function (username, password) {
            var user = {
                username: username,
                password: password
            };
            _this.userService.login(user)
                .then(function (status) {
                if (status === 200) {
                    _this.router.navigate(['profile']);
                }
                else {
                    alert('Failed to login.');
                }
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li *ngFor=\"let choice of question.choices\"\r\n      class=\"list-group-item\">\r\n    <label>\r\n      <input (click)=\"selected(choice)\" name=\"{{question._id}}\"\r\n             type=\"radio\">\r\n      {{choice.text}}\r\n    </label>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/multiple-choice-question/multiple-choice-question.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/multiple-choice-question/multiple-choice-question.component.ts ***!
  \********************************************************************************/
/*! exports provided: MultipleChoiceQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleChoiceQuestionComponent", function() { return MultipleChoiceQuestionComponent; });
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

var MultipleChoiceQuestionComponent = /** @class */ (function () {
    function MultipleChoiceQuestionComponent() {
        var _this = this;
        this.selected = function (choice) {
            _this.question.multipleChoiceAnswer = _this.question.choices.indexOf(choice);
        };
    }
    MultipleChoiceQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleChoiceQuestionComponent.prototype, "question", void 0);
    MultipleChoiceQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-choice-question',
            template: __webpack_require__(/*! ./multiple-choice-question.component.html */ "./src/app/multiple-choice-question/multiple-choice-question.component.html"),
            styles: [__webpack_require__(/*! ./multiple-choice-question.component.css */ "./src/app/multiple-choice-question/multiple-choice-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipleChoiceQuestionComponent);
    return MultipleChoiceQuestionComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome {{currentUser.username}}</h2>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class='col-6'>\r\n      <h3>\r\n        Profile\r\n      </h3>\r\n      <div *ngIf=\"currentUser.role === 'admin'\"\r\n           class=\"float-right\">\r\n        <button class='btn btn-primary'\r\n                routerLink=\"/admin\">\r\n          Admin Editor\r\n        </button>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"username\"\r\n               class=\"col-lg-2 col-form-label\">\r\n          Username\r\n        </label>\r\n        <div class=\"col-lg-10\"\r\n             id=\"username\">\r\n          <input [(ngModel)]='username'\r\n                 type=\"text\"\r\n                 class=\"form-control\"\r\n                 value={{currentUser.username}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"firstName\"\r\n               class=\"col-lg-2 col-form-label\">\r\n          First Name\r\n        </label>\r\n        <div class=\"col-lg-10\"\r\n             id=\"firstName\">\r\n          <input [(ngModel)]='firstName'\r\n                 type=\"text\"\r\n                 class=\"form-control\"\r\n                 value={{currentUser.firstName}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"lastName\"\r\n               class=\"col-lg-2 col-form-label\">\r\n          Last Name\r\n        </label>\r\n        <div class=\"col-lg-10\"\r\n             id=\"lastName\">\r\n          <input [(ngModel)]='lastName'\r\n                 type=\"text\"\r\n                 class=\"form-control\"\r\n                 value={{currentUser.lastName}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"phone\"\r\n               class=\"col-lg-2 col-form-label\">\r\n          Phone\r\n        </label>\r\n        <div class=\"col-lg-10\"\r\n             id=\"phone\">\r\n          <input [(ngModel)]='phone'\r\n                 class=\"form-control\"\r\n                 placeholder=\"phone\"\r\n                 value={{currentUser.phone}}>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\"\r\n               class=\"col-lg-2 col-form-label\">\r\n          Email\r\n        </label>\r\n        <div class=\"col-lg-10\"\r\n             id=\"email\">\r\n          <input [(ngModel)]=\"email\"\r\n                 type=\"text\"\r\n                 placeholder=\"email\"\r\n                 class=\"form-control\"\r\n                 value={{currentUser.email}}>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"updateUser(currentUser)\">\r\n          Update\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <h3>Your Sections</h3>\r\n      <li *ngFor=\"let enrollment of enrollments\" class=\"list-group-item\">\r\n        <button class=\"float-right btn btn-danger \"\r\n                (click)=\"unenroll(enrollment.section._id, enrollment.section.seats)\">\r\n          Un-enroll\r\n        </button>\r\n        {{enrollment.section.title}}, <b>{{enrollment.section.seats}}</b> seats remaining\r\n\r\n      </li>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, sectionService) {
        this.userService = userService;
        this.sectionService = sectionService;
        this.currentUser = {
            _id: 0,
            username: String,
            password: String,
            firstName: String,
            lastName: String,
            email: String,
            phone: String,
            role: '',
            address: String,
            sections: []
        };
        this.enrollments = [];
    }
    ProfileComponent.prototype.updateUser = function (user) {
        var newUser = {
            username: this.username,
            password: this.currentUser.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            address: this.currentUser.address,
            role: this.currentUser.role,
            sections: this.currentUser.sections
        };
        this.userService.updateUser(newUser)
            .then(function (response) { return response.ok; })
            .then(function () { return alert('Profile updated.'); });
    };
    ProfileComponent.prototype.unenroll = function () {
        // this.sectionService.unenroll()
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser()
            .then(function (user) {
            _this.currentUser = user;
        })
            .then(function () { return _this.sectionService.findSectionsForStudent(_this.currentUser._id); })
            .then(function (sections) { return _this.enrollments = sections; });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Quizzes</h2>\r\n\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let quiz of quizzes\"\r\n      class=\"list-group-item\">\r\n    {{quiz.title}}\r\n    <a class=\"float-right btn btn-primary\"\r\n       href=\"/quiz/{{quiz._id}}\">\r\n      Take\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.ts ***!
  \**************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(service) {
        this.service = service;
        this.quizzes = [];
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllQuizzes()
            .then(function (quizzes) { return _this.quizzes = quizzes; });
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.html":
/*!******************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Quiz Taker</h2>\r\n\r\n<h3>\r\n  <!--{{quiz.title}}-->\r\n  <button class=\"btn btn-primary float-right\"\r\n          (click)=\"submitQuiz(quiz)\">\r\n    Submit\r\n  </button>\r\n</h3>\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\">\r\n      <!--*ngFor=\"let question of quiz.questions\">-->\r\n    <h4>\r\n      <!--{{ question.title}}-->\r\n      <span class=\"float-right\">\r\n        <!--{{question.points}}-->\r\n      </span>\r\n    </h4>\r\n    <p>\r\n      <!--{{question.description}}-->\r\n    </p>\r\n    <!--<div [ngSwitch]=\"question.questionType\">-->\r\n\r\n      <!--<app-true-false-question-->\r\n        <!--[question]=\"question\"-->\r\n        <!--*ngSwitchCase=\"'TRUE_FALSE'\">-->\r\n      <!--</app-true-false-question>-->\r\n\r\n      <!--<app-fill-blanks-question-->\r\n        <!--[question]=\"question\"-->\r\n        <!--*ngSwitchCase=\"'FILL_BLANKS'\">-->\r\n      <!--</app-fill-blanks-question>-->\r\n\r\n      <!--<app-multiple-choice-question-->\r\n        <!--[question]=\"question\"-->\r\n        <!--*ngSwitchCase=\"'CHOICE'\">-->\r\n      <!--</app-multiple-choice-question>-->\r\n\r\n      <!--<app-essay-question-->\r\n        <!--[question]=\"question\"-->\r\n        <!--*ngSwitchCase=\"'ESSAY'\">-->\r\n      <!--</app-essay-question>-->\r\n\r\n    <!--</div>-->\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.ts ***!
  \****************************************************/
/*! exports provided: QuizTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTakerComponent", function() { return QuizTakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizTakerComponent = /** @class */ (function () {
    function QuizTakerComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.quizId = '';
        this.quiz = {};
        this.submitQuiz = function (quiz) {
            return _this.service
                .submitQuiz(quiz)
                .then(function (submission) { return console.log(submission); });
        };
    }
    QuizTakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { return _this.service
            .findQuizById(params['quizId'])
            .then(function (quiz) { return _this.quiz = quiz; }); });
    };
    QuizTakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-taker',
            template: __webpack_require__(/*! ./quiz-taker.component.html */ "./src/app/quiz-taker/quiz-taker.component.html"),
            styles: [__webpack_require__(/*! ./quiz-taker.component.css */ "./src/app/quiz-taker/quiz-taker.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], QuizTakerComponent);
    return QuizTakerComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Register</h1>\r\n  <div>\r\n    <label>\r\n      Username\r\n    </label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           placeholder=\"alice\"\r\n           [(ngModel)]=\"username\">\r\n  </div>\r\n  <div>\r\n    <label>\r\n      Password\r\n    </label>\r\n    <input type=\"password\"\r\n           class=\"form-control\"\r\n           [(ngModel)]=\"password\">\r\n  </div>\r\n  <div>\r\n    <label>\r\n      Validate Password\r\n    </label>\r\n    <input type=\"password\"\r\n           class=\"form-control\"\r\n           [(ngModel)]=\"password2\">\r\n  </div>\r\n  <button class=\"btn btn-success\"\r\n          (click)=\"register( {\r\n          username: username,\r\n          password: password,\r\n          password2: password2\r\n          })\">\r\n    Register\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.register = function (user) {
            if (user.password === user.password2) {
                var newUser = {
                    username: user.username,
                    password: user.password,
                    firstName: String,
                    lastName: String,
                    email: String,
                    phone: String,
                    role: 'student',
                    sections: []
                };
                if (user.username === 'admin' && user.password === 'admin') {
                    newUser.role = 'admin';
                }
                _this.userService.register(newUser)
                    .then(function (status) {
                    if (status === 200) {
                        return _this.router.navigate(['/profile']);
                    }
                    else {
                        alert('Register failed. Username may already exist.');
                    }
                });
            }
            else {
                alert('Passwords must match.');
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h2>Sections</h2>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">\r\n          Courses\r\n        </li>\r\n        <li (click)=\"selectCourse(course)\"\r\n            *ngFor=\"let course of courses\"\r\n            [ngClass]=\"{'active': course.id === selectedCourse.id}\"\r\n            class=\"list-group-item\">\r\n          {{course.title}} - ({{course.id}})\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">\r\n          Sections\r\n          <button *ngIf=\"currentUser.role === 'admin'\"\r\n                  (click)=\"addSection(section)\"\r\n                  class=\"btn btn-success btn-sm float-right\">Add\r\n          </button>\r\n        </li>\r\n        <li class=\"list-group-item\"\r\n            *ngIf=\"currentUser.role === 'admin'\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <input [(ngModel)]=\"section.name\"\r\n                     placeholder=\"name\"\r\n                     class=\"form-control\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <input [(ngModel)]=\"section.seats\"\r\n                     placeholder=\"seats\"\r\n                     class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <li *ngFor=\"let section of sections\" class=\"list-group-item\">\r\n          {{section.name}}: <b>{{section.seats}}</b> seats remaining\r\n          <button (click)=\"enroll(section._id)\"\r\n                  class=\"btn btn-secondary float-right\">\r\n            Enroll\r\n          </button>\r\n          <button *ngIf=\"currentUser.role === 'admin'\"\r\n                  (click)=\"deleteSection(section)\"\r\n                  class=\"btn btn-danger float-right\">\r\n            Delete\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(sectionService, courseService, userService) {
        var _this = this;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.userService = userService;
        this.courses = [];
        this.sections = [];
        this.selectedCourse = {
            title: '',
            id: Number
        };
        this.section = {
            _id: '',
            name: '',
            seats: 24
        };
        this.currentUser = {
            _id: 0,
            role: ''
        };
        this.selectCourse = function (course) {
            _this.selectedCourse = course;
            _this.sectionService.findSectionsForCourse(course.id)
                .then(function (sections) { return _this.sections = sections; });
        };
        this.addSection = function (section) {
            section.courseId = _this.selectedCourse.id;
            _this.sectionService.createSection(section)
                .then(function () {
                return _this.sectionService.findSectionsForCourse(_this.selectedCourse.id);
            })
                .then(function (sections) { return _this.sections = sections; });
        };
        this.deleteSection = function (section) {
            _this.sectionService.deleteSection(section._id)
                .then(function () {
                return _this.sectionService.findSectionsForCourse(_this.selectedCourse.id);
            })
                .then(function (sections) { return _this.sections = sections; });
        };
        this.enroll = function (sectionId) {
            console.log(_this.currentUser);
            console.log(sectionId);
            _this.sectionService.enroll(_this.currentUser._id, sectionId)
                .then(function (response) { return response.json(); });
        };
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            _this.userService.currentUser()
                .then(function (user) { return _this.currentUser = user; });
        });
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_API_URL = 'https://cs4550-summer2-2018-bk610.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_API_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findAllModulesForCourse = function (courseId) {
        return fetch(this.COURSE_API_URL + '/' + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CourseServiceClient);
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quiz.service.client.ts ***!
  \*************************************************/
/*! exports provided: QuizServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizServiceClient", function() { return QuizServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuizServiceClient = /** @class */ (function () {
    function QuizServiceClient() {
        var _this = this;
        this.url = 'https://cs4550-bk610-node-server.herokuapp.com/api/quiz';
        this.submitQuiz = function (quiz) {
            return fetch(_this.url + '/quiz/' + quiz._id + '/submission', {
                method: 'post',
                body: JSON.stringify(quiz),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(function (response) { return response.json(); });
        };
        this.findAllQuizzes = function () {
            return fetch(_this.url + '/quiz')
                .then(function (response) { return response.json(); });
        };
        this.findQuizById = function (quizId) {
            return fetch(_this.url + '/quiz/' + quizId)
                .then(function (response) { return response.json(); });
        };
    }
    QuizServiceClient.prototype.createQuiz = function (quiz) { };
    QuizServiceClient.prototype.updateQuiz = function (quizId, quiz) { };
    QuizServiceClient.prototype.deleteQuiz = function (quizId) { };
    QuizServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], QuizServiceClient);
    return QuizServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        var _this = this;
        // section_url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
        this.section_url = 'http://localhost:8080/api';
        this.enroll = function (studentId, sectionId) {
            console.log(studentId);
            console.log(sectionId);
            return fetch(_this.section_url + '/student/' + studentId + '/section/' + sectionId, {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.json(); });
        };
        this.findAllSections = function () {
            return fetch(_this.section_url + '/section', {
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.json(); });
        };
        this.findSectionsForCourse = function (courseId) {
            return fetch(_this.section_url + '/course/' + courseId + '/section', {
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            })
                .then(function (response) { return response.json(); });
        };
        this.createSection = function (section) {
            return fetch(_this.section_url + '/course/' + section.courseId + '/section', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(section)
            })
                .then(function (response) { return response.json(); });
        };
        this.deleteSection = function (sectionId) {
            return fetch(_this.section_url + '/section/' + sectionId, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            })
                .then(function (response) { return response.json(); });
        };
    }
    SectionServiceClient.prototype.findSectionsForStudent = function (studentId) {
        return fetch(this.section_url + '/student/' + studentId + '/section', {
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SectionServiceClient);
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        var _this = this;
        this.url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
        // url = 'http://localhost:8080/api';
        this.login = function (user) {
            return fetch(_this.url + '/login', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(function (response) { return response.status; });
        };
        this.logout = function () {
            return fetch(_this.url + '/logout', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.status; });
        };
        this.currentUser = function () {
            return fetch(_this.url + '/current', {
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) { return response.json(); });
        };
        this.register = function (user) {
            return fetch(_this.url + '/register', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(function (response) { return response.status; });
        };
        this.updateUser = function (user) {
            return fetch(_this.url + '/profile', {
                method: 'put',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(function (response) { return response.json(); });
        };
        this.delete = function () {
            return fetch(_this.url + '/profile', {
                method: 'delete',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.json(); });
        };
    }
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.html":
/*!************************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n  <input (click)=\"selected(true)\"\r\n         name=\"{{question._id}}\"\r\n         type=\"radio\">\r\n    True\r\n</label>\r\n<br/>\r\n<label>\r\n  <input (click)=\"selected(false)\"\r\n         name=\"{{question._id}}\"\r\n         type=\"radio\">\r\n    False\r\n</label>\r\n"

/***/ }),

/***/ "./src/app/true-false-question/true-false-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/true-false-question/true-false-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrueFalseQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueFalseQuestionComponent", function() { return TrueFalseQuestionComponent; });
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

var TrueFalseQuestionComponent = /** @class */ (function () {
    function TrueFalseQuestionComponent() {
        var _this = this;
        this.selected = function (trueOrFalse) {
            _this.question.trueFalseAnswer = trueOrFalse;
        };
    }
    TrueFalseQuestionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrueFalseQuestionComponent.prototype, "question", void 0);
    TrueFalseQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-true-false-question',
            template: __webpack_require__(/*! ./true-false-question.component.html */ "./src/app/true-false-question/true-false-question.component.html"),
            styles: [__webpack_require__(/*! ./true-false-question.component.css */ "./src/app/true-false-question/true-false-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrueFalseQuestionComponent);
    return TrueFalseQuestionComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\borio\Documents\GitHub\webdev-summer2-client-angular-bk610\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map