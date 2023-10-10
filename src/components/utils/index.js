import "./index.css";
const Overlay = ({ setSidebar }) => {
  return (
    <div
      onClick={() => {
        setSidebar(false);
      }}
      className="overlay"
    ></div>
  );
};
export { Overlay };
