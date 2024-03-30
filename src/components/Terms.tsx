interface Props {
    text: string;
    segment: string;

}


function Terms (props: Props) {
    return <p className="text-termsText text-center pt-[10px] w-80">{props.text} <span className="text-[#FF7A7A] font-bold w-80">{props.segment}</span></p>
}

export default Terms;