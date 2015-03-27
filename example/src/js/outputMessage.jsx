var React = require('react'),
    ReactZeroClipboard = require('react-zeroclipboard');

module.exports = React.createClass({
    render(): any {
        return <div className="input-group">
            <input type="text"
                className="form-control"
                id="outputMessage"
                placeholder="Type your message"
                readOnly="true"
                value={this.props.value} />
            <ReactZeroClipboard text={this.props.value} className="input-group-addon">
                Copy
            </ReactZeroClipboard>
        </div>;
    }
});