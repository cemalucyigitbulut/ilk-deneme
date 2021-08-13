//Log in
const model = document.querySelector('.model')
const loginn = document.querySelector('.loginn')
const closee = document.querySelector('.close')

loginn.addEventListener('click',openModel)
closee.addEventListener('click',closeModel)
window.addEventListener('click',outsideClick)


function openModel(){
    model.style.display ='block'  //.model display:none; nu burdan manupule ettik//
}

function closeModel(){
    model.style.display ='none'
}

function outsideClick(e){     //(e) = event paramater//
   if(e.target == model){
       closeModel()
   }
}



//Details 
const cemdetials = document.querySelector('.cemdetailsopen')
const cemopen = document.querySelector('.cemdetails')
const close22 = document.querySelector('.close2')

cemopen.addEventListener('click',openModel2)
close22.addEventListener('click',closeModel2)
window.addEventListener('click',outsideClick2)

function openModel2(){
    cemdetials.style.display='block'
}

function closeModel2(){
    cemdetials.style.display='none'
}

function outsideClick2(e){
    if(e.target == cemdetials){
        closeModel2()
    }
}




//live buttons


