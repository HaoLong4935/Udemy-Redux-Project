import {
    INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED
    , CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILED,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILED
} from '../action/types';
import axios from 'axios';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};


//FETCH
export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest())
        try {
            const res = await axios.get("http://localhost:8080/users/all")
            const data = res.data && res ? res.data : []
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUserFailed())
        }
    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        userData: data
    }
}

export const fetchUserFailed = () => {
    return {
        type: FETCH_USER_FAILED
    }
}

// CREATE

export const createUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest())
        try {
            const res = await axios.post("http://localhost:8080/users/create", { email, password, username })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess())
                dispatch(fetchAllUser())
            }
        } catch (error) {
            console.log(error)
            dispatch(createUserFailed())
        }
    }
}

export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    }
}

export const createUserFailed = () => {
    return {
        type: CREATE_USER_FAILED
    }
}

// DELETE
export const deleteRedux = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserRequest())
        try {
            const res = await axios.post(`http://localhost:8080/users/delete/${id}`)
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUser())
            }

        } catch (error) {
            console.log(error)
            dispatch(deleteUserFailed())
        }
    }
}
export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    }
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}

export const deleteUserFailed = () => {
    return {
        type: DELETE_USER_FAILED
    }
}