interface Props{
    description: string
}

function Description (props: Props){
    return <p className="text-white m-4 lg:text-left text-center font-medium w-90">{props.description}</p>
}

export default Description