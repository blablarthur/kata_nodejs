function nbDig(n, d) {
    var count = 0;
    
    for (var i = 0; i <= n; i++) {
      const nb = i * i;
      count += count_d_in_nb(nb, d);  
    }
    return count;
  }
  
  function count_d_in_nb(nb, d) {
    var count = 0;
    var i = 10;
    while (nb > 0) {
      //count += nb % i === d ? 1 : 0;
      if (nb % i === d) {
        count++;
        console.log(nb);
      }
      nb = Math.floor(nb / 10);
    }
    return count;
  }

  nbDig(10,1);