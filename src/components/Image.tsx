interface Props{
    src: string
    srcSet: string

}

function Image(props: Props) {
    return (
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={props.src}
        srcSet={props.srcSet}
        alt="main"
      />
    );
  }
  
  export default Image;