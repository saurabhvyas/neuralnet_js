
const alpha = 19; // alpha is the learning rate 

var X= [ [0,0] , [0,1] , [1,0] , [1,1] ];
var  d= [0,1,1,1] ; // desired values 

var randomnumber = function()  {

return ( Math.random() * 2 ) - 1 ; } 

 var W = [randomnumber(),randomnumber()] ;


forward_propagate=function(input,Weights,iteration) {

    // sigmoid activation

return 1/( 1 + Math.exp(-input[iteration][0]*Weights[0] - input[iteration][1]*Weights[1] ) );

} 

performance=function(d,o,iteration) {

 // mean square performance
    return - ( 0.5 * Math.pow(( d[iteration] - o ) , 2 ) ) ;

}


backprop=function(X,W,d,o,iteration) {

    

W[0] = W[0] + ( alpha *( X[iteration][0] ) * ( o )* ( ( 1 - o ) * ( d[iteration] - o ) ) );
W[1] = W[1] + ( alpha * ( X[iteration][1]  ) * ( o ) * ( ( 1 - o ) * ( d[iteration] - o ) ) );

while(!W  ) {

// check if w is undefined / null etc

}

console.log(' new W = ' +  W);



}



X.forEach(function(example,index){


output = forward_propagate(X,W,index);

console.log(' performance after ' + index + " = " + performance(d,output,index));

backprop(X,W,d,output,index);




});

// now testing

console.log(forward_propagate([[0.2,0.2]],W,0));
