type Props = {
  status: "success" | "loading" | "error";
};

const Status = (props: Props) => {
  const { status } = props;
  let message;
  if (status === "loading") message = "Loading...";
  else if (status === "success") message = "Data Fetched Successfully!";
  else if (status === "error") message = "Error Fetching Data";
  return (
    <div>
      <h2>Message - {message}</h2>
    </div>
  );
};

export default Status;
