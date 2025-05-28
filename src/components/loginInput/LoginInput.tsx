import "./LoginInput.css";

export const LoginInput = ({
  id,
  name,
  placeholder,
  label,
  onChange,
  value,
  inputref,
  type,
  endAdornment
}: {
  id: string,
  name?: string,
  placeholder?: string,
  label: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  inputref?:any,
  type?:string,
  endAdornment?:React.ReactNode
}) => {
  return (
    <div className="form-group-login">
      <input
        className="login-field"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={inputref}
        required
      />
      <label className="login-label" htmlFor={id}>{label}</label>
      {endAdornment}
    </div>
  );
};
