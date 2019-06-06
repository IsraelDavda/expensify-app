const promises = new Promise((res, rej) => {
    // res('im response')
    rej('hello im reject')
})

promises.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})