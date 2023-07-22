//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.querySelector('p');

function makeZero() {
	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
}

document.querySelector('.b-0').onclick = makeZero;

//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

function makeOne() {
	const practicum = document.getElementById('practicum');
	practicum.innerText = 'Привет!';
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

function makeTwo() {
	const span = document.getElementById('practicum2');
  span.innerText = 'Привет, Мир!';
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

function makeThree() {
	const h1 = document.querySelector('#practicum3');
	h1.innerText = 'Заголовок изменен!';
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeFour() {
	const div = document.querySelector('#practicum4');
    div.style.backgroundColor = 'red';
}

document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

function makeFive() {
	const input = document.getElementById('practicum5');
    input.value = 'Новое значение';
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
	let img = document.getElementById('practicum6');
	img.src = 'assets/images/newimage.jpg';
	img.alt = 'Новое изображение';
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

function makeSeven() {
	let link = document.querySelector('#practicum7');
    link.href = 'https://www.google.com';
    link.textContent = 'Ссылка на Google';
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
    let list = document.getElementById('practicum8'); // Нашла элемент <ul>
    
    let newItem = document.createElement('li'); // Создала новый элемент <li>
    newItem.textContent = 'Новый элемент'; // Добавила значение в созданный элемент <li>
    
    list.appendChild(newItem); // Добавила новый элемент <li> в список <ul>
}

document.querySelector('.b-8').onclick = makeEight;
 
//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
	let select = document.getElementById('practicum9'); //Нашла элемент
	let newOption = document.createElement('option'); //Создала новый элемент
	newOption.textContent = 'Новый вариант'; //Добавила текст в созданный эелемент
	select.appendChild(newOption); //Добавила новый элемент в выпадающий список
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

function makeTen() {
	let div = document.getElementById('practicum10'); // Нашла элемент <div>
    div.style.display = 'none'; // Изменила стиль элемента на "display: none;"
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeEleven() {
	let div = document.getElementById('practicum11'); // Нашла элемент <div>
    div.style.width = '400px'; // Изменила ширину элемента на 400px
    div.style.height = '200px'; // Изменила высоту элемента на 200px
}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

function makeTwelve() {
    let div = document.querySelector('#practicum12'); // Нашла элемент <div> с помощью querySelector
    div.classList.toggle('large'); // Добавила/удалила класс 'large', который изменяет размеры элемента
}

//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
    let olList = document.getElementsByTagName('ol'); // Нашла все элементы <ol>
    let firstOl = olList[0]; // Обратилась к первому элементу <ol>
    firstOl.innerText = 'Первый!'; // Изменила текст первого элемента <ol>
}

document.querySelector('.b-13').onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
	const paragraphs = document.querySelectorAll('p'); //Нашла все элементы <p>
	
    paragraphs.forEach(function(paragraph) {
        paragraph.innerText = 'Огого, что могу!'; // Изменила текстовое содержимое каждого элемента <p>
    });
}

document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

function makeFifteen() {
	let div = document.getElementById('practicum15'); // Наikf элемент <div> по идентификатору
    div.classList.remove('practicum15'); // Удалила класс "practicum15" у элемента <div>
}

document.querySelector('.b-15').onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

function makeSixteen() {
	let div = document.getElementById('practicum16'); // Нашла элемент <div> по идентификатору
    div.classList.add('practicum16'); // Добавила класс "practicum16" к элементу <div>
}

document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
	let div = document.getElementById('practicum17'); // Нашла элемент <div> по идентификатору
    div.classList.toggle('color'); // Переключила класс "color" у элемента <div>
}

document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
    let div = document.getElementById('practicum18'); // Нашла элемент <div> по идентификатору
    div.classList.toggle('active'); // Переключила класс "active" у элемента <div>
}

document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
    let div = document.getElementById('practicum19'); // Нашла элемент <div> по идентификатору
    div.classList.remove('active'); // Удалила класс "active" у элемента <div>
}

document.querySelector('.b-19').onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
	let div = document.getElementById('practicum20'); // Нашла элемент <div> по идентификатору
    let newParagraph = document.createElement('p'); // Создала новый элемент <p>
    newParagraph.textContent = 'Добавлено в начало'; // Установила текст нового элемента <p>
    div.prepend(newParagraph); // Добавила новый элемент <p> в начало элемента <div>
}

document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
	let div = document.getElementById('practicum21'); // Нашла элемент <div> по идентификатору
    let newParagraph = document.createElement('p'); // Создала новый элемент <p>
    newParagraph.textContent = 'Добавлено в конец'; // Установила текст нового элемента <p>
    div.append(newParagraph); // Добавила новый элемент <p> в конец элемента <div>
}

document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
	let img = document.getElementById('practicum22'); //1 шаг: Нашла элемент
	let hasSrcAttribute = img.hasAttribute('src'); //2 шаг: Создала переменную, которая проверяет наличие атрибута у найденного элемента
	let resultElement = document.getElementById('result22'); //3 шаг: Нашла элемент, в который нужно вставить значение
    resultElement.textContent = 'Атрибут "src" присутствует: ' + hasSrcAttribute; //4 шаг: Добавила в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
}

document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
	let link = document.getElementById('practicum23'); // Нашла элемент <a> по идентификатору
	link.removeAttribute('href'); // Удалила атрибут "href"
}

document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
	let input = document.getElementById('practicum24'); // Нашла элемент <input> по идентификатору
	input.setAttribute('value', 'Новое значение'); // Установила атрибут "value"
}

document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
	let div = document.getElementById('practicum25'); //1 шаг: Нашла элемент
	div.setAttribute('data-info', 'Дополнительная информация'); //2 шаг: Добавила элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');
	let info = div.getAttribute('data-info');//3 шаг: Запишите значение атрибута в переменную
	var infoOutput = document.getElementById('infoOutput'); //4 шаг: Найшла элемент, в который нужно вставить значение из 3 шага
	infoOutput.textContent = 'Добавленный атрибут: ' + info; //5 шаг: Добавила в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
}

document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector('.b-26');
const parent = button.closest('.parent'); // const parent = Мой код;

const makeTwentySix = () => {
	parent.style.backgroundColor = 'red';
};

document.querySelector('.b-26').onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
	let div = document.getElementById('practicum27'); //Нашла переменную
	let resultElement = document.getElementById('result'); //Создала переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
	let containsHighlightClass = div.classList.contains('highlight'); //Нашла переменную, в которую нужно вывести результат
	resultElement.textContent = containsHighlightClass;//Записала результат в переменную
}

document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}

buttonTaskTwentyEight.addEventListener('click', handleClick);

//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

function handleChange() {
	console.log('Значение изменено');
}

const inputTaskTwentyNine = document.getElementById('input29');
inputTaskTwentyNine.addEventListener('change', handleChange); //Мой код

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}

const divTaskThirty = document.getElementById('div30');
divTaskThirty.addEventListener('mouseover', handleMouseOver); //Мой код
