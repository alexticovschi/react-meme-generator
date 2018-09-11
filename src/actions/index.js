export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
    const { memes } = json.data;

    // return an action object with an action type and actual information
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

// perform a fetch an return the response.json()
function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json());
}

// Return an inner function itself that has its own dispatch function, that allows us
// to dispatch the received JSON and handle the asynchronous behaviour of the API.
// With that dispatch function, grab the return json and use the receiveMemes function
// to return the actual object type
export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}