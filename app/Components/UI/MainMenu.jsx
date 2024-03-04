// MainMenu.jsx
const MainMenu = ({ showGameBoard, showAbout }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col items-center gap-2">
        <i className="text-3xl fa-solid fa-magnifying-glass"></i>
        <h1 className="text-3xl">FakeDetector</h1>
        <h3>Test your ability to identify actual fake news.</h3>
      </div>
      <div className="flex gap-4">
        <button
          onClick={showGameBoard}
          className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
        >
          Play
        </button>
        <button
          onClick={showAbout}
          className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
