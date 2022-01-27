var userObj = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    age: 20,
    fullName() {
      return `${userObj.firstName} ${userObj.lastName}`;
    }
};
  
console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
};
  
console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
    return arr;
};
  
console.log(evenFn(10));


function weekFn(param) {
    let str = ''; 
    switch (param) {
      case 1:
        str = 'Понедельник';
        break;
      case 2:
        str = 'Вторник';
        break;
      case 3:
        str = 'Среда';
        break;
      case 4:
        str = 'Четверг';
        break;
      case 5:
        str = 'Пятница';
        break;
      case 6:
        str = 'Суббота';
        break;
      case 7:
        str = 'Воскресенье';
        break;
      default:
        str = null;
    }  
    return str;
};

console.log(weekFn(1));
console.log(weekFn(2)); 
console.log(weekFn(6));

function oddFn(n) {
    let i = 0;
    let arr = [];
  
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
};

console.log(evenFn(20));
console.log(evenFn(150)); 

function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
    return false;
};

function cbRandom(a1, b1) {
    return Math.floor(Math.random() * (a1 - b1 + 1)) + b1;
}

function cbPow(a2, b2) {
    return Math.pow(a2, b2);
}
  
function cbAdd(a3, b3) {
    return a3 + b3;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow)); 
console.log(mainFunc(2, 5, cbAdd));

function ageClassification(age) {
    return age > 0
      ? age > 24
        ? age > 44
          ? age > 65
            ? age > 75
              ? age > 90
                ? age > 122
                  ? null
                  : 'Долгожители'
                : 'старческий возраст'
              : 'пожилой возраст'
            : 'средний возраст'
          : 'молодой возраст'
        : 'детский возраст'
      : null;
}

console.log(ageClassification(1));
console.log(ageClassification(45));
console.log(ageClassification(77));
console.log(ageClassification(125));