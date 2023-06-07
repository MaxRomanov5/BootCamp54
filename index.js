// // const { method } = require("lodash");

// // Get all products
// function getAllProducts() {
//   fetch("https://api.escuelajs.co/api/v1/products")
//     .then((response) => response.json())
//     .then((allProducts) => console.log(allProducts))
//     .catch((error) => console.log(error));
// }

// // Get a single product
// function findById(id) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
//     .then((response) => response.json())
//     .then((allProducts) => console.log(allProducts))
//     .catch((error) => console.log(error));
// }

// findById(10);

// // Create a product
// const newProduct = {
//   title: "GOIT LMS",
//   price: 100,
//   description: "A perfect platform",
//   categoryId: 3,
//   images: ["https://placeimg.com/640/480/any"],
// };

// function createProduct(addProduct) {
//   fetch("https://api.escuelajs.co/api/v1/products/", {
//     method: "POST",
//     body: JSON.stringify(addProduct),
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "*/*",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// // createProduct(newProduct);

// // Update a product
// const productToUpdate = {
//   price: 350,
//   description: "Very good lessons",
// };

// function updateProduct(prodId, updateObj) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${prodId}`, {
//     method: "PUT",
//     body: JSON.stringify(updateObj),
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "*/*",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// // updateProduct(302, productToUpdate);

// // delete product

// function delProd(id) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
//     method: "DELETE",
//   })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// // delProd(302);

// getAllProducts();

//-----------------------
//-----------------------
//-----------------------
//-----------------------
//-----------------------
//Async Axios

// const { method } = require("lodash");

// Get all products
async function getAllProducts() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// getAllProducts();

// Get a single product
// function findById(id) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
//     .then((response) => response.json())
//     .then((allProducts) => console.log(allProducts))
//     .catch((error) => console.log(error));
// }

// findById(10);

// Create a product
const newProduct = {
  title: "GOIT LMS",
  price: 100,
  description: "A perfect platform",
  categoryId: 3,
  images: ["https://placeimg.com/640/480/any"],
};

async function createProduct(createdProduct) {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      JSON.stringify(createdProduct),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// createProduct(newProduct);
// getAllProducts();

//--------------------------
// Update a product
const productToUpdate = {
  price: 350,
  description: "Very good lessons",
};

async function updateProduct(prodId, updateObj) {
  try {
    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${prodId}`,
      JSON.stringify(updateObj),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// updateProduct(550, productToUpdate);
// getAllProducts();

//---------------
// delete product
async function deleteProduct(id) {
  try {
    const response = await axios.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// deleteProduct(550);

getAllProducts();

const str = "Ashok";

async function deleteProducts(title) {
  const response = await getAllProducts();
  const dataArr = response.data;

  dataArr.forEach(async (el) => {
    if (el.title === title) {
      const result = await deleteProduct(el.id);
      console.log(result.data);
    }
  });
}

// deleteProducts(str);
