//Challenge 1: Student Grade Generator (Toy Problem)

//Write a function that prompts the user to input student marks. The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentsMarks() {
    let marks = Math.round(prompt('Enter student marks:'));
    if (!isNaN(marks)){
    if (marks < 0 || marks > 100) {
        alert("Inserted marks out of range");
    }
    else if (marks > 79) {
        alert("Grade: A")
    }
    else if (marks >= 60 && marks <= 79) {
        alert("Grade: B")
    }
    else if (marks > 49 && marks <= 59) {
        alert("Grade: C")
    }
    else if (marks >= 40 && marks <= 49) {
        alert("Grade: D")
    }
    else if (marks < 40) {
        alert("Grade: E")
    }
    else {
        alert("Invalid input")
    }
}

else {
alert("Input is Not a number")
}
}
studentsMarks()