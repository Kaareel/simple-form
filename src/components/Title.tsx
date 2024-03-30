interface Props{
    title: string
}

function Title(props: Props) {
    return <h1 className="mt-8 mx-auto mb-4 font-bold text-3xl text-white w-95">{props.title}</h1>
}

export default Title;