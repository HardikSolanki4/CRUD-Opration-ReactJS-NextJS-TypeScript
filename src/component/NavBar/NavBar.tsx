import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles({
  header: {
    background: grey[200],
    marginBottom: '30px',
    padding: '5px',
  },
});

const HeaderNavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container fixed>
        {/* <Navbar.Brand onClick={() => router.push('/')}>My School</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link onClick={() => router.push('/add')}>Add Student</Nav.Link>
      </Nav> */}

        <Button color='secondary' variant='contained'>
          Your Wish List
        </Button>
        <Button color='primary' variant='contained'>
          Cart
        </Button>
      </Container>
    </div>
  );
};

export default HeaderNavBar;
