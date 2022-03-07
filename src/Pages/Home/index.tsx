import { useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import { useHttp } from '../../hooks/use-http';
import { getAllProduct } from '../../lib/api';
import ContentLoader from '../../Common/ContentLoader/ContentLoader';
import ContentError from '../../Common/ContentError/ContentError';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';

const ShopHome = () => {
  const {
    sendRequest,
    status,
    data: loadListItems,
    error,
  } = useHttp(getAllProduct, true);

  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'PENDING') {
    return <ContentLoader content={''} />;
  }
  if (status === 'ERROR') {
    return <ContentError content={''} />;
  }
  if (status === 'COMPLETED') {
    dispatch(setProducts(loadListItems));
  }

  return loadListItems && <ProductList ProductLists={loadListItems} />;
};

export default ShopHome;
