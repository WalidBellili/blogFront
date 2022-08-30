const Input = ({
  type,
  value,
  id,
  placeholder,
  labelhandleChange,
  errors,
  label,
}) => {
  return (
    <div className="">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} id={id} value={value} />
    </div>
  );
};

export default Input;
