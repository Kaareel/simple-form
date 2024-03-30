interface Props {
    text: string;
    onClick: () => void;

}

function Button (props: Props){
    return (
        <div>
            <button 
            className=" bg-bgButton text-white shadow-4xl rounded-[5px] p-[16px] font-semibold text-[0.938rem] leading-6 tracking-[1px] text-center cursor-pointer"
            onClick={props.onClick}
            >{props.text} </button>
        </div> 
    )
}

export default Button;