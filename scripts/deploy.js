const { ethers, network } = require("hardhat")

async function main() {
    const GradeStorageFactory = await ethers.getContractFactory("GradeStorage")
    console.log("Deploying GradeStorage...")
    const gradeStorage = await GradeStorageFactory.deploy()
    await gradeStorage.waitForDeployment()
    console.log("GradeStorage deployed to:", gradeStorage)

    const currentGPA = await gradeStorage.getGPA()
    console.log("Current GPA:", currentGPA.toString())

    const transaction = await gradeStorage.addGrade("APL107", 7, 4)
    await transaction.wait()

    const newGPA = await gradeStorage.getGPA()
    console.log("New GPA:", newGPA.toString())
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
