import React from 'react'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

const EventDetail = () => {
    const { event, events } = useRouteLoaderData('eventDetail');
    return (
        <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
        </>
    )
}

export default EventDetail

export const action = async ({ params, request }) => {
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: request.method
    });
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't delete the event" }, { status: 500 });
    }
    return redirect('/events')
}

export const loadEvent = async (id) => {
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't load event detail..." }, { status: 500 })
    }
    const data = await response.json();
    return data.event;
}

export const loadEvents = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't Load Events..." }, { status: 500 });
    }
    const data = await response.json();
    return data.events;
}


export const loader = async ({ params }) => {
    const id = params.eventId
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })
}