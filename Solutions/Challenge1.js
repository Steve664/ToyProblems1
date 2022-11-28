//Challenge 1: Student Grade Generator (Toy Problem)
//Write a function that prompts the user to input student marks. The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


//This function prompts the user to input marks and outputs the corresponding grade
function studentsMarks() {
    //marks variable is declared. it value is determined by the users input which is retrieved from the prompt and rounded to the nearest whole number.
    let marks = Math.round(prompt('Enter student marks:'))
    // A check is performed to determine if the input is a number.
    // if the input is a number isNaN() will return false so the logical not operator is used to make it true  
    if (!isNaN(marks)){
    // if the previous check passed. The inputed marks are checked to see if they are within the given range. if not a message is displayed
    if (marks < 0 || marks > 100) {
        alert("Inserted marks out of range")
    }
    //assigns grades based on input marks
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
//this will be displayed if anything other than a number is input
else {
alert("Input is Not a number")
}
}

studentsMarks()