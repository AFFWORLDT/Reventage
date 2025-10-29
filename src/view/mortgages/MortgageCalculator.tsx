"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function MortgageCalculator() {
  const [totalPrice, setTotalPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(4.99);
  const [loanPeriod, setLoanPeriod] = useState(25);

  const calculateMonthlyPayment = () => {
    const downPaymentAmount = totalPrice * (downPayment / 100);
    const loanAmount = totalPrice - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    
    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const downPaymentAmount = totalPrice * (downPayment / 100);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mortgage Calculator */}
        <div className="">
          <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-4 font-sans">
              Step 1: Mortgage Details
            </h3>
            <p className="text-gray-600 mb-8">
              Enter your property and loan details to estimate payments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Price (AED)
                </label>
                <Input
                  type="number"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Down Payment
                  </label>
                  <span className="text-sm text-gray-600">Percent: {downPayment}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-right mt-1">
                  <span className="text-sm font-medium text-blue-600">
                    AED {downPaymentAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Duration (Years)
                </label>
                <Input
                  type="number"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Monthly Payment Display */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Estimated Monthly Payment</div>
                <div className="text-3xl font-bold text-blue-900">
                  AED {monthlyPayment.toFixed(2)} /month
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Apply For Home Loan
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center">
                  Contact us to get started with your mortgage..
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-3 font-semibold rounded-lg transition-colors duration-200">
                Submit & Show Result
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
