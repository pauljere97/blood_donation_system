// const BASE = 'http://localhost:6262'
const BASE = 'https://tightward-api.herokuapp.com'
const API = `${BASE}/api/bdsite/`

export const send_broadcast = (data) => {
    return {
        method: 'post',
        url: `${API}send_broadcast`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const register_donor = (data) => {
    return {
        method: 'post',
        url: `${API}register`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const register_patient = (data) => {
    return {
        method: 'post',
        url: `${API}register_patient`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const save_donation = (data) => {
    return {
        method: 'post',
        url: `${API}save_donation`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const send_message = (data) => {
    return {
        method: 'post',
        url: `${API}message_send`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}


export const fetch_data = () => {
    return {
        method: 'get',
        url: `${API}fetch_data`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : {}
    };
}

export const login = (data) => {
    return {
        method: 'post',
        url: `${API}login`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const verify_number = (data) => {
    return {
        method: 'post',
        url: `${API}verify_number`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

export const confirm_number = (data) => {
    return {
        method: 'post',
        url: `${API}confirm_number`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
}

