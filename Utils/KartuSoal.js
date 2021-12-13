const htmlEscaper = require("html-escaper");
const formattedHTML = (source) => {
    if(source.trim()){
        return  `<div>${htmlEscaper.unescape(source)}</div>`
    } else {
        return "<div>-</div>"
    }
}

module.exports = {
    formattedHTML
}