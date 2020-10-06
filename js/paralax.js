//import Elemento from '/js/class/elemento.js'
function preload() {
    assets = '/assets/';
    fondo_imagen = loadImage(assets + 'fondo2.jpg');
    telas = loadImage(assets + 'Rubros/telas.jpg');
    tejidos = loadImage(assets + 'Rubros/tejidos.jpg');
    vitrofusion = loadImage(assets + 'Rubros/vitrofusion.jpg');
    herreria = loadImage(assets + 'Rubros/herreria.jpg');
    lata = loadImage(assets + 'Rubros/lata.jpg');
    juegos = loadImage(assets + 'Rubros/juegos y juguetes.jpg')
}






function setup() {

    createCanvas(windowWidth, windowHeight);
    posm = {
        x: mouseX,
        y: mouseY,
    }

    textAlign(CENTER, CENTER);
    textSize(16);
    //console.log(rubros);
    fondo = new Elemento(0, 0, fondo_imagen);
    //Solo para testeo, forzamos rubros y tiendas, estos deben ser llamados desde la base para la vercion final
    rubro = ""
    rubros = Array(

        new Rubro(100, 100, herreria, 200, "Herreria"),
        new Rubro(300, 300, herreria, 200, "Tejidos"),
        new Rubro(500, 500, herreria, 200, "Juguetes")

    );
    tiendas = {
        "Herreria" : Array("a", "b", "c"),
        "Tejidos" : Array("d", "f", "c"),
        "Juguetes" : Array("e", "b", "c"),
    };
    console.log(tiendas)
    tiendas_rubro = {}
    for(var key in tiendas){
        var element = tiendas[key]
        console.log(key);
        console.log(element);
       let lista = Array();
       for (let index = 0; index < element.length; index++) {
           const descripcion = element[index];
           lista.push(new Tienda(random(windowWidth - 200),random(windowHeight - 200),telas, 200 , descripcion))
           
       }
       tiendas_rubro[key] = lista;

    }

    console.log(tiendas_rubro)
}

function draw() {
    background(220);

    //Fondo

    fill(0, 255, 0)
    image(fondo.img, fondo.x, fondo.y, windowWidth, windowHeight);
    //fondo.movimiento(posm, mouseX, mouseY)
    if (rubro != "") {
        //console.log(tiendas_rubro[rubro]);
        for (let index = 0; index < tiendas_rubro[rubro].length; index++) {
            const element = tiendas_rubro[rubro][index];
            element.mostrar(posm);

            
        }
        //rubro = ""
    }
    else {
        for (index = 0; index < rubros.length; ++index) {
            let elemento = rubros[index]
            fill(0, 0, 255);

            elemento.mostrar(posm);
            if (elemento.clicked()) {
                rubro = elemento.descripcion;
            }


        }
    }



    posm.x = mouseX
    posm.y = mouseY

}