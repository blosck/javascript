const esUnCallback = () => {
    console.log('Es un callback');
}

const contieneCallback = (a, b, callback) => {
    const ab = a + b;
    console.log( 8 * ab);
    console.log(a + b + 'concatenados');
    callback();
} 

contieneCallback(2, 6, esUnCallback)

const msj1 = (fn) => {
    setTimeout(() => {
        console.log('mensaje 1')
        fn()
    }, 3000)
    fn()
}

const msj2 = () => {
    console.log('mensaje 2');
}

msj1(msj2)