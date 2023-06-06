// Get all products
function getAllProducts() {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((allProducts) => console.log(allProducts))
    .catch((error) => console.log(error));
}

// Get a single product
function findById(id) {
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((response) => response.json())
    .then((allProducts) => console.log(allProducts))
    .catch((error) => console.log(error));
}

findById(10);

// Create a product
const newProduct = {
  title: "GOIT LMS",
  price: 100,
  description: "A perfect platform",
  categoryId: 3,
  images: ["https://placeimg.com/640/480/any"],
};

function createProduct(addProduct) {
  fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    body: JSON.stringify(addProduct),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// createProduct(newProduct);

// Update a product
const productToUpdate = {
  price: 350,
  description: "Very good lessons",
};

function updateProduct(prodId, updateObj) {
  fetch(`https://api.escuelajs.co/api/v1/products/${prodId}`, {
    method: "PUT",
    body: JSON.stringify(updateObj),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
updateProduct(302, productToUpdate);
getAllProducts();
