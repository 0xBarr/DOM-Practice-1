

// Variables
const submit = document.querySelector('.submit');
const rating = document.querySelector('#rating-state');
const thanks = document.querySelector('#thank-you');
const buttons = document.querySelector('.buttons');
const rate = document.querySelector('.rate');


// Event Listener

buttons.addEventListener('click', function(e){

    const target = e.target;
    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }  

    let ratingValue = target.getAttribute('id');
    rate.innerText = ratingValue;
})

submit.addEventListener('click', function(){
    rating.style.display = "none";
    thanks.style.display = "block";
})






