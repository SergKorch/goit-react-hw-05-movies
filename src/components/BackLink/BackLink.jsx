import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import s from './BackLink.module.css';
const BackLink = () => {
  const location = useLocation();

  return (
    <div className={s.link}>
      <Link to={location.state?.from ?? '/'}>
        <FaArrowLeft />
        Go back
      </Link>
    </div>
  );
};

export default BackLink;
