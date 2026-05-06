"use client";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xjgjnkwb");

  if (state.succeeded) {
    return (
       <div className="w-full flex flex-col text-center items-center mb-80">
                <p>Thank you! I'll be in touch soon.</p><button onClick={reset}>Reset</button>
        </div>
    )
  }

  return (
    <form className="w-full flex flex-col text-left pl-8 pr-8" onSubmit={handleSubmit}>
      
        <label htmlFor="name">
          Full Name
        </label>
        <input id="name" name="name" required/>
      
        <label htmlFor="email">
          Email
        </label>
        <input id="email" name="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"/>

        {/* <label htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" required /> */}
      
       <input name="subject" type="hidden" value="New submission from {{ name }}" />

        <label htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" placeholder="Please include the type of session you are interested in." required/>
        
        <button type="submit">
          Send
        </button>
        <ValidationError errors={state.errors} />
    </form>
  );
}



export default ContactForm;