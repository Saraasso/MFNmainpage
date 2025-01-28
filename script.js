document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Load JSON data from the local file
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            content.innerHTML = ''; // Clear the loading message

            // Iterate over the JSON data and display it
            data.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>Published:</strong> ${new Date(item.date).toLocaleDateString()}</p>
          `;

                content.appendChild(card);
            });
        })
        .catch((error) => {
            content.innerHTML = '<p>Failed to load data. Please try again later.</p>';
            console.error('Error fetching data:', error);
        });
});
