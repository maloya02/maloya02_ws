// custom script
// alert('Welcome to JS')

// class <name_of_class> {}

class Car {
    // properties
    color;  // uninitialized ===> undefined
    noOfWheel = 4; // default/intialized
    #serialNumber = '00000000000000000000000';
    #mileage = 0;
  
    // contructors
    constructor(color, serialNumber, noOfWheel) {
      this.color = color;
      this.#serialNumber = serialNumber;
      this.noOfWheel = noOfWheel && noOfWheel > 1 ? noOfWheel : this.noOfWheel;
      // this.#mileage = mileage;
    }
    // constructor() {}
  
    // getters
    get serialNumber() {
      // return this.#serialNumber;
      return this.#serialNumber.substring(11).padStart(15, '*');
    }
    
    get queryMileage() {
      return `${this.#mileage} km(s)`;
    }
  
    // setters
    set serialNumber(value) {
      if(value.trim().length == 15) {
        this.#serialNumber = value.trim();
      } else {
        console.error(`New serial ${value} cannot be accepted, length should be 15 chars.`);
      }
    }
  
    // methods
    engineStart() {
      console.warn(`Vroom vroom, engine is starting....`) && this.#monitorRPM();
    }
  
    driveForward(distance = 0) {
      distance > 0
      ? console.log(`Starting to drive up to ${distance} meter${distance > 1 ? 's' : ''}`) && this.#monitorRPM()
      : console.log(`Staying put, no distance supplied.`);
  
      distance > 0
      ? this.#mileage += distance
      : null;
    }
  
    #monitorRPM() {
      console.log(`Monitor rpm by counting tire revolution.`);
    }
    
  }
  
  // object
  const Audi = new Car('red', 'UONDOT0803ONAQL'); // new Car();
  
  console.log('After object instantiation');