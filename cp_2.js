function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then(products => {
      products.slice(0, 5).forEach(product => {
        console.log("Product (then):", product.fields.name);
      });
    })
    .catch(error => {
      console.error("Fetch using .then() failed:", error.message);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products); 
  } catch (error) {
    handleError(error);
  }
}