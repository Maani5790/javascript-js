
// const data = ['abdul', 'rehman', 23, 'pakistan'];

// let [firstName,lastName,age,cont] = data;
// console.log(firstName);


///////////////////for each//////////


// arr1 = ['banana', 'apple', 'mango']
// arr1.forEach(element => {
// console.log(element);
    
// });



//////////////////promises//////////

let promise = new Promise(function(resolve, reject) {
    resolve("I am surely going to get resolved!");
  
    reject(new Error('Will this be ignored?')); // ignored
    resolve("Ignored?"); // ignored
  });



  ////////////////object destructuring//////////

  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  }


