
let fruta = [
    "abacaxi", "maca", "banana", "laranja" , "melancia" , "abacaxi" , "Zimbro" , "abacate" , "Lichia"
];

//
let novasFruta = fruta.map(function(ItemDoArray){
    console.log("MINHAS FRUTAS : " , novasFruta);
})
console.log("------------------------------------------------------------------------------");
let novasFrutas = fruta.map((ItemDoArray) => {
    console.log("MINHAS FRUTAS : " , novasFrutas);
    return ItemDoArray
});
console.log("------------------------------------------------------------------------------");
