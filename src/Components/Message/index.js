import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const MessageDiv = (props) => {
  const { message } = props;
  return (
    <div className="messageDiv">
        <p>{message}</p>
    </div>
  );
};

MessageDiv.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDiv;
