import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

//Structuring the information from the DB based on the properties of each team
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//blueprint of the entire DB & teams is the property in the json file and it contains the
//structuring information from the Team interface above
interface CollegeBasketballData {
  teams: Team[];
}

function App() {
  // Creating a variable that will hold the information of the json file  from the
  //array we created on the interface called Team
  //the right side of the = refers to the json file name and its property called teams.
  const BBTeams: Team[] = CollegeBasketballTeams.teams;
  return (
    <div className="App">
      <h1>MARCH MADNESS!!!</h1>
      <Welcome />
      {/* Pass the 'BBTeams' array to the TeamCards component */}
      <TeamCards collegeBasketballTeams={BBTeams} />
    </div>
  );
}

function Welcome() {
  return (
    <div className="Welcome">
      <h1>NCAA - List of College Basketball Teams & Their Information</h1>
      <br></br>
      <br></br>
    </div>
  );
}

function TeamCard(props: { team: Team }) {
  const team = props.team;
  return (
    <div className="TeamCard">
      <p>
        <span className="title">School Name:</span> {team.school}
      </p>
      <p>
        <span className="title">Mascot Name:</span> {team.name}
      </p>
      <p>
        <span className="title">Location:</span> {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamCards(props: { collegeBasketballTeams: Team[] }) {
  const collegeBasketballTeams = props.collegeBasketballTeams;
  const teamCards = collegeBasketballTeams.map((team, index) => (
    <TeamCard key={index} team={team} />
  ));
  return <div className="TeamCards">{teamCards}</div>;
}
export default App;
