import GalleryMenu from "../components/GalleryMenu";
import SearchBar from "../components/SearchBar";
import Image from "../components/Image";
function GalleryPage() {
  const images = [
    {
      src: "src/assets/image1.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image2.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image3.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image4.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image5.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image6.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image1.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image2.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
    {
      src: "src/assets/image4.jpg",
      title: "Abstract Painting",
      likes: 245,
      shares: 35,
    },
  ];

  const renderedImages = images.map((image) => (
    <Image image={images} src={image.src} />
  ));

  return (
    <div className="flex justify-center min-h-screen bg-cyan-50">
      <div className="bg-white p-6 m-3 mt-20 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <GalleryMenu />
        <div className="flex flex-col justify-between items-center space-y-5 md:flex-row md:space-x-0">
          <SearchBar />
          <button className="bg-black py-3 px-14 text-lg font-normal border border-black text-white rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black w-72 md:w-52">
            Upload
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {renderedImages}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
