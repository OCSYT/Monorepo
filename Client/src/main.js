import './style.css';
const App = document.getElementById('app');
const API_URL = 'https://monorepo-n40y.onrender.com/';

const FetchData = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    return 'Error fetching data from API'
  }
  const data = await response.json();
  return await JSON.stringify(data);
}

const RenderData = async () => {
  setInterval(async () => {
    const data = JSON.parse(await FetchData());
    App.innerHTML = `
    <h1>API Response</h1>
    <p>Message: ${data['Message']}</p>
    <p>Date: ${data['Date']}</p>
  `;
  }, 1000);
}
RenderData();