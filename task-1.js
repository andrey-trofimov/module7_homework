/* Task 1

Написать, функцию, которая принимает в качестве 
аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

const aircraft = {
  type: "C172",
  engine: "IO-360",
  range: "560 nm",
  speed: "120 IAS",
  POB: 4,
};

function printAircraftSpecification(userObject) {
  for (let key in userObject) {
    if (userObject.hasOwnProperty(key)) {
      console.log(`${key}: ${userObject[key]}`);
    }
  }
}

printAircraftSpecification(aircraft);
