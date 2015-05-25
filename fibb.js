function fibb(){
    var sum=0;
    var no1=0;var no2=1;
    var next=0;
    for(;next < 1000000;){
        if(next%2==0){
            sum=sum+next;
        }
    
        next=no1+no2;
        no1=no2;
        no2=next;
               
    }
    return sum;
}
document.getElementById('demo').innerHTML=fibb();