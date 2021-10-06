localStorage.clear();
const d = document;

///-----------------------------------------------USUARIOS
var usuarios = [
    {
        nombre:"Pedro",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        ordenes:[
            {
                nombreProducto:"Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Maria",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [
    {
        nombreCategoria:"Farmacias",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Salud",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Café",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Bebidas",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

// console.log ('Usuarios', usuarios);
// console.log ('Categorias', categorias);

localStorage.setItem('categorias', JSON.stringify(categorias));
localStorage.setItem('usuarios', JSON.stringify(usuarios));

var categorias = (JSON.parse(localStorage.getItem('categorias')));
var usuarios = (JSON.parse(localStorage.getItem('usuarios')));

console.log(categorias);
console.log(usuarios);

var select = d.getElementById('user');

for(let i = 0; i < usuarios.length ; i++){
    let newEl = d.createElement('option');
    newEl.setAttribute('value',`${usuarios[i].nombre} ${usuarios[i].apellido}`);
    newEl.innerHTML = usuarios[i].nombre + ' ' + usuarios[i].apellido;
    select.appendChild(newEl)
}


for(let i = 0; i < categorias.length ; i++){
    var cat = categorias.length;
    //console.log(`Existe ${cat} categorias`)
    var newEl = crearCat(categorias[i].color, categorias[i].icono, categorias[i].nombreCategoria, categorias[i].empresas.length,)
    //console.log(newEl);
    d.getElementById('row').appendChild(newEl);
}

for(let i = 0; i < 8-categorias.length ; i++){
    var newEl = crearCat(0, 0, 0, 0, 0)
    newEl.style.visibility = 'hidden';
    //console.log(newEl);
    d.getElementById('row').appendChild(newEl);
}

function crearOrden(titulo, descripcion, precio){
    let section = d.createElement('section')
    let h4 = d.createElement('h4');
    h4.setAttribute('id', 'tituloOrden');
    h4.innerHTML = titulo;

    let pd = d.createElement('p');
    pd.setAttribute('id', 'descipcion');
    pd.innerHTML = descripcion;

    let pp = d.createElement('p')
    pp.setAttribute('id', 'precio');
    pp.innerHTML = precio;

    section.appendChild(h4)
    section.appendChild(pd)
    section.appendChild(pp);

    return section;
}

window.onload = function(){
    
}


select.addEventListener('change', function(){
    d.getElementsByClassName('modal-body')[0].innerHTML = '';
    let nombre = this.value
    let num = nombre.indexOf(' ');
    nombre = nombre.substring(0 , num);
    d.getElementsByClassName('saludoCont')[0].children[0].innerHTML = 'Hola ' + nombre + '!';

    for(let i = 0; i < usuarios.length; i++){
        if(nombre == usuarios[i].nombre){
            for(let l = 0; l < usuarios[i].ordenes.length; l++){
                var newEl = crearOrden(usuarios[i].ordenes[l].nombreProducto, usuarios[i].ordenes[l].descripcion, usuarios[i].ordenes[l].precio)
                var newHr = d.createElement('hr')
                d.getElementsByClassName('modal-body')[0].appendChild(newEl);         
                d.getElementsByClassName('modal-body')[0].appendChild(newHr);   
            }
        }
    }
});

var rowEl = d.getElementsByClassName('catTar');

for(let i = 0; i < rowEl.length; i++){
    console.log("existen " + rowEl.length + " elementos");
    rowEl[i].addEventListener('click', function(){
        console.log('se abre')
        console.log(this.children[1].children[0].innerHTML);
    })
}

function cargarEmpresas(nombreEmpresa ,productos){
    var rest_cont = d.createElement('div')
    rest_cont.setAttribute("class", 'rest-cont');
    rest_cont.style.backgroundImage("url(./img/banner.jpg)");

    var img = d.createElement('div')
    img.setAttribute('class', 'img');

    var h3 = d.createElement('h3')
    h3.innerHTML = nombreEmpresa;

    var productos = d.createElement('div')
    productos.setAttribute('class', 'productos');

    var textoPro = d.createElement('div')
    textoPro.setAttribute('class', 'textoPro');

    rest_cont.appendChild(img);
    rest_cont.appendChild(h3);

    var h4 = d.createElement('h4')

    var button = d.createElement('button')
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModalCenter_aceptarOrden');
    button.innerHTML = 'Pedir'

    
    
    productos.appendChild(textoPro);
    
    var pDesc = d.createElement('p')
    pDesc.setAttribute('id', 'desc');
    
    var pPrecio = d.createElement('p')
    pPrecio.setAttribute('id', 'precioProd');
    
    var hr = d.createElement('hr')

    for(let i = 0; i< productos.lenght; i++){
        h4.innerHTML = productos[i].nombreProducto;
        pDesc.innerHTML = productos[i].descripcion;
        pPrecio.innerHTML = productos[i].precio;

        textoPro.appendChild(h4);
        textoPro.appendChild(button);
        textoPro.appendChild(pDesc);
        textoPro.appendChild(pPrecio);

        productos.appendChild(textoPro);
        productos.appendChild(hr);
    }

    rest_cont.appendChild(productos);

    return rest_cont;
}



function crearCat(fondo, icono, nombreCat, locales){
    
    var row = d.createElement("div");
    row.className = 'row';
    
    var catTar = d.createElement("div");
    catTar.className = 'catTar';
    
    var iconoCategoria = d.createElement("div");
    iconoCategoria.className = 'iconoCategoria';
    
    var icon = d.createElement("i");
    
    var texto = d.createElement("div");
    texto.className = 'texto';

    var nombreCategoria = d.createElement("b");
    nombreCategoria.className = 'nombreCategoria';
    
    var cantComercios = d.createElement("p");
    cantComercios.className = 'cantComercios'; 

    cantComercios.innerText = `${locales} Comercios`;
    nombreCategoria.innerHTML = `${nombreCat}`;
    texto.appendChild(nombreCategoria);
    texto.appendChild(cantComercios);
    icon.className = icono;
    iconoCategoria.appendChild(icon);
    catTar.appendChild(iconoCategoria)
    catTar.appendChild(texto);
    catTar.style.backgroundColor = fondo;

    catTar.setAttribute('data-toggle', 'modal');
    catTar.setAttribute('data-target', '#exampleModalCenter_categorias');
    return catTar;
}



