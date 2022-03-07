const apiPoint = 'https://ilead-shop-default-rtdb.firebaseio.com'
const fakeAPI = 'https://fakestoreapi.com'

export async function getAllProduct() {
    const response = await fetch(`${fakeAPI}/products`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch products.');
    }
    console.log('api products: ', data);

    return data;
}

export async function getProductDetails(id: any) {
    const response = await fetch(`${fakeAPI}/products/${id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch products.');
    }
    return data;
}