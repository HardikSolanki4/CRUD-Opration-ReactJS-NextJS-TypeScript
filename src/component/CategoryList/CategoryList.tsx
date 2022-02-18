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

interface Props {
  CategoryLists: {
    category: string;
    picture: string;
    name: string;
    description: string;
    price: number;
  }[];
}

const CategoryList: React.FC<Props> = ({ CategoryLists }) => {
  // console.log('CategoryLists:', CategoryLists);

  return (
    <div className='CatListWrapper'>
      <Grid container spacing={4}>
        {CategoryLists.length !== 0 ? (
          CategoryLists.map((item, index) => (
            <Grid item xs={3} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  height='140'
                  image={item.picture}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Add to Whish List</Button>
                  <Button size='small'>Buy</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <h2>No Student Found</h2>
        )}
      </Grid>
    </div>
  );
};

export default CategoryList;