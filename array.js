const inputArray = [2, 4,23, 23,543, 234,213, 111, 2, 3, 4, 5, 6, 6, 111, 43];
const uniqueNumbers = getUniqueNumbers(inputArray);


function getUniqueNumbers(arr) {
    // const uniqueSet = new Set(arr);
    // const uniqueArray = Array.from(uniqueSet);
    // return uniqueArray;

    const uniqueArray = [];
      
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
       
   
  }
  
  console.log(uniqueNumbers); 
