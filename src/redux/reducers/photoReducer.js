const { default: actionTypes } = require("../actions/actionTypes");

const initialState = {
    photos: [],
    isLoading: true
};

const photoReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false
            };
        case actionTypes.CLEAR_PHOTOS:
            return initialState;
        default:
            return state;
    }
};

export default photoReducer;