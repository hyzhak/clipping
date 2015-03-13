var React = require('react');

module.exports = React.createClass({
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