type Props = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: Props) => {
  const { name } = props;
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
