"use strict";

const http = new EasyHTTP;

//get users
/*
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

//user data
const data = {
    name : 'John Doe',
    username : 'joe',
    email: 'jdow@test.com'
}

//post user
/*
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

//update a user
/*
http.put('https://jsonplaceholder.typicode.com/users/5', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

//delete a user

http.delete('https://jsonplaceholder.typicode.com/users/4')
    .then(data => console.log(data))
    .catch(error => console.log(error));
