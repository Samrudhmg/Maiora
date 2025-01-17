import React from "react";
import { useState } from "react";
import "./App.css";
import { GiSettingsKnobs } from "react-icons/gi";

const Loan = () => {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanPeriod, setLoanPeriod] = useState(12);

  const handleLoanAmt = (e) => {
    setLoanAmount(e.target.value);
  };

  const LoanPeriod = (e) => {
    setLoanPeriod(e.target.value);
  };

  const calcMonthlyPay = (amount, period) => {
    const annualInterestRate = 0.05;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = period;

    const monthlyPayment =
      (amount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment;
  };

  const monthlyPayment = calcMonthlyPay(loanAmount, loanPeriod);
  const totalLoan = monthlyPayment * loanPeriod;

  const consoleamount = monthlyPayment.toString();

  const handeonclick = () => {
    console.log("The monthly payment is : " + consoleamount.slice(0, 8));
  };

  return (
    <div className="container">
      <div className="main-div">
        <h3 className="h-3">Loan Calculator</h3>

        <div className="max-fund">
          <h5 style={{ color: "#acacac" }}>Maximum Funding</h5>
          <h1>Rp 34,567.00</h1>
          <p></p>

          <div className="max-fund-sub">
            <div className="max-mini">
              <h5>Honda ADV 150 CBS</h5>
              <h6 style={{ color: "#acacac" }}>2022</h6>
            </div>
            <GiSettingsKnobs style={{ color: "#acacac" }} />
          </div>
        </div>

        <div className="loan-amt">
          <h5 style={{ color: "#acacac" }}>Loan Amount</h5>
          <h3>Rp {loanAmount}.000</h3>
          <input
            className="input"
            type="range"
            min="1000"
            max="34567"
            value={loanAmount}
            onChange={handleLoanAmt}
          />
          <div className="loan-mini" style={{ color: "#acacac" }}>
            <p>1000.000</p>
            <p>34,567.000</p>
          </div>
        </div>

        <div className="period">
          <h5 style={{ color: "#acacac" }}>Loan period</h5>
          <h3>{loanPeriod} months</h3>
          <input
            type="range"
            min="6"
            max="18"
            value={loanPeriod}
            onChange={LoanPeriod}
          />
          <div className="period-mini" style={{ color: "#acacac" }}>
            <p>6 Months</p>
            <p>18 Months</p>
          </div>
        </div>

        <div className="final-amt">
          <h5 style={{ color: "#acacac" }}>Estimated monthly installment</h5>

          <h1>Rp {monthlyPayment.toFixed(2)}</h1>
          <h5 style={{ color: "#acacac" }}>
            Installment can change according to the result of the verification
            of the physical condition of the vehicle of the branch office.
          </h5>

          <button onClick={handeonclick}>Apply Loan</button>
        </div>
      </div>
    </div>
  );
};

export default Loan;
