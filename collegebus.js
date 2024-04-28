const form = document.getElementById('booking-form');
const ticketDetails = document.getElementById('ticket-details');
const suggestionsBox = document.getElementById('route-suggestions');
const routeInput = document.getElementById('route');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const route = routeInput.value;
    const date = document.getElementById('date').value;

    if (!name || !rollno || !route || !date) {
        alert('Please fill in all the fields');
        return;
    }

    const ticketData = {
        name,
        rollno,
        route,
        date,
        ticketNumber: `TKT-${Math.floor(Math.random() * 10000)}`
    };

    ticketDetails.innerHTML = `
        <h2>Ticket Details</h2>
        <p>Name: ${ticketData.name}</p>
        <p>Roll Number: ${ticketData.rollno}</p>
        <p>Route: ${ticketData.route}</p>
        <p>Date: ${ticketData.date}</p>
        <p>Ticket Number: ${ticketData.ticketNumber}</p>
    `;
    ticketDetails.style.display = 'block'; // Show ticket details

    // Create and display the Pay button with a link
    const payLink = document.createElement('a');
    payLink.href = 'pay.html'; // Set the URL for the payment page
    const payButton = document.createElement('button');
    payButton.textContent = 'Pay';
    payButton.id = 'pay-bill';
    payLink.appendChild(payButton);
    ticketDetails.appendChild(payLink);
});

const availableRoutes = [
    'Gandhipuram || Bus no:5 || Rs.40',
    'Gandhipark || Bus no:10 || Rs.43',
    'Gandhipuram || Bus no:12 || Rs.40',
    'Pollachi || Bus no:4 || Rs.30',
    'Tirupur || Bus no:3 || Rs.27',
    'Kinathukadavu || Bus no:1 || Rs.7',
    'Palladam || Bus no:2 || Rs.15',
    'Malumicham Patti || Bus no:7 || Rs.14',
    'Othakalmandapam || Bus no:6 || Rs.12',
    'Vadasithur || Bus no:8 || Rs.27',
    'Sultanpet || Bus no:9 || Rs.33'
];

routeInput.addEventListener('input', () => {
    const inputValue = routeInput.value.toLowerCase();
    const filteredRoutes = availableRoutes.filter(route => route.toLowerCase().includes(inputValue));

    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    if (filteredRoutes.length > 0) {
        suggestionsBox.style.display = 'block'; // Show suggestions box
        filteredRoutes.forEach(route => {
            const li = document.createElement('li');
            li.textContent = route;
            li.addEventListener('click', () => {
                routeInput.value = route.split('||')[0].trim(); // Assuming the format is 'Route || Bus no: X || Rs.Y'
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none'; // Hide suggestions box
            });
            suggestionsBox.appendChild(li);
        });
    } else {
        suggestionsBox.style.display = 'none'; // Hide suggestions box if no match
    }
});
