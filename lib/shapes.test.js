const {Circle, Square, Triangle} = require('./shapes.js');
describe("Circle", () => {
  test("should render svg for a green element", () => {
    const expectedSvg =
      '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a turquoise element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="turquoise" />';
    const square = new Square();
    square.setColor("turquoise");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="turquoise" />';
    const square = new Square();
    square.setColor("turquoise");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
      const triangle = new Triangle();
      triangle.setColor("purple");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });

    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
      const triangle = new Triangle();
      triangle.setColor("purple");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });