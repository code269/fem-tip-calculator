console.log('Hello world');

const getTipAmount = (bill, tipPercent, people) => {
  return (bill * (tipPercent / 100)) / people;
};

const getTotalPerPerson = (bill, tipAmount, people) => {
  return bill / people + tipAmount;
};

// Expect strings / floats
function updateDisplay(bill, tipPercent, people) {
  const tipAmount = getTipAmount(bill, tipPercent, people);
  const totalPerPerson = getTotalPerPerson(bill, tipAmount, people);

  console.log(`
        Tip Amount: ${tipAmount}
        Total: ${totalPerPerson}
    `);
}

// Have constant event listeners (?) to update display accordingly to changes in form
// Inputs
const billInput = document.getElementById('bill-input');
const tipButtons = document.querySelectorAll('.tip-btn');
const peopleInput = document.getElementById('people-input');

// Outputs
const tipOutput = document.getElementById('output-tip');
const totalOutput = document.getElementById('output-total');

const resetBtn = document.getElementById('reset-btn');
