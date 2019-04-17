export class DragDirection {
  public static LeftTop = new DragDirection(1, 'nw-resize');
  public static LeftBottom = new DragDirection(2, 'ne-resize');
  public static Left = new DragDirection(3, 'w-resize');
  public static RightTop = new DragDirection(4, 'ne-resize');
  public static RightBottom = new DragDirection(5, 'nw-resize');
  public static Right = new DragDirection(6, 'w-resize');
  public static Top = new DragDirection(7, 's-resize');
  public static Bottom = new DragDirection(8, 's-resize');

  public static readonly List: DragDirection[] = [
    DragDirection.LeftTop,
    DragDirection.LeftBottom,
    DragDirection.Left,
    DragDirection.RightTop,
    DragDirection.RightBottom,
    DragDirection.Right,
    DragDirection.Top,
    DragDirection.Bottom,
  ];

  public static findByType = (type: number) => {
    return DragDirection.List.find((item: DragDirection) => item.type === type);
  };

  constructor(public readonly type: number, public readonly cursor: string) { }

}
