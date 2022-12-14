import PropTypes from 'prop-types';

const ReviewsList = ({ reviews, noReviews }) => {
  return (
    <>
      <div>{noReviews}</div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author:{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  noReviews: PropTypes.string,
};

export default ReviewsList;
