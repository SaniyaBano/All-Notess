

var firstMethod =function(){
  var promise = new Promise((resolve,reject)=>{
 
    setTimeout(function(){
 reject("got it some error");
    },5000)
 
 });
 return promise;
 
}

firstMethod().then(data=>{
  console.log(data);
},(err)=>{
  console.log(err);
})

// promise.then((data)=>{
//   console.log(data);
// },(err)=>{
//   console.log(err);
// })

// promise.then((data)=>{
//   console.log("data",data);
// }).catch(err=>{
//   console.log(err);
// }).finally(()=>{
//   console.log("finally");
// })