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

//-----------------mask of phone

$("#inputTel").mask("+9(999) 999-9999");









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
  let butt1 = document.querySelector('.btn1');





  butt1.addEventListener('click',()=>{ 
 
    let position = document.getElementById('sitee1');
    calculator.PriseTyp= prises[0][position.value-1];
    console.log( calculator.PriseTyp);
  
   
    let position2 = document.getElementById('sitee2');
    calculator.design= prises[1][position2.value-1];
    console.log(calculator.design);
   
    let position3 = document.getElementById('sitee3');
    calculator.layoutPrise= prises[2][position3.value-1];

   
    let position4 = document.getElementById('sitee4');
    calculator.timesPrise = prises[3][position4.value-1];
   
     
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
   
   $('.out_time_time').text(" "+ waitTime[position4.value-1]);
 

});



  
  


});




