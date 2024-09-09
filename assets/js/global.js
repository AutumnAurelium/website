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

portraits.forEach(function(portrait) {
    let text = portrait.innerHTML;

    let check = "";

    if(text.includes("!!!")) {
        let split = text.split("!!!");
        text = split[1];
        check = "[" + split[0] + "]";
    }

    let character = portrait.href.split('#portrait-')[1];
    let characterName = toTitleCase(character.split("-").join(" "));
    let image = `<image class="portrait-image" src="/assets/portraits/${character}.jpg" alt="portrait of ${characterName}">`
    
    let skillName = `<span class=${colormap[character]}>${characterName} </span>`
    let skillCheck = `<span class="portrait-skillcheck">${check}</span>`
    let dialog = `<span class="portrait-dialog">${text}</span>`

    let allText = `<div><p>${skillName}${skillCheck}</p><p>${dialog}</p></div>`
    
    portrait.outerHTML = "<blockquote class='portrait'>" + image + allText + "</blockquote>"
});