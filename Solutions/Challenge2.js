//Challenge 2: Speed Detector(Toy Problem)
//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, 
//it should print “Ok”.Otherwise, for every 5 km / s above the speed limit(70), 
//it should give the driver one demerit point and print the total number of demerit points.

//this function calculates the demerit points earned depending on the speed given
function speedDetector() {

    //variable speed is declared. the user will input the speed of the car and the input will be parsed into an integer
    let speed = parseInt(prompt("Enter speed:"), 10);

    //the difference between the input speed and the speed limit is then divide by 5 and rounded to the nearest whole number.
    //the result of these calculations is the number of demerit points
    let points = Math.round(((speed - 70) / 5));

    //if the speed is less than or equal to 70 it will print ok
    if (speed <= 70) {
        alert("Ok");
    }

    //this will check if the demerit points are over 12. if they are print license suspended if not print the amount of points
    else if (points > 12) {
        alert("License Suspended")
    }
    else {
        alert(`Demerit Points = ${points}`);
    }
}
speedDetector(); 