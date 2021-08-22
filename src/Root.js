import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigation from './Navigation/AppNavigation'
console.disableYellowBox = true;
import * as PushNotification from './Services/PushNotificationService'
import * as NavigationServices from './Services/NavigationServices'
import {store} from './store';
class Root extends Component {

  componentDidMount(){
    PushNotification.init()
    NavigationServices.setNavigator(this.navigator)
    const data = store.getState().auth;
    //console.log("root",data )
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <AppNavigation
            ref={nav => {
              this.navigator = nav;
            }}
          />
        </View>
      </>
    );
  }
}



const mapStateToProps = ({ global }) => {
  return {
    global: global
  }
}

export default connect(mapStateToProps, null)(Root);