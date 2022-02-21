import Button from '@mui/material/Button';

const Details = () => {
  return (
    <>
      <div className='productBlock'>
        <div className='productImg'>
          <img src='https://dummyimage.com/600x400' />
        </div>
        <div className='productName'>Computer</div>
        <div className='productDetails'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <Button size='small'>WhishList</Button>
        <Button size='small'>Buy</Button>
      </div>
    </>
  );
};

export default Details;
