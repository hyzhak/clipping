var clipping = require('clipping'),
    React = require('react'),
    InputMessage = require('./inputMessage.jsx'),
    OutputMessage = require('./outputMessage.jsx'),
    MessageState = require('./messageState.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {org: '', compressed: ''};
    },
    handleUpdateMessage: function(value) {
        var compressed = clipping(value.trim());

        this.setState({
            org: value,
            compressed: compressed
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