var React = require('react'),
    Compressor = require('./compressor.jsx');

React.render(
    <div className="container">
        <h1>
            Clipping words
        </h1>
        <iframe src="https://ghbtns.com/github-btn.html?user=hyzhak&repo=clipping&type=star&count=true&size=large"
            scrolling="0"
            frameBorder="0"
            width="160px"
            height="30px"></iframe>
        <Compressor/>
    </div>,
    document.getElementById('root')
);