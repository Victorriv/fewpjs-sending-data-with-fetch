// Add your code here
   /*  const formData = {
        dogName:"byron",
        dogBreed: "Poodle"
    };

const configurationObject = {
    method: "POST",
    headers:{ // each individual header is stored as a key/value pair inside an object
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify (formData)  // your data goes here // converts objects to strings JSON.stringiy
        
    
};

fetch( ' http://localhost:3000/"users ' , configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        console.log(object);
 
    }); */

function submitData( name , email){
    return fetch ('http://localhost:3000/users',  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email

        })
    })
    .then( function ( response ){
        return response.json()
    })
    .then( function ( object ){
        document.body.innerHTML = object [ "id" ]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message

    

    })
}