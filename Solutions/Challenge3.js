// Challenge 3: Net Salary Calculator (Toy Problem)

// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.  

//this function handles the net salary calculations
function salaryCalculator() {
    //user is promted to input basic salary. the input is then parsed to int
    const basicPay = parseInt(prompt('Enter basic salary', 0), 10);
    //user is prompted to insert benefits
    const benefits = parseInt(prompt('Enter benefits', 0), 10);
    //grosspay = basic pay + benefits
    let grossPay = basicPay + benefits;
    //NSSF monthly rates are divided into two equal parts whereby the employer pays 6%
    //nssf rate is calculated at 6%
    let nssf = (0.06 * grossPay);
    //taxable income = grosspay - deductible reliefs
    let taxableIncome = grossPay - nssf;
    //reliefs standard KES 1,408 per month for every taxable income.
    //insurance relief – This is calculated at 5% of your total Life Insurance premiums
    // to a maximum relief of KES 5,000/month
    // for this example it is assumed the maximum applies.
    let relief = 1408+5000;
    //function is called to calculate nhif rate
    let nhif = getNhif(grossPay);
    //function is called to return paye percentage
    let paye = getPaye(taxableIncome-relief);
    //net salary is calculated as NET PAY = TAXABLE INCOME – PAYE - FBT – DEDUCTIONS AFTER TAX
    let netSalary = taxableIncome - paye - nhif;

    alert(`Gross salary: ${grossPay}
           PAYE: ${paye * grossPay} 
           NHIF: ${nhif} 
           NSSF: ${nssf}
           Net salary: ${netSalary}`);
}
//function to calculate nhif rates based on salary
function getNhif(salary) {
    if (salary <= 30000) {
        return nhif = 150;
    }

    else if (salary >= 6000 && salary <= 7999) {
        return nhif = 300;

    }
    else if (salary >= 8000 && salary <= 11999) {
        return nhif = 400;

    }
    else if (salary >= 12000 && salary <= 14999) {
        return nhif = 500;

    }
    else if (salary >= 15000 && salary <= 19999) {
        return nhif = 600;

    }
    else if (salary >= 20000 && salary <= 24999) {
        return nhif = 750;

    }
    else if (salary > 25000 && salary <= 29999) {
        return nhif = 850;

    }
    else if (salary >= 30000 && salary <= 34999) {
        return nhif = 900;

    }
    else if (salary >= 35000 && salary <= 39999) {
        return nhif = 950;

    }
    else if (salary > 40000 && salary <= 44999) {
        return nhif = 1000;

    }
    else if (salary > 45000 && salary <= 49999) {
        return nhif = 1100;

    }
    else if (salary > 50000 && salary <= 59999) {
        return nhif = 1200;

    }
    else if (salary >= 60000 && salary <= 69999) {
        return nhif = 1300;

    }
    else if (salary >= 70000 && salary <= 79999) {
        return nhif = 1400;

    }
    else if (salary >= 80000 && salary <= 89999) {
        return nhif = 1500;

    }
    else if (salary >= 90000 && salary <= 99999) {
        return nhif = 1600;

    }
    else if (salary >= 100000) {
        return nhif = 1700;
    }

}
//this function calculate the paye percentage amount
function getPaye(salary) {
    if (salary <= 24000) {
        return paye = 0.1;
    }
    else if (salary <= 32333) {
        return paye = 0.25;
    }
    else if (salary > 32333) {
        return paye = 0.3;
    }


}
salaryCalculator();
