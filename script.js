publicadores1 = ["Alex",
    "Shelien",
    "Paul",
    "Miriam",
    "Jorge",
    "Lidia",
    "Marcel",
    "Kimberly",
    "Héctor",
    "Eunice",
    "Ibert",
    "Nelian",
    "Stelana",
    "Gardy",
    "Patricia",
    "Regina",
    "Sarai",
    "Samuel",
    "Verónica",
    "Felipe",
    "Camila"]

m2 = [
    { nombre: 'Alex', genero:'Grupo1' },
    { nombre: 'Shelien', genero: 'Grupo2' },
    { nombre: 'Paul', genero:'Grupo1' },
    { nombre: 'Miriam', genero: 'Grupo2' },
    { nombre: 'Jorge', genero:'Grupo1' },
    { nombre: 'Lidia', genero: 'Grupo2' },
    { nombre: 'Marcel', genero:'Grupo1' },
    { nombre: 'Kimberly', genero: 'Grupo2' },
    { nombre: 'Héctor', genero:'Grupo1' },
    { nombre: 'Eunice', genero: 'Grupo2' },
    { nombre: 'Ibert', genero:'Grupo1' },
    { nombre: 'Neliane', genero: 'Grupo2' },
    { nombre: 'Stelana', genero: 'Grupo2' },
    { nombre: 'Gardy', genero:'Grupo1' },
    { nombre: 'Patricia', genero: 'Grupo2' },
    { nombre: 'Regina', genero: 'Grupo2' },
    { nombre: 'Sarai', genero: 'Grupo2' },
    { nombre: 'Samuel', genero:'Grupo1' },
    { nombre: 'Verónica', genero: 'Grupo2' },
    { nombre: 'Felipe', genero:'Grupo1' },
    { nombre: 'Camila', genero: 'Grupo2' }
]




telefonos = [56930883133, 56995749118, 56992465822, 56995605320, 56998707098, 56962191371, 56954134803, 56957138500, 56987618395, 56941220909,
    56930001524, 56945916792, 56986709359, 56988493154, 56974610443, 56994463984, 56986801268, 56968226567, 56963045263, 56995454612, 56981312487]


var arr = (publicadores1) => {
    let m1 = [];
    for (let i = 0; i < publicadores1.length; i++) {
        m1.push({ nombre: publicadores1[i].nombre, genero: publicadores1[i].genero, telefono: telefonos[i] })

    } return m1
}

console.log(arr(m2))


console.log(arr(publicadores1))









finalwhat = [
    { nombre: 'Alex', genero:'Grupo1', telefono: 56930883133 },
    { nombre: 'Shelien', genero: 'Grupo2', telefono: 56995749118 },
    { nombre: 'Paul', genero:'Grupo1', telefono: 56992465822 },
    { nombre: 'Miriam', genero: 'Grupo2', telefono: 56995605320 },
    { nombre: 'Jorge', genero:'Grupo1', telefono: 56998707098 },
    { nombre: 'Lidia', genero: 'Grupo2', telefono: 56962191371 },
    { nombre: 'Marcel', genero:'Grupo1', telefono: 56954134803 },
    { nombre: 'Kimberly', genero: 'Grupo2', telefono: 56957138500 },
    { nombre: 'Héctor', genero:'Grupo1', telefono: 56987618395 },
    { nombre: 'Eunice', genero: 'Grupo2', telefono: 56941220909 },
    { nombre: 'Ibert', genero:'Grupo1', telefono: 56930001524 },
    { nombre: 'Neliane', genero: 'Grupo2', telefono: 56945916792 },
    { nombre: 'Stelana', genero: 'Grupo2', telefono: 56986709359 },
    { nombre: 'Gardy', genero:'Grupo1', telefono: 56988493154 },
    { nombre: 'Patricia', genero: 'Grupo2', telefono: 56974610443 },
    { nombre: 'Regina', genero: 'Grupo2', telefono: 56994463984 },
    { nombre: 'Sarai', genero: 'Grupo2', telefono: 56986801268 },
    { nombre: 'Samuel', genero:'Grupo1', telefono: 56968226567 },
    { nombre: 'Verónica', genero: 'Grupo2', telefono: 56963045263 },
    { nombre: 'Felipe', genero:'Grupo1', telefono: 56995454612 },
    { nombre: 'Camila', genero: 'Grupo2', telefono: 56981312487 }
]

let salida = [];
finalwhat.forEach(element => {
    salida += `<li>${element.nombre}: ${element.genero}</li>
    `
});
document.getElementById('tabla').innerHTML = salida;

let btn = document.getElementById('boton');
btn.addEventListener('click',()=> {
    let mensaje1 = document.getElementById('texto1').value
    let mensaje2 = document.getElementById('texto2').value
    
for (let i = 0; i < finalwhat.length; i++) {
    if (finalwhat[i].genero =='Grupo1') {
        document.getElementById('alex').innerHTML += `<a rel="stylesheet" href="https://api.whatsapp.com/send?phone=${finalwhat[i].telefono}&text=Hola ${finalwhat[i].nombre}, ${mensaje1}?&source=&data=">${finalwhat[i].nombre}</a><br>`
    }
    else {
        document.getElementById('alex').innerHTML += `<a rel="stylesheet" href="https://api.whatsapp.com/send?phone=${finalwhat[i].telefono}&text=Hola ${finalwhat[i].nombre}, ${mensaje2}?&source=&data=">${finalwhat[i].nombre}</a><br>`
    }
}

})


