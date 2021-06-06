import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Courses from './components/courses';
import Header from './components/header';
import Footer from './components/footer';
import Team from './components/team';
import MockTest from './components/MockTest';
import PageNotFound from './components/pagenotfound';
function App()
{
   return(
      <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/courses/team" component={Team} />
      <Route path="/courses" component={Courses} />
      <Route path="/mock-test/:topic" component={MockTest} />
      <Route path="/" component={Home} exact/>
      <Route component={PageNotFound}/>
      </Switch>
      <Footer />
      </BrowserRouter>
   )
}

export default App;