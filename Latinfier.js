console.log("Chrome extension Latinize");
console.log("Spictify Extention by LucyUwI")
function latin() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/a/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g').replace(/д/g, 'd').replace(/ђ/g, 'đ').replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'zh').replace(/з/g, 'z').replace(/и/g, 'i').replace(/й/g, 'y').replace(/к/g, 'k').replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n').replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't').replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'kh').replace(/ц/g, 'ts').replace(/ч/g, 'ch').replace(/щ/g, 'shch').replace(/ъ/g, '\"').replace(/ы/g, 'y').replace(/ь/g, '\'').replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya'.replace(/ѓ/g, 'ǵ')).replace(/А/g, 'A').replace(/Б/g, 'B').replace(/В/g, 'V').replace(/Г/g, 'G').replace(/Ґ/g, 'G').replace(/Д/g, 'D').replace(/Ђ/g, 'Đ').replace(/Ѓ/g, 'Ǵ').replace(/Е/g, 'E').replace(/Ѐ/g, 'È').replace(/ѐ/g, 'è').replace(/Ё/g, 'Yo').replace(/Є/g, 'E').replace(/є/g, 'e').replace(/Ж/g, 'Zh').replace(/З/g, 'Z').replace(/З́/g, 'Ź').replace(/Ѕ/g, 'Dz').replace(/ѕ/g, 'dz').replace(/И/g, 'I').replace(/І/g, 'I').replace(/і/g, 'i').replace(/Ї/g, 'Yi').replace(/ї/g, 'yi').replace(/Й/g, 'Y').replace(/Ј/g, 'J').replace(/ј/g, 'j').replace(/К/g, 'K').replace(/Л/g, 'L').replace(/Љ/g, 'Lj').replace(/љ/g, 'lj').replace(/М/g, 'M').replace(/Н/g, 'N').replace(/Њ/g, 'Nj').replace(/њ/g, 'nj').replace(/О/g, 'O').replace(/П/g, 'P').replace(/Р/g, 'R').replace(/С/g, 'S').replace(/Т/g, 'T').replace(/Ћ/g, 'Ć').replace(/ћ/g, 'ć').replace(/Ќ/g, 'K').replace(/ќ/g, 'ḱ').replace(/У/g, 'U').replace(/Ў/g, 'Ŭ').replace(/ў/g, 'ŭ').replace(/Ф/g, 'F').replace(/Х/g, 'Kh').replace(/Ц/g, 'C').replace(/Ч/g, 'Ch').replace(/Џ/g, 'Dž').replace(/џ/g, 'dž').replace(/Ш/g, 'Sh').replace(/ш/g, 'sh').replace(/Щ/g, 'Shch').replace(/Ъ/g, '\"').replace(/Ы/g, 'Y').replace(/Ь/g, '\'').replace(/Э/g, 'E').replace(/Ю/g, 'Yu').replace(/Я/g, 'Ya').replace(/Ә/g, 'Á').replace(/ә/g, 'á').replace(/Ғ/g, 'Ǵ').replace(/ғ/g, 'ǵ').replace(/Қ/g, 'Q').replace(/қ/g, 'q').replace(/Ң/g, 'Ń').replace(/ң/g, 'ń').replace(/Ө/g, 'Ó').replace(/ө/g, 'ó').replace(/Ұ/g, 'U').replace(/ұ/g, 'u').replace(/Һ/g, 'H').replace(/һ/g, 'h').replace(/Ӯ/g, 'Ū').replace(/ӯ/g, 'ū').replace(/Ҳ/g, 'h').replace(/ҳ/g, 'h').replace(/Ҷ/g, 'J').replace(/ҷ/g, 'j');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

if (localStorage.getItem("Trans") == null){
    localStorage.setItem("Trans",false)
} else if (localStorage.getItem("Trans") == null){
    setTimeout(() => {document.getElementById("ToLatin").children[0].children[0].setAttribute("fill","var(--spice-button)")}, 4000)
}

