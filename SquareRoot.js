function sqrt(num) {
    var sqrt=num/2;
    var l=0,u=num;
    while(sqrt>0) {
        sqrt=(l+u)/2;
        console.log(sqrt);
        if(parseInt(sqrt*sqrt)==num) break;
        else if(sqrt*sqrt>num) u=sqrt-1;
        else if(sqrt*sqrt<num) l=sqrt+1;
    }
    return sqrt;
}

console.log(sqrt(70));