"use strict";

    const http = new easyHTTP;

    //Get posts
    /*
    http.get('https://jsonplaceholder.typicode.com/posts', function(error ,response){
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        }


    });
    */

    /*
    //get single post
    http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        }


    });
    */

    //create data
    const data = {
        title : 'custom post',
        body : 'this is a custom post'
    };

    //create post
    /*
    http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
        if (error) {
            console.log(error);
        } else {
            console.log(post);
        }
    });
    */

    //update
    http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
        if (error) {
            console.log(error);
        } else {
            console.log(post);
        }
    });



    