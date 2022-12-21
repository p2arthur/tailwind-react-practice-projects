import SubscribeInput from "../components/SubscribeInput";
import { useState, useEffect } from "react";

import UseEmailsContext from "../hooks/use-emails-context";

function SubscribePage() {
  const [userEmail, setUserEmail] = useState("");

  const { fetchEmailList, postToEmailList, emailList } = UseEmailsContext();

  useEffect(() => {
    fetchEmailList();
  }, [fetchEmailList]);

  const handleCheck = (value) => {
    return emailList.some((userEmail) => userEmail.email === value);
  };

  const handleEmailSend = async (value) => {
    console.log(userEmail);
    if (handleCheck(value)) {
      console.log("Error: This email is already registered");
      return;
    }

    if (value === "") {
      console.log("Error: Please insert a valid email");
      return;
    }

    setUserEmail(value);
    await postToEmailList(value);
  };

  return (
    //Bakcground container
    <div className="flex items-center justify-center h-screen m-auto bg-zinc-700">
      {/* card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl mt-24">
        {/* Flex Container */}
        <div className="flex flex-col  md:h-80 md:flex-row rounded-l-xl">
          {/* Image */}
          <img
            className="object-cover rounded-xl h-80  md:rounded-l-xl md:rounded-r-none transform md:h-full hover:scale-105 hover:rounded-xl duration-200"
            src="src\assets\image.jpg"
            alt=""
          />
          {/* Content */}
          <div className="flex flex-col justify-betweenp-6 mt-5 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for Diet&Fitness
              newsletter
            </p>
            <div className="flex max-w-full flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <div className="flex flex-col justify-start items-start">
                <SubscribeInput onChange={handleEmailSend} />
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
