import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

function NewsletterSignup() {
    const { Form, state, data } = useFetcher();
    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [state, data])
    return (
        <Form method="post" action='/newsletter' className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                name='email'
            />
            <button>Sign up</button>
        </Form>
    );
}

export default NewsletterSignup;