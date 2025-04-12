import Button from "./Button";

function ContactForm() {
  return (
    <form action="#">
      <div className="flex gap-5 w-3xl">
        <div className="w-full">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-b focus:outline-none text-sm p-1 placeholder:text-white placeholder:text-lg"
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b focus:outline-none text-sm p-1 placeholder:text-white placeholder:text-lg"
          />
        </div>
      </div>

      <div className="my-8 w-full">
        <input
          type="email"
          placeholder="Enter the subject:"
          className="w-full border-b focus:outline-none text-sm p-1 placeholder:text-white placeholder:text-lg"
        />
      </div>

      <div className="mb-8">
        <textarea
          type="text"
          placeholder="Enter your message:"
          className="w-full h-40 border-b focus:outline-none text-sm p-1 placeholder:text-white placeholder:text-lg"
        ></textarea>
      </div>

      <Button>Discuss Project</Button>
    </form>
  );
}

export default ContactForm;
