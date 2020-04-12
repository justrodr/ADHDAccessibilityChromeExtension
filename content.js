console.log("Boom Awesome?");

// let paragraphs = document.getElementsByTagName('p');
// for (elt of paragraphs) {
//     console.log(elt);
//     elt.style['font-size'] = '20pt';
// }



let body = document.getElementsByTagName('body');
for (elt of body) {
    console.log("BODY: " + elt.textContent);
    elt.style['background-color'] = '#FF00FF';
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

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    console.log("PARAGRAPH: " + elt.textContent);
    elt.style['background-color'] = '#FF00FF';
}

let ads = document.getElementsByClassName('adsbygoogle');
for (elt of ads) {
    elt.style['opacity'] = '0.0';
}

let adwrappers = document.getElementsByClassName('ad_wrapper_');
for (elt of adwrappers) {
    elt.style['opacity'] = '0.0';
}

let right_rail = document.getElementsByClassName('right-rail');
for (elt of right_rail) {
    elt.style['opacity'] = '0.0';
}

let advertisement = document.getElementsByClassName('advertisement');
for (elt of advertisement) {
    elt.style['opacity'] = '0.0';
}

let YahooNewsAds = document.getElementsByClassName('YDC-Sidekick-Wrapper');
for (elt of YahooNewsAds) {
    elt.style['opacity'] = '0.0';
}

// This line below erases all of the HTML
// This will come in handy later so we can do this cleanly
// document.documentElement.innerHTML = '';