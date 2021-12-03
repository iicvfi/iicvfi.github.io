$(document).ready(function(){

   $(window).scroll(()=> {

         let scrollDist = $(window).scrollTop();

         $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDist) {
               $("nav a").each((i, el) => {
                  if ($(el).hasClass("active")) {
                     $(el).removeClass("active");
                  }

               });

               $('nav li:eq(' + i + ')').find('a').addClass('active');

            }

         });

      });

$('a[href^="#"]').click(function(){
let valHref =$(this).attr("href");
$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});


});
//-----------------------------animation-----------------

let options ={threshold: [0.5]}; //прокрутка до 50% элемента
let observer = new IntersectionObserver(onEntry, options);
let elements =$('.photos_img');
let elementsTx =$('.description_tx');
elements.each((i,el)=>{

   observer.observe(el);

});
elementsTx.each((i,el)=>{

   observer.observe(el);

});

function onEntry (entry){
   entry.forEach(change => {
      if(change.isIntersecting){
         change.target.classList.add('show');
         change.target.src = change.target.dataset.src;
      }
      
   });

}
//----------------------------------modal photo

$(document).ready(function() {
   $('.d-block').magnificPopup({type:'image'});
 });

//--------------------timer call modal window



let id = setTimeout(function log(){
  
   $('#staticBackdrop').modal('show');
   
   }, 30000);
   








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
  /* calculator.PriseTyp= prises[0][prompt('Какой вы хотите сайт? 1.Сайт визитка(+4000 р), 2. Сайт для бизнесса(+11000 руб), 3. Интернет-магазин(+13000 руб) ') -1];
  calculator.design= prises[1][prompt('Какой дизайн сайта вы хотите? 1.Уникальный дизайн(+3000 руб), 2. топовый дизайн(+7000 руб) , 3.Шаблонный дизайн(бесплатно)')-1];
  calculator.layoutPrise= prises[2][prompt('Выберите верстку сайта: 1. адаптивная(+4000 руб), 2. Обычная(бесплатно)')-1]; */
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



});




