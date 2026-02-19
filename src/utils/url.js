 export const baseUriBackend='http://localhost:4000/';

//  export const baseUriBackend = 'https://imgoribackend.toletpanda.com/';
// export const baseUriBackend = 'http://192.168.1.90:4003/';

// API Basery
export const API_BASE_URL = baseUriBackend + 'api/v1/';

// Authentication
export const SIGN_UP = API_BASE_URL + 'user/sign-up';
export const SIGN_IN = API_BASE_URL + 'user/sign-in';
//conversation 

export const GET_CONVERSATION = API_BASE_URL + 'conversation/get-conversation';

//message 
export const GET_MESSAGE = API_BASE_URL + 'message/get-message';
export const SEND_MESSAGE = API_BASE_URL + 'message/send-message';