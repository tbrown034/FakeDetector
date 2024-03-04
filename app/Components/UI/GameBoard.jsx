import { useState, useEffect } from "react";

const GameBoard = ({ showMainMenu }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const apiKey = "fyccVmzYh7A94vkFvddWQhelmszjSwhw4g6REOSn";
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 5); // Set start date to 5 days ago
      const endDate = new Date(); // Today's date for end date

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${
          startDate.toISOString().split("T")[0]
        }&end_date=${endDate.toISOString().split("T")[0]}`
      );

      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
      } else {
        // Handle errors here, e.g., show a message to the user
        console.error("Failed to fetch photos");
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 overflow-auto ">
      <div className="mb-4 text-2xl font-bold">
        NASA's Astronomy Picture of the Day
      </div>
      {photos.map((photo, index) => (
        <div
          key={index}
          className="flex flex-wrap w-full p-4 my-4 rounded-lg shadow"
        >
          <h3 className="mb-2 text-lg font-semibold line-clamp-3">
            {photo.title}
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={photo.url}
              alt={photo.title}
              className="object-cover w-full h-full rounded"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {photo.explanation}
          </p>
        </div>
      ))}
      <button
        onClick={showMainMenu}
        className="p-2 mt-4 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
};

export default GameBoard;
