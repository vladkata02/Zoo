import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';

export const postServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);
    
        return posts;
    };
    
    const getOne = async (postId) => {
        const result = await request.get(`${baseUrl}/${postId}`);
    
        return result;
    };
    
    const create = async (postData) => {
        const result = await request.post(baseUrl, postData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (postId, data) => request.put(`${baseUrl}/${postId}`, data);

    const deletePost = (postId) => request.delete(`${baseUrl}/${postId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePost,
    };
}