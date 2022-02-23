import { useEffect } from 'react';
import CategoryList from '../../component/CategoryList/CategoryList';
import { useHttp } from '../../hooks/use-http';
import { getAllProduct } from '../../lib/api';
import ContentLoader from '../../component/ContentLoader/ContentLoader';
import ContentError from '../../component/ContentError/ContentError';

interface Props {
  CategoryLists: {
    id: any;
    category: string;
    picture: string;
    name: string;
    description: string;
    price: number;
  }[];
}

const ShopHome: React.FC<Props> = () => {
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


  return loadListItems && <CategoryList CategoryLists={loadListItems} />;
};

export default ShopHome;
