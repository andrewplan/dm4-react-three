import React from 'react';
import { connect } from 'react-redux';

import { getStockById } from '../services/stockService';
import { buyStock } from '../ducks/accountDuck';

class Stock extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            stock: {}
        };
    }

    componentWillMount() {
        this.setState( { stock: getStockById( this.props.params.id ) } );
    }

    componentWillReceiveProps( props ) {
        console.log( 'Props is: ', props );
    }

    buyStock() {
        if ( !this.props.user.loggedIn ) {
            return alert( 'Log in please' );
        }
        this.props.dispatch( buyStock( this.state.stock ) );
    }

    render() {
        return (
            <div>
                <h3>{ this.state.stock.company }</h3>
                <h3>{ this.state.stock.price }</h3>

                <p>{ this.state.stock.about }</p>

                <button onClick={ this.buyStock.bind( this ) }>
                    Buy this stock!
                </button>
            </div>
        )
    }
}

export default connect( state => {
    return { user: state.user, account: state.account }
} )( Stock );
