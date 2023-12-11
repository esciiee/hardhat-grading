    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.8;
    contract GradeStorage {
        uint256 public totalCredits;
        uint256 public totalGradePoints;
        uint256 public gpa;
        mapping(string => uint256) public courseToGrade;
        struct Course {
            string code;
            uint256 grade;
            uint256 credits;
        }
        Course[] public Courses;

        function updateGPA() public {
            if(Courses.length == 0){
                gpa = 0;
                return;
            }
            for (uint256 i = 0; i < Courses.length; i++) {
                totalCredits += Courses[i].credits;
                totalGradePoints += Courses[i].grade * Courses[i].credits;
            }
            gpa = totalGradePoints * 100000/ totalCredits;
        }

        //call data and memory only stores the data for a very little amount of time
        //the only diff here is that the memory gives us the permission to modify the data
        function addGrade(
            string memory _code,
            uint256 _grade,
            uint256 _credits
        ) public {
            Courses.push(Course(_code, _grade, _credits));
            courseToGrade[_code] = _grade;
            updateGPA();
        }

        function getGPA() public view returns (uint256) {
            return (gpa * 100) / 100000;
        }
    }
