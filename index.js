const minall=(...number) =>{
    let count=number[0];
    for(i=0;i<number.length;i++){
        if(number[i]<=count){
            count=number[i]
        }
    }return count;
}
console.log(minall(1,5,4,-1,3,8,9,2));
