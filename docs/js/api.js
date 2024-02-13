document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data using fetch API
    fetch('./info.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Once the data is successfully fetched, display it on the page
        displayData(data);
    })
    .catch(error => {
        // If there's an error fetching the data, log the error
        console.error('Error fetching JSON data:', error);
    });
});

function displayData(data) {
    // Assuming the JSON structure is an array of objects, you can iterate over it
    data.forEach(function(item) {
        // Create an HTML element to display each item
        var listItem = document.createElement('div');
        listItem.classList.add('data-item');
        // Assuming the JSON structure has 'name' and 'age' properties
        var nameParagraph = document.createElement('p');
        nameParagraph.textContent = 'Name: ' + item.name;
        listItem.appendChild(nameParagraph);
        var ageParagraph = document.createElement('p');
        ageParagraph.textContent = 'Age: ' + item.age;
        listItem.appendChild(ageParagraph);
        // Append the created element to the data-container div
        document.getElementById('data-container').appendChild(listItem);
    });
}