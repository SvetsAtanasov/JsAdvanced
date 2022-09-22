function solve(width, height, color) {
  return {
    width: Number(width),
    height: Number(height),
    color: color.charAt(0).toUpperCase() + color.slice(1),
    calcArea() {
      const area = this.width * this.height;
      return area;
    },
  };
}

let rect = solve(4, 5, "red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
