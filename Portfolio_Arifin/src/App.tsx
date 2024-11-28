import React from "react";

export default function App() {
  function handlesubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form Submitted");

    const form = event.target as HTMLFormElement;

    const output = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      queryType: form.queryType.value,
      message: form.message.value,
      consent: form.consent.value,
    };

    console.log(output);
  }
  return (
    <div className="bg-normal-white rounded-xl p-6 w-full">
      <div>
        <h1 className="text-xl font-lg mt-0 mb-3">Contact Us</h1>
        <form onSubmit={handlesubmit}>
          {/* first & last name */}
          <div className="flex gap-3 flex-col sm:flex-row mb-2 ">
            <div className="col-wrapper">
              <label className="input-title mb-0" htmlFor="firstName">
                First Name *
              </label>
              <input id="firstName" type="password" required />
            </div>
            <div className="col-wrapper">
              <label className="input-title mb-0" htmlFor="lastName">
                Last Name *
              </label>
              <input id="lastName" type="text" required />
            </div>
          </div>
          {/* email */}
          <div className="col-wrapper mb-2">
            <label className="input-title mb-0" htmlFor="emailAdress">
              Email Address *{" "}
            </label>
            <input id="email" type="email" required />
          </div>
          {/* query */}
          <div className="col-wrapper mb-2 items-start font" id="queryType">
            <label className="input-title mb-2" htmlFor="querytype">
              Query Type:
            </label>
            {/* choices */}
            <div className="flex gap-4 w-full flex-col sm:flex-row">
              <div className="radio-wrapper">
                <input
                  className="ml-2 opacity-0"
                  type="radio"
                  value={"general"}
                  id="generalEnquiry"
                  name="queryType"
                />
                <label className="ml-2" htmlFor="generalEnquiry">
                  General Enquiry
                </label>
              </div>
              <div className="radio-wrapper ">
                <input
                  className="ml-2"
                  type="radio"
                  value={"support"}
                  id="supportRequest"
                  name="queryType"
                />
                <label className="ml-2" htmlFor="supportRequest">
                  Support Request
                </label>
              </div>
            </div>
          </div>
          {/* message */}
          <div className="col-wrapper mb-2">
            <label className="mb-1 input-title" htmlFor="message">
              Message *{" "}
            </label>
            <textarea name="message" id="message" required></textarea>
          </div>
          {/* consent */}
          <div className="flex items-center mb-4">
            <input name="consent" type="checkbox" id="consent" required />
            <label className="ml-2" htmlFor="Consent">
              I consent to being contacted by the team*
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-center bg-emerald-600 rounded-md text-white py-2 hover:bg-medium-green"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
