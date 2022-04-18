import { Navbar, Welcome, Footer, Transactions } from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = styled.div`
  color:${(p) => p.theme.colors.textColor};
`; 
const App = () => (
  <Root>
    <Router>
      <Navbar />
         <Switch>
           <Route exact path="/" component={Welcome}/>
           <Route exact path="/transactions" component={Transactions}/>
         </Switch>
       {/* <Footer /> */}
      </Router>
  </Root>
);

export default App;
