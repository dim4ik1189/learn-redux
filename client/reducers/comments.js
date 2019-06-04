//the reducer takes in two things

//1. The action of what happened form actions.type
//2. A copy of current state

const postComments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case 'REMOVE_COMMENT':
            const i = action.commentIndex;
            return [
                ...state.slice(0, i),
                ...state.slice(i + 1)
            ];
        default:
            return state;
    }
};

const comments = (state = [], action) => {
    if(action.postId) {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};

export default comments;