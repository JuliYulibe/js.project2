//Добавим изобрпжение комнаты в основной блок, в тег style, как свойство background-img
// Шаг 1  Получить элемент которому будем добавлять фоновое изображение
let room = document.querySelector('.room');
//Шаг 2 Добавить свойство background-image в элемент room

room.setAttribute("style", "background-image: url('./img/rooms/1.jpeg')");

//Задача 2 заполнить селектор на форме изоюражениями
//и сделать так, чтобы при нажатии на изображение, оно заполняло основное
//Шаг 1 Создадим массив со списком путей до изображения комнат
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

//Шаг 2. Перебрать массив с изоброажениями комнат,
//При помощи конструкцми forEach

arrayRoomsImg.forEach(function(pathToImg){

//Заполним в цикле, контейнер с типами комнат
//с ссылками с изображениями

//Создаем элемент ссылки
let link = document.createElement('a');
//Добавили класс ссылке
link.classList.add('option-item');
//Добавим data атрибут link
link.setAttribute('data-link', pathToImg)
//Добавить data атрибут type
link.setAttribute('data-type', room)
//Добавим изображение в блок
link.setAttribute("style", `background-image: url('${pathToImg}')`);
//Добавить событие клика

link.onclick = function(){
   
    
   
    //Установить новое изображение
    room.setAttribute("style", `background-image: url('${pathToImg}')`)

}
//Получить элемент в которой добавляем ссылки
let containerRoomSelector = document.querySelector('.btn-container__change-room');
//Добавляем созданную ссылку в полученный элемент
containerRoomSelector.appendChild(link);
})





    


