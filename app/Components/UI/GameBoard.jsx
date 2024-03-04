import { useState, useEffect } from "react";

const GameBoard = ({ showMainMenu }) => {
  const [photos, setPhotos] = useState([]);
  const [fetchMode, setFetchMode] = useState("lastFive"); // "lastFive" or "random"

  useEffect(() => {
    const fetchPhotos = async () => {
      const apiKey = "fyccVmzYh7A94vkFvddWQhelmszjSwhw4g6REOSn"; // Use your actual API key
      let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

      if (fetchMode === "lastFive") {
        // Calculate date range for the last 10 days as a buffer
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 9);
        const formatISODate = (date) => date.toISOString().split("T")[0];
        url += `&start_date=${formatISODate(
          startDate
        )}&end_date=${formatISODate(endDate)}`;
      } else if (fetchMode === "random") {
        url += "&count=5"; // Fetch 5 random entries
      }

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        // For "lastFive", filter to only images and slice to the last 5. For "random", no need to slice as count=5
        const images = (
          fetchMode === "lastFive"
            ? data.filter((item) => item.media_type === "image").slice(0, 5)
            : data
        ).filter((item) => item.media_type === "image");
        setPhotos(images);
      } else {
        console.error("Failed to fetch photos.");
      }
    };

    fetchPhotos();
  }, [fetchMode]); // Re-fetch when fetchMode changes

  return (
    <div className="flex flex-col items-center justify-center p-4 overflow-auto">
      <div className="mb-4 text-2xl font-bold">
        NASA's Astronomy Picture of the Day
      </div>
      <div>
        <button
          onClick={() => setFetchMode("lastFive")}
          className="p-2 mr-4 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
        >
          Last 5 Images
        </button>
        <button
          onClick={() => setFetchMode("random")}
          className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
        >
          Random Images
        </button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-64 h-auto gap-2 p-4 bg-white border-2 border-black rounded-lg shadow"
          >
            <h3 className="font-semibold text-center">{photo.title}</h3>
            <img
              src={photo.url}
              alt={photo.title}
              className="object-cover w-full h-40 rounded"
            />
          </div>
        ))}
      </div>
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
