
function showPage(pageId) {
  let pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

showPage("home");


let customers = [];

document.getElementById("customerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let loan = parseFloat(document.getElementById("loanAmount").value);
  let rate = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  let months = parseInt(document.getElementById("months").value);
  let paid = parseFloat(document.getElementById("paidAmount").value);

  let emi = (loan * rate * Math.pow(1 + rate, months)) /
            (Math.pow(1 + rate, months) - 1);

  let customer = {
    name,
    loan,
    rate,
    months,
    paid,
    emi: emi.toFixed(2)
  };

  customers.push(customer);
  displayCustomers();
  this.reset();
});


function displayCustomers() {
  let container = document.getElementById("holderContainer");
  container.innerHTML = "";

  customers.forEach((c, index) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${c.name}</h3>
      <p>EMI: ₹${c.emi}</p>
      <p>Paid: ₹${c.paid}</p>
    `;

    card.onclick = () => showDetails(index);

    container.appendChild(card);
  });
}


function showDetails(index) {
  let c = customers[index];
  let details = document.getElementById("details");

  details.style.display = "block";
  details.innerHTML = `
    <h2>${c.name}</h2>
    <p>Loan: ₹${c.loan}</p>
    <p>Interest: ${(c.rate * 1200).toFixed(2)}%</p>
    <p>Months: ${c.months}</p>
    <p>EMI: ₹${c.emi}</p>
    <p>Paid: ₹${c.paid}</p>
  `;
}