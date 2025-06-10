let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
let what = ['mi tarea', 'mi teléfono', 'el carro'];
let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {

  return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}.`;
}


window.onload = function() {
  document.getElementById('excuse').innerHTML = generateExcuse();
};