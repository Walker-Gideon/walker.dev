import Button from "./Button";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form action="#">
      <div className="flex gap-5 w-3xl">
        <div className="w-full">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-b focus:outline-none text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b focus:outline-none text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
          />
        </div>
      </div>

      <div className="my-8 w-full">
        <input
          type="email"
          placeholder="Enter the subject:"
          className="w-full border-b focus:outline-none text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        />
      </div>

      <div className="mb-8">
        <textarea
          type="text"
          placeholder="Enter your message:"
          className="w-full h-40 border-b focus:outline-none text-sm font-bold p-1 placeholder:text-gray-400 placeholder:text-lg"
        ></textarea>
      </div>

      <Button onClick={handleSubmit}>Discuss Project</Button>
    </form>
  );
}

export default ContactForm;
