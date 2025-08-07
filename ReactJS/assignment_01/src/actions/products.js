export const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapiserver.reactbd.org/api/products/');
        
        if(!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();

        return data?.data.map((d) => {
            return {...d, quantity: 1, price: d.price * 10}
        });
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export const getProductById  = async (productId) => {

    try {
        const response = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${productId}`);
        
        if(!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        return {...data, quantity: 1, price: data.price*10};
    } catch (error) {
        console.error(error.message);
        return null;
    }
}