import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_RECIPES,
    ADD_RECIPE
} from "./actions";

const initialState = {
    recipes: [],
    categories: [],
    currentCategory: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        case UPDATE_RECIPES:
            return {
                ...state,
                recipes: [...action.recipes],
            };

        case ADD_RECIPES:
            return {
                ...state,
                recipes: [...action.recipes],
            };

        default:
            return state;
    }
};

export default reducer;