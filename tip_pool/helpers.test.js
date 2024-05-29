describe("Utilities test (with setup and tear-down)", function() {

    // Sets up initial conditions before each test case.
// Populates billAmtInput and tipAmtInput with values and submits payment information.
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    // Tests the function sumPaymentTotal('tipAmt').
    // Checks if the total tip amount is correctly calculated after submitting two payments.

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    // Tests the function sumPaymentTotal('billAmt').
    // Checks if the total bill amount is correctly calculated after submitting two payments.

    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
// Tests the function sumPaymentTotal('tipPercent').
// Checks if the total tip percentage is correctly calculated after submitting two payments.

    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

//     Tests the function calculateTipPercent().
// Checks if the tip percentage is correctly calculated for two different bill amounts and tip amounts.
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23);
      expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    // Tests the function appendTd().
    // Checks if a new <td> element is correctly appended to a <tr> element with the specified value.


    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });


//     Tests the function appendDeleteBtn().
// Checks if a delete button (represented as 'X') is correctly appended to a <tr> element.
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    // Resets the DOM and state after each test case.
    // Clears input values, clears table bodies, resets summary table cells, resets payment object, and resets payment ID.

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });