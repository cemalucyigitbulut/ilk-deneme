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