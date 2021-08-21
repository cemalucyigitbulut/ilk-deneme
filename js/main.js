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


const cemsport = document.querySelector('.cemsportfull')
const cemnews = document.querySelector('.cemnewsfull')
const cemevents = document.querySelector('.cemeventsfull')
const cemsportbut1 = document.querySelector('.cemlivesport')
const cemnewsbut1 = document.querySelector('.cemlivenews')
const cemeventsbut1 = document.querySelector('.cemliveevents')
const cemsportbut2 = document.querySelector('.cemlivesport2')
const cemnewsbut2 = document.querySelector('.cemlivenews2')
const cemeventsbut2 = document.querySelector('.cemliveevents2')
const cemsportbut3 = document.querySelector('.cemlivesport3')
const cemnewsbut3 = document.querySelector('.cemlivenews3')
const cemeventsbut3 = document.querySelector('.cemliveevents3')




cemsportbut1.addEventListener('click',openSport)
cemnewsbut1.addEventListener('click',openNews)
cemeventsbut1.addEventListener('click',openEvents)

cemsportbut2.addEventListener('click',openSport2)
cemnewsbut2.addEventListener('click',openNews2)
cemeventsbut2.addEventListener('click',openEvents2)

cemsportbut3.addEventListener('click',openSport3)
cemnewsbut3.addEventListener('click',openNews3)
cemeventsbut3.addEventListener('click',openEvents3)

window.addEventListener('click',BastGorunmez)



function openSport(){ 
    if(cemsport.style.display='block'){
        cemnews.style.display='none'
        cemevents.style.display='none'
    }  
}

function openNews(){
    if(cemnews.style.display='block'){
        cemsport.style.display='none'
        cemevents.style.display='none'
    }
}

function openEvents(){
    if(cemevents.style.display='block'){
        cemsport.style.display='none'
        cemnews.style.display='none'
    }
}

function openSport2(){ 
    if(cemsport.style.display='block'){
        cemnews.style.display='none'
        cemevents.style.display='none'
    }
}

function openNews2(){
    if(cemnews.style.display='block'){
        cemsport.style.display='none'
        cemevents.style.display='none'
    }
}

function openEvents2(){
    if(cemevents.style.display='block'){
        cemsport.style.display='none'
        cemnews.style.display='none'
    }
}

function openSport3(){ 
    if(cemsport.style.display='block'){
        cemnews.style.display='none'
        cemevents.style.display='none'
    }
}

function openNews3(){
    if(cemnews.style.display='block'){
        cemsport.style.display='none'
        cemevents.style.display='none'
    }
}

function openEvents3(){
    if(cemevents.style.display='block'){
        cemsport.style.display='none'
        cemnews.style.display='none'
    }
}





// scripts with an "async" attribute will execute as soon the download is done. This blocks the page and does not guarantee any specific execution order.
// scripts with a "defer" attribute will load in the order they are in and will only execute once everything has finished loading.
// If your scripts should be run immediately and they don't have any dependencies, then use async.
// If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.






//Something something
//somebullshit


// const cembabaprice = querySelector('.cembababundledarkmode')

// function DarkMode(){
//     var element = document.body;
//     element.classList.toggle("darkMode")
// }







