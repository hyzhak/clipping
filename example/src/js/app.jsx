var React = require('react');

var InputMessage = React.createClass({
    onChange: function(event) {
        this.value = (event.currentTarget.value);
    },
    render: function() {
        return (
            <div className="form-group">
                <label for="inputMessage">Input:</label>
                <input type="text"
                    className="form-control"
                    id="inputMessage"
                    onChange={this.onChange}
                    placeholder="Type your message"
                    value={this.props.value}/>
                <span>{this.value}</span>
            </div>
        );
    }
});

var OutputMessage = React.createClass({
    render: function() {
        return (
            <div className="form-group">
                <label for="outputMessage">Output:</label>
                <input type="text"
                    className="form-control"
                    id="outputMessage"
                    placeholder="Type your message"
                    readOnly="true"
                    value={this.props.value}/>
            </div>
        );
    }
});

var Compressor = React.createClass({
    getInitialState: function() {
        return {text: ''};
    },
    componentDidMount: function() {

    },
    render: function() {
        return (
            <form>
                <InputMessage value={this.state.text}/>
                <OutputMessage value={this.state.text}/>
            </form>
        );
    }
});

React.render(
    <div>
        <Compressor/>
    </div>,
    document.getElementById('root')
);