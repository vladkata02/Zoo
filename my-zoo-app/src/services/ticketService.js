import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/tickets';

export const ticketServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const tickets = Object.values(result);
    
        return tickets;
    };
    
    const create = async (ticketData) => {
        const result = await request.post(baseUrl, ticketData);
    
        console.log(result);
    
        return result;
    };

    return {
        getAll,
        create,
    };
}