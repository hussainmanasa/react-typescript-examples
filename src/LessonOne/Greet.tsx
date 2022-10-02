type Props = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: Props) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      <div>
        {isLoggedIn
          ? ` Welcome ${name}! You have ${messageCount} messages`
          : `Welcome Guest`}
      </div>
    </div>
  );
};

export default Greet;
