var React = require('react');

module.exports = React.createClass({
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