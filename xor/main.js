
const alpha = 5; // alpha is the learning rate 

var X= [ [0,0] , [0,1] , [1,0] , [1,1] ];
var  d= [0,1,1,0] ; // desired values 

var randomnumber = function()  {

return ( Math.random() * 2 ) - 1 ;
} 

// var W = [randomnumber(),randomnumber()] ;

 var W=[[1,2,3,4],[1,2]];

W[0].forEach(function(val,iteration){

W[0][iteration] = randomnumber();


});


W[1].forEach(function(val,iteration){

W[1][iteration] = randomnumber();


});


forward_propagate=function(input,Weights,iteration) {

    //console.log(' X  = ' +  X);

    

var output_firstlayer_firstneuron = 1/( 1 + Math.exp(-input[iteration][0]*Weights[0][0] - input[iteration][1]*Weights[0][1] ) );
var output_firstlayer_secondneuron = 1/( 1 + Math.exp(-input[iteration][0]*Weights[0][2] - input[iteration][1]*Weights[0][3] ) );

var final_output = 1 / ( 1 + Math.exp( - output_firstlayer_firstneuron*Weights[1][0] - output_firstlayer_secondneuron*Weights[1][1] ));

console.log(' first layer first neuron output : ' + output_firstlayer_firstneuron );
console.log(' first layer second  neuron output : ' + output_firstlayer_secondneuron );
console.log( ' final layer neuron output ' + final_output );


return [output_firstlayer_firstneuron,output_firstlayer_secondneuron,final_output] 



} 

performance=function(d,o,iteration) {

    return - ( 0.5 * Math.pow(( d[iteration] - o ) , 2 ) ) ;

}




backprop=function(X,W,d,o,iteration) {

    

// right neurons
sigmar = ( o[2] )* ( ( 1 - o[2] ) * ( d[iteration] - o[2] ) );
W[1][0] = W[1][0] + ( alpha *( o[0] ) * sigmar  );
W[1][1] = W[1][1] + ( alpha * ( o[1]  ) * sigmar );


// left neurons

W[0][0] = W[0][0] + ( alpha * ( X[iteration][0] * o[0] * ( 1 - o[0 ] ) * W[1][0] * sigmar ));
W[0][1] = W[0][1] + ( alpha * ( X[iteration][1] * o[0] * ( 1 - o[0 ] ) * W[1][0] * sigmar ));

W[0][2] = W[0][2] + ( alpha * ( X[iteration][0] * o[1] * ( 1 - o[1 ] ) * W[1][1] * sigmar ));
W[0][3] = W[0][3] + ( alpha * ( X[iteration][1] * o[1] * ( 1 - o[1 ] ) * W[1][1] * sigmar ));


console.log(' updated weights first layer ' + W[0][0] + ' , ' + W[0][1] + ' ,' + W[0][2] + ' , ' + W[0][3]);
console.log(' updated weights second layer ' + W[1][0] + ' , ' + W[1][1]);

while(!W  ) {


}
console.log('W = ' +  W);



}



X.forEach(function(example,index){


output = forward_propagate(X,W,index);




console.log(' performance after ' + index + " = " + performance(d,output[2],index));

backprop(X,W,d,output,index);




});

// now testing

//exports.net=neuralnet;
//exports.W=W;





