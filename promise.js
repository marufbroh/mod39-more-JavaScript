const getData = new Promise((resolve, reject) => {

    const number = Math.random() * 10
    console.log(number)
    if (number < 5) {

        resolve(56665)
    }
    else {
        reject('No data Found')
    }
})

getData
    .then(data => console.log(data + 5))
    .catch(err => console.error(err))