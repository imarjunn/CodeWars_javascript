function songDecoder(song){
  // ...
  
  let arr = song.split("WUB").filter(ele => ele != '').join(" ");
  return arr;
}