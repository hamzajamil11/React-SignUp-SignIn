import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './container/Auth/sign-in';
import Signup from './container/Auth/sign-up';
import Loader from './components/loader';
import Tour from 'reactour';
import NotFound from './components/not-found';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: !!this.props.logindata,
      page: false,
      logindata: this.props.logindata,
      clientCookie: false,
      logout: false,
      connection: '',
      isTourOpen: false,
      isShowingMore: false
    }

  }
  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };
  componentDidMount() {

  }
  render() {
    let routes = "";
    const { isTourOpen } = this.state;
    const accentColor = "#5cb7b7";
    // var routes = (
    //   !!this.props.logindata &&
    //   <Switch>
    //     <Redirect strict exact from="/" to="/home" />

    //     <Route component={NotFound} />
    //   </Switch>
    // );

    if (!this.props.logindata || this.props.logindata.length === 0) {
      routes = (
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path='/signin' render={() => <Login openTour={this.openTour} />} />
          <Redirect strict from="/" to="/signin" />
          <Route component={NotFound} />
        </Switch>
      );
    }

    return (
      <div className='main'>
        <Loader loading={this.props.loading} />
        {routes}
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
        />
      </div >

    )

  }
}

const tourConfig = [
  {
    selector: '.user',
    content: `Enter your Username here`
  },
  {
    selector: '.passw',
    content: `Enter your Password here`
  },
  {
    selector: '.btn',
    content: `Click here to login after entering username and password.`
  }
]
const mapStateToProps = state => {
  return {
    logindata: state.auth.logindata,
    loading: state.loader.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));