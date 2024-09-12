let portraits = document.querySelectorAll('a[href^="#portrait-"]');

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

let colormap = {
    "drama": "intellect",
    "logic": "intellect",
    "rhetoric": "intellect",
    "encyclopedia": "intellect",
    "conceptualization": "psyche",
    "volition": "psyche",
    "inland-empire": "psyche",
    "empathy": "psyche",
    "authority": "physique",
    "endurance": "physique",
    "physical-instrument": "physique",
    "electrochemistry": "physique",
    "suggestion": "motorics",
    "composure": "motorics",
    "hand-eye-coordination": "motorics",
    "perception": "motorics",
    "reaction-speed": "motorics",
    "savoir-faire": "motorics",
    "interfacing": "motorics",
    "esprit-de-corps": "motorics"
}

let characterNames = {
    "drama": "Drama",
    "logic": "Logic",
    "rhetoric": "Rhetoric",
    "encyclopedia": "Encyclopedia",
    "conceptualization": "Conceptualization",
    "volition": "Volition",
    "inland-empire": "Inland Empire",
    "empathy": "Empathy",
    "authority": "Authority",
    "endurance": "Endurance",
    "physical-instrument": "Physical Instrument",
    "electrochemistry": "Electrochemistry",
    "suggestion": "Suggestion",
    "composure": "Composure",
    "hand-eye-coordination": "Hand-Eye Coordination",
    "perception": "Perception",
    "reaction-speed": "Reaction Speed",
    "savoir-faire": "Savoir-Faire",
    "interfacing": "Interfacing",
    "esprit-de-corps": "Esprit de Corps",
    "harry": "You"
}

portraits.forEach(function(portrait) {
    let text = portrait.innerHTML;

    let check = "";

    if(text.includes("!!!")) {
        let split = text.split("!!!");
        text = split[1];
        check = "[" + split[0] + "]";
    }

    let character = portrait.href.split('#portrait-')[1];
    let characterName = characterNames || toTitleCase(character.replace(/-/g, ' '));
    let image = `<image class="portrait-image" src="/assets/portraits/${character}.jpg" alt="portrait of ${characterName}">`
    
    let color = colormap[character] || "generic";

    let skillName = `<span class=portrait-text-${color}>${characterName} </span>`
    let skillCheck = `<span class="portrait-skillcheck">${check}</span>`
    let dialog = `<span class="portrait-text">${text}</span>`

    let allText = `<div><p class="portrait-name">${skillName}${skillCheck}</p><p class="portrait-dialog">${dialog}</p></div>`
    
    portrait.outerHTML = `<blockquote class='portrait portrait-quote-${color}'>` + image + allText + "</blockquote>"
});


// Rot13 scrambler
var links = document.querySelectorAll('a[href="#rot13-scramble"]');

links.forEach(function(link) {
    // Replace the link with the new paragraph
    let span = document.createElement('span');
    span.className = "rot13-scramble";
    span.textContent = link.textContent;
    link.parentNode.replaceChild(span, link);

    function scramble(event) {
        // Get the text content of the link
        var text = span.textContent;
    
        // Apply ROT13 cipher
        var rot13Text = rot13(text);
    
        // Create a new paragraph element
        span.textContent = rot13Text;
    }

    span.addEventListener('mouseenter', scramble);
    span.addEventListener('mouseleave', scramble);
});

// ROT13 cipher function
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        return String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
    });
}