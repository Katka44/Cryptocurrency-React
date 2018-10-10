import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
  const { message } = props;
  return (
    <div className="messageDiv">
        <p>{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
