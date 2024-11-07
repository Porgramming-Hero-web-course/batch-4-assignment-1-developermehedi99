{

    class Car {
        make: string;
        model: string;
        year: number;
      
        constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }

        getCarAge(currentYear: number): number {
          return currentYear - this.year;
        }
      }

      const currentYear = new Date().getFullYear(); 
      const ourCar = new Car("Yamaha", "Mountain", 2019)
      
      const carsAge = ourCar.getCarAge(currentYear);
      console.log(`${carsAge} (The car's age is: ${carsAge} years)`); 
      
}