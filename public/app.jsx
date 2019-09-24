var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'poy',
            message: 'this a default message'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
            nameRef.value= '';

            if(typeof name === 'string' && name.length > 0) {
               alert(name);

                this.setState({
                name: name 
                });
            }
    },
    render: function() {
        var name = this.state.name;
        var message = this.props.message;
        return ( 
            <div >
                <h1> hello there {name} </h1> 
                <p>{message + '!!'}</p> 
                
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set name Print to the Screen</button>
                </form>
            </div>
        );
    }
});

var firstName = 'poy';

ReactDOM.render( 
    <Greeter name = {firstName} message="Message from prop"/>,
    document.getElementById('app')
);