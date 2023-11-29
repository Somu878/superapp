export function GetDate(){
    const date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var day = date.getDate()
    var formattedDate = day + "-"+month+"-"+year
    return formattedDate
}