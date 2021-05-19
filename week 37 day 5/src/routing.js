import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Navbar";
import App from "./App";
import Posts from "./Posts";
import Login from "./Login";

const Routing = (props) => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={App} />
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  );
};

export default Routing;
