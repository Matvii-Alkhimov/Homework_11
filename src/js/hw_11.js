// 1

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Number(ms)) {
                resolve(`Вирішено після ${ms}ms`);
            } else {
                reject('Помилка');
            }
        }, ms) 
    });
};
     
delay(2000)
.then((success)=> console.log(success))
.catch((error) => console.log(error))

delay(1000)
.then((success)=> console.log(success))
.catch((error) => console.log(error))

delay(1500)
.then((success)=> console.log(success))
.catch((error) => console.log(error))

delay('a')
.then((success)=> console.log(success))
.catch((error) => console.log(error))

// 2
 
const users = [
{ name: 'Mango', active: true },
{ name: 'Poly', active: false },
{ name: 'Ajax', active: true },
{ name: 'Lux', active: false },
];
console.log(users) 
const toggleUserState = (allUsers, userName) => {

    return new Promise((resolve) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers);
    })
 
};
 
const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

// 3

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
     
const makeTransaction = (transaction) => {
     
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
            resolve(`Транзакція ${transaction.id} оброблена за ${delay}ms`)
            } else {
            reject(`Помилка обробки транзакції ${transaction.id}. Спробуйте пізніше.`)
            }
        }, delay);
    })
     
};
     
makeTransaction({ id: 70, summary: 150 }).then((logSuccess)=>console.log(logSuccess)).catch((logError)=>console.log(logError));
 
makeTransaction({ id: 71, summary: 230 }).then((logSuccess)=>console.log(logSuccess)).catch((logError)=>console.log(logError));
 
makeTransaction({ id: 72, summary: 75 }).then((logSuccess)=>console.log(logSuccess)).catch((logError)=>console.log(logError));
 
makeTransaction({ id: 73, summary: 100 }).then((logSuccess)=>console.log(logSuccess)).catch((logError)=>console.log(logError));