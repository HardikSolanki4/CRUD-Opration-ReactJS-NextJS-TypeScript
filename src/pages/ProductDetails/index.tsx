import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../component/Details/Details';
import { useHttp } from '../../hooks/use-http';
import { getProductDetails } from '../../lib/api';

export interface IProductDetailsProps {}

export default function ProductDetails(props: IProductDetailsProps) {
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

  return (details && <Details productDetail={details} />);
}
