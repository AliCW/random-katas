const reorderEclipseJSON = (JSON) => {
    let output = [...JSON]
    output.sort((a, b) => {
        return new Date(a.date.slice(0, 7)) - new Date(b.date.slice(0, 7));
    })
    return output
}

module.exports = { reorderEclipseJSON }

