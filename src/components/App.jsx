import React from "react";
import Nav from "./Nav";
import TicketList from "./TicketList";
import { Switch, Route } from "react-router-dom";
import NewTicketForm from "./NewTicketForm";

function App() {
  return(
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={TicketList} />
        <Route path="/newticket" component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
