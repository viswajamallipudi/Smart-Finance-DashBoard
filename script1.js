// Transactions Data
const data = [
  { name: "Salary", amount: 3000 },
  { name: "Groceries", amount: -200 },
  { name: "Shopping", amount: -400 },
  { name: "Rent", amount: -1000 }
];

// Show Transactions
const list = document.getElementById("list");

data.forEach(item => {
  const li = document.createElement("li");
  li.innerText = `${item.name}: $${item.amount}`;
  list.appendChild(li);
});

// Chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Income', 'Groceries', 'Shopping', 'Rent'],
    datasets: [{
      label: 'Amount',
      data: [3000, 200, 400, 1000]
    }]
  }
});
const btn = document.getElementById("toggleMode");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const balanceEl = document.querySelector(".card p");

let total = 0;
data.forEach(item => {
  total += item.amount;
});

balanceEl.innerText = "$" + total;
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [3000, 1200],
    }]
  }
});
