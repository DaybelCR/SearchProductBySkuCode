const fetchProduct = async (code, setProduct) => {
    try {
        const response = await fetch(`https://api-vtex-search-product.onrender.com/product/${code}`);
        if (!response.ok) {
            setProduct(null)
            throw new Error('Error al obtener datos de la API');
        }
        const responseData = await response.json();
        setProduct(responseData);
    } catch (error) {
        console.error(error);
    }
}

export default fetchProduct;