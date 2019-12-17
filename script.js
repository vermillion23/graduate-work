async function send () {
    event.preventDefault();
// Функция должна записывать данные ввода в базу данных в формате JSON? 
// и редиректить на главную
// должна включать проверки данных на клиенте
    let result = await fetch("server.js"), { method: "POST", body: new FormData(document.forms[0]) });

// Нужно ли использовать ajax для сохранения данных пользователя в базе данных?

}