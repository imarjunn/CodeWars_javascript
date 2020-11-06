var countBits = function(num) {
    // Program Me
    let numjum = num;
      let a=0, binarr = [],countOnes = 0;
  
      while(numjum > 0)
      {
        a= numjum % 2;
        if(a == 1){
          countOnes++;
        }
        binarr.push(a.toString());
        numjum = Math.floor(numjum/2);
      }
  
      return countOnes;
  };