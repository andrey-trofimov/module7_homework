/* Task 5
Переписать консольное приложение 
из предыдущего юнита на классы:

Реализуйте следующее консольное приложение подобно примеру, 
который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые 
в розетку. Посчитайте потребляемую мощность 
(передайте аргумент). 

Таких приборов должно быть как минимум два (например, 
настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.*/

// Общий класс электроприборов

class Device {
  constructor(name) {
    this.name = name;
  }

  getStatus() {
    this.status = +prompt(`Enter ${this.name} status: On - 1, Off - 0`);
  }
}

// Создаём подкласс электроприборов по расположению
// Узнаём мощность прибора в подклассе

class DeviceLocation extends Device {
  constructor(name, location) {
    super(name);
    this.location = location;
  }

  getPower = function (power) {
    this.power = power;
  };
}

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
