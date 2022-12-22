function GalleryMenu() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
      <div className="group">
        <a href="#">Vector</a>
        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Illustrations</a>
        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Images</a>
        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Icons</a>
        <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
      </div>
    </div>
  );
}

export default GalleryMenu;