function toggleTrans(){
    if (localStorage.getItem("Trans") == "false") {
        localStorage.setItem("Trans",true)
        document.getElementById("ToLatin").children[0].children[0].setAttribute("fill","var(--spice-button)")
        document.getElementById("ToLatin").style.setProperty('--latinify-displayblob','block')
    } else {
        localStorage.setItem("Trans",false)
        document.getElementById("ToLatin").children[0].children[0].setAttribute("fill","currentColor")
        document.getElementById("ToLatin").style.setProperty('--latinify-displayblob','none')
    }
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
DotbelowCss = document.createElement("style")
DotbelowCss.innerHTML = "#ToLatin {--latinify-displayblob: none;} #ToLatin:after {background-color: var(--spice-button);border-radius: 50%;bottom: 0;content: '';display: block;height: 4px;inline-size: 4px!important;left: 50%;position: absolute;-webkit-transform: translateX(-50%);transform: translateX(-50%);width: 4px;display: var(--latinify-displayblob)}"
document.body.appendChild(DotbelowCss)

tolatin = document.createElement("button")
tolatin.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g fill="currentColor"><path d="M 10.691406 4.910156 L 10.691406 9.476562 L 12.316406 9.476562 C 13.925781 9.476562 14.199219 9.46875 14.582031 9.421875 C 16.550781 9.167969 17.707031 7.996094 17.984375 5.976562 C 18.035156 5.601562 18.046875 5.375 18.046875 4.808594 C 18.046875 4.164062 18.027344 3.890625 17.953125 3.46875 C 17.65625 1.8125 16.679688 0.804688 15.054688 0.476562 C 14.449219 0.355469 14.222656 0.34375 12.285156 0.34375 L 10.691406 0.34375 Z M 14.066406 1.660156 C 14.808594 1.734375 15.265625 1.929688 15.640625 2.324219 C 15.980469 2.679688 16.183594 3.171875 16.28125 3.882812 C 16.316406 4.136719 16.332031 5.292969 16.304688 5.65625 C 16.183594 7.246094 15.53125 8.011719 14.175781 8.160156 C 14.027344 8.175781 13.753906 8.183594 13.152344 8.183594 L 12.328125 8.183594 L 12.328125 1.636719 L 13.089844 1.636719 C 13.640625 1.636719 13.90625 1.644531 14.066406 1.660156 Z M 14.066406 1.660156 "/><path d="M 4.0625 8.300781 C 4.054688 9.96875 4.050781 10.148438 3.988281 10.753906 C 3.882812 11.796875 3.648438 12.691406 3.242188 13.5625 C 3.125 13.8125 2.855469 14.335938 2.816406 14.394531 C 2.796875 14.417969 2.75 14.425781 2.453125 14.441406 C 2.269531 14.453125 2.113281 14.464844 2.109375 14.46875 C 2.097656 14.480469 2.160156 17.367188 2.175781 17.640625 L 2.183594 17.800781 L 3.347656 17.800781 L 3.355469 17.640625 C 3.363281 17.550781 3.382812 17.105469 3.40625 16.644531 C 3.425781 16.1875 3.449219 15.773438 3.453125 15.730469 L 3.460938 15.648438 L 8.929688 15.648438 L 8.933594 15.730469 C 8.933594 15.773438 8.957031 16.257812 8.980469 16.800781 L 9.03125 17.792969 L 9.613281 17.796875 L 10.191406 17.800781 L 10.191406 17.734375 C 10.191406 17.695312 10.214844 16.949219 10.238281 16.070312 C 10.261719 15.191406 10.28125 14.46875 10.277344 14.46875 C 10.277344 14.464844 10.121094 14.457031 9.933594 14.445312 C 9.746094 14.4375 9.5625 14.429688 9.527344 14.421875 L 9.460938 14.414062 L 9.460938 6.65625 L 4.070312 6.65625 Z M 7.917969 11.167969 L 7.917969 14.402344 L 6.148438 14.402344 C 5.175781 14.402344 4.378906 14.398438 4.378906 14.394531 C 4.378906 14.390625 4.441406 14.261719 4.515625 14.109375 C 4.960938 13.210938 5.234375 12.328125 5.367188 11.371094 C 5.464844 10.683594 5.484375 10.226562 5.484375 8.949219 L 5.484375 7.933594 L 7.917969 7.933594 Z M 7.917969 11.167969 "/></g></svg>'
tolatin.setAttribute("onclick","toggleTrans()")
tolatin.setAttribute("class", "ZMXGDTbwxKJhbmEDZlYy control-button")
tolatin.setAttribute("id", "ToLatin")
setTimeout(() => {
    control =getElementByXpath('//*[@id="main"]/div/div[2]/div[2]/footer/div[1]/div[3]/div') ||
        document.querySelector(".main-nowPlayingBar-right")?.childNodes[0] ||
        document.querySelector(".ExtraControls") ||
        document.querySelector(".ClYTTKGdd9KB7D9MXicj") ||
        document.querySelector(".mwpJrmCgLlVkJVtWjlI1");
    control?.prepend(tolatin)
    if (localStorage.getItem("Trans") == "true") {
      document.getElementById("ToLatin").children[0].children[0].setAttribute("fill","var(--spice-button)")
      document.getElementById("ToLatin").style.setProperty('--latinify-displayblob','block')
    }

}, 3000)



const observer = new MutationObserver((mutations, observer) => {
  if (localStorage.getItem("Trans") == "true") {
      latin()
    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
