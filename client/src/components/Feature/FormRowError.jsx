import ErrorIcon from "./ErrorIcon";

const FormRowError = ({ error }) => {
  return (
    <>
      {error && (
        <div className="text-xs text-red-500 mt-2 ml-2">
          <div className="flex gap-2 items-center">
            <ErrorIcon className="icon icon-sm" />
            {error.message}
          </div>
        </div>
      )}
    </>
  );
};

export default FormRowError;
