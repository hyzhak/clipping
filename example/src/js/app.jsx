var React = require('react');

var InputMessage = React.createClass({
    onChange: function(event) {
        this.props.onUpdate(event.currentTarget.value);
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

var MessageState = React.createClass({
    render: function() {
        return (
            <div>
                size: {this.props.value.length}
            </div>
        )
    }
});

var Compressor = React.createClass({
    getInitialState: function() {
        return {org: '', compressed: ''};
    },
    handleUpdateMessage: function(value) {
        this.setState({
            org: value,
            compressed: value.trim()
        });
    },
    render: function() {
        return (
            <form>
                <InputMessage value={this.state.org} onUpdate={this.handleUpdateMessage}/>
                <MessageState value={this.state.org}/>
                <OutputMessage value={this.state.compressed}/>
                <MessageState value={this.state.compressed}/>
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