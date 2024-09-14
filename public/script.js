async function fetchCryptoData() {
    try {
        const response = await fetch('/api');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', JSON.stringify(data, null, 2));
        if (data.length === 0) {
            console.warn('No data received from the API');
        }
        updateTable(data);
        updateTopStats(data[0]);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
}

function updateTable(data) {
    const tableBody = document.querySelector('#crypto-table tbody');
    tableBody.innerHTML = '';

    if (data.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="6">No data available</td>';
        tableBody.appendChild(row);
        return;
    }

    data.forEach((item, index) => {
        const buy = parseFloat(item.buy);
        const sell = parseFloat(item.sell);
        const difference = ((sell - buy) / buy * 100).toFixed(2);
        const savings = (sell - buy).toFixed(2);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹ ${parseFloat(item.last).toLocaleString('en-IN')}</td>
            <td>₹ ${buy.toLocaleString('en-IN')} / ₹ ${sell.toLocaleString('en-IN')}</td>
            <td>${isNaN(difference) ? '0.00' : difference}%</td>
            <td>₹ ${isNaN(savings) ? '0.00' : savings}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateTopStats(data) {
    if (data) {
        document.getElementById('current-price').textContent = parseFloat(data.last).toLocaleString('en-IN');
    }
}

fetchCryptoData();
setInterval(fetchCryptoData, 60000);


