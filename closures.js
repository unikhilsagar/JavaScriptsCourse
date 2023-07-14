function x(){
    let a = 10
    return function y (){
        console.log(a)
    }
}
let b = x();
b();


function a(){
    var i = 1;
    while(i<=5){
        function x(i){
       
            setTimeout(()=>{
                console.log(i)
            },i * 2000)
            
        }
        x(i); 
        i++;
    }
};
a()