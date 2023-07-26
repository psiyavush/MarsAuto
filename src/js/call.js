// Модальное окно "Заказать звонок" и отправка в базу данных
let overlayCall = document.querySelector('.overlay__call')
let callBtn = document.querySelectorAll('.call');
let addForm = document.querySelector('.overlay__call-form');
let sent = document.querySelector('.sent');

// Получаем все кнопки "Заказать звонок" и при нажатии на одну из них выводим окно заказа звонка
callBtn.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        overlayCall.style.display = 'flex';
    });
})

// Добавление данных в хранилище (демонстрационная версия)
if (localStorage.getItem('call') === null ) {
    fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/call.json')
    .then((response) => response.json())
    .then((call) => localStorage.setItem("call", JSON.stringify(call)))
}

// при нажатии на кнопку "Отправить" - отправляем данные в базу данных
addForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    // отправка данных - Заказать звонок (демонстрационная версия)
    let call = JSON.parse(localStorage.getItem('call'))
  
    let newCall = {
        "id": call.at(-1).id + 1,
        "name": e.target[0].value,
        "phone": e.target[1].value        
    }
    call.push(newCall);
    localStorage.setItem("call", JSON.stringify(call))
    overlayCall.style.display = 'none';
    sent.style.display = 'flex';
    setTimeout(function () {
        sent.style.display = 'none';
    }, 3000);
    e.target.reset()

    
    // fetch('http://localhost:3000/call', {
    //     method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': "application/json"
    //         },
            
    //         body: JSON.stringify({
    //             "name": e.target[0].value,
    //             "phone": e.target[1].value,
                
    //         })
    // }).then(()=>{
    //     // окно снова невидимое
    //     overlayCall.style.display = 'none';
    //     // окно сообщение отправлено станет видимым
    //     sent.style.display = 'flex';
    //     // через 4 секунды снова невидимым
    //     setTimeout(function () {
    //         sent.style.display = 'none';
    //     }, 4000);
    //     // сбрасываем значение всех полей формы
    //     e.target.reset()
    // })
    
})

// закрытие окна Звонок по клику вне формы
overlayCall.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__call')) {
        overlayCall.style.display = 'none';
    }
});

// закрытие окна Отправлено по клику вне формы
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

    // закрытие окна тест драйв
    if (e.code === "Escape" && overlayTest.style.display === 'flex') {
        overlayTest.style.display = 'none';
    }

    // закрытие окна аренда
    if (e.code === "Escape" && overlayRent.style.display === 'flex') {
        overlayRent.style.display = 'none';
    }
 });

//  Модальное окно Тест драйв
//  для работы с датами подключил доп скрипт "moment" в на главной странице поверх этого скрипта
// установка даты в соответствии с регионом
 moment.locale("ru");

//  получение элементов ячеек выпадающего списка даты тест-драйва
 let data1 = document.querySelector('.data-1');
 let data2 = document.querySelector('.data-2');
 let data3 = document.querySelector('.data-3');
 let data4 = document.querySelector('.data-4');
 let data5 = document.querySelector('.data-5');
 let data6 = document.querySelector('.data-6');
 let data7 = document.querySelector('.data-7');

// Получение элементов модального окна
 let overlayTest = document.querySelector('.overlay__test');
 let addFormTest = document.querySelector('.overlay__test-forms');
 let testBtn = document.querySelector('.test-btn');
 let testData = document.getElementById('test-data');
 let testTime = document.getElementById('test-time');
 
//  заполнение ячеек выпадающего списка даты тест-драйва датами от сегодня + 6 дней
 data1.innerHTML = moment().format('L');
 data2.innerHTML = moment().add(1, 'days').format('L');
 data3.innerHTML = moment().add(2, 'days').format('L');
 data4.innerHTML = moment().add(3, 'days').format('L');
 data5.innerHTML = moment().add(4, 'days').format('L');
 data6.innerHTML = moment().add(5, 'days').format('L');
 data7.innerHTML = moment().add(6, 'days').format('L');


testBtn.addEventListener('click', ()=> {
    overlayTest.style.display = 'flex';
});

// Добавление данных в хранилище (демонстрационная версия)
if (localStorage.getItem('test') === null ) {
    fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/test.json')
    .then((response) => response.json())
    .then((test) => localStorage.setItem("test", JSON.stringify(test)))
}

addFormTest.addEventListener('submit', (e)=> {
    e.preventDefault();

    // отправка данных - Запись на тест-драйв (демонстрационная версия)
    let test = JSON.parse(localStorage.getItem('test'))
  
    let newTest = {
        "id": test.at(-1).id + 1,
        "name": e.target[0].value,
        "phone": e.target[1].value,
        "date": testData.options[testData.selectedIndex].text,
        "time": testTime.options[testTime.selectedIndex].text   
    }
    test.push(newTest);
    localStorage.setItem("test", JSON.stringify(test))
    overlayTest.style.display = 'none';
    sent.style.display = 'flex';
    setTimeout(function () {
        sent.style.display = 'none';
    }, 3000);
    e.target.reset()
    console.log(JSON.parse(localStorage.getItem('test')))

    // fetch('http://localhost:3000/test', {
    //     method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': "application/json"
    //         },
            
    //         body: JSON.stringify({
    //             "name": e.target[0].value,
    //             "phone": e.target[1].value,
    //             "date": testData.options[testData.selectedIndex].text,
    //             "time": testTime.options[testTime.selectedIndex].text
    //         })
    // }).then(()=>{
    //     overlayTest.style.display = 'none';
    //     sent.style.display = 'flex';
    //     setTimeout(function () {
    //         sent.style.display = 'none';
    //     }, 4000);
    //     e.target.reset()
                
    // })
        
})

overlayTest.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__test')) {
        overlayTest.style.display = 'none';
    }
});

// Модальное окно Аренда авто
let rentBtn = document.querySelector('.rent-btn');
let overlayRent = document.querySelector('.overlay__rent');
let addFormRent = document.querySelector('.overlay__rent-forms');

rentBtn.addEventListener('click', ()=> {
    overlayRent.style.display = 'flex';
});

// Добавление данных в хранилище (демонстрационная версия)
if (localStorage.getItem('rent') === null ){
    fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/rent.json')
    .then((response) => response.json())
    .then((rent) => localStorage.setItem("rent", JSON.stringify(rent)))
}

addFormRent.addEventListener('submit', (e)=> {
    e.preventDefault();

    // отправка данных - Аренда электромобиля (демонстрационная версия)
    let rent = JSON.parse(localStorage.getItem('rent'))
  
    let newRent = {
        "id": rent.at(-1).id + 1,
        "name": e.target[0].value,
        "phone": e.target[1].value,
        "date": e.target[2].value,
        "time": e.target[3].value      
    }
    rent.push(newRent);
    localStorage.setItem("rent", JSON.stringify(rent))
    overlayRent.style.display = 'none';
    sent.style.display = 'flex';
    setTimeout(function () {
        sent.style.display = 'none';
    }, 3000);
    e.target.reset()

    // fetch('http://localhost:3000/rent', {
    //     method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': "application/json"
    //         },
            
    //         body: JSON.stringify({
    //             "name": e.target[0].value,
    //             "phone": e.target[1].value,
    //             "date": e.target[2].value,
    //             "time": e.target[3].value
    //         })
    // }).then(()=>{
        // overlayRent.style.display = 'none';
        // sent.style.display = 'flex';
        // setTimeout(function () {
        //     sent.style.display = 'none';
        // }, 4000);
        // e.target.reset()
                
    // })
        
})

 overlayRent.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__rent')) {
        overlayRent.style.display = 'none';
        
    }
});