import { FaBookmark } from "react-icons/fa";

function Image({ image, src }) {
  const { title, likes, shares } = image;

  return (
    <div className="relative group">
      <img src={src} alt="" className="w-72" />
      <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <p className="text-sm">{}</p>
            <p className="text-xs">245 likes - 35 Shares</p>
          </div>
          <div className="flex items-center">
            <FaBookmark />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
