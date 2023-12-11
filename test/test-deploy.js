const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
describe("GradeStorage", function () {
    let gradeStorage, gradeStorageFactory
    beforeEach(async function () {
        gradeStorageFactory =
            await ethers.getContractFactory("GradeStorage")
        gradeStorage = await gradeStorageFactory.deploy()
    })

    it("Should start with a GPA of 0", async function () {
        const currentGPA = await gradeStorage.getGPA();
        const expectedGPA = "0"
        assert.equal(currentGPA.toString(), expectedGPA);
    })

    it("Should add a grade", async function () {
        const transaction = await gradeStorage.addGrade("APL107", 7, 4)
        await transaction.wait()
        const newGPA = await gradeStorage.getGPA()
        const expectedGPA = "700"
        assert.equal(newGPA.toString(), expectedGPA);
    })
})
