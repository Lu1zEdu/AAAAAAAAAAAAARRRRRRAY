
let fruta = [
    "abacaxi", "maca", "banana", "laranja" , "melancia" , "abacaxi" , "Zimbro" , "abacate" , "Lichia"
];

console.log("------------------------------------------------------------------------------");

let novasFrutas2 = fruta.map((ItemDoArray) => {
    console.log("MINHAS FRUTAS : " , ItemDoArray);
    return ItemDoArray
});

console.log("------------------------------------------------------------------------------");

let ObjFrutas = fruta.map((fruta , ind , arr) => {
    return {
        "nome" : fruta ,
        "indice" : ind++ ,
    }
});

console.log(ObjFrutas)

console.log("------------------------------------------------------------------------------");
