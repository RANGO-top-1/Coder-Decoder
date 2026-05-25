
let bukvi =  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё', ',', '.', ' ', '!', '?']
let hisla = ['120', '76', '3', '145', '101', '99', '241', '29', '307', '6', '214', '157', '34', '75', '90', '7', '9', '71', '89', '17', '16', '73', '152', '67', '123', '46', '84', '93', '31', '102', '54', '40', '43', '39', '47', '19', '15', '43']

const text = document.getElementById('bykv');
const text1 = document.getElementById('hisl');
const btn = document.getElementById('btn');
const textDiv = document.getElementById('text');
const textDiv2 = document.getElementById('text2');
function hivr (){
// шивровка букв
let result = '';
let cod;
cod = text.value.split("");
for(let i = 0; i < cod.length; i++){
    for(let j = 0; j < hisla.length; j++){
        if(cod[i] == bukvi[j]){
            result += hisla[j] + " ";
            break
        }
    }
}


textDiv.innerHTML = result;
}
function rahivr(){
// расшивровка букв
let result1 = "";
let cod1;
cod1 = text1.value.split(" ");
for(let i = 0; i < cod1.length; i++){
    for(let j = 0; j < bukvi.length; j++){
        if(cod1[i] == hisla[j]){
            result1 += bukvi[j] + "";
            break
        }
    }
}
textDiv2.innerHTML = result1;
}
function Start(){
    hivr()
    rahivr()
}

btn.addEventListener("click", Start);