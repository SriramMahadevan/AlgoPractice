function sqrt(num) {
    var sqrt=num/2;
    var l=0,u=num;
    while(sqrt>0) {
        sqrt=(l+u)/2;
        if((sqrt*sqrt).toFixed(2)==num) break;
        else if(sqrt*sqrt>num) u=sqrt-1;
        else if(sqrt*sqrt<num) l=sqrt+1;
    }
    return sqrt;
}

console.log(sqrt(100).toFixed(2));