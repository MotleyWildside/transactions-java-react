import {
    CREATE_MEETING,
    DELETE_MEETING,
    GET_MEETING,
    GET_MEETINGS,
    PICK_CARD, SET_CARD,
    SET_CARDS
} from "../constants/ActionTypes";
import Controller from "../ApiService/ApiService";

// export function createMeeting(payload) {
//
//     Controller.post("/create-meeting", payload);
//
//     return {
//         type: CREATE_MEETING,
//         payload: payload
//     };
// }
//
// export function getMeetings(payload) {
//     return {
//         type: GET_MEETINGS,
//         payload: payload
//     };
// }
//
// export function deleteMeeting(payload) {
//     Controller.delete("/delete-meeting", payload);
//
//     return {
//         type: DELETE_MEETING,
//         payload: payload
//     };
// }

export function setCards(payload) {
    return {
        type: SET_CARDS,
        payload: payload
    };
}

export function setCard(payload) {
    return {
        type: SET_CARD,
        payload: payload
    };
}

export function pickCard(payload) {
    return {
        type: PICK_CARD,
        payload: payload
    };
}

