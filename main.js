//Задача 1. Добавим изображение комнаты в основной блок, в тег style, как свойство background-img
//Шаг 1 Получить элмент, которому мы будем добавлять фоновое изображение и положили в переменную
let room = document.querySelector('.room');
//Шаг 2 Добавить свойсто background-img в элемент room
room.setAttribute("style", "background-image: url('./img/rooms/1.jpeg')");

// Задача 2 заполнить селектор на форме изображениями 
// и сделать так, чтобы при нажатии на изоюражение, 
// оно заменяло основное
//Шаг 1 Создадим массив со списком путей до изображений комнат
let arrayRoomsImg = [
    './img/rooms/1.jpeg',
    './img/rooms/2.jpeg',
    './img/rooms/3.jpeg',
    './img/rooms/4.jpeg',
    './img/rooms/5.jpeg',
    './img/rooms/6.jpeg',
    './img/rooms/7.jpeg',
    './img/rooms/8.jpeg',
    './img/rooms/9.jpeg',
];
//Шаг 2. Перебрать массив с изображениями комнат, 
// При помоши конструкции forEach
arrayRoomsImg.forEach(function(pathToImg){
    //Заполним в цикле, контейнер с типами комнат 
    //с ссылками с изобажениями
    // Создаем элемент ссылки
    let link = document.createElement('a');
    //Добавили класс ссылке
    link.classList.add('option-item');
    // Добавим data атрибут link
    link.setAttribute('data-link', pathToImg)
    // Добавить data атрибут type
    link.setAttribute('data-type', 'room');
    // Добавим изображение в блок
    link.setAttribute("style", `background-image: url('${pathToImg}')`);
    //Добавить событие слика
    // Альтернативный подход - https://doka.guide/js/element-click/
    link.onclick = function(){
        //Установить новое изображение
        room.setAttribute("style", `background-image: url('${pathToImg}')`);
    }
    // Получить элемент в который добавляем ссылки
    let containerRoomSelector = document.querySelector('.btn-container__change-room');
    // Добавляем созданную ссылку в полученый элемент
    containerRoomSelector.appendChild(link);
})

//Реализация фильтра для моделирования кроватей в приложении
// Шаг 1 Получим элемент на верстке в который мы будем генерировать наш фильтр с выбором кровати
let beds = document.getElementsByClassName('btn-container__change-bed');
// Шаг 2 Завести массив с путями к изображениям
let pathToBedImg = new Array(
    "./img/bed/1.png", 
    "./img/bed/2.png", 
    "./img/bed/3.png"
);
// Промежуточный шаг. Написание функции клика для отрисовки кровати на основном экране
function render(){
    //Через объект event получили ссылку на нужную кровать (по которой кликнули)
    let link = event.target.dataset.link
    //Получим через дата атрибут, тип фильтра, в который добавляет картинки
    let type = event.target.dataset.type
    // Получить элемент в который мы перемещаем, выбранную картинку
    let bedBlock = document.querySelector(`.room__${type}`);
    // Установить картинку в полученном элементе
    bedBlock.style.backgroundImage = `url('${link}')`;

}
// Шаг 3 Переберем массив с путями к изображениям кроватей c помощью for
for(let i = 0; i < pathToBedImg.length; i++) {
    console.log('Итерация номер = ' + i);
    //Получаем перебираемый путь внутри for
    console.log('Полученый путь в массиве pathToBedImg: ' + pathToBedImg[i]);
    //Создадим элемент с помощью шаблонной строки строки
    let linkBed = `
        <a 
            class="option-item" 
            data-link="${pathToBedImg[i]}" 
            data-type="bed" 
            style="background-image: url(${pathToBedImg[i]});"
            onClick="render()"
        >
        </a>
    `;
    console.log(linkBed);
    //Добавить созданную ссылку c помощью innerHTML
    beds[0].innerHTML += linkBed;
}

// Фильтр для добавления шкафов на верстку

//Получи элемент, в котором будет распологатся фильт
let changeCabinet = document.querySelector("section.btn-container__change-cabinet");

//Завести массив с изображениями
let arrayCabinet = [];
//Добавляем (пушим) значение (пути к картинкам в массив)
arrayCabinet.push("./img/cabinet/1.png");
arrayCabinet.push("./img/cabinet/2.png");
console.log(arrayCabinet);

// Переберем созданный массив с помощью цикла for of
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
for(let cabinet of arrayCabinet) {
    //Перебираемый элемент
    console.log(cabinet);
    let linkCabinet = `
        <a 
            class="option-item" 
            data-link="${cabinet}" 
            data-type="cabinet" 
            style="background-image: url(${cabinet});"
            onClick="render()"
        >
        </a>
    `;
    //Добавим ссылку в фильтр
    changeCabinet.innerHTML += linkCabinet;
}

//Блок с передвижением элементоа

//Получить селект, который выбирает, какой элемент будет перемещатся
let containerMove = document.querySelector('.btn-container__move');
let elementMove;
//установить событие, которое будет отлавливать изменение селектора и заставлять отрпбатывать опеределенную функцию
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
containerMove.addEventListener('change', function(event){
    console.log('Элемент изменился',event.target.value)
    //Получили элемент по нэйму и записали в переменную выше для передачи в соседнюю функцию
    elementMove = `.room__${event.target.value}`;
    
})

//ДЗ оптиизировать функцию, чтобы было меньше строчек кода
function move(toMoveElement){
    let element = document.querySelector(elementMove);
    console.log('Двигаем элемент', element.style.bottom);
    let nowPoints 

    switch(toMoveElement) {
        case 'top': 
            if (element.style.bottom) {
                nowPoints = parseInt(element.style.bottom) + 5;
                console.log('nowPoints', nowPoints);
            } else {
                nowPoints = 0;
            }
            element.style.bottom = nowPoints + 'px'; 
        break;
        case 'bottom':
            if (element.style.bottom) {
                nowPoints = parseInt(element.style.bottom) - 5;
                console.log('nowPoints', nowPoints);
            } else {
                nowPoints = 0;
            }
            element.style.bottom = nowPoints + 'px'; 
        break;   
        case 'left':
            if (element.style.left) {
                nowPoints = parseInt(element.style.left) - 5;
                console.log('nowPoints', nowPoints);
            } else {
                nowPoints = 0;
            }
            element.style.left = nowPoints + 'px'; 
        break;
        case 'right':
            if (element.style.left) {
                nowPoints = parseInt(element.style.left) + 5;
                console.log('nowPoints', nowPoints);
            } else {
                nowPoints = 0;
            }
            element.style.left = nowPoints + 'px'; 
        break; 
    }
    
}