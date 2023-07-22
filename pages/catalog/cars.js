// получаем элемент, где будут выводиться автомобили
let catalogRow = document.querySelector('.catalog__row');
// Получаем элемент, формы добавления авто
let addForm = document.querySelector('.catalog__form');
// Получаем кнопку "Добавить автомобиль"
let addBtn = document.querySelector('.add_btn')
// Получаем элемент модального окна на добавления авто
let overlay = document.querySelector('.overlay')

// Делаем запрос в функции на получения списка авто из БД и выводим её
const getAllCars = (number) => {
    // взятие данных из хранилища, как Обещание (демонстрационная версия)
    return Promise.resolve(JSON.parse(localStorage.getItem('cars')))

    // fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/cars.json')
    // .then((response) => response.json())
    .then((cars) => {
        cars.slice().reverse().filter((item, i)=> i > number * 15 - 16 && i < number * 15).forEach((item, i) => {
        catalogRow.innerHTML += `
        <div class="car__content-card">
                        <img src="${item.image.startsWith('https') ? item.image : "../../"+item.image}" class="car__content-img" alt="${item.title}">
                        <div class="car__content-about">
                            <h3 class="car__content-title">${item.title}</h3>
                            <ul class="car__content-list">
                                <li class="car__content-item">
                                    <div class="car__content-left">
                                        <span><svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.5834 8.16665H19.75C20.715 8.16665 21.5 7.38166 21.5 6.41665V1.75C21.5 0.784984 20.715 0 19.75 0H18.5834C17.6183 0 16.8334 0.784984 16.8334 1.75V2.96718L12.5854 3.35327C12.3077 2.75308 11.7037 2.33335 11 2.33335C10.2963 2.33335 9.69237 2.75302 9.41461 3.35327L5.16665 2.96718V1.75C5.16665 0.784984 4.38166 0 3.41665 0H2.25C1.28498 0 0.5 0.784984 0.5 1.75V6.41665C0.5 7.38166 1.28498 8.16665 2.25 8.16665H3.41665C4.38166 8.16665 5.16665 7.38166 5.16665 6.41665V5.19952L9.41461 4.81343C9.51622 5.03305 9.66256 5.22545 9.84112 5.38459L10.2662 11.697C10.0187 11.7645 9.83324 11.9809 9.83324 12.25V15.75C9.83324 16.0091 10.0046 16.2212 10.2381 16.2974L9.84194 21.4481C9.48177 21.7689 9.25 22.2307 9.25 22.75V23.1718L5.16665 22.8005V21.5833C5.16665 20.6183 4.38166 19.8333 3.41665 19.8333H2.25C1.28498 19.8333 0.5 20.6183 0.5 21.5833V26.25C0.5 27.215 1.28498 28 2.25 28H3.41665C4.38166 28 5.16665 27.215 5.16665 26.25V25.0329L9.25 24.6615V25.0833C9.25 26.0483 10.035 26.8333 11 26.8333C11.965 26.8333 12.75 26.0483 12.75 25.0833V24.6615L16.8334 25.0328V26.25C16.8334 27.215 17.6183 28 18.5834 28H19.75C20.715 28 21.5 27.215 21.5 26.25V21.5834C21.5 20.6183 20.715 19.8334 19.75 19.8334H18.5834C17.6183 19.8334 16.8334 20.6183 16.8334 21.5834V22.8005L12.75 23.1718V22.75C12.75 22.2306 12.5181 21.7686 12.1577 21.4478L11.7577 16.2982C11.9932 16.2232 12.1666 16.0106 12.1666 15.7501V12.2501C12.1666 11.9826 11.9834 11.7669 11.7382 11.6979L12.159 5.38453C12.3374 5.22539 12.4837 5.03305 12.5853 4.81354L16.8333 5.19963V6.41676C16.8334 7.38166 17.6183 8.16665 18.5834 8.16665Z" fill="#0F0F10"/>
                                        </svg></span>
                                        <p>Привод</p>
                                    </div>
                                    <div class="car__content-right">
                                        <span>${item.drive}</span>
                                    </div>
                                </li>
                                <li class="car__content-item">
                                    <div class="car__content-left">
                                        <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.1812 12.25C20.5278 12.2527 18.3709 14.4266 18.3736 17.0964C18.3747 18.5549 19.1015 20.2174 20.5338 22.0385C21.5559 23.3384 22.5687 24.2419 22.6114 24.2796C22.9437 24.5746 23.4439 24.5726 23.774 24.2785C23.8167 24.2408 24.8278 23.3352 25.8478 22.0336C26.942 20.6367 27.9986 18.8548 27.9986 17.0871C27.9964 14.4224 25.8557 12.25 23.1812 12.25ZM21.8736 17.0636C21.8725 16.3387 22.4591 15.7511 23.1845 15.75C24.3522 15.75 24.9366 17.1676 24.1147 17.9895C23.2968 18.8092 21.8736 18.2383 21.8736 17.0636Z" fill="#0F0F10"/>
                                            <path d="M4.23371 12.0291C4.56528 12.3234 5.0643 12.3239 5.39636 12.0291C5.43902 11.9913 6.45128 11.0868 7.4723 9.78633C8.90238 7.96359 9.62753 6.30055 9.62753 4.84148C9.62753 2.17219 7.46847 0 4.81503 0C2.1616 0 0.00253296 2.17219 0.00253296 4.84148C0.00253296 6.30055 0.727689 7.96359 2.15777 9.78633C3.17878 11.0868 4.19105 11.9913 4.23371 12.0291ZM4.81503 3.5C5.53855 3.5 6.12753 4.08898 6.12753 4.8125C6.12753 5.53602 5.53855 6.125 4.81503 6.125C4.09152 6.125 3.50253 5.53602 3.50253 4.8125C3.50253 4.08898 4.09152 3.5 4.81503 3.5Z" fill="#0F0F10"/>
                                            <path d="M24.508 26.6863C24.508 27.8851 23.0213 28.4585 22.2182 27.5624H3.93956C1.76847 27.5624 0.0020752 25.796 0.0020752 23.625C0.0020752 21.4539 1.76847 19.6875 3.93956 19.6875H12.7169C13.908 19.6875 14.877 18.7184 14.877 17.5273C14.877 16.3362 13.908 15.3672 12.7169 15.3672H5.79291C5.52877 15.6587 5.17719 15.8047 4.81456 15.8047C3.65103 15.8047 3.06336 14.3873 3.88542 13.5652C4.42584 13.0236 5.30379 13.0633 5.79236 13.6172H12.7169C14.8732 13.6172 16.627 15.371 16.627 17.5273C16.627 19.6836 14.8732 21.4375 12.7169 21.4375H3.93956C2.73316 21.4375 1.75207 22.4186 1.75207 23.625C1.75207 24.8314 2.73316 25.8124 3.93956 25.8124C23.6279 25.8124 22.1893 25.8381 22.2669 25.7605C23.0868 24.9387 24.5071 25.5159 24.508 26.6863Z" fill="#0F0F10"/>
                                            </svg>
                                            </span>
                                        <p>Запас хода</p>
                                    </div>
                                    <div class="car__content-right">
                                        <span>${item.reserve}</span>
                                    </div>
                                </li>
                                <li class="car__content-item">
                                    <div class="car__content-left">
                                        <span><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.066 17.4916C14.6482 17.4916 15.1202 17.0196 15.1202 16.4374C15.1202 15.8552 14.6482 15.3832 14.066 15.3832C13.4838 15.3832 13.0118 15.8552 13.0118 16.4374C13.0118 17.0196 13.4838 17.4916 14.066 17.4916Z" fill="#0F0F10"/>
                                            <path d="M23.183 20.3935L24.0044 18.9707L26.505 20.4144C27.3618 18.7291 27.8696 16.8795 27.9908 14.9647H25.0778V13.3217H28C27.8993 11.3905 27.4085 9.5319 26.5659 7.8368L24.0044 9.31566L23.183 7.89286L25.7485 6.41165C25.2219 5.6073 24.6093 4.85092 23.9136 4.15529C23.2425 3.48417 22.5151 2.88983 21.7424 2.37593L20.2503 4.96029L18.8275 4.13883L20.3231 1.54834C18.6254 0.688763 16.7606 0.184818 14.8215 0.0734738V3.06543H13.1785V0.0733643C11.2394 0.184653 9.37459 0.688653 7.67687 1.54818L9.17246 4.13867L7.74966 4.96013L6.25762 2.37582C5.48494 2.88972 4.75754 3.48406 4.08641 4.15518C3.39079 4.85081 2.77813 5.60719 2.25154 6.41154L4.81704 7.89275L3.99558 9.31555L1.43413 7.83669C0.5915 9.5319 0.100734 11.3905 0 13.3216H2.92217V14.9646H0.0091875C0.130375 16.8795 0.638203 18.729 1.49494 20.4144L3.99552 18.9706L4.81698 20.3934L2.32438 21.8325C2.7551 22.4786 3.24188 23.0926 3.7823 23.6677L4.0256 23.9266H23.9742L24.2175 23.6677C24.7579 23.0926 25.2447 22.4786 25.6754 21.8325L23.183 20.3935ZM14.066 19.1346C12.5788 19.1346 11.3688 17.9247 11.3688 16.4375C11.3688 15.2366 12.1579 14.2169 13.2445 13.8686V8.72011H14.8875V13.8686C15.9742 14.217 16.7633 15.2366 16.7633 16.4375C16.7632 17.9247 15.5532 19.1346 14.066 19.1346ZM21.076 14.0688C21.076 10.2035 17.9313 7.05887 14.066 7.05887C10.2007 7.05887 7.056 10.2035 7.056 14.0688H5.41308C5.41308 9.29756 9.29474 5.4159 14.066 5.4159C18.8373 5.4159 22.7189 9.29756 22.7189 14.0688H21.076Z" fill="#0F0F10"/>
                                            </svg></span>
                                        <p>Пробег</p>
                                    </div>
                                    <div class="car__content-right">
                                        <span>${item.mileage} км</span>
                                    </div>
                                </li>
                                <li class="car__content-item">
                                    <div class="car__content-left">
                                        <span><svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.8443 2.84886H23.9657V4.51433C23.9657 5.70553 23.0005 6.67007 21.8099 6.67007C20.6187 6.67007 19.6542 5.70553 19.6542 4.51433V2.84886H16.1557V4.51433C16.1557 5.70553 15.1918 6.67007 14 6.67007C12.8082 6.67007 11.8443 5.70553 11.8443 4.51433V2.84886H8.3458V4.51433C8.3458 5.70553 7.38126 6.67007 6.19006 6.67007C4.99947 6.67007 4.03432 5.70553 4.03432 4.51433V2.84886H2.15574C1.58416 2.84886 1.03599 3.07552 0.631324 3.47957C0.227277 3.88423 0 4.43241 0 5.0046V23.4214C0 24.6126 0.965156 25.5772 2.15574 25.5772H25.8443C27.0361 25.5772 28 24.6126 28 23.4214V5.0046C28 3.81402 27.0361 2.84886 25.8443 2.84886ZM23.6885 9.66162V12.7874H19.6209V9.66162H23.6885ZM9.34298 13.7514H13.5177V16.7152H9.34298V13.7514ZM8.37967 16.714H4.3121V13.7501H8.38029L8.37967 16.714ZM13.5183 17.6779V21.2657H9.3436V17.6779H13.5183ZM14.4829 17.6779H18.6564V21.2657H14.4829V17.6779ZM14.4829 16.714V13.7501H18.6564V16.714H14.4829ZM19.6203 13.7514H23.6879V16.7152H19.6203V13.7514ZM18.6576 9.66162V12.7874H14.4829V9.66162H18.6576ZM13.5183 9.66162V12.7874H9.3436V9.66101L13.5183 9.66162ZM8.37967 9.66101V12.7874H4.3121V9.66101H8.37967ZM4.3121 17.6779H8.38029V21.2657H4.3121V17.6779ZM19.6203 21.2657V17.6779H23.6879V21.2657H19.6203ZM4.95821 4.51433V1.65458C4.95821 0.974599 5.51008 0.422729 6.19006 0.422729C6.87066 0.422729 7.42191 0.974599 7.42191 1.65458V4.51433C7.42191 5.19431 6.87066 5.74618 6.19006 5.74618C5.51069 5.74618 4.95821 5.19431 4.95821 4.51433ZM12.7681 4.51433V1.65458C12.7681 0.974599 13.32 0.422729 14 0.422729C14.68 0.422729 15.2319 0.974599 15.2319 1.65458V4.51433C15.2319 5.19431 14.68 5.74618 14 5.74618C13.32 5.74618 12.7681 5.19431 12.7681 4.51433ZM20.5787 4.51433V1.65458C20.5787 0.974599 21.1306 0.422729 21.8106 0.422729C22.4905 0.422729 23.0424 0.974599 23.0424 1.65458V4.51433C23.0424 5.19431 22.4905 5.74618 21.8106 5.74618C21.1293 5.74618 20.5787 5.19431 20.5787 4.51433Z" fill="#0F0F10"/>
                                            </svg></span>
                                        <p>Год выпуска</p>
                                    </div>
                                    <div class="car__content-right">
                                        <span>${item.year}</span>
                                    </div>
                                </li>
                                <li class="car__content-item">
                                    <div class="car__content-left">
                                        <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2719 4.19916C28.2317 3.23941 28.2317 1.67883 27.2719 0.719082C26.3122 -0.24067 24.7516 -0.24067 23.7918 0.719082L18.3407 6.178H11.3799L0.00830078 17.5409L8.12925 25.6619L19.516 14.2911V7.3301L20.9497 5.88065C22.554 6.94136 24.7211 6.74995 26.1118 5.35924L27.2719 4.19916ZM13.4595 15.6915L12.2995 14.5314C12.6192 14.211 12.6192 13.6911 12.2995 13.3706C11.9807 13.0518 11.4583 13.0509 11.1395 13.3714C10.8198 13.6911 10.8198 14.211 11.1395 14.5314C12.0992 15.4912 12.0992 17.0518 11.1395 18.0115C10.4722 18.6788 9.41999 18.977 8.35589 18.4743L7.07861 19.7515L5.91858 18.5915L7.19646 17.3136C6.76655 16.4006 6.90573 15.2854 7.65782 14.5314L8.81944 15.6915C8.49978 16.0111 8.49978 16.5318 8.81944 16.8515C9.1391 17.1727 9.6598 17.1712 9.97946 16.8515C10.2991 16.5318 10.2991 16.0111 9.97946 15.6915C9.01971 14.7317 9.01971 13.1703 9.97946 12.2106C10.7341 11.4573 11.8496 11.3182 12.7621 11.748L14.0395 10.4706L15.1996 11.6306L13.9224 12.9078C14.3532 13.8215 14.2136 14.9374 13.4595 15.6915ZM22.1503 4.67983L24.9518 1.87911C25.2723 1.55868 25.7914 1.55868 26.1119 1.87911C26.4315 2.19877 26.4315 2.71947 26.1119 3.03913L24.9518 4.19916C24.1948 4.95623 23.0652 5.11647 22.1503 4.67983Z" fill="#0F0F10"/>
                                            <path d="M21.1566 8.79529V14.9711L10.6711 25.4407L10.533 26.5705L21.937 28L23.8364 12.2249L21.1566 8.79529Z" fill="#0F0F10"/>
                                            </svg></span>
                                        <p>Цена</p>
                                    </div>
                                    <div class="car__content-right">
                                        <span>${item.price} ₽</span>
                                    </div>
                                </li>
                            </ul>   

                            <button class="car__content-btn" onclick="location.href='../auto/index.html?id=${item.id}'">Подробнее</button>
                            <div class="btn-admin">
                            <button class="car__btn-delete" data-id="${item.id}"  type="button">Удалить</button>
                            <button class="car__btn-update" data-id="${item.id}"  type="button">Изменить</button>
                            </div>
                        </div>
        </div>`
        })
        if(cars.length > 15){
            let ul = document.createElement('ul')
            ul.classList.add('useful-info-list')
            let arrow = document.createElement('span')
            let arrow2 = document.createElement('span')
            arrow.classList.add('arrow-prev')
            arrow2.classList.add('arrow-next')
            arrow.textContent = '<'
            arrow2.textContent = '>'
            // следующие функции - моё улучшение функционала и макета
            let first = document.createElement('span')
            let last = document.createElement('span')
            first.classList.add('arrow-first')
            last.classList.add('arrow-last')
            first.textContent = '<<'
            last.textContent = '>>'
            // 

            for(let x=1; x <= Math.ceil(cars.length / 15); x++ ) {
                ul.innerHTML +=`
                <li style="cursor: pointer; display: ${x===number || x+1===number || x-1===number ? 'flex' : number===1 && x ===3 || number===Math.ceil(cars.length / 15) && x===Math.ceil(cars.length / 15)-2 ? 'flex' : 'none' }" class="useful-info-item ${x===number ? 'active' : 'none'}" data-id="${x}">${x}</li>
                `
            } 

            if(number < Math.ceil(cars.length / 15)-1){
                ul.append(arrow2)
                ul.append(last)
                arrow2.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    catalogRow.innerHTML=''
                    getAllCars(number+1);
                })

                last.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    catalogRow.innerHTML=''
                    getAllCars(Math.ceil(cars.length / 15));
                })
            }
                    
            if (number > 2){
                ul.prepend(arrow)
                ul.prepend(first)
                arrow.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    catalogRow.innerHTML=''
                    getAllCars(number-1);
                })

                first.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    catalogRow.innerHTML=''
                    getAllCars(1);
                })
            }

            catalogRow.after(ul)
        }
        let allLi = document.querySelectorAll('.useful-info-item')
        allLi.forEach((item)=>{
            item.addEventListener('click', ()=>{
                document.querySelector('.useful-info-list').innerHTML=''
                catalogRow.innerHTML=''
                getAllCars(+item.dataset.id);
            })
        })
        
        // получаем кнопки изменить
        let updateBtn = document.querySelectorAll('.car__btn-update');

        // Создание формы Изменить
        updateBtn.forEach((btn)=>{
            btn.addEventListener('click', ()=> {
                // меняем кнопки на - Изменить и отображаем модальное окно
                formBtn.textContent = 'Изменить';
                overlay.style.display = 'flex';

                // получаем из fetch данные на текущий автомобиль и выводим их в соотвествующее поля
				// включая скрытое поле id
                // взятие данных из хранилища, как Обещание (демонстрационная версия)
                Promise.resolve(JSON.parse(localStorage.getItem('cars'))[btn.dataset.id - 1])// с хранилищем работает по индексу, а не id
                // fetch(`http://localhost:3000/cars/${btn.dataset.id}`)
                // .then(res => res.json())
                .then((item) => {
                    document.getElementById('title').value = item.title;
                    document.getElementById('image').value=item.image;
                    document.getElementById('drive').value=item.drive;
                    document.getElementById('reserve').value=item.reserve
                    document.getElementById('mileage').value=item.mileage;
                    document.getElementById('year').value=item.year;
                    document.getElementById('price').value=item.price;
                    document.getElementById('id').value=item.id 
                })
   
            })
               
        })


        // Получаем все кнопки удалить авто
        let deleteBtn = document.querySelectorAll('.car__btn-delete');
        // Перебираем их
        deleteBtn.forEach((btn)=>{
            // У кнопки, чье событие будет 'click', делаем запрос в БД по id на удаление
            btn.addEventListener('click', ()=>{
                // Удаление из localStorage (Демонстрационная версия)
                let id = btn.dataset.id;
                cars = cars.filter(x => x.id != id);
                // Обновление индексов оставшихся карточек
                cars.forEach((car, index) => {
                    car.id = index + 1;
                  });
                localStorage.setItem('cars', JSON.stringify(cars));
                
                location.reload()
                               
                // fetch(`http://localhost:3000/cars/${btn.dataset.id}`, {
                //     method: 'DELETE'
                // })
                // .then(()=>{
                //     // очищаем элемент, где выводим БД 
                //     catalogRow.innerHTML = '';
                //     // снова заполняем элемент
                //     getAllCars(1)
                // })
            })
        })
    })
    
};

