type Props = {
  children: string | React.ReactNode;
};

const Heading = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Heading;
