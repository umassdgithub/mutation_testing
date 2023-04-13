const bmi = require("./bmi");

test("This is for 140lbs, 5 foot and 6 inches",()=>{
    expect(bmi(140,5,6)).toEqual(22.5900)
    expect(bmi("140",5,6)).toEqual(-1)
})
/*
.toBeUndefined()

.toBeNull()

.toBeTruthy()

.toBeFalsy()
.toBeGreaterThan()
.toBeLessThan()
.toBeCloseTo()


*/