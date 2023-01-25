import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

const EditEvent = () => {
    const { event } = useRouteLoaderData('eventDetail');

    return (
        <EventForm method={'patch'} event={event} />
    )
}

export default EditEvent