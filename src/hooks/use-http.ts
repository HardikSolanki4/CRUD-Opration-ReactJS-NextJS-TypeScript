import { useCallback, useReducer } from "react"

// type typeHttpState = {
//     status: string,
//     data: string,
//     error: string
// }

type typeHttpAction =
    | {
        type: 'SEND'
    } | {
        type: 'SUCCESS'
        responseData: any
    } | {
        type: 'ERROR'
        errorMessage: any
    }

function httpReducer(state: any, action: typeHttpAction) {
    switch (action.type) {
        case 'SEND':
            return {
                status: 'PENDING',
                data: null,
                error: null
            }
            break;
        case 'SUCCESS':
            return {
                status: 'COMPLETED',
                data: action.responseData,
                error: null
            }
            break;
        case 'ERROR':
            return {
                status: 'ERROR',
                data: null,
                error: action.errorMessage
            }
            break;
        default:
            return state
            break;
    }
}

const useHttp = (requestFunction: (arg0: any) => any, startWithPending = false) => {
    const [httpStatus, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null
    });
    const sendRequest = useCallback(async function (reqParameter) {
        dispatch({ type: 'SEND' });
        try {
            const responseData = await requestFunction(reqParameter);
            await dispatch({ type: 'SUCCESS', responseData: responseData });
        } catch (error) {
            dispatch({ type: 'ERROR', errorMessage: error });
        }
    }, [requestFunction])
    return {
        sendRequest,
        ...httpStatus
    }
}

export { useHttp }