import React from 'react'
import EventItem from '../components/EventItem';
import { json, useRouteLoaderData } from 'react-router-dom';

const EventDetail = () => {
    const { event } = useRouteLoaderData('eventDetail');
    return (
        <EventItem event={event} />
    )
}

export default EventDetail


export const loader = async ({ params }) => {
    const id = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't load event detail..." }, { status: 500 })
    }
    const data = await response.json();
    return data;
}

