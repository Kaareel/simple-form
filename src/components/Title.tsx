interface Props{
    title: string
}

function Title(props: Props) {
    return <h1 className="mt-8 mb-4 font-bold text-3xl text-white w-90 lg:text-left text-center">{props.title}</h1>
}

export default Title;