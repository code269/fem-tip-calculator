const getTipAmount = (bill, tipPercent, people) => {
  return (bill * (tipPercent / 100)) / people;
};

const getTotalPerPerson = (bill, tipAmount, people) => {
  return bill / people + tipAmount;
};

// Prevent submission
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
  renderDisplay();
});

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener('click', () => {
    tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
    tipBtn.classList.add('btn-active');
    customInput.value = '';

    renderDisplay();
  });
});

customInput.addEventListener('input', () => {
  tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
  renderDisplay();
});

peopleInput.addEventListener('input', () => {
  renderDisplay();
});

resetBtn.addEventListener('click', () => {
  console.log('Reset button clicked!');
  // billInput.value = 0;
  // tipButtons.forEach((btn) => btn.classList.remove('btn-active'));
  // peopleInput.value = 0;

  // renderDisplay();
});

function checkValidInputs(bill, tip, people) {
  updateDisplay(0, 0);
  return bill && tip && people;
}

// ! Fn name may be inaccurate, if similar enough to updateDisplay, merge fns
function renderDisplay() {
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

  updateDisplay(tipAmount, tipTotal);
}

function updateDisplay(tipAmount, total) {
  tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
  totalOutput.textContent = `$${total.toFixed(2)}`;
}
