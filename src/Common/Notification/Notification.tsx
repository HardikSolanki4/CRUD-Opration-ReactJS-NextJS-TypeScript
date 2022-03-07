import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../../redux/actions/cartActions';
import { RootState } from '../../rootReducer';
import { NotificationStyled } from './NotificationStyled';

type props = {
  title?: string;
  message?: string;
};

const Notification: React.FC<props> = (props) => {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state: RootState) => state?.cartProducts?.notification
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  }, [notification.title]);

  return (
    <NotificationStyled>
      {notification.title && <h6>{notification.title}</h6>}
      {notification.message && <h6>{notification.message}</h6>}
    </NotificationStyled>
  );
};

export default Notification;
