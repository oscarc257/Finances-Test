// This test case checks if the calculateMonthlyPayment function correctly calculates the monthly payment for a given loan amount, term, and interest rate. 
// The values provided are $10,000 loan amount, 8 years term, and 5.8% interest rate. The expected monthly payment is $130.44.
describe('calculateMonthlyPayment tests', function () {
    it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  });
  
  
//   This test case verifies that the calculateMonthlyPayment function returns a result with exactly two decimal places. 
// The values provided have a loan amount of $10,043, 8 years term, and 5.8% interest rate. The expected monthly payment is $131.00.
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
  

//   This test case ensures that the calculateMonthlyPayment function can handle very high interest rates. Here, the provided values include a $1,000 loan amount, 40 years term, and an extremely high 99% interest rate. 
// The expected monthly payment is $82.50.
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });


//   This test case verifies that when there is no deferment period (defermentMonths is set to 0), the function correctly calculates the regular monthly payment for a $10,000 loan amount, 10 years term, and 4% interest rate.
 it("should calculate a low interest rate", function() {
    const values = {
        amount: 10000,
        years: 10,
        rate: 4,
        defermentMonths: 0 // No deferment period
    };
    expect(calculateMonthlyPayment(values)).toEqual('101.25')
 })
})
