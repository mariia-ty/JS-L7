const source = document.getElementById("products-template").innerHTML;
const template = Handlebars.compile(source);
/*const context = { title: "Hello", description: "World" }; */
/*const context = {
  users: [
    { name: "Rostik", age: 20 },
    { name: "Kyle", age: 30 },
  ],
};
const html = template(context); 
document.body.innerHTML += html;
*/
/*const context = {
  users: [
    { name: "Anna", isadmin: true },
    { name: "Ivan", isadmin: false },
    { name: "Mariia", isadmin: true }
  ]
};
*/
/*
const context = {
  tasks: [
    { title: "Buy Bread", completed: true },
    { title: "Learn Poem", completed: false },
    { title: "Do HW", completed: true },
  ],
};
*/

const products = [
  { name: "Notebook", price: 2500 },
  { name: "Phone", price: 1500 },
  { name: "Tablet", price: 3500 },
  { name: "M0nitor", price: 2800 },
];

function renderProducts(filteredProducts) {
  const context = { products: filteredProducts };
  document.getElementById("products-list").innerHTML = template(context);
}

function filteredProducts() {
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;

    const filterProducts = products.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
    );

    renderProducts(filterProducts);
}

renderProducts(products);