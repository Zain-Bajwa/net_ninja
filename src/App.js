import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/blogs/BlogCreate";
import BlogDetails from "./Components/blogs/BlogDetails";
import { HOME, BLOG_CREATE, BLOG_GET } from "./constants/path"

function App() {
  return (
    <Router>
      <div className="App App-header">
        <Navbar />
        <div>
          <Switch>
            <Route exact path={ HOME }>
            <Home />
            </Route>
            <Route path={ BLOG_CREATE }>
              <Create />
            </Route>
            <Route path={ BLOG_GET }>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
