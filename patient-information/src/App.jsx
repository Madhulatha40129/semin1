
import './App.css';

const complaints = [
  { name: 'Rahul', room: '205', complaint: 'Fan not working', status: 'Pending' },
  { name: 'Priya', room: '108', complaint: 'Water problem', status: 'Resolved' }
];

function App() {
  return (
    <div className="container">
      <h1>Hostel Complaint System</h1>

      {complaints.map((c, i) => (
        <div className="card" key={i}>
          <h2>{c.name}</h2>
          <p>Room Number: {c.room}</p>
          <p>Complaint: {c.complaint}</p>
          <p>Status: {c.status}</p>
        </div>
      ))}
    </div>
  );
}

export default App;