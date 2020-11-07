function findEvenIndex(arr)
{
  //Code goes here!
  let index = -1;

    const reducer = (accumulator,currentValue) => accumulator + currentValue;

    if(arr.length == 1){
      index = 0;
    }

    for(let i=1;i<arr.length;i++){
      
      if(arr.slice(1).reduce(reducer) === 0){
        index = 0;
      }
      //console.log(arr.slice(0,i).reduce(reducer,0));
      //console.log("2  :"  + arr.slice(i+1,arr.length).reduce(reducer,0));

      if( (arr.slice(0,i).reduce(reducer,0)) == (arr.slice(i+1,arr.length).reduce(reducer,0)) )
      {
        index = i;
        break;
      }
    }
    return index;
  
}