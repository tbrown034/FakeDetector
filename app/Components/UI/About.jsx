const About = ({ showMainMenu }) => {
  return (
    <>
      <div>About</div>
      <button
        onClick={showMainMenu}
        className="p-2 border border-black rounded-xl hover:bg-gray-200 active:bg-gray-400"
      >
        Back
      </button>
    </>
  );
};

export default About;
