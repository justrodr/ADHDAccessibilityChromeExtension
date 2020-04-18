

console.log('Chrome extension go?');

var darkModeOn = false;
console.log(darkModeOn);

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  darkModeOn = !darkModeOn;
  console.log(darkModeOn);

  if (darkModeOn) {
    console.log("implement dark mode")
    let wrapper = document.getElementsByClassName('wrapper');
    for (elt of wrapper) {
        elt.style['background-color'] = "#333333";
    }

    let center = document.getElementsByClassName('site-content');
    for (elt of center) {
        elt.style['background-color'] = "#000000";
    }

    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
        elt.style['color'] = "#FFFFFF";
    }

    let tableText = document.getElementsByTagName('td');
    for (elt of tableText) {
        elt.style['color'] = "#FFFFFF";
    }


    let h1s = document.getElementsByTagName('h1');
    for (elt of h1s) {
        elt.style['color'] = "#FFFFFF";
    }


    let h2s = document.getElementsByTagName('h2');
    for (elt of h2s) {
        elt.style['color'] = "#FFFFFF";
    }


    let links = document.getElementsByTagName('a');
    for (elt of links) {
        elt.style['color'] = "#88BD26";
    }

    let article = document.getElementsByTagName('article');
    for (elt of article) {
        elt.style['background-color'] = "#000000";
    }

    let header = document.getElementsByClassName('header--navbar');
    for (elt of header) {
        elt.style['background-color'] = "#000000";
    }

    let menuButton = document.getElementById('header--menu__icon');
    menuButton.style['color'] = "#FFFFFF"
    for (elt of menuButton) {
        elt.style['color'] = "#FFFFFF";
    }

  } else {
    console.log("implement light mode")
    let wrapper = document.getElementsByClassName('wrapper');
    for (elt of wrapper) {
        elt.style['background-color'] = "#F0F0F0";
    }

    let center = document.getElementsByClassName('site-content');
    for (elt of center) {
        elt.style['background-color'] = "#FFFFFF";
    }

    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
        elt.style['color'] = "#000000";
    }

    let tableText = document.getElementsByTagName('td');
    for (elt of tableText) {
        elt.style['color'] = "#000000";
    }


    let h1s = document.getElementsByTagName('h1');
    for (elt of h1s) {
        elt.style['color'] = "#000000";
    }


    let h2s = document.getElementsByTagName('h2');
    for (elt of h2s) {
        elt.style['color'] = "#000000";
    }


    let links = document.getElementsByTagName('a');
    for (elt of links) {
        elt.style['color'] = "#060";
    }

    let article = document.getElementsByTagName('article');
    for (elt of article) {
        elt.style['background-color'] = "#FFFFFF";
    }
  }
}


let video = document.querySelectorAll("video");
let audio = document.querySelectorAll("audio");

for (elt of video) {
    elt.pause();
    elt.muted = true;
}

for (elt of audio) {
    elt.pause();
    elt.muted = true;
}

let leftSideBarElts = document.getElementsByClassName('leftSideBarParent');
for (elt of leftSideBarElts ) {
    elt.style['display'] = "none";
}

let rightSideBarElts = document.getElementsByClassName('rightSideBarParent');
for (elt of rightSideBarElts ) {
    elt.style['display'] = "none";
}

let widgets = document.getElementsByClassName('widget-area');
for (elt of widgets) {
    elt.style['display'] = "none";
} 

let documentData = document.getElementsByClassName('site-content');

for (elt of documentData) {
    elt.style['float'] = "none";
    elt.style['margin-left'] = "auto";
    elt.style['margin-right'] = "auto";
} 

let centerAds2 = document.getElementsByClassName('_ap_apex_ad');

for (elt of centerAds2) {
    elt.style['display'] = "none";
} 

let links = document.getElementsByTagName('a');

for (elt of links) {
    elt.style['text-decoration'] = "underline";
} 


