import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details/Details';
import { useHttp } from '../../hooks/use-http';
import { getProductDetails } from '../../lib/api';
import ContentLoader from '../../Common/ContentLoader/ContentLoader';
import ContentError from '../../Common/ContentError/ContentError';
import { useDispatch } from 'react-redux';
import {
  removeSelectedProduct,
  setSelectedProduct,
} from '../../redux/actions/productActions';

const ProductDetails: React.FC = () => {
  const {
    sendRequest,
    status,
    error,
    data: details,
  } = useHttp(getProductDetails, true);
  const params = useParams();
  const dispatch = useDispatch();

  const { id: productId } = params;

  useEffect(() => {
    sendRequest(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [sendRequest]);

  if (status === 'PENDING') {
    return <ContentLoader content={''} />;
  }
  if (status === 'ERROR') {
    return <ContentError content={''} />;
  }
  if (status === 'COMPLETED') {
    dispatch(setSelectedProduct(details));
  }

  return (
    details && <Details productDetail={details} />
  );
};

export default ProductDetails;
