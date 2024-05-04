document.addEventListener('DOMContentLoaded', function() {
    const transferButton = document.getElementById('transferButton');
    const customerBody = document.getElementById('customerBody');

    transferButton.addEventListener('click', function() {
        // Perform transfer operation
        alert('Transfer money functionality is not implemented yet.');
    });

    // Fetch and display customer data
    fetchCustomers();

    function fetchCustomers() {
        fetch('customers.php')
            .then(response => response.json())
            .then(data => {
                renderCustomers(data);
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
    }

    function renderCustomers(customers) {
        customerBody.innerHTML = '';
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.balance}</td>
            `;
            customerBody.appendChild(row);
        });
    }
});
