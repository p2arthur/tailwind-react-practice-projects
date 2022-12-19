import { useState } from "react";

function SubscribeInput({ onChange }) {
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(userEmail);
  };

  const handleChange = (event) => {
    setUserEmail(event.target.value);
  };

  return (
    <form
      className="flex flex-col items-center justify-between h-28 w-full md:flex-row md:h-11 md:w-full"
      onSubmit={handleSubmit}
      action=""
    >
      <input
        value={userEmail}
        onChange={handleChange}
        className="w-full p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 palceholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none rounded"
        type="email"
        placeholder="Enter your email address"
      />
      <button className=" md:w-52 w-96 h-10 px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:text-white duration-500 md:ml-5 ">
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeInput;
