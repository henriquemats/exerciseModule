const simpleInterest = (C, i, t) => C * i * t;

const simpleAmount = ({ simpleInterest }) => (C, i, t) => C + simpleInterest(C, i, t)

const compoundInterestAmount = (C, i ,t) => C * Math.pow((1 + i), t)

const compoundInterest = ({ compoundInterestAmount }) => (C, i, t) => compoundInterestAmount(C, i, t) - C;

module.exports = {
  simpleInterest,
  simpleAmount: simpleAmount({ simpleInterest }),
  compoundInterestAmount,
  compoundInterest: compoundInterest({ compoundInterestAmount }),
  pure: {
    simpleAmount,
    compoundInterest
  }
}