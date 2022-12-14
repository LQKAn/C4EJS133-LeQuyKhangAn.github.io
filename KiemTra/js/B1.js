let btnTinh = document.querySelector('button#tinh');
let inputA = document.querySelector('input#a');
let inputB = document.querySelector('input#b');

btnTinh.onclick = function () {
    let a = inputA.value;
    let b = inputB.value;
    let sum = 0;
    let sum_document = '';
    if(a <= 2 && b <=2){
        document.getElementById('show').innerHTML = 'Không có số nguyên tố!';
    } else {
        for(let i = a; i <= b; i++){
            let flag = 1;
            for(let j = 2; j <= i-1; j++){
                if(i % j == 0){
                    flag = 0;
                    break;
                }
            }
            if(flag == 1){
                if(sum_document  == ''){
                    sum_document += i;
                } else {
                    sum_document += ' + ' + i;
                }
                sum += Number(i);
            }
        }
        document.getElementById('show').innerHTML = sum_document + ' = ' + sum; 
    }
}