type Props = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: Props) => {
  const { names } = props;
  return (
    <div>
      {names?.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
      <h2>Bruce Wayne</h2>
      <h2>Clark Kent</h2>
      <h2>Peter Parker</h2>
    </div>
  );
};

export default PersonList;
