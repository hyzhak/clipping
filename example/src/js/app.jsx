var React = require('react'),
    InputMessage = require('./inputMessage.jsx'),
    OutputMessage = require('./outputMessage.jsx'),
    MessageState = require('./messageState.jsx'),
    Compressor = require('./comporessor.jsx');

React.render(
    <div>
        <Compressor/>
    </div>,
    document.getElementById('root')
);