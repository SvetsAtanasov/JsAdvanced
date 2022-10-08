class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;

    dx **= 2;
    dy **= 2;

    return Math.sqrt(dx + dy);
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
