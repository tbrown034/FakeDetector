const About = ({ showMainMenu }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 ">
      <div>About</div>
      <button
        onClick={showMainMenu}
        className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
};

export default About;
