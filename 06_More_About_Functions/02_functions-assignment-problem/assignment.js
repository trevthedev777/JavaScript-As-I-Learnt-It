const sayHello = name => console.log('Hi ' + name);
const sayHello2 = (str, name) => console.log(str+ ' ' + name);
const sayHello3 = () => console.log('Hi Hard-Coded');
const sayHello4 = name => 'Hi ' + name;

sayHello('Trevor');
sayHello2('Hello from sayHello2 ', 'Trevor')
sayHello3();
console.log(sayHello4('Trevor'));

const sayHello5 = (name, str = 'Hi from sayHello5()') => console.log(str + ' ' + name);

sayHello5('Trevor');
sayHello5('Trevor', 'You are the greatest');


// callback function

const checkInput = (callBack, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    callBack('This is the callBack');
  }
}

checkInput(() => {
  console.log('All Not Empty!')
},
  'Hello',
  '12',
  'adfsd',
  'ddd'
);