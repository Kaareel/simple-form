interface Props{
    src: string

}

function Image(props: Props) {
    return (
      <img
        className="h-screen"
        src={props.src}
        alt="main"
      />
    );
  }
  
  export default Image;