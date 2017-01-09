
const alpha = 45; // alpha is the learning rate 

var X= [ [0,0] , [0,1] , [1,0] , [1,1] ];
var  d= [0,1,1,1] ; // desired values 

var randomnumber = function()  {

return ( Math.random() * 2 ) - 1 ;
} 

 var W = [randomnumber(),randomnumber(),1] ;



forward_propagate=function(input,Weights,iteration) {

   // sigmoid activation with bias

return 1/( 1 + Math.exp(-input[iteration][0]*Weights[0] - input[iteration][1]*Weights[1]  +W[2] ) );



} 

performance=function(d,o,iteration) {

    return - ( 0.5 * Math.pow(( d[iteration] - o ) , 2 ) ) ;

}




backprop=function(X,W,d,o,iteration) {

    

W[0] = W[0] + ( alpha *( X[iteration][0] ) * ( o )* ( ( 1 - o ) * ( d[iteration] - o ) ) );
W[1] = W[1] + ( alpha * ( X[iteration][1]  ) * ( o ) * ( ( 1 - o ) * ( d[iteration] - o ) ) );
W[2] =W[2] + ( alpha  * ( o )* ( ( 1 - o ) * ( d[iteration] - o ) ) );

while(!W  ) {

// check if null / undefined

}
console.log(' new W = ' +  W);



}



X.forEach(function(example,index){


output = forward_propagate(X,W,index);

console.log(' performance after ' + index + " = " + performance(d,output,index));

backprop(X,W,d,output,index);




});

// now testing


console.log(forward_propagate([[0,0]],W,0));
console.log(forward_propagate([[1,0]],W,0));
console.log(forward_propagate([[0,1]],W,0));
console.log(forward_propagate([[1,1]],W,0));