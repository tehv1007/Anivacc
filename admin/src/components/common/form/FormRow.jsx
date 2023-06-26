const FormRow = ({ label, className, children }) => {
  return (
    <div className={`form-control w-full ${className} `}>
      <label className="label mb-5 text-sm lg:text-md">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
};

export default FormRow;
