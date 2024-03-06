import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';
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

interface CollegeBasketballData {
  teams: Team[];
}

function App() {
  console.log(CollegeBasketballTeams);
  // Access the 'teams' array from the CollegeBasketballTeams object
  const collegeBasketballTeams: Team[] = CollegeBasketballTeams.teams;
  return (
    <div className="App">
      <h1>MARCH MADNESS!!!</h1>
      <Welcome />
      {/* Pass the 'teams' array to the TeamCards component */}
      <TeamCards collegeBasketballTeams={collegeBasketballTeams} />
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

function TeamCards(props: { collegeBasketballTeams: Team[] }) {
  const collegeBasketballTeams = props.collegeBasketballTeams;
  const teamCards = collegeBasketballTeams.map((team, index) => (
    <TeamCard key={index} team={team} />
  ));
  return <div className="TeamCards">{teamCards}</div>;
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
export default App;
