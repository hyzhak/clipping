var React = require('react');

module.exports = React.createClass({
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