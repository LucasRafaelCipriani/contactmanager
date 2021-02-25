import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContact}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
