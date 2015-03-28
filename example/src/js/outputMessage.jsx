var React = require('react'),
    ReactZeroClipboard = require('react-zeroclipboard');

module.exports = React.createClass({
    getText() {
        ga('send', 'event', 'copy', this.props.value);
        return this.props.value || '';
    },
    render(): any {
        return <div className="input-group">
            <input type="text"
                className="form-control"
                id="outputMessage"
                placeholder="Type your message"
                readOnly="true"
                value={this.props.value}/>
            <ReactZeroClipboard
                getText={this.getText}
                className="input-group-addon">
                Copy
            </ReactZeroClipboard>
        </div>;
    }
});