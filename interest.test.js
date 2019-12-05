const interest = require('./interest');

test('simpleInterest', () => {
  const C = 100;
  const i = 0.10;
  const t = 1;
  const expectedInterest = 10;
  const interestCalculate = interest.simpleInterest(C, i, t);

  expect(interestCalculate).toBe(expectedInterest);
})

test('simpleInterest', () => {
  const C = 100;
  const i = 0.10;
  const t = 0;
  const expectedInterest = 0;
  const interestCalculate = interest.simpleInterest(C, i, t);

  expect(interestCalculate).toBe(expectedInterest);
})

test('simpleInterest', () => {
  const C = 100;
  const i = 0.10;
  const t = 10;
  const expectedInterest = 100;
  const interestCalculate = interest.simpleInterest(C, i, t);

  expect(interestCalculate).toBe(expectedInterest);
})

test('simpleAmount', () => {
  const C = 100;
  const i = 0.10;
  const t = 1;
  const expectedInterest = 110;
  const simpleInterest = jest.fn();
  simpleInterest.mockImplementation(() => 10)
  const simpleAmount = interest.pure.simpleAmount({ simpleInterest })
  const amount = simpleAmount(C, i, t)
  expect(simpleInterest.mock.calls[0]).toEqual([C, i, t]);
  expect(amount).toBe(expectedInterest);
})

test('compoundInterestAmount', () => {
  const C = 1000;
  const i = 0.10;
  const t = 1;
  const expectedInterest = 1100;
  const interestCalculate = interest.compoundInterestAmount(C, i, t);

  expect(interestCalculate).toBe(expectedInterest);
})

test('compoundInterest', () => {
  const C = 1000;
  const i = 0.10;
  const t = 1;
  const compoundInterestAmount = jest.fn();
  compoundInterestAmount.mockImplementation(() => 1100)

  const compoundInterest = interest.pure.compoundInterest({ compoundInterestAmount });
  const interestCalculate = compoundInterest(C, i, t);

  expect(compoundInterestAmount.mock.calls[0]).toEqual([C, i, t]);
  expect(interestCalculate).toBe(100);
})