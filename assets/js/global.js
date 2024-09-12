let portraits = document.querySelectorAll('a[href^="#portrait-"]');

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

let colormap = {
    "drama": "portrait-intellect",
    "logic": "portrait-intellect",
    "rhetoric": "portrait-intellect",
    "encyclopedia": "portrait-intellect",
    "conceptualization": "portrait-psyche",
    "volition": "portrait-psyche",
    "inland-empire": "portrait-psyche",
    "empathy": "portrait-psyche",
    "authority": "portrait-physique",
    "endurance": "portrait-physique",
    "physical-instrument": "portrait-physique",
    "electrochemistry": "portrait-physique",
    "suggestion": "portrait-motorics",
    "composure": "portrait-motorics",
    "hand-eye-coordination": "portrait-motorics",
    "perception": "portrait-motorics",
    "reaction-speed": "portrait-motorics",
    "savoir-faire": "portrait-motorics",
    "interfacing": "portrait-motorics",
    "esprit-de-corps": "portrait-motorics"
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
    
    let color = colormap[character] || "portrait-generic";

    let skillName = `<span class=${colormap[character]}>${characterName} </span>`
    let skillCheck = `<span class="portrait-skillcheck">${check}</span>`
    let dialog = `<span class="portrait-dialog">${text}</span>`

    let allText = `<div><p>${skillName}${skillCheck}</p><p>${dialog}</p></div>`
    
    portrait.outerHTML = "<blockquote class='portrait'>" + image + allText + "</blockquote>"
});