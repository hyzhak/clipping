var React = require('react'),
    Compressor = require('./compressor.jsx');

React.render(
    <div className="container">
        <h1>Clipping words</h1>
        <Compressor/>
    </div>,
    document.getElementById('root')
);