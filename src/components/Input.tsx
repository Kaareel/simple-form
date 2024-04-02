

interface Props {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input(props: Props) {
  return (
    <div>
        <input
          className={`from-input w-90 p-[16px] mb-4 font-semibold rounded-[10px] text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-blue-200 ${
            props.error ? "border-red-500" : "border-gray-300"
          }`}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        
    </div>
  );
}

export default Input;
