function reqListener() {
    //console.log(this.responseText);
      const countryArr=JSON.parse(this.responseText);
      for (i=0; i<=countryArr.length-1; i++){
    //console.log(countryArr[i]);
      console.log(countryArr[i].flags.png);
      }
     }
    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://restcountries.com/v3.1/all");
    req.send();