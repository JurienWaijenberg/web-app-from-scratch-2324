## Ideën bedenken

De eerste dag ben begonnen om met wat ideeën te komen voor mijn eigen website. Ik heb er voor gekozen om de single page website te bazeren om mijn hobby motorrijden. Daarnaast had ik visueel een idee in mijn hoofd en ben daarmee content gaan zoeken voor op de pagina. Als header ben ik begonnen met een achtergrond foto, dit is later een video geworden. Daarnaast heb ikwat foto's uitgezocht die ik wil gebruiken voor de content op mijn pagina en op de groepspagina.

## Basis html css

Vervolgens heb ik de basis HTML en css opgezet met niet dynamische content. Dit zodat ik eerste de styling op kan zetten.

## Een achtergrondvideo toegevoegd en responsief gemaakt

De achtergrond foto heb ik vervangen voor een video. Om dit respinsive te krijgen was nog best een klus, hiervoor heb ik onderandere onderstaande bronnen gebruikt.

In eerste instantie heb ik [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) gebruikt om de achtergrond afbeelding te veranderen op mobiel.

Later heb ik [object fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit?retiredLocale=nl) gebruikt om de video op alle formaten passend te maken.

## Content blok

Ik heb twee content blokken gemaakt de tweede is een gespiegelde versie van de eerste. Dit zorgt er voor dat de hoeveelheid altijd aangepast kan worden. De data gaat gevuld worden met de data van het JSON bestand. 

Na deze blokken komt er een google maps met mijn woonplaats in beeld.

[Bron](https://www.maps.ie/create-google-map/)

## API koppeling

Nadat de pagina volledig gestyled is kan ik de data vervangen voor de data uit een json file. Voor deze opdracht heb ik zelf een json file gemaakt. 

In mijn api.js begin ik eerst met de data te fetchen.

```js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data using fetch API
    fetch('https://jurienwaijenberg.github.io/web-app-from-scratch-2324/info-motor.json')
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
```

Om vervolgens deze data toe te voegen aan de blokken. In de javascript hieronder is te zien dat er voor elke regel een nieuw blok wordt gemaakt en toegevoegd wordt in de html.

```js
function displayData(data) {
    // Assuming the JSON structure is an array of objects, you can iterate over it
    data.forEach(function(item) {

        // Create an HTML element to display each item
        var listItem = document.createElement('section');
        listItem.classList.add('motor');
        listItem.setAttribute('id', item.id);

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

                    var nameParagraph = document.createElement('h2');
                    nameParagraph.textContent = item.firstName;
                    profileInfo.appendChild(nameParagraph);

                    var ul = document.createElement('ul');
                    profileInfo.appendChild(ul);

                        var ageParagraph = document.createElement('li');
                        ageParagraph.textContent = item.age;
                        ul.appendChild(ageParagraph);

                        var city = document.createElement('li');
                        city.textContent = item.city;
                        ul.appendChild(city);

                var profileAvatar = document.createElement('section');
                profileAvatar.classList.add('profile-picture');
                profile.appendChild(profileAvatar);    

                    var avatar = document.createElement('img');
                    avatar.src = item.avatar_url;
                    profileAvatar.appendChild(avatar);

        // Append the created element to the data-container element
        document.getElementById('repeater').appendChild(listItem);
    });
}
```

### Problemen met de bronnen

* [Error getting local json](https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local)
* [Api html image element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)
* [Adding a id ](https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript)
