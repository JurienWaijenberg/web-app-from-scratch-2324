document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data using fetch API
    fetch('https://jurienwaijenberg.github.io/web-app-from-scratch-2324/info.json')
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

// function displayData(data) {
//     // Assuming the JSON structure is an array of objects, you can iterate over it
//     data.forEach(function(item) {

//         // // Create an HTML element to display each item
//         // var listItem = document.createElement('div');

//         // Assuming the JSON structure has 'name' and 'age' properties
//         var nameParagraph = document.createElement('h2');
//         nameParagraph.textContent = item.firstName;
//         const listItem = nameParagraph;

//         // Append the created element to the data-container div
//         document.getElementById('profile').appendChild(listItem);
//     });
// }

function displayData(data) {
    // Assuming the JSON structure is an array of objects, you can iterate over it
    data.forEach(function(item) {

        // Create an HTML element to display each item
        var listItem = document.createElement('section');
        listItem.classList.add('motor');

        // Assuming the JSON structure has 'name' and 'age' properties
        var lastnameParagraph = document.createElement('h3');
        lastnameParagraph.textContent = item.lastName;
        listItem.appendChild(lastnameParagraph);
        lastnameParagraph.classList.add('background-text');

        var profile = document.createElement('section');
        profile.classList.add('max-width');
        profile.classList.add('row');
        listItem.appendChild(profile);

        var profileInfo = document.createElement('section');
        profileInfo.classList.add('profile-info');
        profile.appendChild(profileInfo);

        // Assuming the JSON structure has 'name' and 'age' properties
        var nameParagraph = document.createElement('h2');
        nameParagraph.textContent = item.firstName;
        profileInfo.appendChild(nameParagraph);

        var ageParagraph = document.createElement('p');
        ageParagraph.textContent = item.age;
        profileInfo.appendChild(ageParagraph);

        var avatar = document.createElement('img');
        avatar.src = item.avatar_url;
        profileInfo.appendChild(avatar);

        // Append the created element to the data-container div
        document.getElementById('repeater').appendChild(listItem);
    });
}