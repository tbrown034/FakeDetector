// GameBoard.jsx
const GameBoard = ({ showMainMenu }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-200">
      <div>GameBoard</div>
      <button
        onClick={showMainMenu}
        className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
};

export default GameBoard;
