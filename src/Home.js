//Home.js
// import React, { useState } from 'react';
// import BlogList from './ClientList';
// import useFetch from './useFetch';
// ;

// const Home = () => {
//   const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');
 
  

  

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading....</div>}
//       {fetchedClients && <BlogList clients={fetchedClients} title="All Clients!" />}
//       {/* <button onClick={handleAddAppointmentClick}>Add Appointment</button>
//       {showAddAppointment && <AddAppointment onAddAppointmentClick={handleAddAppointment} />} */}
//     </div>
//   );
// };

// export default Home;
// Home.js
// import React from 'react';
// import BlogList from './ClientList';
// import useFetch from './useFetch';

// const Home = () => {
//   const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading....</div>}
//       {fetchedClients && <BlogList clients={fetchedClients} title="All Clients!" />}
//       {/* You can add your button and other logic here */}
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import BlogList from './ClientList';
// import useFetch from './useFetch';

// const Home = () => {
//   const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');

//   const handleAddAppointmentClick = (clientId, newAppointment) => {
//     // Implement your logic for adding an appointment for a specific client
//     console.log(`Adding appointment for client ID ${clientId}:`, newAppointment);
//   };

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading....</div>}
//       {fetchedClients && (
//         <BlogList clients={fetchedClients} title="All Clients!" onAddAppointmentClick={handleAddAppointmentClick} />
//       )}
//       {/* You can add your button and other logic here */}
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import BlogList from './ClientList';
// import useFetch from './useFetch';
// import Create from './Create';

// const Home = () => {
//   const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');
//   const [clients, setClients] = useState([]); // Rename the state variable to 'fetchedClients'

//   const handleAddClient = (newClient) => {
//     // Update the clients state with the new client
//     setClients([...clients, newClient]);
//   };

//   useEffect(() => {
//     // Fetch client data from the API and update state
//   }, []); // Make sure to add any dependencies based on your actual logic

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading....</div>}
//       {fetchedClients && <BlogList clients={fetchedClients} title="All Clients!" />}
//       <Create onAddClient={handleAddClient} />
//     </div>
//   );
// };

// export default Home;
// Home.js

import React, { useState, useEffect } from 'react';
import BlogList from './ClientList';
import useFetch from './useFetch';
import Create from './Create';

const Home = () => {
  const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');
  const [clients, setClients] = useState([]);

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  useEffect(() => {
    // Fetch client data from the API and update state
  }, []); // Make sure to add any dependencies based on your actual logic

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {fetchedClients && <BlogList clients={fetchedClients} title="All Clients!" />}
      {/* Correct prop name: onAddClient */}
    
    </div>
  );
};

export default Home;



