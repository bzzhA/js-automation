//*****************************************************************************************//

// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class animal {
  constructor(speed) {
    this.speed = speed;
  }
}

const cat = new animal("3 km/h");
