let btnB2 = document.querySelector('button#b2');
let inputC = document.querySelector('input#c');

function numberOneTriangle(c) {
    let kq = '';
    for(let i = 1; i <= c; i++){
        for(let j = 1; j <= i; j++){
            kq += ' * ';
        }
        kq += '<br/>';
    }
    document.getElementById('triangle').innerHTML = kq;
}

btnB2.onclick = function() {
    let c = inputC.value;
    numberOneTriangle(c);
}