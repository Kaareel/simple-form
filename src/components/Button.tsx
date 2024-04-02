interface Props {
    text: string;
    type: string;

}

function Button (props: Props){
    return (
        <div>
            <button 
            type="submit"
            className="w-90 bg-bgButton text-white shadow-4xl rounded-[5px] p-[16px] font-semibold text-[0.938rem] leading-6 tracking-[1px] text-center cursor-pointer"
            >{props.text} </button>
        </div> 
    )
}

export default Button;