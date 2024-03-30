interface Props {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  isInput: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isEmail: boolean;
}

function Input(props: Props) {

  return (
    <div>
      <input
        className={`w-90 p-[16px] mb-1 font-semibold rounded-5 text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-bgColor ${
          props.isInput ? "border-red-500" : "border-bgColor"
        }`}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.isInput && props.id === "name" && props.value === "" && (
        <p className="text-red-500 my-2">First Name cannot be empty</p>
      )}
      {props.isInput && props.id === "lastName" && props.value === "" && (
        <p className="text-red-500 my-2">Last Name cannot be empty</p>
      )}
      {props.isInput && props.id === "email" && (props.value === "" || !props.isEmail) &&(
        <p className="text-red-500 my-2">Email cannot be empty</p>
      )}
      {props.isInput && props.id === "password" && props.value === "" && (
        <p className="text-red-500 my-2">Password cannot be empty</p>
      )}
    </div>
  );
}

export default Input;
