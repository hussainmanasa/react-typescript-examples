import "./App.css";
import Greet from "./LessonOne/Greet";
import Person from "./LessonTwo/Person";
import PersonList from "./LessonThree/PersonList";
import Status from "./LessonFour/Status";
import Heading from "./LessonFive/Heading";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Peter",
      last: "Parker",
    },
  ];

  const NewHeading = () => <h1>Heading Node</h1>;
  return (
    <div className="App">
      <Greet name={"Hussain"} messageCount={10} isLoggedIn={true} />
      {/** Simple type props*/}
      <Person name={personName} /> {/** Object type props*/}
      <PersonList names={nameList} /> {/** Array type props*/}
      <Status status="success" /> {/** Custom type props*/}
      <Heading>Heading</Heading> {/** Children type props*/}
      <Heading>
        <NewHeading />
      </Heading>{" "}
      {/** Children with React Node type props*/}
    </div>
  );
}

export default App;
