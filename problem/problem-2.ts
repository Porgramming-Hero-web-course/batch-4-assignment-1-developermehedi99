{

    function removeDuplicates (arrsNums : number[]) : number[] {
        return [...new Set(arrsNums)];
    }
    
    const numbers = [2,3,4,5,6,3,7,2,11,6,16];
    console.log(removeDuplicates(numbers))





    // 
}