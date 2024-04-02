interface Props {
  text: string;
  segment: string;
}

function Trial(props: Props) {
  return (
    <p className="bg-bgText p-4 lg:rounded-[10px] md:shadow-3xl w-full text-white text-center mx-auto">
      <span className="text-white font-bold">{props.segment}</span>{props.text}
    </p>
  );
}

export default Trial;
