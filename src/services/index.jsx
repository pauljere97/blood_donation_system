

// const BASE = 'http://localhost:6262'
const BASE = 'https://tightward-api.herokuapp.com'
const API = `${BASE}/api/bdsite/`

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


// export const auto_login = () => {
//     return {
//         method: 'get',
//         url: `${API}auth/get-session`,
//         headers: { 
//             'refreshToken': Session({},"GET").refreshToken, 
//             'accessToken': Session({},"GET").accessToken, 
//             'Content-Type': 'application/json'
//         },
//         data : {}
//     };
// }
// export const register_new_user = (data) => {
//     return {
//         method: 'post',
//         url: `${API}user/register`,
//         headers: {'Content-Type': 'application/json'},
//         data : data
//     };
// }

// export const login = (data) => {
//     return {
//         method: 'post',
//         url: `${API}auth/login`,
//         headers: {'Content-Type': 'application/json'},
//         data : data
//     };
// }
// export const logout = (data) => {
//     return {
//         method: 'post',
//         url: `${API}auth/logout`,
//         headers: {'Content-Type': 'application/json'},
//         data : data
//     };
// }

// export const get_all_products = () => {
//     return `${API}products/get-all`
// }

// export const create_shop = (data) => {
//     return {
//         method: 'post',
//         url: `${API}shops/create`,
//         headers: { 
//           'x-refresh': Session({},"GET").refreshToken, 
//           'Authorization': Session({},"GET").accessToken, 
//           'Content-Type': 'application/json'
//         },
//         data : data
//     };
// }

// export const get_all_shops = () => {
//     return {
//         method: 'get',
//         url: `${API}shops/get-all`,
//         headers: { }
//       };
// }

// export const get_shop = (id) => {
//     return {
//         method: 'get',
//         url: `${API}shops/get-single/${id}`,
//         headers: { }
//     };
// }

// export const create_post = (data) => {
//     return {
//         method: 'post',
//         url: `${API}products/create`,
//         headers: { 
//           'x-refresh': '', 
//           'Authorization': 'Bearer LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDV3dJQkFBS0JnSE5kRi80UVU1TU1GYXZ5b295ZWlPRWp2V1dub0RCcnpiaVc2OXZwM0tTbnhBeE9jVTA5CmY4OVR3QlZNZGw3YlQzMTM3S0xYSXpQT3k4SXhNMTErNzBWaW5uODM1LzFlZWg4WUxwUTNuSmliWXlQanc0Yy8KL0ZjMmhkaEQ2Um8zb2FTblp1Y215K2plR1NQUzFjQmdtOFU5RHc5UGpGNHhPNlI1OEZKK2FyQUpBZ01CQUFFQwpnWUJWZ3RHLzd0WWtEemNaSjFhNXFPR0pFSGJaSFBFdU14cGdFdTV0S2VIMDRxMzgrVUFlb3RGVUdwNHNxMnFxClVTR1F2UTNZZm1PSGlXZWJYK0RWRXJ2RHlwcDA4alQ3VlMvQlpQbkRNYzVrSldRZTROWmRvZVAxOXlSblpnb3UKbFhiNXhZTklqVW5UeXNhVG5SYW9Sd0JOYjVub0NmbGZham5nMFdHZng4czRBUUpCQU5vTG1iYjVKdnZabWhJVgpPajEySGtGOU96RDhwN0ZBWUdicnovNEVybGVnR0J1enc4dkowakYyR1R0WTgvT3duaVQ1b1pndWpTOFFNTW1XCldNendtSWtDUVFDSGNkdFVUQ2lvWE9JTE54cXk0ZmhGVFZBa0ZVbGFyamlWYmt6UGlIZ2xLT0I0bmdRZmluZWQKcGJ6TXM0WTJJVUErRDlnckcwZy9MWEx2Rk94ZnhIdUJBa0VBaXlyZVNFZUwxekVTd2pua096ZzVwV2p0cjUyQwoxb0lWUlh0Ni9GRTJpVno0Smk0OWFNTitzZTBEdTdwUnNoYm5TUWcvV0dkVjIxVUZIcFVrUm1IRnFRSkFORjYxCnEzWjNFZ0kzOUpZdDRKUzI1alRxazhrWFA5UzFWREg5eVJDL1E3NzJiQ3pNODFVYXd2M2VibGZMd1FwQ1NMemYKbkd0RUdBbCtzeXFuNnErU0FRSkFERDZOVDV1TFM0WTRWWHVQT0lDWU9rTlg2RkxVbmYrTWRVb3ByZnNDdTU0Qgo1OFNBZUh0c0pmZ3hBS3BBaVA0UmNTT0l2UlE4UHZxak10RVA3d2xQVHc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ', 
//           'Content-Type': 'application/json'
//         },
//         data : data
//     };
// }

// export const edit_post = (data) => {
//     return {
//         method: 'post',
//         url: `${API}products/update`,
//         headers: {},
//         data : data
//     };
// }

// export const get_shop_products = (id) => {
//     return {
//         method: 'get',
//         url: `${API}products/get-shop-products/${id}`,
//         headers: { }
//     };
// }

// export const view_product = (id) => {
//     return {
//         method: 'get',
//         url: `${API}products/get-single/${id}`,
//         headers: { }
//     };
// }

// export const delete_shop = (id) => {
//     return {
//         method: 'delete',
//         url: `${API}shops/delete/${id}`,
//         headers: { }
//     };
// }

// export const delete_product = (id) => {
//     return {
//         method: 'delete',
//         url: `${API}products/delete/${id}`,
//         headers: { }
//     };
// }