import * as actions from './actiontype';

export let bugAdded= description=>({
    type: actions.BUG_ADDED,
    payload:{
        description: description
    }
});

export const bugResolved = id =>({
    type: actions.BUG_RESOLVED,
    payload:{
        id
    }
});