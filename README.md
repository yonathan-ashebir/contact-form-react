# Contact Form - React with useForm Hook

A modern, responsive contact form built with React and TypeScript, demonstrating the usage of the `useForm` hook from `react-hook-form` for efficient form state management and validation.

## 🚀 Features

- **Form Validation**: Real-time validation for all required fields
- **Email Validation**: Validates email format using regex pattern
- **Error Messages**: Clear, user-friendly error messages for invalid inputs
- **Loading State**: Visual feedback during form submission
- **Success Message**: Confirmation message after successful submission
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessible**: Proper ARIA labels and semantic HTML

## 📋 Form Fields

1. **Name** (Required)
   - Minimum 2 characters
   - Required field validation

2. **Email** (Required)
   - Valid email format validation
   - Required field validation

3. **Message** (Required)
   - Minimum 10 characters
   - Required field validation

## 🛠️ Technologies Used

- **React 19.2.0**: Latest version of React for building user interfaces
- **TypeScript**: Type-safe JavaScript for better code quality
- **Vite**: Fast build tool and development server
- **react-hook-form**: Powerful form library with `useForm` hook for form management
- **CSS3**: Modern styling with animations and responsive design

## 📦 Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd contact-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. Preview the production build with:

```bash
npm run preview
```

## 📚 Understanding the useForm Hook

The `useForm` hook from `react-hook-form` is used to manage form state, validation, and submission. Here's how it's implemented:

### Key Features of useForm:

1. **Form State Management**: Automatically manages form field values
2. **Validation**: Built-in validation with customizable rules
3. **Error Handling**: Automatic error state management
4. **Performance**: Optimized re-renders only when necessary
5. **TypeScript Support**: Full type safety with TypeScript

### Implementation Example:

```typescript
const {
  register,           // Function to register form inputs
  handleSubmit,      // Function to handle form submission
  formState: { errors, isSubmitting, isSubmitSuccessful }, // Form state
  reset,             // Function to reset form after submission
} = useForm<FormData>();
```

### Registering Form Fields:

```typescript
<input
  {...register('name', {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
  })}
/>
```

### Validation Rules:

- **Required**: Ensures field is not empty
- **Pattern**: Validates against regex (e.g., email format)
- **MinLength**: Ensures minimum character count
- **Custom Messages**: User-friendly error messages

## 🎨 UI/UX Features

- **Gradient Background**: Beautiful purple gradient background
- **Card Design**: Clean white card with shadow for the form
- **Smooth Animations**: Slide-up animation on load, fade-in for errors
- **Loading Spinner**: Visual feedback during form submission
- **Success State**: Green success message after submission
- **Error Highlighting**: Red border and error text for invalid fields
- **Responsive Layout**: Adapts to different screen sizes

## 📁 Project Structure

```
contact-form/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx      # Main contact form component
│   │   └── ContactForm.css     # Styles for the contact form
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # App styles
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

## ✅ Validation Rules

| Field | Validation Rules |
|-------|----------------|
| Name | Required, Minimum 2 characters |
| Email | Required, Valid email format (regex pattern) |
| Message | Required, Minimum 10 characters |

## 🧪 Testing

The form includes comprehensive validation:

- **Empty Field Validation**: Prevents submission with empty required fields
- **Email Format Validation**: Ensures valid email address format
- **Minimum Length Validation**: Enforces minimum character requirements
- **Real-time Feedback**: Errors display as user types (after first submission attempt)

## 🎯 Key Concepts Demonstrated

- **React Hooks**: Using `useForm` hook for form management
- **Form Validation**: Client-side validation with custom rules
- **TypeScript**: Type-safe form data handling
- **Error Handling**: User-friendly error messages
- **State Management**: Efficient form state management with react-hook-form
- **Responsive Design**: Mobile-first responsive layout
- **Accessibility**: ARIA labels and semantic HTML

## 📝 Form Submission

Currently, the form logs the submitted data to the console and shows a success message. In a production environment, you would:

1. Send the form data to a backend API
2. Handle server-side validation
3. Display appropriate success/error messages
4. Optionally redirect the user after successful submission

Example implementation:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      // Handle success
    }
  } catch (error) {
    // Handle error
  }
};
```

## 🌐 Browser Compatibility

This application works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- React 19+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project is created for educational purposes as part of the A2SV curriculum.

## 👨‍💻 Author

Created as part of the A2SV (Africa to Silicon Valley) program.

---

**Note**: This project demonstrates the proper usage of the `useForm` hook from `react-hook-form` library, which simplifies form state management and validation in React applications.
