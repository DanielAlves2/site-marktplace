function calcular(){
    console.log('calcular');
}

const calcular2 = function(){
    console.log('calcular 2');
}

const calcular3 = () => console.log('calcular3')


calcular(1, 2, 3, 4);
calcular2();
calcular3();