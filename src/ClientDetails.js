// import { useParams, useHistory } from "react-router-dom";
// import useFetch from "./useFetch";

// const ClientDetails = () => {
//     const { id } = useParams();
//     const { data: client, error, isPending } = useFetch('http://localhost:8000/clients/' + id);
//     const history = useHistory();

//     const handleDelete = () => {
//         fetch('http://localhost:8000/clients/' + client.id, {
//             method: 'DELETE'
//         }).then(() => {
//             history.push("/");
//         });
//     }

//     return (
//         <div className="client-details">
//             {isPending && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {client && (
//                 <article>
//                     <h2>{client.firstName} {client.lastName}</h2>
//                     <p>Location: {client.location}</p>
//                     <ul>
//                         {client.appointments && client.appointments.map((appointment, index) => (
//                             <li key={index}>{appointment}</li>
//                         ))}
//                     </ul>
//                     <button onClick={handleDelete}>Delete Client</button>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default ClientDetails;
// ClientDetails.js
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useFetch from './useFetch';
// import AddAppointmentForm from './AddAppointmentForm';

// const ClientDetails = () => {
//   const { id } = useParams();
//   const { data: client, error, isPending } = useFetch('http://localhost:8000/clients/' + id);
//   const [appointments, setAppointments] = useState([]);

//   const handleAddAppointmentClick = (newAppointment) => {
//     // Update the state with the new appointment
//     setAppointments([...appointments, newAppointment]);
//     // You may also want to update the server/database here
//   };

//   return (
//     <div className="client-details">
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {client && (
//         <div>
//           <h2>{client.name}</h2>
//           {/* <p>Email: {client.email}</p> */}
//           <h3>Appointments</h3>
//           {appointments.map((appointment, index) => (
//             <div key={index}>
//               <p>Date: {appointment.date}</p>
//               <p>Time: {appointment.time}</p>
//             </div>
//           ))}
//           <AddAppointmentForm onAddAppointmentClick={handleAddAppointmentClick} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientDetails;

// ClientDetails.js
// ClientDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import AddAppointmentForm from './AddAppointmentForm';

const ClientDetails = () => {
  const { id } = useParams();
  const { data: client, error, isPending } = useFetch('http://localhost:8000/clients/' + id);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (client && client.appointments) {
      // Assuming appointments are initially stored as strings
      const formattedAppointments = client.appointments.map((appointment) => {
        return {
          date: appointment.split(' ')[0],
          time: appointment.split(' ')[1],
        };
      });

      setAppointments(formattedAppointments);
    }
  }, [client]);

  const handleAddAppointmentClick = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);

    // Assuming there's a proper API endpoint for adding appointments
    fetch('http://localhost:8000/clients/' + id + '/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not add the appointment');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Appointment added successfully:', data);
      })
      .catch((err) => {
        console.error('Error adding appointment:', err.message);
      });
  };

  return (
    <div className="client-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {client && (
        <div>
          <h2>{client.name}</h2>
          <h3>Appointments</h3>
          {appointments.map((appointment, index) => (
            <div key={index}>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
            </div>
          ))}
          <AddAppointmentForm onAddAppointmentClick={handleAddAppointmentClick} />
        </div>
      )}
    </div>
  );
};

export default ClientDetails;
