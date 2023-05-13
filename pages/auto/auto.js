// получение id из url и вывод соответствующих данных

let article = document.getElementById('article');
let headTitle = document.querySelector('.head-title')

function getUrlParam() {
    let query = window.location.search.substring(1);
    let id = query.split('=');
    return Number(id[1]);
};

const getId = getUrlParam();


fetch(`https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/cars/${getId-1}.json`)
.then((response) => response.json())
.then((item) => {
    article.innerHTML = `
    <div class="article__main">
    <img src="${item.image.startsWith('https') ? item.image : "../../"+item.image}" alt="${item.title}" width="657px" height="468px">
    <div class="article__info">
        <h1 class="article__info-title">${item.title}</h1>
        <div class="article__info-item">
            <p><b>Привод</b></p>
            <p>${item.drive}</p>
        </div>
        <div class="article__info-item">
            <p><b>Запас хода</b></p>
            <p>${item.reserve} км</p>
        </div>
        <div class="article__info-item">
            <p><b>Пробег</b></p>
            <p>${item.mileage} км</p>
        </div>
        <div class="article__info-item">
            <p><b>Год выпуска</b></p>
            <p>${item.year}</p>
        </div>
        <div class="article__info-item">
            <p><b>Вид</b></p>
            <p>Электромобиль</p>
        </div>
        <div class="article__info-item">
            <p><b>Разгон 0-100 км/ч</b></p>
            <p>5,6 сек.</p>
        </div>
        <div class="article__info-item">
            <p><b>Батарея</b></p>
            <p>66 квт/ч</p>
        </div>
        <div class="article__info-item">
            <p><b>Время зарядки</b></p>
            <p>9,5ч.</p>
        </div>
        <div class="article__info-item">
            <p><b>Цена</b></p>
            <p>${item.price} ₽</p>
        </div>
    </div>
</div>

<div class="article__second">
    <h2 class="article__second-title">Описание</h2>
    <p class="article__second-subtitle">${item.title}</p>
    <p>Автомобиль прибыл из Америки, Без пробега по РБ. Машина в отличном состоянии как внешне, внутри, так и технически. Оригинальный пробег всего 25000км.</p>
    <p>Очень динамичный и вместительный электромобиль. Разгон до 100км за 5.6сек. Конец 2018 года, на процессоре Intel. Запас хода в среднем 420км, зарядка от CHADEMO 1 час 30 минут, зарядка от сети 220 около 9.5часов. Ёмкость Батареи 66kВт. Максимальная скорость 200км\ч.</p>
    <p>Хорошая комплектация: кожаный салон, Подогревы сидений передних, климат контроль, бесключевой доступ, центральный замок, электро стекла и электро зеркала, складывания зеркал, датчик света и дождя, литые диски R19, порт быстрой зарядки CHADEMO, камера заднего вида, автопарковка, круиз контроль, заводская сигнализация, ABS и др. опции.</p>
</div>
`
    headTitle.textContent = `${item.title} | MarsAuto`;
});

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

// при нажатии на кнопку "Отправить" - отправляем данные в базу данных
addForm.addEventListener('submit', (e)=> {
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
        // окно снова невидимое
        overlayCall.style.display = 'none';
        // окно сообщение отправлено станет видимым
        sent.style.display = 'flex';
        // через 4 секунды снова невидимым
        setTimeout(function () {
            sent.style.display = 'none';
        }, 4000);
        // сбрасываем значение всех полей формы
        e.target.reset()
    })
    
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

addFormTest.addEventListener('submit', (e)=> {
    e.preventDefault();

    fetch('http://localhost:3000/test', {
        method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            },
            
            body: JSON.stringify({
                "name": e.target[0].value,
                "phone": e.target[1].value,
                "date": testData.options[testData.selectedIndex].text,
                "time": testTime.options[testTime.selectedIndex].text
            })
    }).then(()=>{
        overlayTest.style.display = 'none';
        sent.style.display = 'flex';
        setTimeout(function () {
            sent.style.display = 'none';
        }, 4000);
        e.target.reset()
                
    })
        
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

addFormRent.addEventListener('submit', (e)=> {
    e.preventDefault();

    fetch('http://localhost:3000/rent', {
        method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            },
            
            body: JSON.stringify({
                "name": e.target[0].value,
                "phone": e.target[1].value,
                "date": e.target[2].value,
                "time": e.target[3].value
            })
    }).then(()=>{
        overlayRent.style.display = 'none';
        sent.style.display = 'flex';
        setTimeout(function () {
            sent.style.display = 'none';
        }, 4000);
        e.target.reset()
                
    })
        
})

 overlayRent.addEventListener('click', (e)=> {
    if(e.target.classList.contains('overlay__rent')) {
        overlayRent.style.display = 'none';
        
    }
});

