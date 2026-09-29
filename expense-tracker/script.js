let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

let expenseChart;


// DOM Elements

const form = document.getElementById("transactionForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const typeInput =
    document.getElementById("type");

const categoryInput =
    document.getElementById("category");

const dateInput =
    document.getElementById("date");

const transactionList =
    document.getElementById("transactionList");

const searchInput =
    document.getElementById("searchInput");

const filterType =
    document.getElementById("filterType");

const balanceElement =
    document.getElementById("balance");

const incomeElement =
    document.getElementById("income");

const expenseElement =
    document.getElementById("expense");

const transactionCount =
    document.getElementById("transactionCount");

const clearAllBtn =
    document.getElementById("clearAllBtn");

const exportBtn =
    document.getElementById("exportBtn");


// Set Today's Date

dateInput.value =
    new Date().toISOString().split("T")[0];


// Add Transaction

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const description =
        descriptionInput.value.trim();

    const amount =
        parseFloat(amountInput.value);

    const type =
        typeInput.value;

    const category =
        categoryInput.value;

    const date =
        dateInput.value;


    if (!description || !amount || amount <= 0) {

        alert("Please enter valid transaction details.");

        return;
    }


    const transaction = {

        id: Date.now(),

        description: description,

        amount: amount,

        type: type,

        category: category,

        date: date
    };


    transactions.push(transaction);

    saveTransactions();

    form.reset();

    dateInput.value =
        new Date().toISOString().split("T")[0];

    updateDashboard();

});


// Save

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}


// Update Dashboard

function updateDashboard() {

    updateSummary();

    displayTransactions();

    updateChart();

}


// Summary

function updateSummary() {

    let totalIncome = 0;

    let totalExpense = 0;


    transactions.forEach(transaction => {

        if (transaction.type === "income") {

            totalIncome += transaction.amount;

        } else {

            totalExpense += transaction.amount;

        }

    });


    const balance =
        totalIncome - totalExpense;


    incomeElement.textContent =
        formatCurrency(totalIncome);

    expenseElement.textContent =
        formatCurrency(totalExpense);

    balanceElement.textContent =
        formatCurrency(balance);

    transactionCount.textContent =
        transactions.length;
}


// Currency

function formatCurrency(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR"
        }
    ).format(amount);

}


// Display Transactions

function displayTransactions() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedType =
        filterType.value;


    const filteredTransactions =
        transactions.filter(transaction => {

            const matchesSearch =
                transaction.description
                    .toLowerCase()
                    .includes(searchText) ||

                transaction.category
                    .toLowerCase()
                    .includes(searchText);


            const matchesType =
                selectedType === "all" ||
                transaction.type === selectedType;


            return matchesSearch && matchesType;

        });


    if (filteredTransactions.length === 0) {

        transactionList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🧾
                </div>

                <h3>No transactions found</h3>

                <p>
                    Try another search or add a new transaction.
                </p>

            </div>

        `;

        return;
    }


    transactionList.innerHTML =
        filteredTransactions
            .sort((a, b) => b.id - a.id)
            .map(transaction => {

                const icon =
                    getCategoryIcon(transaction.category);


                return `

                    <div class="transaction-item">

                        <div class="transaction-left">

                            <div class="transaction-icon">
                                ${icon}
                            </div>

                            <div>

                                <div class="transaction-name">
                                    ${escapeHTML(transaction.description)}
                                </div>

                                <div class="transaction-details">

                                    ${transaction.category}
                                    •
                                    ${formatDate(transaction.date)}

                                </div>

                            </div>

                        </div>


                        <div class="transaction-right">

                            <span class="${
                                transaction.type === "income"
                                    ? "amount-income"
                                    : "amount-expense"
                            }">

                                ${
                                    transaction.type === "income"
                                        ? "+"
                                        : "-"
                                }

                                ${formatCurrency(transaction.amount)}

                            </span>


                            <button
                                class="delete-btn"
                                onclick="deleteTransaction(${transaction.id})"
                            >

                                🗑️

                            </button>

                        </div>

                    </div>

                `;

            })
            .join("");
}


// Delete

function deleteTransaction(id) {

    const confirmed =
        confirm("Delete this transaction?");


    if (!confirmed) return;


    transactions =
        transactions.filter(
            transaction =>
                transaction.id !== id
        );


    saveTransactions();

    updateDashboard();
}


// Search

searchInput.addEventListener(
    "input",
    displayTransactions
);


// Filter

filterType.addEventListener(
    "change",
    displayTransactions
);


// Clear All

clearAllBtn.addEventListener(
    "click",
    function () {

        if (transactions.length === 0) {

            alert("There are no transactions to clear.");

            return;
        }


        const confirmed =
            confirm(
                "Are you sure you want to delete all transactions?"
            );


        if (!confirmed) return;


        transactions = [];

        saveTransactions();

        updateDashboard();

    }
);


// Category Icons

function getCategoryIcon(category) {

    const icons = {

        Food: "🍔",

        Shopping: "🛍️",

        Transport: "🚗",

        Bills: "💡",

        Entertainment: "🎬",

        Health: "🏥",

        Education: "📚",

        Salary: "💼",

        Other: "📦"

    };


    return icons[category] || "📦";
}


// Date Formatting

function formatDate(date) {

    const dateObject =
        new Date(date + "T00:00:00");


    return dateObject.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


// Prevent HTML Injection

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// Chart

function updateChart() {

    const categoryTotals = {};


    transactions
        .filter(transaction =>
            transaction.type === "expense"
        )
        .forEach(transaction => {

            if (!categoryTotals[transaction.category]) {

                categoryTotals[transaction.category] = 0;

            }

            categoryTotals[transaction.category] +=
                transaction.amount;

        });


    const labels =
        Object.keys(categoryTotals);

    const data =
        Object.values(categoryTotals);


    const ctx =
        document
            .getElementById("expenseChart")
            .getContext("2d");


    if (expenseChart) {

        expenseChart.destroy();

    }


    if (labels.length === 0) {

        expenseChart =
            new Chart(ctx, {

                type: "doughnut",

                data: {

                    labels: ["No Expenses"],

                    datasets: [{

                        data: [1]

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false

                }

            });

        return;
    }


    expenseChart =
        new Chart(ctx, {

            type: "doughnut",

            data: {

                labels: labels,

                datasets: [{

                    data: data

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position: "bottom"

                    }

                }

            }

        });

}


// Export CSV

exportBtn.addEventListener(
    "click",
    function () {

        if (transactions.length === 0) {

            alert(
                "No transactions available to export."
            );

            return;
        }


        let csv =
            "Description,Amount,Type,Category,Date\n";


        transactions.forEach(transaction => {

            csv +=
                `"${transaction.description}",` +
                `"${transaction.amount}",` +
                `"${transaction.type}",` +
                `"${transaction.category}",` +
                `"${transaction.date}"\n`;

        });


        const blob =
            new Blob(
                [csv],
                {
                    type: "text/csv"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "expense-transactions.csv";

        link.click();


        URL.revokeObjectURL(url);

    }
);


// Initial Load

updateDashboard();
