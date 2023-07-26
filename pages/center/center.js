let allCards = document.querySelectorAll(".center__card");

allCards.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.classList.contains('center__card-arrow-close-over')){
            item.classList.remove('center__card_active');
        } else if (e.target.classList.contains('center__card-arrow-open-over')){
            item.classList.add('center__card_active');
        }
    })
})


let questionBtn = document.querySelector('.center__button');
let overlayCenter = document.querySelector('.overlay__center')
let addFormCenter = document.querySelector('.overlay__center-forms');

questionBtn.addEventListener('click', (e) => {
    overlayCenter.style.display = 'flex';
})

addFormCenter.addEventListener('submit', (e) => {
    e.preventDefault();

    // отправка данных - Задать вопрос (демонстрационная версия)
    let question = JSON.parse(localStorage.getItem('question'))
    let newQuestion = {
        "id": question.at(-1).id + 1,
        "name": e.target[0].value,
        "phone": e.target[1].value,
        "text": e.target[2].value,       
    }
    question.push(newQuestion);
    localStorage.setItem("question", JSON.stringify(question))
    overlayCenter.style.display = 'none';
    sent.style.display = 'flex';
    setTimeout(function () {
        sent.style.display = 'none';
    }, 3000);
    e.target.reset()


    // fetch('http://localhost:3000/question', {
    //     method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': "application/json"
    //         },
            
    //         body: JSON.stringify({
    //             "name": e.target[0].value,
    //             "phone": e.target[1].value,
    //             "text": e.target[2].value,
    //         })
    // }).then(()=>{
    //     overlayCenter.style.display = 'none';
    //     sent.style.display = 'flex';
    //     setTimeout(function () {
    //         sent.style.display = 'none';
    //     }, 4000);
    //     e.target.reset()
    // })
})

overlayCenter.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__center')) {
        overlayCenter.style.display = 'none';
        
    }
});

document.addEventListener('keyup', (e) => {
    
    if (e.code === "Escape" && overlayCenter.style.display === 'flex') {
        overlayCenter.style.display = 'none'; 
    }
});