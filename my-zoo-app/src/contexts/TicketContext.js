import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ticketServiceFactory } from '../services/ticketService';

export const TicketContext = createContext();

export const TicketProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const ticketService = ticketServiceFactory();

    useEffect(() => {
        ticketService.getAll()
            .then(result => {
                setTickets(result)
            })
    }, []);

    const createTicket = async (data) => {
        const newTicket = await ticketService.create(data);

        setTickets(state => [...state, newTicket]);

        navigate('/tickets');
    };


    const contextValues = {
        tickets,
        createTicket
    };

    return (
        <TicketContext.Provider value={contextValues}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTicketContext = () => {
    const context = useContext(TicketContext);

    return context;
};