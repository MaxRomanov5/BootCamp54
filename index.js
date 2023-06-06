



function getAllProducts() {
fetch("https://api.escuelajs.co/api/v1/products").then(
    response => response.json()
).then(allProducts => console.log(allProducts))
.catch(error => console.log(error)) 
}
getAllProducts()




function findById(id) {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then(
        response => response.json()
    ).then(allProducts => console.log(allProducts))
    .catch(error => console.log(error)) 
    }
 
    findById(10)
    

