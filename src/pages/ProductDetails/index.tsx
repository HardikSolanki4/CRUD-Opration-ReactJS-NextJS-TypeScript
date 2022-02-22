import * as React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../component/Details/Details';

export interface IProductDetailsProps {}

export default function ProductDetails(props: IProductDetailsProps) {
  const params = useParams();
  const { id: productId } = params;
  console.log(productId);

  return <Details />;
}
