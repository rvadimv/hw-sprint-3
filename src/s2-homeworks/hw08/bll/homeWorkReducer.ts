import {UserType} from '../HW8'


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            /*const sorted = [...state].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (action.payload === 'up') {
                    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                } else if (action.payload === 'down') {
                    return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
                }
                return 0;
            });

            return sorted;*/

            return [...state].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                return action.payload === 'up'
                    ? nameA.localeCompare(nameB)
                    : nameB.localeCompare(nameA);
            });

            // need to fix
        }
        case 'check': {
            return state.filter(n => n.age > 18)
            // need to fix
        }
        default:
            return state
    }
}

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

