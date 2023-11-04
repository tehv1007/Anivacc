import ErrorIcon from "./icons/ErrorIcon";

const FormRowError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="text-sm text-red-500 mt-2 ml-2">
      <div className="flex gap-2 items-center">
        <ErrorIcon className="icon icon-sm h-4 w-4" />
        {error.message}
      </div>
    </div>
  );
};

export default FormRowError;
