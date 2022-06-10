import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import s from './BackLink.module.css';
import { useEffect, useState } from 'react';
const BackLink = () => {
  const [form, setForm] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setForm(location.state.from);
    }
  }, [location]);
  return (
    <div className={s.link}>
      <Link to={form ?? '/'}>
        <FaArrowLeft />
        Go back
      </Link>
    </div>
  );
};

export default BackLink;
