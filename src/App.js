import store from "./store";
import Cake from "./components/cake";
import User from "./components/user";
import Posts from "./components/posts";
import GetAllPosts from "./components/getAllPosts";
import IceCream from "./components/iceCream";
import Nav from "./components/nav";
import PostsById from "./components/postbyid";

import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/cake" component={Cake} />
          <Route path="/icecream" component={IceCream} />
          <Route path="/user" component={User} />
          <Route path="/posts" component={GetAllPosts} />
          <Route path="/postbyid/:id" component={PostsById} />
        </Switch>

        {/* <Cake />
        <Nav />
        <IceCream />
        <User />
        <Posts />
        <GetAllPosts /> */}
      </Provider>
    </Router>
  );
}

export default App;
