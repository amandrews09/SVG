const {Circle, Square, Triangle} = require('./shapes.js');
describe("Triangle", () => {
    test("should render svg for a green polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
      const triangle = new Triangle();
      triangle.setColor("bisque");
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