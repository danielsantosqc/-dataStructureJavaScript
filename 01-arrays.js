class MyArray {
  constructor (){
    this.longitud = 0;
    this.datos = {};
  }

  gett(indice){
    return this.datos[indice];
  }
  
  pushh(item){
    this.datos[this.longitud] = item;
    this.longitud ++;
    this.mostrarVector();
    return this.datos;
  }

  popp (){
    let lastItem = this.datos[this.longitud-1]
    delete this.datos[this.longitud-1];
    this.longitud--;
    return lastItem;
  }

  deletee(indice){
    const item = this.datos[indice]
    this.shiftIndex(indice);
    return item;
  }
  
  shiftIndex(indice){
    for (let i = indice; i < this.longitud -1; i++) {
      this.datos[i] = this.datos[i+1];      
    }
    delete this.datos[this.longitud -1];
    this.longitud --;
  }


  mostrarVector(){
    let vector = "[";
    for (const key in this.datos) {
      vector += this.datos[key] + ",";
    }
    console.log(vector + "]");
  }

}
let vector = new MyArray();
vector.pushh("daniel");
vector.pushh("camila");
vector.pushh("yon");
vector.pushh("osito");
vector.pushh("patito");
