"use strict";

class EasyHTTP{
    //make an http get request
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
        
    }

    //make an http post request
    post(url,data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
        
    }

    //make an http put request
    delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method : 'DELETE' ,
                headers : {
                    'Content-type' : 'application/json'
                }               
            })
            .then(res => res.json())
            .then(data => resolve('Resource deleted'))
            .catch(error => reject(error))
        });
        
    }
}
