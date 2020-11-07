function persistence(num) {   
   let perNum = num.toString();
   let counter = 0;
   let arr = perNum.split("");
   const reducer = (accumulator, currentValue) => accumulator * parseInt(currentValue);
   
   while(arr.length > 1)
   {
     counter++;
     perNum = arr.reduce(reducer).toString();
     arr = [];
     arr = perNum.split("");
   }
   
   return counter;
}