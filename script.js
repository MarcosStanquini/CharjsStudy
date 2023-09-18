document.addEventListener('DOMContentLoaded', function () {
    const expenseData = {
        labels: [],
        datasets: [{
            label: 'Valor (R$)',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('expenseChart').getContext('2d');
    const expenseChart = new Chart(ctx, {
        type: 'bar',
        data: expenseData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

   
    function addExpense() {
        const expenseInput = document.getElementById('expense');
        const amountInput = document.getElementById('amount');
        const monthInput = document.getElementById('month');

        const expense = expenseInput.value;
        const amount = parseFloat(amountInput.value);
        const month = monthInput.value;

        if (expense && !isNaN(amount) && month) {
            expenseChart.data.labels.push(expense + ' (' + month + ')');
            expenseChart.data.datasets[0].data.push(amount);
            expenseChart.update();

            const expenseList = document.querySelector('#expenseList ul');
            const listItem = document.createElement('li');
            listItem.textContent = `${expense} (Mês: ${month}, Valor: R$ ${amount.toFixed(2)})`;
            expenseList.appendChild(listItem);

            expenseInput.value = '';
            amountInput.value = '';
        }
    }


    const addButton = document.getElementById('addExpense');
    addButton.addEventListener('click', addExpense);
});
