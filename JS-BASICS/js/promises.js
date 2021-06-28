/* This code is inspired by the following youtube video:
https://www.youtube.com/watch?v=s6SH72uAn3Q&list=WL&t=5s&index=11
Date: 10/29/18*/

let promiseToCleanRoom = new Promise(function(resolve, reject){

// cleaning the room

isClean = true;

if (isClean) {
  resolve('clean.');
} else {
  reject('not clean.');
}

});

promiseToCleanRoom.then(function(fromResolve){
console.log("The room is " + fromResolve);

}).catch(function(fromReject){
  console.log("The room is " + fromReject);
});

// NEW LINE OF CODE

let cleanRoom = function(){
  return new Promise(function(resolve, reject){
      resolve('clean the room');

  });
};


let message = "";
let result = "";
let removeGarbage = function(p){  // I wonder why it take p as the argument?
    return new Promise(function(resolve, reject){
      resolve(message + 'remove garbage');
    });
};

let winicecream = function(p){
  return new Promise(function(resolve, reject){
    resolve(message + 'Won icecream');
});

};

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(){
  return winicecream(result);
}).then(function(result){
  console.log("finished " + result);
})
