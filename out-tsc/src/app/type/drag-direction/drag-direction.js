var DragDirection = /** @class */ (function () {
    function DragDirection(type, cursor) {
        this.type = type;
        this.cursor = cursor;
    }
    DragDirection.LeftTop = new DragDirection(1, 'nw-resize');
    DragDirection.LeftBottom = new DragDirection(2, 'ne-resize');
    DragDirection.Left = new DragDirection(3, 'w-resize');
    DragDirection.RightTop = new DragDirection(4, 'ne-resize');
    DragDirection.RightBottom = new DragDirection(5, 'nw-resize');
    DragDirection.Right = new DragDirection(6, 'w-resize');
    DragDirection.Top = new DragDirection(7, 's-resize');
    DragDirection.Bottom = new DragDirection(8, 's-resize');
    DragDirection.List = [
        DragDirection.LeftTop,
        DragDirection.LeftBottom,
        DragDirection.Left,
        DragDirection.RightTop,
        DragDirection.RightBottom,
        DragDirection.Right,
        DragDirection.Top,
        DragDirection.Bottom,
    ];
    DragDirection.findByType = function (type) {
        return DragDirection.List.find(function (item) { return item.type === type; });
    };
    return DragDirection;
}());
export { DragDirection };
//# sourceMappingURL=drag-direction.js.map