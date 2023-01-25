import React from 'react'
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

const NewEvent = () => {
    return (
        <EventForm method={"post"} />
    )
}

export default NewEvent


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = {
        title: formData.get('title'),
        image: formData.get('image'),
        date: formData.get('date'),
        description: formData.get('description')
    }
    const url = `http://localhost:8080/events`;
    const response = await fetch(url, {
        method: request.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw json({ errorMsg: "Something went wrong. Couldn't post the event" }, { status: 500 })
    }
    return redirect('/events')
}