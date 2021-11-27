const prises =[
    [4000, 11000, 13000],
    [3000, 7000, 0],
    [4000, 0],
    [6000, 4000, 0],

];

let calculator ={

   PriseType: 0,
   design: 0,
   layoutPrise:0,
   timesPrise: 0,
};

let output = document.querySelector('.output_prise');
calculator.PriseTyp= prises[0][prompt('Какой вы хотите сайт? 1.Сайт визитка(+4000 р), 2. Сайт для бизнесса(+11000 руб), 3. Интернет-магазин(+13000 руб) ') -1];
calculator.design= prises[1][prompt('Какой дизайн сайта вы хотите? 1.Уникальный дизайн(+3000 руб), 2. топовый дизайн(+7000 руб) , 3.Шаблонный дизайн(бесплатно)')-1];
calculator.layoutPrise= prises[2][prompt('Выберите верстку сайта: 1. адаптивная(+4000 руб), 2. Обычная(бесплатно)')-1];
let t= prompt('Сроки выполнения работы: 1. 3 дня (+6000 руб), 2. неделя (+4000 руб), 3. 3 недели(бесплатно)')-1;
calculator.timesPrise= prises[3][t];

let sum=0;

let summ = function(){

   for( let ind in calculator) {

      sum+= calculator[ind];
   
   
       }

    output.innerHTML= " "+ sum +" руб";

};
summ();

let waitTime =[
'3 дня',
'1 неделя',
'3 недели',
];

$('.out_time_time').text(" "+ waitTime[t]);
