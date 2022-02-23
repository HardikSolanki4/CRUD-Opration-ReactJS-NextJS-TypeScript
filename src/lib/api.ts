const apiPoint = 'https://ilead-shop-default-rtdb.firebaseio.com'

export async function getAllProduct() {
    const response = await fetch(`${apiPoint}/product.json`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch products.');
    }
    const products = [];
    for (const key in data) {
        const productObj = {
            id: key,
            ...data[key],
        };
        products.push(productObj);
    }
    return products;
}

export async function getProductDetails(id: any) {
    const response = await fetch(`${apiPoint}/product/${id}.json`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch products.');
    }
    return data;
}