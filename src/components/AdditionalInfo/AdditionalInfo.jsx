import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ location }) => {
  return (
    <div>
      <h3 className="additionalTitle">Additional Information </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="additionalInfo">
          <li className="additionalItem">
            <Link
              className="additionalLink"
              to="cast"
              state={{ from: location }}
            >
              Cast
            </Link>
          </li>
          <li className="additionalItem">
            <Link
              className="additionalLink"
              to="reviews"
              state={{ from: location }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </Suspense>
    </div>
  );
};

AdditionalInfo.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AdditionalInfo;
