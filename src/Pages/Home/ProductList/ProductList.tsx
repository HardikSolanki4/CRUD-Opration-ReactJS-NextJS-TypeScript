import * as React from 'react';
// import { Table } from 'react-bootstrap';
// import RemoveStudent from '../Remove/Remove';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageStyle } from './ProductListStyled';

interface Props {
  ProductLists: {
    id: string;
    category: string;
    image: string;
    title: string;
    description: string;
    price: number;
  }[];
}

const ProductList: React.FC<Props> = ({ ProductLists }) => {
  // console.log('ProductLists:', ProductLists);

  const itemClickHandler = (event: React.MouseEvent) => {
    console.log(event);
  };

  return (
    <PageStyle>
      {ProductLists.length !== 0 ? (
        ProductLists.map((item, index) => (
          <Card className='productCard' key={index}>
            <Link to={`/detail/${item.id}`}>
              <CardMedia component='img' image={item.image} alt={item.title} />
              <CardContent>
                <Typography
                  className='productTitle'
                  variant='h6'
                  component='h6'
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))
      ) : (
        <h2>No Product Found</h2>
      )}
    </PageStyle>
  );
};

export default ProductList;
