import NotFoundImage from "../assets/Screenshot-2024-02-22-164753.png";
const NotFound = () => {
  return (
    <div className="h-[90vh]">
      <img
        className="h-[90vh] w-[100%]"
        src={NotFoundImage}
        alt="NotFoundPage"
      />
    </div>
  );
};

export default NotFound;
