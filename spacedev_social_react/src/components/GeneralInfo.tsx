import { Link } from "react-router-dom";

export const GeneralInfo = () => {
  return (
    <p className="px-2">
      <Link to="#" className="text-xs hover:underline">
        About
      </Link>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Privacy
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Terms
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Advertising
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Ad Choices
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Cookies
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        More
      </a>
      <span> . </span>
      <a href="#" className="text-xs hover:underline">
        Faketokins © {new Date().getFullYear()}
      </a>
    </p>
  );
};
