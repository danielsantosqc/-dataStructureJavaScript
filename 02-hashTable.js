class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //encuentra la posicion indicada dependiendo del key que le damos como parametro
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    // console.log("hash:", hash)
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return (currentBucket[i][0] + ":" + currentBucket[i][1]);
        }
      }
    }
    return undefined;
  }

  delete(key) {
    let dataDelet = ""
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        dataDelet = currentBucket[i][0] + ":" + currentBucket[i][1];
        for (let j = i; j < currentBucket.length; j++) {
          currentBucket[j] = currentBucket[j + 1];
        }
        delete currentBucket[currentBucket.length - 1];
        return dataDelet;
      }
    }
  }


  // remove(key) {
  //   const address = this.hashMethod(key);
  //   const currentBucket = this.data[address];
  //   if (currentBucket) {
  //     for (let i = 0; i < currentBucket.length; i++) {
  //       if (currentBucket[i][0] === key) {
  //         const deletedValue = this.data[address][i];
  //         this.data[address].splice(i, 1);
  //         return deletedValue;
  //       }
  //     }
  //   }
  //   return undefined;
  // }

}

const hash = new hashTable(10);

hash.set("gato", "1232312313");
hash.set("perro", "23423424");
hash.set("pajaro", "23421");
hash.set("ganso", "333333");
hash.set("vaca", "1111111");
hash.set("abeja", "34545");
hash.set("hormiga", "123");
hash.set("aranha", "00000");
hash.set("caballo", "11111111");
hash.set("mariposa", "999999999");
hash.set("mosca", "443434343");