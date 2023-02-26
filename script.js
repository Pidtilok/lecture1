const ITCompany = {
  id: 12332129,
  сompanyName: 'Playtika',
  type: 'product',
  vacancies: [
      {
          frontEnd: {
              salary: 1200
          },
      },
      {
          backEnd: {
              salary: 1500
          },
      },
      {
          scramMaster: {
              salary: 500
          },
      },
      {
          tester: {
              salary: 600
          },
      }
  ]
}

const workerName = prompt("Enter employee's name:");
const positionName = prompt("Enter employee's position:");
const salary = prompt("Enter employee's salary:");

function findWorker(workerName, positionName, salary) {
let vacancyFound;
for (let i = 0; i < ITCompany.vacancies.length; i++) {
const vacancy = ITCompany.vacancies[i];
if (vacancy[positionName] && vacancy[positionName].salary >= salary) {
vacancyFound = true;
break;
}
}

if (vacancyFound) {
const newWorker = Object.create(ITCompany);
newWorker.workerName = workerName;
newWorker.positionName = positionName;
newWorker.salary = salary;

newWorker.greeting = function() {
document.write(`Hello, my name is ${this.workerName}, I'm ${this.positionName} in ${this.сompanyName}.`);
}
newWorker.greeting();
} else {
document.write(`${workerName}, you have significant skills at ${positionName}, but we hired another developer. Let's keep in touch!`);
}
}
findWorker(workerName, positionName, salary);