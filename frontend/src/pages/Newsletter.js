import NewsletterSignup from '../components/NewsletterSignup';

function Newsletter() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Signup in our newsletter</h1>
            <NewsletterSignup />
        </div>
    )
}

export default Newsletter;

export const action = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    // send to the backend...
    return { email: email, message: 'Email has been added successfully!' };
}