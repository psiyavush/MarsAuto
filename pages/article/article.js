// получение id из url и вывод соответствующих данных

let article = document.getElementById('article');
let headTitle = document.querySelector('.head-title')

function getUrlParam() {
    let query = window.location.search.substring(1);
    let id = query.split('=');
    return Number(id[1]);
};

const getId = getUrlParam();


fetch(`https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/info/${getId-1}.json`)
.then((response) => response.json())
.then((item) => {
    article.innerHTML = `
    <div class="article-main-content">
                <h1 class="article-title">${item.title}</h1>
                <div class="article-main-content-item">
                    <p class="article-main-content-text">${item.description}</p>
                    <img src="${item.images.startsWith('https') ? item.images : "../../"+item.images}" alt="${item.title}">
                </div>
                <div class="article-main-content-item">
                    <h3 class="article-subtitle">Цены - вниз.</h3>
                    <p class="article-main-content-text">Рестайлинговый Chevrolet Bolt порадовал поклонников не только обновленной внешностью, продвинутыми дорожными “ассистентами”, но и скидками. Снижены цены на все версии: базовая версия Bolt EV подешевела сразу на $5000, и теперь стоит от $31995. Кроссовер Bolt EUV чуть дороже - от $33995.
                    </p>
                    <img src="../../src/images/article/2022-chevrolet-bolt-euv-107-1613167411-min 1.png" alt="Цены - вниз">
                </div>
                <div class="article-main-content-item">
                    <h3 class="article-subtitle">Обновленный снаружи, обновленный внутри.</h3>
                    <p class="article-main-content-text">Оговоримся сразу: о смене поколений речь не идет. В ходе рестайлинга (или как его еще называют, фейслифтинга), Chevrolet Bolt сохранил прежнюю платформу и кузов, а отличия скрываются только в деталях. У него новые бамперы спереди и сзади, новая оптика и иная передняя решетка. 
                        <br><br>
                        Внутри обновлений больше: интерьер действительно можно назвать полностью новым. Новая панель, рулевое колесо, передние кресла и 10,2-дюймовый экран мультимедийной панели. Изменился даже алгоритм управления режимами движения - теперь “паркинг” “драйв”, “нейтраль” и “реверс” включаются кнопками.
                        <br><br>
                        Новые позиции в списке оснащения - вентиляция передних кресел и подогрев переднего и заднего рядов у хэтчбека, и опционная панорамная крыша для кроссовера.</p>
                    <img src="../../src/images/article/2022-chevrolet-bolt-euv-115-1613167411-min 1.png" alt="Обновленный снаружи, обновленный внутри">
                </div>
                <div class="article-main-content-item">
                    <h3 class="article-subtitle">Обновленный “софт”.</h3>
                    <p class="article-main-content-text">Кроссовер Chevrolet Bolt EUV одним из первых получил автопилот второго уровня - систему Super Cruise. Правда, пока пользоваться им можно только в США и Канаде, на специально “оцифрованных” дорогах, где электронный ассистент знает все до деталей. 
                        <br><br>
                        На остальных дорогах пока придется довольствоваться ассистентами попроще. Хотя как сказать: семейство Bolt 2021 года имеет целый пакет электронных систем безопасности: удержание в полосе, автоматическое переключения с дальнего света на ближний, обнаружение пешеходов, предупреждение о лобовом столкновении, индикатор дистанции и автоматическое экстренное торможение.</p>
                    <img src="../../src/images/article/2022-chevrolet-bolt-euv-104-1613167403-min 1.png" alt="Обновленный “софт”.">
                </div>
                <div class="article-main-content-item">
                    <h3 class="article-subtitle">“Одна педаль” и большие пробеги на одной зарядке.</h3>
                    <p class="article-main-content-text">Всем известно, что рекуперация - это большой плюс для электрокаров. Ведь каждый раз, когда вы отпускаете педаль “газа”, электромотор начинает работать как генератор - и заряжает батарею. А для того, чтобы делать это эффективнее, обновленный Bolt получил систему “одна педаль”. Теперь, после отпускания “газа”, он замедляется интенсивнее, вплоть до полной остановки. Это позволяет ездить в обычных режимах вообще без касания педали тормоза.</p>
                    <img src="../../src/images/article/2022-chevrolet-bolt-euv-105-1613167405-min 1.png" alt="“Одна педаль” и большие пробеги на одной зарядке.">
                </div>
                <div class="article-main-content-item">
                    <p class="article-main-content-text">И в сочетании с батареей увеличенной емкости (с 60 до 65 кВт ч), которую Bolt получил в прошлом году, это позволяет добиться приличных пробегов на одной зарядке. У хэтчбека он составляет 416 км, у более высокого и массивного кроссовера EUV - 402 км.
                        <br><br>
                        Также появился зарядный шнур Dual Level Charge со сменной вилкой для разных типов зарядок. И если это мощная станция, хэтчбек Bolt за 30 минут набирает 161 км пробега, а кроссовер - 153 км.</p>
                    <img src="../../src/images/article/2022-chevrolet-bolt-euv-118-1613167413-min 1.png" alt="зарядный шнур Dual Level Charge">
                </div>
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
});



