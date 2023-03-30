const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

function getMoney () {
  return new Promise ((resolve, reject) => {
  const lookBalance = confirm('Подивитися баланс картки?')
  if (lookBalance){
    let currency;
    while (!userData.hasOwnProperty(currency)) {
      currency = prompt(`Введіть валюту (${Object.keys(userData).join(', ')}):`).toUpperCase();
    }
    console.log(`Баланс становить: ${userData[currency]} ${currency}`);
    resolve();
  } else {
    const availableCurrencies = Object.keys(bankData).filter(currency => bankData[currency].max > 0 && userData[currency]);
    const currency = prompt(`Введіть валюту (${availableCurrencies.join(', ')})`).toUpperCase();

    if (availableCurrencies.includes(currency)) {
      const maxWithdrawal = Math.min(bankData[currency].max);
      const withdrawalAmount = Number(prompt(`Введіть суму, не більшу за ${maxWithdrawal}`));

      if (withdrawalAmount > maxWithdrawal) {
        console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxWithdrawal} ${currency}`);
      } else if (withdrawalAmount < bankData[currency].min) {
        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currency].min} ${currency}`);
      } else {
        console.log(`От Ваші гроші ${withdrawalAmount} ${currency} ${bankData[currency].img}`);
      }
    } 
    reject();
  }
});
}
getMoney()
.then(() => console.log('Операція завершена успішно'))
.catch(() => console.log('Операція була відхилена'))
.finally(() => console.log('Дякую, гарного дня 😊'));