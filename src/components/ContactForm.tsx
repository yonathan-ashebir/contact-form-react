import { useForm } from 'react-hook-form';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    // In a real application, you would send this data to a server
    reset();
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2 className="form-title">Contact Us</h2>
        <p className="form-subtitle">We'd love to hear from you. Send us a message!</p>

        {isSubmitSuccessful && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name <span className="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              className={`form-input ${errors.name ? 'form-input-error' : ''}`}
              placeholder="Enter your name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />
            {errors.name && (
              <span className="error-message" role="alert">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`form-input ${errors.email ? 'form-input-error' : ''}`}
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <span className="error-message" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
              placeholder="Enter your message"
              rows={5}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            />
            {errors.message && (
              <span className="error-message" role="alert">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


