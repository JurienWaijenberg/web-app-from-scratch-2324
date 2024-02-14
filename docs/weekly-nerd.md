# Weekly nerd 

## Stop using JS for that

Kilian valkhof

Polypane
Choose the least powerful language
Replaced content

appearance: none; 
Gebruiken in css om je eigen checkbox te maken. Haalt de huidige input weg.

:checked om in css aan te geven of iets is aangevinkt of niet.
:focus-visible gebruiken voor mobiel
:outline-color: tranparant; gebruiken ipv none. Gebruiksvriendelijker.

input type="checkbox" switch 

### Datalist

input
    datalist
        option /option
    /datalist

options gebruiken als opties

### Color picker

input type="color"

Darkmode
input
    color-scheme: dark;

### In-page transitions

scroll-behavior: smooth; gebruiken ipv jquery.

Gebruiksvriendelijker en duidelijker waar je op de pagina bent.

media query gebruiken om de animatie uit te zetten
prefers-reduced-motion: no-preference

scroll margin gebruiken bij animatie van een fixed header.
:target gebruiken om linken binnen de pagina te stylen.

position: sticky
Is onderdeel van de pagina in tegendeel tot fixed.

### Carousels

scroll-snap om slider te maken in css. De elementen snappen automatisch naar de zijkant.

Adam argyle

### Accordion and modals

Accordion

details open
    summary /summary
    p /p
/details

#### css:
summary::marker
[open] summary::marker
summary:hover

### Dialog

dialog
    form
        h1 /h1
        button /button
    /form
/dialog

Dialog is standaard niet te zien. Dit moet met js en moet worden toegevoegd aan de button.
onclick="$$"('dialog').showModal()

Deze komt terecht in de toplayer.
Ook kan je meerdere buttons toevoegen met andere values.

Starting style om dit te animeren.

backdrop-filter om de achtergrond te blurren.

### Container queries

Zijn een soort media quaries, dit kijkt alleen naar het omliggende component.

container-type: inline-size

card {
    flex: 0 0 50cqw
}

container (min-width: 400px) {
    card {flex-direction}
}

### Parrent Selector

:has()
Stylen op basis van alle html elementen in je pagina.

label
    input id="other" type="radio"

form:has(#other:checked) #other-text {
    display: block
}

### Stop using JS in the future

input {
    field-sizing: content;
}

Maak gebruik van min en max width.


### Masonry layout

container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: mansonry;
}

selectlist
Is een stylebare list selector.


### Scroll driven animations

Check meer op bram.us


## Fenna 

### Accessibility

Custom focus state
Focus-visible

ARIA Accessible rich internet application

aria-label
Zorgt er voor dat er een beschrijvende tekst is.

Aria-controls
Elementen die met elkaar in verbinding staan. 

Aria-expanded
Geeft de status van een element dat kan worden uitgeklat.

Aria-live
Om veranderingen live door te geven.
 "off"
 "polite"
 "assertive"

Aria-atomic

#### Carousel
Moet role="region" hebben 
aria-roledescription="carousel"

Voor de slide geef je een role="group" mee.

aria-hidden="true"

Gebruik geen li elements voor slides.

npm package voor dialogs

#### Contrast

tekst moet wcag volgen

Lighthouse checkt of dit goed is

Max regel lengte 50 tot 75 tekens

#### Alt-text

Video/carousels moeten gepauzeerd kunnen worden.
