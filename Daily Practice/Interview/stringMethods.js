let url = "http://www.badlionsmusic.com";
let newUrl = url.split("http:");
let finalUrl = '';

if (newUrl[0] != "http:") {
    newUrl.shift()
    newUrl.unshift("https:")
    finalUrl = newUrl[0] + newUrl[1]
}

console.log(finalUrl);