interface Props {
  text: string;
}

function Trial(props: Props) {
  return (
    <p className="bg-bgText p-1 lg:rounded-[10px] md:shadow-3xl w-full text-white my-4 mx-auto">
      {props.text}
    </p>
  );
}

export default Trial;
