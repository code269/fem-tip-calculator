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

// Form
const form = document.getElementById('bill-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Inputs
const billInput = document.getElementById('bill-input');
const tipButtons = document.querySelectorAll('.tip-btn');
const customInput = document.getElementById('custom-input');
const peopleInput = document.getElementById('people-input');

// Outputs
const tipOutput = document.getElementById('output-tip');
const totalOutput = document.getElementById('output-total');
const resetBtn = document.getElementById('reset-btn');

// Have constant event listeners (?) to update display accordingly to changes in form
billInput.addEventListener('input', () => {
  console.log(`New bill input update: ${billInput.value}`);
});

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener('click', () => {
    console.log(tipBtn);
  });
});

customInput.addEventListener('click', () => {
  console.log(`New custom input update: ${customInput.value}`);
});

peopleInput.addEventListener('input', () => {
  console.log(`New people input update: ${peopleInput.value}`);
});

resetBtn.addEventListener('click', () => {
  console.log('Reset button clicked!');
});
