import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Link } from './BackLink.styled';
const BackLink = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Link to={location?.state?.from ?? '/'}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};

export default BackLink;
