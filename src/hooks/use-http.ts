import React, { useCallback, useReducer } from "react"

interface httpInterface {
    status: string,
    data: string,
    error: string
}

interface httpAction {
    [x: string]: any
    type: string
}

function httpReducer(state: httpInterface, action: httpAction) {
    if (action.type === 'SEND') {
        return {
            status: 'pending',
            data: null,
            error: null
        }
    }
    if (action.type === 'SUCCESS') {
        return {
            status: 'completed',
            data: action.responseData,
            error: null
        }
    }
    if (action.type === 'ERROR') {
        return {
            status: 'error',
            data: null,
            error: action.errorMessage
        }
    }
    return state;
}

const useHttp = (requestFunction, startWithPending = false) => {
    // const [httpStatus, dispatch] = useReducer(httpReducer:httpInterface, {});
    const sendRequest = useCallback(async (reqParameter) => {
        try {
            const responseData = requestFunction(reqParameter);

        } catch (error) {

        }
    }, [requestFunction])

}

export { useHttp }