// Вызываем функцию
getAllCars(1);

// На событие отправки формы (submit) вызываем callback функцию, которое принимает событие e (Event)
addForm.addEventListener('submit', (e)=>{
    // предотвращаем обновление формы
    e.preventDefault();
    cars = JSON.parse(localStorage.getItem('cars'))
    if(formBtn.textContent === 'Изменить') {
        // Демонстрационная версия
        let id = e.target[7].value;
        let index = cars.findIndex(x => x.id == id);
        if (index > -1) {
            cars[index] = {
                "title": e.target[0].value,
                "drive": e.target[2].value,
                "reserve": e.target[3].value,
                "mileage": e.target[4].value,
                "year": e.target[5].value,
                "price": e.target[6].value,
                "image": e.target[1].value,
                "id": e.target[7].value,
            };
            localStorage.setItem('cars', JSON.stringify(cars));
            overlay.style.display = 'none'
            location.reload()
        }
		// создаем fetch запрос на изменение
        // fetch(`http://localhost:3000/cars/${e.target[7].value}`, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': "application/json; charset=UTF-8"
        //     },
        //     method: 'PATCH',
        //     body: JSON.stringify({
        //         "title": e.target[0].value,
        //         "drive": e.target[2].value,
        //         "reserve": e.target[3].value,
        //         "mileage": e.target[4].value,
        //         "year": e.target[5].value,
        //         "price": e.target[6].value,
        //         "image": e.target[1].value
        //     })
        // }).then(()=>{
        //     overlay.style.display = 'none'
        //     location.reload()
        // })
    } else {
        let newCar = {
            "title": e.target[0].value,
            "drive": e.target[2].value,
            "reserve": e.target[3].value,
            "mileage": e.target[4].value,
            "year": e.target[5].value,
            "price": e.target[6].value,
            "image": e.target[1].value,
            "id": cars.length + 1,
        };
        cars.push(newCar);
        localStorage.setItem('cars', JSON.stringify(cars));
        overlay.style.display = 'none'
        location.reload()
        // отправляем запрос в БД на запись (Post) нового объекта, события e имеет target, где у каждого индекса формы из свое значение (value)
        // fetch('http://localhost:3000/cars/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': "application/json"
        //     },
            
        //     body: JSON.stringify({
                
        //         "title": e.target[0].value,
        //         "drive": e.target[2].value,
        //         "reserve": e.target[3].value,
        //         "mileage": e.target[4].value,
        //         "year": e.target[5].value,
        //         "price": e.target[6].value,
        //         "image": e.target[1].value
        //     })
        // }).then(()=>{
        //     overlay.style.display = 'none'
        //     location.reload()
        // })
    }

});

// При нажатии на кнопку "Добавить автомобиль", делаем блок "overlay" видимым
// если клик был по кнопке Добавить информацию, то текст в кнопке отправки формы меняется на Добавить
let formBtn = document.querySelector('.catalog-form-btn');
addBtn.addEventListener('click', ()=> {
    formBtn.textContent = 'Добавить'
    overlay.style.display = 'flex';
});

// При нажатии на пустое место в блоке "overlay", делаем его невидимым
overlay.addEventListener('click', (e)=> {
    // создаем условие, чтобы нажатие было в блоке "overlay", но не затрагивало область других блоков
    if(e.target.classList.contains('overlay')) {
        overlay.style.display = 'none';
        location.reload()
    }
});
