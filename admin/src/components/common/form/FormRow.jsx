const FormRow = ({ label, className, children }) => {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
};

export default FormRow;
