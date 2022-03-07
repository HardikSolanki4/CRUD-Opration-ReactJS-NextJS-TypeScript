import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
  pageNotFoundBlock: {
    display: 'flex',
    minHeight: '90vh',
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
  },
});

const NotFound = () => {
  const classes = useStyle();
  return <div className={classes.pageNotFoundBlock}>404 | Page not found</div>;
};

export default NotFound;