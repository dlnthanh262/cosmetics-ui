import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = React.useState({});

    const fetchProduct = async () => {
        let apiUri = "http://localhost:8080/api/product/" + id;
        try {
        const result = await axios.get(apiUri);
        setProduct(result.data);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        fetchProduct();
      }, []);

    return (
        <div>
            <p>{product.name}</p>
        </div>
    )
}

export default ProductDetail;
