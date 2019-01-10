import { actionTypes } from 'shared/notifications/notificationsConstants';

function notificationsReducer(state = [], action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                movies: action.payload
            };
        default:
            return state;
    }
}

export default notificationsReducer;
