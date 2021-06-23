import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { spring,AnimatedSwitch } from 'react-router-transition';
import Layout from './hocs/Layout';
import Signup from './pages/Signup';
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
function mapStyles(styles) {
    return {
      top:styles.top,
      opacity: styles.opacity
      
    };
  }
  
  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  
  
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

const Routes = () =>{
    return (
        <Layout>
            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0,top:100 }}
                    atLeave={{ opacity: 0,top:-100}}
                    atActive={{ opacity: 1, top:0 }}
                    mapStyles={mapStyles}
                    className="route-wrapper"
                >
                    <Route path="/dashboard" component={Dashboard} />   
                    <Route path="/signin" component={Signin} />
                    <Route path="/" component={Signup} />
                </AnimatedSwitch>
            </Router>
        </Layout>
    );
}

export default Routes;