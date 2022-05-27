/* Task 4

Реализуйте следующее консольное приложение подобно примеру, 
который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые 
в розетку. Посчитайте потребляемую мощность 
(передайте аргумент). 

Таких приборов должно быть как минимум два (например, 
настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.*/

// Общий класс электроприборов

function Device(name) {
  this.name = name;
}

// Включаем и выключаем электроприборы в родительском классе

Device.prototype.getStatus = function () {
  this.status = +prompt(`Enter ${this.name} status \n On - 1 \n Off - 0`);
};

// Создаем подкласс электроприборов по расположению

function DeviceLocation(name, location) {
  this.name = name;
  this.location = location;
}

// Создаем делегирующую связь между классом Электроприборов
// и Электроприборами в конкретном расположении,
// чтобы включать и выключать приборы через родительский
// класс.

DeviceLocation.prototype = new Device();

// Узнаем мощность прибора в подклассе

DeviceLocation.prototype.getPower = function (power) {
  this.power = power;
};

const fridge = new DeviceLocation("Fridge", "kitchen");
const tvSet = new DeviceLocation("TVset", "kitchen");
const desckLamp = new DeviceLocation("Desck lamp", "office");
const computer = new DeviceLocation("Computer", "office");

fridge.getPower(100);
tvSet.getPower(90);
desckLamp.getPower(10);
computer.getPower(60);

fridge.getStatus();
tvSet.getStatus();
desckLamp.getStatus();
computer.getStatus();

let totalPower =
  fridge.power * fridge.status +
  tvSet.power * tvSet.status +
  desckLamp.power * desckLamp.status +
  computer.power * computer.status;

console.log(fridge, tvSet, desckLamp, computer);
console.log(`Total electrical power is ${totalPower} W`);
