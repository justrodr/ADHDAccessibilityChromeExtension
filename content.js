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

let centerAds = document.getElementsByClassName('ad-container');

for (elt of centerAds) {
    elt.style['background-color'] = "#00FF00";
} 

let centerAds2 = document.getElementsByClassName('_ap_apex_ad');

for (elt of centerAds2) {
    elt.style['display'] = "none";
} 

let links = document.getElementsByTagName('a');

for (elt of links) {
    elt.style['text-decoration'] = "underline";
} 


