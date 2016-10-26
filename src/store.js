{ /* Runs our reducers and spits out our initial application state */ }
import { createStore } from 'redux';

import reducer from './reducer';

export default createStore( reducer );
