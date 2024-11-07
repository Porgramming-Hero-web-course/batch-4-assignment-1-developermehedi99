{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(myNums:number[]): number{
        let sum = 0;
        for(let i =0; i < myNums.length; i++){
            sum +=myNums[i];
        }
        return sum;
    }

    const result = sumArray([3,5,18,9,12,45]);
    console.log(result)



    // 
}
