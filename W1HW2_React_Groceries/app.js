/* console.log (items); */

class App extends React.Component {
    state = {
        items: items,
        name: '',
        brand: '',
        units: '',
        quantity: '',
        isPurhased: false
    }

    handleChange = (e) => {
        this.setState ({ [e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault ();
        const newItem = {
            name: this.state.name,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity
        }
        this.setState ({
            items: [ newItem, ...this.state.items],
            name: '',
            brand: '',
            units: '',
            quantity: ''
        })

    }

    render () {
        return (
            <div>
                <h1>Grocery List</h1>
                <ul>
                    {this.state.items.map (item => {
                        return (
                            <li>{item.name } {item.brand } {item.units } Quantity: {item.quantity }</li>)
                    })}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:  </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of item' />
                    <br />
                    <label htmlFor="brand">Brand:  </label>
                    <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand" placeholder='brand of item' />
                    <br />
                    <label htmlFor="units">Unit:  </label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} id="units" placeholder='units of item' />
                    <br/>
                    <label htmlFor="quantity">Quantity:  </label>
                    <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity" placeholder='quantity of item' />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

ReactDOM.render (
    <App />, document.getElementById('container')
)

/* This is a test !! haha */