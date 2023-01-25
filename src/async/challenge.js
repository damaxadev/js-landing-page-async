import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1"

//Forma 1
async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Forma 2
const anotherFunction = async (url) => {
    try{
        const products = await fetchData(`${API}/products`);
        console.log(products);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        console.log(product.title);
        const category = await fetchData(`${API}/categories/${product.category.id}`);
        console.log(category.name);
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API);