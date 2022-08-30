const Input = ({
  type,
  value,
  id,
  placeholder,
  labelhandleChange,
  errors,
  label,
  className,
}) => {
  return (
    <div className="">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        className={className}
      />
    </div>
  );
};

export default Input;
