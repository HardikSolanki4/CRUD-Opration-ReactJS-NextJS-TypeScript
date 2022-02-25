import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../component/Details/Details';
import { useHttp } from '../../hooks/use-http';
import { getProductDetails } from '../../lib/api';

const ProductDetails: React.FC = () => {
  const {
    sendRequest,
    status,
    error,
    data: details,
  } = useHttp(getProductDetails, true);
  const params = useParams();
  const { id: productId } = params;

  useEffect(() => {
    sendRequest(productId);
  }, [sendRequest]);

  const addToCartHandler = () => {
    alert('hello');
  };

  return (
    details && <Details productDetail={details} onClick={addToCartHandler} />
  );
};

export default ProductDetails;
