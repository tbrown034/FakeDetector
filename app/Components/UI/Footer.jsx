const Footer = () => {
  return (
    <footer className="w-full py-4 mt-auto ">
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <p className="text-sm text-gray-700">
          © {new Date().getFullYear()} FakeDetector. All rights reserved.
        </p>
        <div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-700 hover:text-gray-900"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-700 hover:text-gray-900"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
``;
