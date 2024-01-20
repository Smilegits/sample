// import { Link } from "react-router-dom";

// const ClientList = ({ clients, title }) => {
//     return (
//         <div className="client-list">
//             <h2>{title}</h2>
//             {clients.map(client => (
//                 <div className="client-preview" key={client.id}>
//                     <Link to={`/clients/${client.id}`}>
//                         <h2>{client.firstName} {client.lastName}</h2>
//                         <p>Location: {client.location}</p>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ClientList;
// ClientList.js
// ClientList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientList = ({ clients, title, onAddAppointmentClick }) => {
  // State to manage appointments for the selected client
  const [appointments, setAppointments] = useState([]);

  // Function to handle adding an appointment for a client
  const handleAddAppointmentClick = (clientId) => {
    // Assume you have a date and time picker to select the appointment date and time
    const selectedDateTime = new Date(); // Replace this with your actual logic

    // Validate selectedDateTime and add the appointment
    if (selectedDateTime) {
      // Create a new appointment object
      const newAppointment = {
        clientId: clientId,
        dateTime: selectedDateTime,
      };

      // Update the state to include the new appointment
      setAppointments([...appointments, newAppointment]);

      // You can also call the onAddAppointmentClick prop passed from App.js
      onAddAppointmentClick && onAddAppointmentClick(clientId, newAppointment);

      // Optionally, you can make an API call to save the appointment on the server
      // Example: makeApiCallToAddAppointment(newAppointment);

      // You can also add any additional logic or actions here
    } else {
      console.error("Invalid appointment date and time");
    }
  };

  return (
    <div className="client-list">
      <h2>{title}</h2>
      {clients.map(client => (
        <div className="client-preview" key={client.id}>
          <Link to={`/clients/${client.id}`}>
            <h2>{client.firstName} {client.lastName}</h2>
            <p>Location: {client.location}</p>
          </Link>
          {/* <button onClick={() => handleAddAppointmentClick(client.id)}>Add Appointment</button> */}
        </div>
      ))}
    </div>
  );
}

export default ClientList;



