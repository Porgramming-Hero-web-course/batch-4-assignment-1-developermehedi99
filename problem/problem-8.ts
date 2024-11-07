{

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
      return keys.every(key => key in obj);
  }
  
  const user = { name: "Mehedi", age: 23, email: "mehedi@gmail.com" };
  console.log(validateKeys(user, ["name", "age"]));
  
      
}