const gradeToLetter =require("./gradeToLetter")

describe("calculateGrade", () => {
  test("should return 'A' for a score of 95", () => {
    expect(gradeToLetter(95)).toBe("A");
  });

  test("should return 'B' for a score of 85", () => {
    expect(gradeToLetter(85)).toBe("B");
  });

  test("should return 'C' for a score of 75", () => {
    expect(gradeToLetter(75)).toBe("C");
  });

  test("should return 'D' for a score of 65", () => {
    expect(gradeToLetter(65)).toBe("D");
  });

});