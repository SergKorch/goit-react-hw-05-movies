import { Link, useLocation } from 'react-router-dom';
import s from './notFind.module.css'

const NotFind = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Not find</h1>
      <Link to="/" state={{ from: location }} className={s.notFind}>
        Go to Main
      </Link>
    </div>
  );
};

export default NotFind;
