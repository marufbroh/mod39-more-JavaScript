function a() {
    console.log('a')
    b();
    console.log('aa')
}

function b() {
    console.log('b')
    c()
    console.log('bb')
}

setTimeout(() => {
    console.log('dekhi tmi fetch er agee nki pore')
},2000)

function c() {
    console.log('c')
    console.log('cc')
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

a()