// import { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Create = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [location, setLocation] = useState('');
//     const [appointmentDate, setAppointmentDate] = useState(null);
//     const [appointments, setAppointments] = useState([]);
//     const [isPending, setIsPending] = useState(false);
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const client = { firstName, lastName, location, appointments };

//         setIsPending(true);
//         fetch('http://localhost:8000/clients', {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(client)
//         }).then(() => {
//             console.log('new client added');
//             setIsPending(false);
//             history.push('/');
//         })
//     }

//     const handleAddAppointment = () => {
//         if (appointmentDate) {
//             setAppointments([...appointments, appointmentDate.toLocaleString()]);
//             setAppointmentDate(null); // Clear the selected appointment date after adding
//         }
//     }

//     return (
//         <div className="create">
//             <h2>Add a new Client</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>First Name:</label>
//                 <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//                 <label>Last Name:</label>
//                 <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

//                 <label>Location:</label>
//                 <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

//                 <label>Appointment Date and Time:</label>
//                 <DatePicker
//                     selected={appointmentDate}
//                     onChange={(date) => setAppointmentDate(date)}
//                     showTimeSelect
//                     dateFormat="Pp"
//                 />

//                 <div style={{ marginTop: '10px' }}>
//                     <button type="button" onClick={handleAddAppointment} style={{ marginBottom: '10px' }}>
//                         Add Appointment
//                     </button>
//                 </div>

//                 <ul>
//                     {appointments.map((appointment, index) => (
//                         <li key={index}>{appointment}</li>
//                     ))}
//                 </ul>

//                 {!isPending && <div style={{ marginTop: '20px' }}><button>Add a Client</button></div>}
//                 {isPending && <button>Adding Client....</button>}
//             </form>
//             <p>{firstName}</p>
//             <p>{lastName}</p>
//             <p>{location}</p>
//         </div>
//     );
// }

// export default Create;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Create = ({ onAddClient }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [location, setLocation] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newClient = { firstName, lastName, location };

//     setIsPending(true);
//     // Assuming your API endpoint for creating a new client is '/clients'
//     fetch('http://localhost:8000/clients', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newClient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('New client added:', data);
//         setIsPending(false);
//         // Call the onAddClient prop to update the clients state in the Home component
//         onAddClient(data);
//         history.push('/');
//       });
//   };

//   return (
//     <div className="create">
//       <h2>Add a new Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//         <label>Last Name:</label>
//         <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

//         <label>Location:</label>
//         <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

//         {!isPending && <button>Add a Client</button>}
//         {isPending && <button>Adding Client....</button>}
//       </form>
//       <p>{firstName}</p>
//       <p>{lastName}</p>
//       <p>{location}</p>
//     </div>
//   );
// };

// export default Create;
// Create.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Create = ({ onAddClient }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [location, setLocation] = useState('');
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [appointmentTime, setAppointmentTime] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newClient = { firstName, lastName, location, appointments: [{ date: appointmentDate, time: appointmentTime }] };

//     setIsPending(true);
//     // Assuming your API endpoint for creating a new client is '/clients'
//     fetch('http://localhost:8000/clients', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newClient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('New client added:', data);
//         setIsPending(false);
//         // Call the onAddClient prop to update the clients state in the Home component
//         onAddClient(data);
//         history.push('/');
//       });
//   };

//   return (
//     <div className="create">
//       <h2>Add a new Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//         <label>Last Name:</label>
//         <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

//         <label>Location:</label>
//         <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

//         <label>Appointment Date:</label>
//         <input type="date" required value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />

//         <label>Appointment Time:</label>
//         <input type="time" required value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />

//         {!isPending && <button>Add a Client</button>}
//         {isPending && <button>Adding Client....</button>}
//       </form>
//     </div>
//   );
// };

// export default Create;
//Create.js

// Create.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Create = ({ onAddClient }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [location, setLocation] = useState('');
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [appointmentTime, setAppointmentTime] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newClient = {
//       firstName,
//       lastName,
//       location,
//       appointments: [{
//         date: appointmentDate,
//         time: appointmentTime,
//       }],
//     };

//     setIsPending(true);
//     // Assuming your API endpoint for creating a new client is '/clients'
//     fetch('http://localhost:8000/clients', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newClient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('New client added:', data);
//         setIsPending(false);
//         onAddClient(data); // Call the onAddClient prop to update the clients state in the Home component
//         history.push('/');
//       });
//   };

//   return (
//     <div className="create">
//       <h2>Add a new Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//         <label>Last Name:</label>
//         <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

//         <label>Location:</label>
//         <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

//         <label>Appointment Date:</label>
//         <input type="date" required value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />

//         <label>Appointment Time:</label>
//         <input type="time" required value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />

//         {!isPending && <button>Add a Client</button>}
//         {isPending && <button>Adding Client....</button>}
//       </form>
//     </div>
//   );
// };

// export default Create;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Create = ({ onAddClient }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [location, setLocation] = useState('');
//   const [appointmentTime, setAppointmentTime] = useState('');
//   const [isPending, setIsPending] = useState(false);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newClient = {
//       firstName,
//       lastName,
//       location,
//       id: Math.random(),
//       appointments: [{ dateTime: appointmentTime, id: Math.random() }]
//     };

//     setIsPending(true);
    
//     // Assuming your API endpoint for creating a new client is '/clients'
//     fetch('http://localhost:8000/clients', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newClient),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('New client added:', data);
//         setIsPending(false);
//         onAddClient(data);
//         history.push('/');
//       });
//   };

//   return (
//     <div className="create">
//       <h2>Add a new Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

//         <label>Last Name:</label>
//         <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

//         <label>Location:</label>
//         <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

//         <label>Appointment Time:</label>
//         <input type="datetime-local" required value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />

//         {!isPending && <button>Add a Client</button>}
//         {isPending && <button>Adding Client....</button>}
//       </form>
//     </div>
//   );
// };

// export default Create;

// Create.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = ({ onAddClient }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = { firstName, lastName, location, appointments: [{ date: appointmentDate, time: appointmentTime }] };

    setIsPending(true);
    // Assuming your API endpoint for creating a new client is '/clients'
    fetch('http://localhost:8000/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New client added:', data);
        setIsPending(false);
        // Call the onAddClient prop to update the clients state in the Home component
        onAddClient(data);
        history.push('/');
      });
  };

  return (
    <div className="create">
      <h2>Add a new Client</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name:</label>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Location:</label>
        <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Appointment Date:</label>
        <input type="date" required value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />

        <label>Appointment Time:</label>
        <input type="time" required value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />

        {!isPending && <button>Add a Client</button>}
        {isPending && <button>Adding Client....</button>}
      </form>
    </div>
  );
};

export default Create;


