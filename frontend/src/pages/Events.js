import React from 'react'
import EventsList from '../components/EventsList'
import { json, useLoaderData } from 'react-router-dom'

const Events = () => {
    const events = useLoaderData();
    return (
        <div>
            <EventsList events={events} />
        </div>
    )
}

export default Events

export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't Load Events..." }, { status: 500 });
    }
    const data = await response.json();
    return data.events;
}