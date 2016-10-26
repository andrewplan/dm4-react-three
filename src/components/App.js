import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setUser } from '../ducks/userDuck';

class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            userName: ''
        };
    }

    componentWillReceiveProps( props ) {
        console.log( 'Props is: ', props );
    }

    handleChange( event ) {
        this.setState( { userName: event.target.value } );
    }

    login() {
        if ( !this.state.userName ) {
            return alert( 'Enter a name you turkey!' );
        }

        this.props.dispatch( setUser( this.state.userName ) );
    }

    render() {
        return (
            <div>
                { this.props.user.loggedIn
                      ?
                          <h1>Welcome to your Stock App { this.props.user.userName }</h1>
                      :
                          <div>
                              <input
                                  onChange={ this.handleChange.bind( this ) }
                                  type="text"
                                  value={ this.state.userName }
                              />
                              <button onClick={ this.login.bind( this ) }>Login</button>
                          </div>
                }

                <Link to="stocks">Show Stocks</Link>
                { this.props.children }

            </div>
        );
    }
}

{ /* export default connect( state => ( { user: state.user } ) )( App ) */ };
export default connect( state => {
    return { user: state.user };
} )( App );
