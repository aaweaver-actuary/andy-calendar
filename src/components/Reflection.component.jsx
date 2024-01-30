import PropTypes from 'prop-types';

const ReflectionComponent = ({ title, content, onContentChange }) => {
  return (
    <div className="reflection-section">
      <h3>{title}</h3>
      <textarea value={content} onChange={onContentChange} />
      {
        (console.log('title', title),
        console.log('content', content),
        console.log('onContentChange', onContentChange))
      }
    </div>
  );
};

ReflectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

export default ReflectionComponent;
