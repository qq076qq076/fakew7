import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent() {
    }
    Object.defineProperty(ProgramsComponent.prototype, "isOpen", {
        set: function (open) {
            this.open = open;
        },
        enumerable: true,
        configurable: true
    });
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        HostBinding('class.open'),
        tslib_1.__metadata("design:type", Boolean)
    ], ProgramsComponent.prototype, "open", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], ProgramsComponent.prototype, "isOpen", null);
    ProgramsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-programs',
            templateUrl: './programs.component.html',
            styleUrls: ['./programs.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProgramsComponent);
    return ProgramsComponent;
}());
export { ProgramsComponent };
//# sourceMappingURL=programs.component.js.map