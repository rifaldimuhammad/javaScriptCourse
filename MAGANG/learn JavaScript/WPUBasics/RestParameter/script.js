/*
/////////////////////////////////////// REST PARAMETER
function restp(...values) {
    // return arguments;
    // return values
    // return Array.from(arguments)
}
console.log(restp(1, 2, 3, 4, 5));
*/

/*
/////////////////////////////////////// MENAMBAHKAN SETIAP ITEM
function jumlahkan(...values){
    
    let total = 0
    for(const t of values){
        total += t
    }
    
    return total
    
    //<<<<<<<<<<<<<<<< DENGAN HIGH ORDER FUNTION >>>>>>>>>>>>>>>>>>>
    return values.reduce((a , b) => a + b)
}

console.log(jumlahkan(1, 2, 3, 4, 5));
*/


/*
/////////////////////////////////////// FILTERING
function filter(type, ...values) {
    return values.filter((f) => typeof f === type);
}

console.log(filter('string', 1, 2, 'rifaldi', false, 10, 'zaror', true));
*/
