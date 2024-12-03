const initState = {
    themeId: 1,
};
export type InitStateType = typeof initState;

export const themeReducer = (state: InitStateType = initState, action: changeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) // fix any

export type changeThemeIdType = ReturnType<typeof changeThemeId>