let portraits = document.querySelectorAll('a[href^="#portrait-"]');

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

let colormap = new Map<string, string>();
colormap.set("drama", "intellect");
colormap.set("logic", "intellect");
colormap.set("rhetoric", "intellect");
colormap.set("encyclopedia", "intellect");
colormap.set("conceptualization", "psyche");
colormap.set("volition", "psyche");
colormap.set("inland-empire", "psyche");
colormap.set("empathy", "psyche");
colormap.set("authority", "physique");
colormap.set("endurance", "physique");
colormap.set("physical-instrument", "physique");
colormap.set("electrochemistry", "physique");
colormap.set("suggestion", "motorics");
colormap.set("composure", "motorics");
colormap.set("hand-eye-coordination", "motorics");
colormap.set("perception", "motorics");
colormap.set("reaction-speed", "motorics");
colormap.set("savoir-faire", "motorics");
colormap.set("interfacing", "motorics");
colormap.set("esprit-de-corps", "motorics");


let characterNames = new Map<string, string>();
characterNames.set("drama", "Drama");
characterNames.set("logic", "Logic");
characterNames.set("rhetoric", "Rhetoric");
characterNames.set("encyclopedia", "Encyclopedia");
characterNames.set("conceptualization", "Conceptualization");
characterNames.set("volition", "Volition");
characterNames.set("inland-empire", "Inland Empire");
characterNames.set("empathy", "Empathy");
characterNames.set("authority", "Authority");
characterNames.set("endurance", "Endurance");
characterNames.set("physical-instrument", "Physical Instrument");
characterNames.set("electrochemistry", "Electrochemistry");
characterNames.set("suggestion", "Suggestion");
characterNames.set("composure", "Composure");
characterNames.set("hand-eye-coordination", "Hand-Eye Coordination");
characterNames.set("perception", "Perception");
characterNames.set("reaction-speed", "Reaction Speed");
characterNames.set("savoir-faire", "Savoir-Faire");
characterNames.set("interfacing", "Interfacing");
characterNames.set("esprit-de-corps", "Esprit de Corps");
characterNames.set("harry", "You");

portraits.forEach(function(portrait) {
    let text = portrait.innerHTML;

    let check = "";

    if(text.includes("!!!")) {
        let split = text.split("!!!");
        text = split[1];
        check = "[" + split[0] + "]";
    }

    let character = portrait.getAttribute("href")!.split('#portrait-')[1];
    let characterName = characterNames.get(character) ?? toTitleCase(character.replace(/-/g, ' '));
    let image = `<image class="portrait-image" src="/assets/portraits/${character}.jpg" alt="portrait of ${characterName}">`
    
    let color = colormap.get(character) ?? "generic";

    let skillName = `<span class=portrait-text-${color}>${characterName} </span>`
    let skillCheck = `<span class="portrait-skillcheck">${check}</span>`
    let dialog = `<span class="portrait-text">${text}</span>`

    let allText = `<div><p class="portrait-name">${skillName}${skillCheck}</p><p class="portrait-dialog">${dialog}</p></div>`
    
    portrait.outerHTML = `<blockquote class='portrait portrait-quote-${color}'>` + image + allText + "</blockquote>"
});