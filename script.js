/*
//Синтаксис. Создание обьектов 
let usertInfo = new Object();// синтакис "конструктор обьекта"
let usertInfo = {}; //синтаксис "литерал обьекта"

//Свойства обьектов. Ключ + значене
let usertInfo = {
    name: "Pitter", //свойство обьекта
    age: 30, //висячая запятая
};
console.log(usertInfo);//возврат рзультата всего обьекта
console.log(usertInfo.name);// возврат результат одного из свойств 

//Имена свойств
//имяиз двух и больше слов
let usertInfo = {
    name: "Pitter", 
    age: 30, 
    "likes javascript": true, //имя берется в кавычки
};
console.log(UserInfo.name);
console.log(usertInfo["likes javascript"]); //синтаксис вызова многословных свойств

//передача переменной в имя свойства блока
let firstPart = "likes javascript";
let usertInfo = {
    name: "Pitter", 
    age: 30, 
    [firstPart]: true,
};
console.log(usertInfo[firstPart]);
let key ="name";
console.log(usertInfo[key]); 

let usertInfo = {
    0: "My name is Zero",
};
console.log(usertInfo[0]);
//Вложенность
let usertInfo = {
    name: "Yuna",
    age: 28,
    address: {
        city: "Kherson",
        street: "Ivana Boguna",
    }
};
console.log(usertInfo);
console.log(usertInfo.address);
console.log(usertInfo.address.city);
console.log(usertInfo.address.street);

//Возврат(проверка) свойств блока
function makeUserInfo (name, age){
    return{
    name: name,
    age: age,
    };
}
let userInfo = makeUserInfo("Yuna", 30);
console.log(userInfo);
//Изминение свойств блока
//Добавление свойств 
let userInfo = {
    name: 'Yuna',
};
console.log(userInfo);
userInfo.age = 30;// переменная через //точку имя свойтсва и прсв значние
console.log(userInfo);
userInfo["I like JS"] = true; //в случае когда имя свойсиво из двух и больше слов
console.log(userInfo);
userInfo.address= {
    city: "Kherson",
    street: "Ivana Boguna"
};//когда нужно вложить двугой блок
console.log(userInfo);

//удаление свойств из блока
let userInfo = {
    name: 'Yuna',
    age: 28,
    "I like Js": true,
}
console.log(userInfo);
delete userInfo.age;
console.log(userInfo);
delete userInfo["I like Js"];
console.log(userInfo);
 
//изминение свойств блока
let userInfo = {
    name: 'Yuna',
    age: 28,
}
console.log(userInfo);
userInfo.age = 18;
console.log(userInfo);

let userInfo = {
    name: 'Yuna',
    age: 28,
}
//способ изминения блока
console.log(userInfo);
let user = userInfo; //копирование
console.log(user);
user.age = 18;
console.log(user);

//Дублирование обьектов 
//Синтаксис
//создает новый обьект
let userInfo = {
    name: "Yuna",
    age: 28,
} 
let user = Object.assign({}, userInfo);
user.age = 18;
console.log(userInfo);
console.log(user);

//Object.assign добавление новых свойств
let userInfo = {
    name: "Yuna",
    age: 28,
}
console.log(userInfo);
Object.assign(userInfo,{ ['I like js']: true, city: "Kherson"} );
console.log(userInfo);
//способобы проверки наличия свойства внутри блока
let userInfo = {
    name: "Yuna",
    age: 28,
}
if (userInfo.age){ //true or false
    console.log(userInfo.age);
}

//опциональная цепочка
let userInfo = {
    //name: "Yuna",
    //age: 28,
}
//console.log(userInfo.name.age);
console.log(userInfo?.name?.age); 

//приверка с помощью операторa In 
let userInfo = {
    name: undefined,
}
if ("name" in userInfo){
    console.log(userInfo);
};
 
// Цикл "for_in"

for ( let key in userInfo){
    //тело цикла выполняется для каждого свойства обьекта
}

let userInfo = {
    name: "Yuna",
    age: 28,
    address: {
        city: "Kherson",
        street: "Ivana Boguna",
    }
}
for ( let key in userInfo){
    console.log(key); //вызов имен (ключей)
    console.log(userInfo[key]); //вызов значения ключей
}
for ( let key in userInfo.address){
    console.log(userInfo.address[key]); //точный путь к инфе
};

//медоты обьекта
let userInfo = {
    name: "Yuna",
    age: 28,
    address: {
        city: "Kherson",
        street: "Mercury",
    },
    showInfo(){
        //console.log(`${userInfo}, ${userInfo.age} years old, address: city. ${userInfo.address.city}`);
        console.log(`${this.name}, ${this.age} years old, address: city. ${this.address.city}`);
        
    }
}
userInfo.showInfo(); //вызов функции, которая является методом обьекта
let user = userInfo;
userInfo = null;
console.log(user);
user.showInfo(); // не сработате изза изменненых данных 
//при использовании имени блока // использовать this
*/ 
//функция конструктор
function UserInfo (name, age) {
    // this = {}; создается обьект нeявно
    this.name = name;
    this.age = age;
    //return this  возвращает обьект неявно
}
console.log(new UserInfo('Yuna', 28));
console.log(new UserInfo ('Yunona', 18));
