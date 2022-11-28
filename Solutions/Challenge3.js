// Challenge 3: Net Salary Calculator (Toy Problem)

// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.  

//this function handles the net salary calculations
function salaryCalculator() {
    //user is promted to input salary
    const grossPay = parseInt(prompt('Enter gross salary', 0), 10);
    //nssf is calculated at 6%
    let nssf = (0.06 * grossPay);
    //function is called to calculate nhif rate
    let nhif = getNhif(grossPay);
    //function is called to return paye percentage
    let paye = getPaye(grossPay);
    let netSalary = grossPay - (nssf + nhif + (paye * grossPay));

    alert(`Gross salary: ${grossPay}
           PAYE: ${paye * grossPay} 
           NHIF: ${nhif} 
           NSSF: ${nssf}
           Net salary: ${netSalary}`);
}
//function to calculate nhif rates based on salary
function getNhif(grossPay) {
    if (grossPay <= 30000) {
        return nhif = 150;
    }

    else if (grossPay >= 6000 && grossPay <= 7999) {
        return nhif = 300;

    }
    else if (grossPay >= 8000 && grossPay <= 11999) {
        return nhif = 400;

    }
    else if (grossPay >= 12000 && grossPay <= 14999) {
        return nhif = 500;

    }
    else if (grossPay >= 15000 && grossPay <= 19999) {
        return nhif = 600;

    }
    else if (grossPay >= 20000 && grossPay <= 24999) {
        return nhif = 750;

    }
    else if (grossPay > 25000 && grossPay <= 29999) {
        return nhif = 850;

    }
    else if (grossPay >= 30000 && grossPay <= 34999) {
        return nhif = 900;

    }
    else if (grossPay >= 35000 && grossPay <= 39999) {
        return nhif = 950;

    }
    else if (grossPay > 40000 && grossPay <= 44999) {
        return nhif = 1000;

    }
    else if (grossPay > 45000 && grossPay <= 49999) {
        return nhif = 1100;

    }
    else if (grossPay > 50000 && grossPay <= 59999) {
        return nhif = 1200;

    }
    else if (grossPay >= 60000 && grossPay <= 69999) {
        return nhif = 1300;

    }
    else if (grossPay >= 70000 && grossPay <= 79999) {
        return nhif = 1400;

    }
    else if (grossPay >= 80000 && grossPay <= 89999) {
        return nhif = 1500;

    }
    else if (grossPay >= 90000 && grossPay <= 99999) {
        return nhif = 1600;

    }
    else if (grossPay >= 100000) {
        return nhif = 1700;
    }

}
//this function calculate the paye amount
function getPaye(grossPay) {
    if (grossPay <= 24000) {
        return paye = 0.1;
    }
    else if (grossPay <= 32333) {
        return paye = 0.25;
    }
    else if (grossPay > 32333) {
        return paye = 0.3;
    }


}
salaryCalculator();
