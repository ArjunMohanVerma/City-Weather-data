const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center text-red-400 text-lg mt-10">
      {message}
    </div>
  );
};

export default ErrorMessage;