Array.prototype.prime_number=function(){
    for(let i=0;i<this.length;i++){
        if(this[i] % 2==0){
            flag= false;
        }
        else if(this[i]==2){
            flag=true;
        }
        else{
            flag=true;
        }
    }return flag;
}
let arr=[4,6,7]
let p=arr.prime_number();
console.log(p);