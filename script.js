var x = +prompt('time')

switch (x) {
    case x:
        if(x == 1){
            alert(x + ' ночи')
        }else if (x < 6) {
            alert(x +" часа ночи")
        }else if (x < 12) {
            alert(x +" часа утра")
        }else if (x < 18) {
            alert(x + " часа дня")
        }else if (x < 24) {
            alert( x + " часов вечера")
        }else if (x > 24){
            alert("error")
        }
        break;
    default:
    
        break;
}