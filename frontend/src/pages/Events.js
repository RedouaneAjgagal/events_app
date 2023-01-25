import React from 'react'
import EventsList from '../components/EventsList'
import { loadEvents } from './EventDetail'
import { useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'

const Events = () => {
    const {events} = useLoaderData();
    return (
        <div>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading..</p>}>
                <Await resolve={events}>
                    {(events) => <EventsList events={events} />}
                </Await>
            </Suspense>

        </div>
    )
}

export default Events

export const loader = () => {
    return defer({
        events: loadEvents()
    });
}