{

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
      
      const user = {
        name: "AliceType",
        age: 100,
        profession:'developer',
        email: "typealice@gmail.com"
      };
      
      const name = getProperty(user, "name");  
      console.log(name)
   
      
}