import * as tslib_1 from "tslib";
import { Component, ElementRef, HostListener, HostBinding } from '@angular/core';
import { DragDirection } from 'src/app/type/drag-direction/drag-direction';
import { DomSanitizer } from '@angular/platform-browser';
var WindowsComponent = /** @class */ (function () {
    function WindowsComponent(elementRef, sanitizer) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.name = 'Windows Internet Explorer';
        this.logo = '/assets/images/ie-icon.png';
        this.startX = 0;
        this.startY = 0;
        this.boundary = 15;
        this.resizing = false;
        this.elementNative = elementRef.nativeElement;
    }
    Object.defineProperty(WindowsComponent.prototype, "cursor", {
        get: function () {
            var cursor = this.direction ? this.direction.cursor : 'default';
            return this.sanitizer.bypassSecurityTrustStyle("cursor: " + cursor + ";");
        },
        enumerable: true,
        configurable: true
    });
    WindowsComponent.prototype.onmouseover = function (e) {
        var width = this.elementNative.offsetWidth;
        var height = this.elementNative.offsetHeight;
        var cursorX = Math.min(Math.max(e.offsetX, 0), width);
        var cursorY = Math.min(Math.max(e.offsetY, 0), height);
        if (this.resizing) {
            return false;
        }
        if (cursorX < this.boundary) {
            if (cursorY < this.boundary) {
                this.direction = DragDirection.LeftTop;
            }
            else if (height - cursorY < this.boundary) {
                this.direction = DragDirection.LeftBottom;
            }
            else {
                this.direction = DragDirection.Left;
            }
        }
        else if (width - cursorX < this.boundary) {
            if (cursorY < this.boundary) {
                this.direction = DragDirection.RightTop;
            }
            else if (height - cursorY < this.boundary) {
                this.direction = DragDirection.RightBottom;
            }
            else {
                this.direction = DragDirection.Right;
            }
        }
        else {
            this.direction = (cursorY < this.boundary) ? DragDirection.Top : DragDirection.Bottom;
        }
    };
    WindowsComponent.prototype.resizeStart = function (e) {
        this.resizing = true;
        this.startX = e.clientX - e.target.offsetLeft;
        this.startY = e.clientY - e.target.offsetHeight;
        console.log(e.target.offsetLeft);
    };
    WindowsComponent.prototype.resize = function () {
    };
    WindowsComponent.prototype.resizeStop = function () {
        this.startX = 0;
        this.startY = 0;
        this.resizing = false;
    };
    WindowsComponent.prototype.preventDefault = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.direction = undefined;
    };
    tslib_1.__decorate([
        HostBinding('style'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], WindowsComponent.prototype, "cursor", null);
    tslib_1.__decorate([
        HostListener('mousemove', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [MouseEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], WindowsComponent.prototype, "onmouseover", null);
    tslib_1.__decorate([
        HostListener('mousedown', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], WindowsComponent.prototype, "resizeStart", null);
    tslib_1.__decorate([
        HostListener('document:mousemove'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], WindowsComponent.prototype, "resize", null);
    tslib_1.__decorate([
        HostListener('document:mouseup', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], WindowsComponent.prototype, "resizeStop", null);
    WindowsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-windows',
            templateUrl: './windows.component.html',
            styleUrls: ['./windows.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            DomSanitizer])
    ], WindowsComponent);
    return WindowsComponent;
}());
export { WindowsComponent };
//# sourceMappingURL=windows.component.js.map