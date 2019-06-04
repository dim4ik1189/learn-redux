//the reducer takes in two things

//1. The action of what happened form actions.type
//2. A copy of current state

//reducer does the editing of state
const posts = (state = [], action) => {
    const i = action.index;
    if(action.type === 'INCREMENT_LIKES') {
        return [
            ...state.slice(0, i),
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1)
            ]
    } else {
        return state;
    }
};

export default posts;