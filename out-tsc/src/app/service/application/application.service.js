import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var ApplicationService = /** @class */ (function () {
    function ApplicationService() {
        this.applicationList = [
            {
                name: 'ie',
                img: '/assets/images/ie-icon.png',
                isOpen: false,
            },
            {
                name: 'player',
                img: '/assets/images/player-icon.png',
                isOpen: false,
            },
            {
                name: 'chrome',
                img: '/assets/images/chrome-icon.png',
                isOpen: false,
            },
            {
                name: 'line',
                img: '/assets/images/line-icon.png',
                isOpen: false,
            },
        ];
        this.applicationSubject = new BehaviorSubject(this.applicationList);
    }
    ApplicationService.prototype.getApplication = function () {
        return this.applicationSubject;
    };
    ApplicationService.prototype.clickApp = function (app) {
        var index = this.applicationList.findIndex(function (appIteem) { return appIteem.name === app.name; });
        this.applicationList[index].isOpen = !this.applicationList[index].isOpen;
        this.applicationSubject.next(this.applicationList);
    };
    ApplicationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ApplicationService);
    return ApplicationService;
}());
export { ApplicationService };
//# sourceMappingURL=application.service.js.map