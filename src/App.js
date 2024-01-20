// import Navbar from './Navbar';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Create from './Create';
// import NotFound from './NotFound';
// import ClientDetails from './ClientDetails';

// function App() {
//   const title = "Welcome to the new client management system";

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/create">
//               <Create />
//             </Route>
//             <Route path="/clients/:id">
//               <ClientDetails />
//             </Route>
//             <Route path="*">
//               <NotFound />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
// App.js
// App.js
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import NotFound from './NotFound';
import ClientDetails from './ClientDetails';
import ClientList from './ClientList';

function App() {
  const title = "Welcome to the new client management system";
   
  const handleAddAppointmentClick = (clientId) => {
    console.log(`Initiating appointment creation for client with ID: ${clientId}`);
    // Add your logic to handle the appointment creation process
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/clients/:id">
              <ClientDetails />
            </Route>
            <Route path="/clients">
              <ClientList title="All Clients!" onAddAppointmentClick={handleAddAppointmentClick} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;



