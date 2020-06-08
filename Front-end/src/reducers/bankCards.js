import {PICK_CARD, SET_CARD, SET_CARDS} from "../constants/ActionTypes";

const initialState = {
    debit: {
        amount: 0,
        transactions: []
    },
    credit: {
        currentLimit: 0,
        amount: 0,
        transactions: []
    },
    pickedCard: "",
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CARDS:
            const cards = action.payload.reduce((acc, item) => {
                if (item.type in state) {
                    acc[item.type] = item;
                }
                return acc;
            }, {});
            return {...state, ...cards};
        case SET_CARD:
            return {...state, [action.payload.type]: action.payload};
        case PICK_CARD:
            return {...state, pickedCard: action.payload};
    }
    return state;
}
