// Prevent default submission
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

// Other
const errorMsg = document.querySelector('.error-msg');

billInput.addEventListener('input', updateDisplay);

peopleInput.addEventListener('input', () => {
  if (peopleInput.value === '0') {
    errorMsg.classList.remove('hidden');
    peopleInput.classList.add('input-invalid');
  } else {
    errorMsg.classList.add('hidden');
    peopleInput.classList.remove('input-invalid');
  }

  updateDisplay();
});

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener('click', () => {
    tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
    tipBtn.classList.add('btn-active');
    customInput.value = '';

    updateDisplay();
  });
});

customInput.addEventListener('input', () => {
  tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customInput.value = '';
  tipButtons.forEach((btn) => btn.classList.remove('btn-active'));

  renderDisplay(0, 0);
});

const getTipAmount = (bill, tipPercent, people) => {
  return (bill * (tipPercent / 100)) / people;
};

const getTotalPerPerson = (bill, tipAmount, people) => {
  return bill / people + tipAmount;
};

function checkValidInputs(bill, tip, people) {
  renderDisplay(0, 0);
  return bill && tip && people;
}

function updateDisplay() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);
  const custom = parseFloat(customInput.value);

  const activeBtn = document.querySelector('.btn-active');

  let tip;
  if (custom) tip = custom;
  else if (activeBtn) tip = parseInt(activeBtn.textContent);
  else tip = 0;

  if (!checkValidInputs(bill, tip, people)) return;

  const tipAmount = getTipAmount(bill, tip, people);
  const tipTotal = getTotalPerPerson(bill, tipAmount, people);

  renderDisplay(tipAmount, tipTotal);
}

function renderDisplay(tipAmount, total) {
  tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
  totalOutput.textContent = `$${total.toFixed(2)}`;
}
