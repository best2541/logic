function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let date = new Date(userDate).toLocaleDateString('en-ZA')
    return date.replace(/[/]/g, '')
}

console.log(formatDate("12/31/2014"));