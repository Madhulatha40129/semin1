
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [complaint, setComplaint] = useState('')
  const [complaints, setComplaints] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !room.trim() || !complaint.trim()) {
      alert('Please fill all fields')
      return
    }

    setComplaints([
      ...complaints,
      { name, room, complaint }
    ])

    setName('')
    setRoom('')
    setComplaint('')
  }

  return (
    <div className="container">
      <h1>Hostel Complaint System</h1>
      <p className="subtitle">Submit and view hostel complaints</p>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Room Number</label>
        <input
          type="text"
          placeholder="Enter room number"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <label>Complaint</label>
        <textarea
          placeholder="Describe your complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />

        <button type="submit">Submit Complaint</button>
      </form>

      <h2>Submitted Complaints</h2>

      {complaints.length === 0 ? (
        <p className="empty">No complaints submitted yet.</p>
      ) : (
        complaints.map((item, index) => (
          <div className="complaint" key={index}>
            <p><strong>Student:</strong> {item.name}</p>
            <p><strong>Room:</strong> {item.room}</p>
            <p><strong>Complaint:</strong> {item.complaint}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App