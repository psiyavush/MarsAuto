let overlayCall = document.querySelector('.overlay__call')
let callBtn = document.querySelectorAll('.call');
let addFormCall = document.querySelector('.overlay__call-form');
let sent = document.querySelector('.sent');

callBtn.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        overlayCall.style.display = 'flex';
    });
})

addFormCall.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    fetch('http://localhost:3000/call', {
        method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            },
            
            body: JSON.stringify({
                "name": e.target[0].value,
                "phone": e.target[1].value,
                
            })
    }).then(()=>{
        overlayCall.style.display = 'none';
        sent.style.display = 'flex';
        setTimeout(function () {
            sent.style.display = 'none';
        }, 4000);
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        
    })
    
})


overlayCall.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__call')) {
        overlayCall.style.display = 'none';
        
    }
});

sent.addEventListener('click', (e)=> {
    if(e.target.classList.contains('sent')) {
        sent.style.display = 'none';
    }
});

// закрытие модального окна по нажатию на клавишу Escape
document.addEventListener('keyup', (e) => {
    // закрытие заказать звонок
    if (e.code === "Escape" && overlayCall.style.display === 'flex') {
        overlayCall.style.display = 'none'; 
    }
    // закрытие "отправлено"
    if (e.code === "Escape" && sent.style.display === 'flex') {
        sent.style.display = 'none'; 
    }
 });