const formattedHTML = (source) => {
    if(source.trim()){
        return  `<div>${source}</div>`
    } else {
        return "<div>-</div>"
    }
}

module.exports = {
    formattedHTML
}