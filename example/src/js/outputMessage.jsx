var React = require('react'),
    ReactZeroClipboard = require('react-zeroclipboard');

module.exports = React.createClass({
    sendStatistics() {
          ga('send', 'event', 'copy', this.props.value);
    },
    render(): any {
        return <div className="input-group">
            <input type="text"
                className="form-control"
                id="outputMessage"
                placeholder="Type your message"
                readOnly="true"
                value={this.props.value} />
            <ReactZeroClipboard text={this.props.value} className="input-group-addon"
                onCopy={this.sendStatistics}>
                Copy
            </ReactZeroClipboard>
        </div>;
    }
});