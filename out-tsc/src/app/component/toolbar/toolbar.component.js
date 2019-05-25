import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/service/application/application.service';
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.appList = [];
        this.openPrograms = false;
        appService.getApplication().subscribe(function (appList) {
            _this.appList = appList;
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.toggleApp = function (app) {
        console.log(app);
        this.appService.clickApp(app);
    };
    ToolbarComponent.prototype.toggleProgrames = function () {
        this.openPrograms = !this.openPrograms;
        console.log(this.openPrograms);
    };
    ToolbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ApplicationService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map