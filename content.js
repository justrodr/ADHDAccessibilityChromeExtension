console.log("Boom Awesome?");

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    console.log(elt);
    elt.style['font-size'] = '100pt';
}