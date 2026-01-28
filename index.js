const getTipAmount = (bill, tipPercent, people) => {
  return (bill * (tipPercent / 100)) / people;
};

const getTotalPerPerson = (bill, tipAmount, people) => {
  return bill / people + tipAmount;
};

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

billInput.addEventListener('input', () => {
  console.log(`New bill input update: ${billInput.value}`);
  renderDisplay();
});

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener('click', () => {
    tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
    tipBtn.classList.add('btn-active');
    customInput.value = '';

    console.log(tipBtn);
    renderDisplay();
  });
});

customInput.addEventListener('input', () => {
  console.log(`New custom input update: ${customInput.value}`);
  tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
  renderDisplay();
});

peopleInput.addEventListener('input', () => {
  console.log(`New people input update: ${peopleInput.value}`);
  renderDisplay();
});

resetBtn.addEventListener('click', () => {
  console.log('Reset button clicked!');
  // billInput.value = 0;
  // tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
  // peopleInput.value = 0;

  // renderDisplay();
});

// Return false if any of 3 inputs are zero / empty
function checkValidInputs(bill, tip, people) {
  console.log(bill, tip, people);
  updateDisplay(0, 0);
  return bill && tip && people;
}

// Math functions
// Fn name may be inaccurate, if similar enough to updateDisplay, merge fns
function renderDisplay() {
  // Grab values from inputs
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);
  const custom = parseFloat(customInput.value);

  const activeBtn = document.querySelector('.btn-active');

  let tip;
  if (custom) tip = custom;
  else if (activeBtn) tip = parseInt(activeBtn.textContent);
  else tip = 0;

  if (!checkValidInputs(bill, tip, people)) {
    console.log('Invalid input');
    return;
  }

  const tipAmount = getTipAmount(bill, tip, people);
  const tipTotal = getTotalPerPerson(bill, tipAmount, people);

  updateDisplay(tipAmount, tipTotal);
}

function updateDisplay(tipAmount, total) {
  const tipDisplay = document.getElementById('output-tip');
  const totalDisplay = document.getElementById('output-total');

  tipDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
}
