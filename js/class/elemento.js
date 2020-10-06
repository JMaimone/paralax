//referencia: mouseX y mouseY son variables pertenecientes a P5, guardan la posicion x e y del cursor en pantalla

class Elemento {
    constructor(x, y, img, tamaño = 10) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.img = img;
        this.tamaño = tamaño;
    }
    movimiento(posm ) {
        if (posm.x < mouseX) { this.x = this.x - 2 }
        else if (posm.x > mouseX) { this.x = this.x + 2 };

        if (posm.y < mouseY) { this.y = this.y - 2 }
        else if (posm.y > mouseY) { this.y = this.y + 2 };
    }
    mostrar(posm, descripcion="") {
        fill(0, 0, 255);
        //let time = millis();

        //rect(this.x * 4 -2,this.y * 3 -2,104,104)
        image(this.img, this.x, this.y, this.tamaño,this.tamaño);
        fill(0);
        text(descripcion, this.x + (this.tamaño)/2, this.y + this.tamaño-11);

        fill(255);
        text(descripcion, this.x + 1 + (this.tamaño)/2, this.y + this.tamaño -12);
        this.movimiento(posm);
    }

    hover(){
        const hover = (mouseX>this.x && mouseX < this.x + this.tamaño && mouseY>this.y && mouseY < this.y + this.tamaño)
        if(hover){
            fill(0, 255, 255, 20);
            square(this.x,this.y,this.tamaño)
        }
        return hover;
    }
    clicked(){
        var click = (this.hover() && mouseIsPressed)

        return click
    }
}

class Rubro extends Elemento{
    constructor(x, y, img, tamaño = 10, descripcion) {
        super(x, y, img, tamaño);
        this.descripcion = descripcion;
    }

    mostrar(posm){
        super.mostrar(posm,this.descripcion);
    }
}

class Tienda extends Elemento{
    constructor(x, y, img, tamaño = 10, descripcion) {
        super(x, y, img, tamaño);
        this.descripcion = descripcion;
    }

    mostrar(posm){
        super.mostrar(posm,this.descripcion);
    }
}