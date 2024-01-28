import PropTypes from 'prop-types';
const ListComponent = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListComponent;
