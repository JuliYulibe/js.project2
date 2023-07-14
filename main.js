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

//Реализация

let beds = document.getElementsByClassName('btn-container__change-bed');

//Шаг2

let pathToBedImg = new Array (
"./img/bad/1.png",
"./img/bad/2.png",
"./img/bad/3.png",
);

//Промежуточный шаг

function render(){
    //Через объект
    let link = event.target.dataset.link
    //alert('Hello renderBed')
    //Получим через дата атрибут, тип фильтра, в который добавляет картинки
    let type = event.target.dataset.type
    //Получить элемент
    let bedBlock = document.querySelector(`.room__${type}`);
    //Установить
    bedBlock.style.backgroundImage = `url('${link}')`;
}


//Шаг 3

for(let i = 0; i < pathToBedImg.length; i++) {
    console.log('Итерация номер = ' + i);

//Получаем
console.log('Полученный путь в массиве pathToBedImg:' + pathToBedImg[i]);

//Создадим элемент

let linkBed =`
    <a

        class="option-item"
        data-link="${pathToBedImg[i]}"
        data-type="bed"
        style="background-image: url(${pathToBedImg[i]})"
        onclick="render()">

     </a>
     `;

     console.log(linkBed);


     //Добавить

     beds[0].innerHTML += linkBed;





}






//Шаг 1

let lamps = document.getElementsByClassName('btn-container__change-lamp');

//Шаг2

let pathToLampImg = new Array (
"./img/lamp/1.png",
"./img/lamp/2.png",
"./img/lamp/3.png",
"./img/lamp/4.png",
);




//Шаг 3

for(let i = 0; i < pathToLampImg.length; i++) {
    console.log('Итерация номер = ' + i);

//Получаем
console.log('Полученный путь в массиве pathToLampImg:' + pathToLampImg[i]);

//Создадим элемент

let linkLamp =`
    <a

        class="option-item"
        data-link="${pathToLampImg[i]}"
        data-type="lamp"
        style="background-image: url(${pathToLampImg[i]})"
        onclick="render()">

     </a>
     `;

     console.log(linkLamp);


     //Добавить

     lamps[0].innerHTML += linkLamp;

} 


// Фильтр для добавления шкафов на верстку
// Получить элемент

const changeCabinet = document.querySelector("section.btn-container__change-cabinet");

//Завести массив с изображениями

let arrayCabinet = [];

//Добавляем (пушим)
arrayCabinet.push("./img/cabinet/1.png");
arrayCabinet.push("./img/cabinet/2.png");
console.log(arrayCabinet);// 


//Переберем
// 

for(let cabinet of arrayCabinet) {
    console.log(cabinet);
    let linkCabinet = `
    <a

        class="option-item"
        data-link="${cabinet}"
        data-type="cabinet"
        style="background-image: url(${cabinet})"
        onclick="render()">

     </a>
    
    `;

    //Добпвляем ссылку в фильтр
    changeCabinet.innerHTML += linkCabinet;


}

// Фильтр для добавления плаката на верстку
// Получить элемент

const changePic = document.querySelector("section.btn-container__change-pic");

//Завести массив с изображениями

let arrayPic = [];

//Добавляем (пушим)
arrayPic.push("./img/pic/1.jpeg");
arrayPic.push("./img/pic/2.jpeg");
console.log(arrayPic);// 


//Переберем
// 

for(let pic of arrayPic) {
    console.log(pic);
    let linkPic = `
    <a

        class="option-item"
        data-link="${pic}"
        data-type="pic"
        style="background-image: url(${pic})"
        onclick="render()">

     </a>
    
    `;

    //Добпвляем ссылку в фильтр
    changePic.innerHTML += linkPic;


}









    


