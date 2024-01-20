// import React, { useState } from 'react';

// const AddAppointmentForm = ({ onAddAppointmentClick }) => {
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [appointmentTime, setAppointmentTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if both date and time are provided
//     if (appointmentDate && appointmentTime) {
//       const newAppointment = {
//         date: appointmentDate,
//         time: appointmentTime,
//       };

//       // Call the onAddAppointmentClick function from the parent component
//       onAddAppointmentClick(newAppointment);

//       // Clear the form fields
//       setAppointmentDate('');
//       setAppointmentTime('');
//     } else {
//       // Handle error or show a message if date and time are not provided
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Date:
//         <input
//           type="date"
//           value={appointmentDate}
//           onChange={(e) => setAppointmentDate(e.target.value)}
//         />
//       </label>
//       <label>
//         Time:
//         <input
//           type="time"
//           value={appointmentTime}
//           onChange={(e) => setAppointmentTime(e.target.value)}
//         />
//       </label>
//       <button type="submit">Add Appointment</button>
//     </form>
//   );
// };

// export default AddAppointmentForm;
// AddAppointmentForm.js
// AddAppointmentForm.js
// AddAppointmentForm.js
import React, { useState } from 'react';

const AddAppointmentForm = ({ onAddAppointmentClick }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date and time (you may need more robust validation)
    if (!date || !time) {
      alert('Please enter both date and time.');
      return;
    }

    // Pass the new appointment to the parent component
    onAddAppointmentClick({ date, time });

    // Clear the form fields
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AddAppointmentForm;
