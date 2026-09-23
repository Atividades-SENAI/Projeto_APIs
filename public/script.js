const statusText = document.getElementById('status-text');
const dateElement = document.getElementById('date');
const messageElement = document.getElementById('message');
const button = document.getElementById('load-api');

async function loadApiData() {
    statusText.textContent = 'Consultando a API...';

    try {
        const response = await fetch('/api');

    if (!response.ok) {
        throw new Error('Erro ao consultar a API');
    }

    const data = await response.json();

    statusText.textContent = data.status;
    dateElement.textContent = data.date;
    messageElement.textContent = data.message;
    } catch (error) {
    statusText.textContent = 'Não foi possível conectar com a API.';
    dateElement.textContent = '--';
    messageElement.textContent = error.message;
    }
}

button.addEventListener('click', loadApiData);
loadApiData();
