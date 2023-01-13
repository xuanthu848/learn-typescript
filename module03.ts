interface Loan {
    principal: number;
    interestRate: number
}

interface conventialLoan extends Loan {
    months: number
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
   
}


/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: conventialLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
