let infoContent = document.querySelector('.useful-info__content');
let overlay = document.querySelector('.overlay');
let addBtn = document.querySelector('.useful-info-top-btn');
let addForm = document.querySelector('.catalog__form');

const getAllInfo = (number) => {
    fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/info.json')
    .then((response)=> response.json())
    .then((info) => {
        info.slice().reverse().filter((item, i)=> i > number * 5 - 6 && i < number * 5).forEach((item, i)=>{
        infoContent.innerHTML += `
        <div style="flex-direction: ${i%2===0 ? 'row' : 'row-reverse'}" class="useful-info__content-card">
            <img class="useful-info__content-img" src="${item.images}" alt="${item.title}">
            <div class="useful-info__content-right">
                <p class="useful-info__content-title">${item.title}</p>
                <p class="useful-info__content-info">${item.description}</p>
                <button type="button" onclick="location.href='../article/index.html?id=${item.id}'" class="useful-info__content-btn" data-id="${item.id}">Подробнее</button>
                <button type="button" class="useful-info__content-delete" data-id="${item.id}">Удалить</button>
                <button type="button" class="useful-info__content-update" data-id="${item.id}">Изменить</button>
            </div>
        </div>`
        })
        if(info.length > 5){
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

            for(let x=1; x <= Math.ceil(info.length / 5); x++ ) {
                ul.innerHTML +=`
                <li style="cursor: pointer; display: ${x===number || x+1===number || x-1===number ? 'flex' : number===1 && x ===3 || number===Math.ceil(info.length / 5) && x===Math.ceil(info.length / 5)-2 ? 'flex' : 'none' }" class="useful-info-item ${x===number ? 'active' : 'none'}" data-id="${x}">${x}</li>
                `
            } 

            if(number < Math.ceil(info.length / 5)-1){
                ul.append(arrow2)
                ul.append(last)
                arrow2.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    infoContent.innerHTML=''
                    getAllInfo(number+1);
                })

                last.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    infoContent.innerHTML=''
                    getAllInfo(Math.ceil(info.length / 5));
                })
            }
                    
            if (number > 2){
                ul.prepend(arrow)
                ul.prepend(first)
                arrow.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    infoContent.innerHTML=''
                    getAllInfo(number-1);
                })

                first.addEventListener('click', ()=>{
                    document.querySelector('.useful-info-list').innerHTML=''
                    infoContent.innerHTML=''
                    getAllInfo(1);
                })
            }

            infoContent.after(ul)
        }
        let allLi = document.querySelectorAll('.useful-info-item')
        allLi.forEach((item)=>{
            item.addEventListener('click', ()=>{
                document.querySelector('.useful-info-list').innerHTML=''
                infoContent.innerHTML=''
                getAllInfo(+item.dataset.id);
            })
        })

        let deleteBtn = document.querySelectorAll('.useful-info__content-delete');
        let updateBtn = document.querySelectorAll('.useful-info__content-update');
        // Создание формы Изменить
        updateBtn.forEach((btn)=>{
            btn.addEventListener('click', ()=> {
                let titleForm = document.getElementById('title');
                let imageForm = document.getElementById('image');
                let infoForm = document.getElementById('info');
                let idForm = document.getElementById('id');

                // если клик был по кнопке изменить, то текст в кнопке отправки формы меняется на - Изменить
                formBtn.textContent = 'Изменить';
                overlay.style.display = 'flex';
                titleForm.value = btn.parentElement.children[0].textContent;
                infoForm.value = btn.parentElement.children[1].textContent;
                idForm.value = btn.dataset.id;
                imageForm.value = btn.parentElement.previousElementSibling.getAttribute('src');
                
                
            })
               
        })
        
        // Удаление информации
        deleteBtn.forEach((btn)=>{
            btn.addEventListener('click', ()=> {
                fetch(`http://localhost:3000/info/${btn.dataset.id}`, {
                    method: 'DELETE'
                }).then(()=>{
                    location.reload()
                })
            })
        })
    })
}

getAllInfo(1);

addForm.addEventListener('submit', (e)=>{
    // предотвращаем обновление формы
    e.preventDefault();
    // проверяем условие в кнопке отправки формы, если текс - Изменить, то используем PATCH запрос
    if(formBtn.textContent === 'Изменить'){
        fetch(`http://localhost:3000/info/${e.target[3].value}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json; charset=UTF-8"
            },
            method: 'PATCH',
            body: JSON.stringify({
                "title": e.target[0].value,
                "images": e.target[1].value,
                "description": e.target[2].value
                            
            })
        }).then(( )=> {
            overlay.style.display = 'none'
            location.reload()
        })
    } else {
        // иначе, POST запрос
        fetch('http://localhost:3000/info', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "title": e.target[0].value,
                "images": e.target[1].value,
                "description": e.target[2].value
                            
            })
        }).then(()=>{
            overlay.style.display = 'none'
            location.reload()
        
        }).catch((err)=> console.log(err));
    }
        
   
});

// если клик был по кнопке Добавить информацию, то текст в кнопке отправки формы меняется на Добавить
let formBtn = document.querySelector('.catalog-form-btn');
addBtn.addEventListener('click', ()=> {
    formBtn.textContent = 'Добавить'
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e)=> {
    
    if(e.target.classList.contains('overlay')) {
        overlay.style.display = 'none';
        location.reload()
    }
});