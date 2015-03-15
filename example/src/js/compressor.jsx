var React = require('react'),
    InputMessage = require('./inputMessage.jsx'),
    OutputMessage = require('./outputMessage.jsx'),
    MessageState = require('./messageState.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {org: '', compressed: ''};
    },
    handleUpdateMessage: function(value) {
        var comporessed = value.trim();

        this.setState({
            org: value,
            compressed: comporessed
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