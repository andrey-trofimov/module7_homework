/* Task 2

Написать функцию, которая принимает в качестве 
аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным 
именем. Функция должна возвращать true или false. */

const aircraft = {
  type: "C172",
  engine: "IO-360",
  range: "560 nm",
  speed: "120 IAS",
  POB: 4,
};

function checkProp(prop, userObject) {
  let result = false;
  for (let key in userObject) {
    result ||= prop === key ? true : false;
  }
  return result;
}

console.log(checkProp("engine", aircraft));
