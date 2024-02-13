const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


var card = document.querySelectorAll('.card');
var back = document.querySelectorAll('.card-back');



card.forEach((event)=> {

    event.addEventListener('click',()=> {
        
        if (event.style.transform == "") {
        event.style.transform = 'rotateY(180deg)';
        }
        else {
            event.style.transform = "";        
        }

    
    })

})
