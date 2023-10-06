const APP_NAME = 'react-admin-panel';
const API_HOST : string = 'http://localhost:8000/';

export interface IConfig{
    APP_NAME: string;
    API_HOST: string;
}

const config = {
    APP_NAME: APP_NAME,
    API_HOST: API_HOST,
}

export {APP_NAME, API_HOST};
export default config;
