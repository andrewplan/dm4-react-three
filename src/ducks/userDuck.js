const SET_USER =  'user/SET_USER';
const LOGOUT = 'user/LOGOUT';

const initialState = {
    userName: ''
    , loggedIn: false
};

export default function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case SET_USER:
            return { userName: action.userName, loggedIn: true };
        case LOGOUT:
            return initialState;
        case 'CHANGE_NAME':
            return { userName: action.name, loggedIn: true };
        default:
            return state;
    }
}

export function setUser( userName ) {
    return { type: SET_USER, userName };
}

export function logout() {
    return { type: LOGOUT };
}
