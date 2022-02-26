import { useEffect } from 'react';
import CategoryList from './ProductList/ProductList';
import { useHttp } from '../../hooks/use-http';
import { getAllProduct } from '../../lib/api';
import ContentLoader from '../../Common/ContentLoader/ContentLoader';
import ContentError from '../../Common/ContentError/ContentError';

const ShopHome = () => {
  const {
    sendRequest,
    status,
    data: loadListItems,
    error,
  } = useHttp(getAllProduct, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'PENDING') {
    return <ContentLoader content={''} />;
  }
  if (status === 'ERROR') {
    return <ContentError content={''} />;
  }

  // console.log('loadListItems', loadListItems);

  return loadListItems && <CategoryList ProductLists={loadListItems} />;
};

export default ShopHome;
