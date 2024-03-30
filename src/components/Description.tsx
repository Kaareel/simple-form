interface Props{
    description: string
}

function Description (props: Props){
    return <p className="text-white m-4 mx-auto font-medium leading-6 w-90">{props.description}</p>
}

export default Description