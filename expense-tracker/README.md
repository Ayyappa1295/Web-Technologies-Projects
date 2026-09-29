# 💰 Expense Tracker

A modern, responsive **Expense Tracker Web Application** built using **HTML5, CSS3, and JavaScript**. It helps users manage their income and expenses, monitor their financial balance, categorize transactions, visualize spending, and export transaction data.

---

## 🌟 Features

* 💵 **Income Management** — Add and track income
* 💸 **Expense Management** — Record daily expenses
* 💳 **Balance Calculation** — Automatically calculates current balance
* 📊 **Expense Visualization** — View expenses using a doughnut chart
* 🧾 **Transaction History** — View all recorded transactions
* 🔍 **Search Transactions** — Search by description or category
* 🏷️ **Expense Categories** — Food, Shopping, Transport, Bills, Health, Education, and more
* 📅 **Date Tracking** — Store transaction dates
* 🗑️ **Delete Transactions** — Remove individual transactions
* 🧹 **Clear All** — Delete all stored transactions
* 💾 **LocalStorage** — Data remains available after refreshing the browser
* 📥 **CSV Export** — Export transactions as a CSV file
* 📱 **Responsive Design** — Works on desktop, tablet, and mobile
* 🎨 **Modern Dashboard UI** — Clean and user-friendly interface

---

## 🛠️ Technologies Used

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| HTML5            | Application structure               |
| CSS3             | Styling and responsive design       |
| JavaScript       | Application logic and interactivity |
| DOM Manipulation | Dynamic UI updates                  |
| LocalStorage     | Browser-based data persistence      |
| Chart.js         | Expense visualization               |
| CSV              | Transaction data export             |

---

## 📂 Project Structure

```text
expense-tracker/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Ayyappa1295/expense-tracker.git
```

### 2. Open the Project

```bash
cd expense-tracker
```

### 3. Run the Application

Open:

```text
index.html
```

in your preferred web browser.

You can also use **VS Code + Live Server** for a better development experience.

---

## 💡 How It Works

### Add a Transaction

Enter:

* Description
* Amount
* Transaction Type
* Category
* Date

Then click:

```text
➕ Add Transaction
```

---

### Income & Expense Calculation

The application automatically calculates:

```text
Balance = Total Income - Total Expenses
```

For example:

```text
Income     = ₹40,000
Expenses   = ₹15,000
---------------------
Balance    = ₹25,000
```

---

## 📊 Expense Visualization

The application uses **Chart.js** to display expenses based on categories.

Example:

```text
Food             ₹4,000
Shopping         ₹3,000
Transport        ₹2,000
Bills            ₹3,500
Entertainment    ₹1,500
```

This makes it easier to understand where money is being spent.

---

## 💾 LocalStorage

Transaction data is stored in the browser using:

```javascript
localStorage
```

Therefore, transactions remain available even after refreshing the page.

> Note: Data is stored locally in the browser and is not synchronized between different devices or browsers.

---

## 🔍 Search & Filter

Users can search transactions using:

* Transaction description
* Category

Transactions can also be filtered by:

```text
All Transactions
Income
Expenses
```

---

## 📥 Export Transactions

Users can export their transaction history as:

```text
expense-transactions.csv
```

The exported file contains:

```text
Description
Amount
Type
Category
Date
```

This file can be opened using applications such as Microsoft Excel or Google Sheets.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

```text
💻 Desktop
📱 Mobile
📲 Tablet
```

CSS media queries automatically adjust the layout for smaller screens.

---

## 🔐 Security Considerations

This project is a frontend-only application.

No sensitive financial information is sent to a backend server.

However, users should avoid storing highly sensitive financial information in browser LocalStorage because it is not intended to be a secure financial data store.

---

## 🎯 Learning Objectives

This project demonstrates practical knowledge of:

* HTML semantic structure
* CSS layouts
* CSS Grid
* Responsive Web Design
* JavaScript fundamentals
* DOM manipulation
* Event handling
* Arrays and objects
* Array methods
* LocalStorage
* JSON data handling
* Dynamic HTML generation
* Form validation
* Chart.js integration
* CSV file generation
* Browser APIs

---

## 🔮 Future Enhancements

The project can be extended with:

* 🔐 User authentication
* ☁️ Cloud database
* 👤 User accounts
* 📊 Monthly financial reports
* 📈 Income vs Expense charts
* 📅 Monthly and yearly filters
* 🎯 Budget management
* 🔔 Budget alerts
* 🌙 Dark mode
* 📱 Progressive Web App (PWA)
* ☁️ Cloud synchronization
* 🗄️ Backend API
* 🛡️ Secure database storage
* 📧 Financial report generation

---

## 🧪 Sample Transactions

You can test the application with:

| Description      |  Amount | Type    | Category  |
| ---------------- | ------: | ------- | --------- |
| Monthly Salary   | ₹30,000 | Income  | Salary    |
| Grocery Shopping |  ₹2,500 | Expense | Food      |
| Bus Pass         |    ₹800 | Expense | Transport |
| Online Course    |  ₹1,500 | Expense | Education |
| Freelance Work   |  ₹5,000 | Income  | Other     |

---

## 📸 Screenshots

Add your project screenshots here after running the application.

Example:

```text
screenshots/
│
├── dashboard.png
├── add-transaction.png
├── expense-chart.png
└── transaction-history.png
```

Then add them to this README:

```markdown
## 📸 Screenshots

### Dashboard

![Expense Tracker Dashboard](screenshots/dashboard.png)

### Expense Chart

![Expense Chart](screenshots/expense-chart.png)

### Transaction History

![Transaction History](screenshots/transaction-history.png)
```

---

## 📌 Project Highlights

```text
✔ Responsive Web Application
✔ CRUD-style Transaction Management
✔ LocalStorage Integration
✔ Dynamic Dashboard
✔ Expense Visualization
✔ Search & Filtering
✔ CSV Export
✔ Mobile Responsive
✔ Clean UI
✔ Beginner-Friendly Architecture
```

---

## 👨‍💻 Author

**Ayyappa**

GitHub:

https://github.com/Ayyappa1295

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **learning, portfolio, and educational purposes**.

You are free to modify and improve the project for your own learning.
