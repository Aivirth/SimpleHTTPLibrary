"use strict";

class EasyHTTP{
    //make an http get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
        
    }

    //make an http put request
    async put(url,data){
        
        const response = await fetch(url, {
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
        
    }

    //make an http post request
    async post(url,data){
        
        const response = await fetch(url, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
        
    }

    //make an http delete request
    async delete(url,data){
        
        const response = await fetch(url, {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
        });

        const resData = await 'Deleted';
        return resData;
        
    }
}
