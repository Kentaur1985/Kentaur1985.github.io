function calcAmount() {
    let price = 1500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price =1500, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) { alert("maximum 10 termék!"); }
    else if (amountNumber < 1) { alert("Min. 1 termék!"); }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}





/*function calcAmount(){
    let price = 1500;
    let amountInput = document.querySelector("input[name='amount-input']"); */
/* az amountImput egyenlő a dokumentum input mezejének értékével */

/*  let showAmount = document.querySelector("span.show-amount");*/

/* kiírja az árat, az alapadatok alapján a span show-amount mezőbe */

/*   let amountNumber = parseInt(amountInput.value);*/

/* vedd a beviteli mező egész számra kerekített értékét */

/* if (isNaN(amountNumber)) {amountNumber = 0;} */
/* egyszerűsített változata: amountNumber = isNaN(AMOUNTnUMBER) ? 0 : AmountNumber; */
/* ha nincs szám akkor legyen nulla */
/*   if (amountNumber > 10) {alert("maximum 10 termék!");} */
/* ha a szám 10nél tönn hiba */

/*    else if (amountNumber < 1) {alert("Min. 1 termék!");} */
/* ha a szám 10nél kissebb hiba */

/*    else {let amount = amountNumber * price;
showAmount.innerHTML = amount;} */
/* ha nincs hiba szorozd össze és írd ki az innerHtmlbe az árat */
/*alert("Fizetendő: " + amount + " Ft");*/
/*console.log("Hello, ez egy java üzenet!")*/
/* Js hivatkozást mindig a parancs alsó részére kel beszúrni, mert ha nem jött létre egy elem akkor nem lehet hivatkozni rá */

/* a százalék jel segítségével lehet megállapítani, hogy egy számban a másik maradék nélkül meg van-e */
/* hatványozni két csillagjellel kell kettő csillag és a mögötte lévő szám, hogy hanyadikon */
/* pont length parancs  megadja a szövegse változó hosszát*/
/* stringeket összeadni a plusszal lehet */
/* <style>h1 {text-align: center; color: rgb(139, 139, 139); strong; font-size: 30px;}</style>
    </style>
    <style>img {margin-left: 10%;
   margin-right: 10%;}  </style>*/

/* változo egyenlő null kiüríti a változót */

/* inplicit típuskonverzió- a program átalakítja a változó típusát. */
/* explicit típuskonverzió- én kényszerítem a típus átalakítást userAge = String (33)  */
/* userAge= Number(userAge) */
/* amount.toFixed(2); két tizedesig kerekíti a számot*/
/* amount.toPrecision(5) az össz számjegyeket vágja (345,45) */
/* parseInt("22"); számot készít a szövegből */
/* parseFloat("22.545") tizedessel bíró szám lesz. */
/*let amountInput = document.querySelector("input[name='amount-input']");*/
/*let price =1200;*/

/*let amount = 0*/

/*amount = parseInt(amountInput.value) * price;*/

/*console.log("amount");*/


/* tulajdonásg name.length kiírja a név hosszát */
/* metódusok trim metódus pl: name.trim()*/
/* Stringek összesítése title = "dr. " .... title.concat(name.trim() ); */
/* kisbetűssé alakítás .toLowerCase() */
/* nagybetűssé alakítás .toUpperCase()  */
/* let testStr = "szöveg"; létrehoz egy szüveget
testStr.indexof(szövegrészlet);  megmutatja, hogy hányadik karaktertől kezdődik a szövegben*/
/* mínusz 1 esetén sehol nem szerepel a szövegben */
/* testStr.replace("eredeti", "változtatott szöveg rész"); , de ez nem írja felül az eredetit)*/
/* let test2 = testStr.replace("eredeti", "változtatott szöveg rész"); így űj változóban mentjük el.*/
/* let testStr = testStr.replace("eredeti", "változtatott szöveg rész") esetén írhatod felül az eredeti adatot */
/* két érték összehasonlításánál a dupla egyenlőség jel boolen értéket ad, igaz vagy hamis. */
/* a felkiáltó jel megfordítja a boolen algebrát */
/* === szigorú megfeletetés */
/* && és kapcsolat két reláció között */
/* || alt gr W vagy kapcsolat */
/* fügvényt létrehozni a function fügvény név megmondja mit csináljon (értékek) {mivel csinálja}; */
/* ami nem ad vissza adatot az eljárás */
/* function adder (x, Y) {return x + y;} összead két elemet és a RETURN visszaadja a végeredményt */