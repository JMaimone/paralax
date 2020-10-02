function preload() {
    fondo_imagen = loadImage('fondo.png');
    telas = loadImage('Rubros/telas.jpg');
    tejidos = loadImage('Rubros/tejidos.jpg');
    vitrofusion = loadImage('Rubros/vitrofusion.jpg');
    herreria = loadImage('Rubros/herreria.jpg');
    lata = loadImage('Rubros/lata.jpg');
    juegos = loadImage('Rubros/juegos y juguetes.jpg')
}

class Elemento {
    constructor(x, y, img) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.img = img;
    }
    movimiento(posm) {
        if (posm.x < mouseX) { this.x = this.x - 2 }
        else if (posm.x > mouseX) { this.x = this.x + 2 };

        if (posm.y < mouseY) { this.y = this.y - 2 }
        else if (posm.y > mouseY) { this.y = this.y + 2 };
    }
}


function setup() {
    createCanvas(1200, 800);
    posm = {
        x: mouseX,
        y: mouseY,
    }
    fondo = new Elemento(0, 0);
    categorias = Array(

        new Elemento(20, 20, herreria), new Elemento(60, 20, tejidos), new Elemento(100, 20, lata),
        new Elemento(20, 60, vitrofusion), new Elemento(100, 60, tejidos),
        new Elemento(20, 100, juegos), new Elemento(60, 100, tejidos), new Elemento(100, 100, telas),

    );
    //console.log(categorias);
}

function draw() {
    background(220);

    //Fondo

    fill(0, 255, 0)
    image(fondo_imagen,fondo.x, fondo.y, 860, 480)
    fondo.movimiento(posm)

    for (index = 0; index < categorias.length; ++index) {
        //console.log(categorias[index]);
        fill(0, 0, 255);
        image(categorias[index].img,categorias[index].x * 4, categorias[index].y * 3,100, 100);
        categorias[index].movimiento(posm);

    }


    posm.x = mouseX
    posm.y = mouseY

}