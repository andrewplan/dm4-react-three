const BUY_STOCK = "account/BUY_STOCK";

const initialState = {
    balance: 1000
    , ownedStocks: []
};

export default function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case BUY_STOCK:
            return {
                balance: state.balance - action.stock.price
                , ownedStocks: [ ...state.ownedStocks, action.stock ]
            }
        default:
            return state;
    }
}

export function buyStock( stock ) {
    return { type: BUY_STOCK, stock };
}
