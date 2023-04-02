---
title: 'JavaScript ES6 features - Every javascript developer must know'
date: '2023-04-01'
categories: ['javascript','frontend']
author: {
    name: 'Yogesh Bitake',
    avatar: '/images/yogesh_avatar.jpg'
}
blogImage: '/images/es6.jpg'
readTime: 10
---

ECMAScript 6 (ES6) also known as ECMAScript 2015. ES6 is a significant update to the javascript.
ES6 includes the following new features:
- Promise
- Class
- Arrow Function
- Template Strings
- Rest, Spread Operator
- Generators
- Destructuring 
- Modules

### Promise
The Promise object represents the completion or failure of an asynchronous operation and its resulting value.
A Promise has one of these states:
- **pending:** initial state, neither fulfilled nor rejected.
- **fulfilled:** meaning that the operation was completed successfully.
- **rejected:** meaning that the operation failed.
A promise is said to be settled if it's either fulfilled or rejected, but not pending.
![Promises state lifecycle](/images/promises.jpg "Promises state lifecycle")

Syntax-
```js
const myPromise = new Promise((resolve, reject) => {
   resolve("foo");
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB);
```
Are you still using callback to handle asynchronous operations? If yes then it's time to replace callbacks with promises. Code become complex & not readable due to nested callbacks.
Let's look at how we can migrate following callbacks to the promises.

Traditional callback hell
```js
function getData(cb){
  getApiData('/v1/api1',(apiData1)=>{
   getApiData('/v1/api2',(apiData2)=>{
    getApiData('/v1/api3',(apiData3)=>{
        cb({ apiData1, apiData2, apiData3});
     });
    });
  });
}

getData(function successCb(data){
    console.log(data);
});
```
Using Promises
```js
function getData(){
   return Promise.all([
      $getApiData('/v1/api1'),
      $getApiData('/v1/api2'),
      $getApiData('/v1/api3')
    ])
}
getData().then(data=> console.log(data), err => console.log(err))
```
Methods & Must Read:
- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [Promise.any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
- [Promise.race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [Promise.reject()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- [Promise.resolve()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

#### Class


#### Arrow Function

#### Template Strings

#### Rest, Spread Operator

#### Generators

#### Destructuring 

#### Modules