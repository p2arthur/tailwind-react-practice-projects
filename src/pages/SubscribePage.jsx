import SubscribeInput from "../components/SubscribeInput";
import { useState, useEffect } from "react";

import { postEmailRequest, getEmailRequest } from "../model";

function SubscribePage() {
  const [userEmail, setUserEmail] = useState("");
  const [emailsArray, setEmailsArray] = useState([]);

  const handleEmail = async (value) => {
    setUserEmail(value);
    await postEmailRequest(userEmail);
    console.log("email:", userEmail);
  };

  return (
    //Bakcground container
    <div className="flex items-center justify-center h-screen m-auto bg-zinc-700">
      {/* card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* Flex Container */}
        <div className="flex flex-col  md:h-80 md:flex-row rounded-l-xl">
          {/* Image */}
          <img
            className="object-cover rounded-xl h-80  md:rounded-l-xl md:rounded-r-none transform md:h-full hover:scale-105 hover:rounded-xl duration-200"
            src="src\assets\image.jpg"
            alt=""
          />
          {/* Content */}
          <div className="flex flex-col justify-betweenp-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for Diet&Fitness
              newsletter
            </p>
            <div className="flex max-w-full flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <div className="flex flex-col justify-start items-start">
                <SubscribeInput onChange={handleEmail} />
                {userEmail ? (
                  <p className=" text-white leading-5 my-3 ">
                    Thanks for subscribing: <br /> {userEmail}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePage;
