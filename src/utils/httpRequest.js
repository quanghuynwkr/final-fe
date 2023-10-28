import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://finalgraduate-nestjs.vercel.app',
});

export const get = async (path) => {
    const response = await httpRequest.get(path);
    return response.data;
};

export default httpRequest;

