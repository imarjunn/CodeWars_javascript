function findOutlier(integers){
  //your code here
  let evenarr= [];
  let oddarr = [];
  
  for(let i of integers){
    if(i % 2 === 0){
      evenarr.push(i);
    }else{
      oddarr.push(i);
    }
  }
  
  return evenarr.length === 1 ? evenarr[0] : oddarr[0];
  
  
}