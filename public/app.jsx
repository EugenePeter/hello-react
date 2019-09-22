var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'poy'
        };
    },
    render: function() {
        var name = this.props.name;
        return(
            <div>
                <h1> hello my {name} </h1>
                <p> i love you my poy </p>
            </div>
        );
    }
});

var lablabnako = 'poy';

ReactDOM.render( 
    <Greeter name={lablabnako}/>,
    document.getElementById('app')
);