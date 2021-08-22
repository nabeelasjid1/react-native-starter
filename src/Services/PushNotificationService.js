import { Platform, Alert } from "react-native";
//import { PUSHER_BEAMS_INSTANCE_ID } from "react-native-dotenv";
import RNPusherPushNotifications from "react-native-pusher-push-notifications";
import { store } from "../store";
//import { NavigationService } from "../services";

export const init = () => {
  let donutsInterest = [];
  const auth = store.getState().auth;
  if (auth.isAuthenticated === true) {
     donutsInterest.push('debug-eushare-'+auth.user.id);
   }
  RNPusherPushNotifications.setInstanceId("dcc839d8-2a77-4721-850a-5c3b23e57d73");
  RNPusherPushNotifications.on("registered", () => {
    if (Platform.OS === "ios") {
      setSubscriptions(donutsInterest);      
    }
    else {
      for (let e of donutsInterest) {
        subscribe(e);
        console.log('Subscribed Android', e)
      }
    }
  });
  RNPusherPushNotifications.on("notification", handleNotification);
};

const handleNotification = (notification) => {
  //alert("android??")
//   const data = notification?.userInfo?.aps?.data?.data || { goToPage: 'HomePage', id: null };
//   const id = notification?.userInfo?.aps?.data?.data?.id || null;
  // iOS app specific handling
  if (Platform.OS === "ios") {
    console.log('app state ios', notification.appState)
    switch (notification.appState) {
      case "inactive":
        {
        //   NavigationService.navigateWithParams(data.goToPage, data);
        }
      case "background":
        {
        //   NavigationService.navigateWithParams(data.goToPage, data);
        }
      case "active":
        // NavigationService.navigateWithParams(data.goToPage, data);
      default:
        break;
    }
  }
  else 
  {
    console.log('app state', notification.appState)
    //Alert.alert("hiiiiiii")
    switch (notification.appState) {
      case "inactive":
        {
        //   NavigationService.navigateWithParams(data.goToPage, data);
        }
      case "background":
        {
        //   NavigationService.navigateWithParams(data.goToPage, data);
        }
      case "active":
        // NavigationService.navigateWithParams(data.goToPage, data);
      default:
        break;
    }
  }
};

export const subscribe = (interest) => {
  RNPusherPushNotifications.subscribe(
    interest,
    (statusCode, response) => {
      console.error(statusCode, response);
    },
    () => {
      console.log("Success Android Subscription");
    }
  );
};

// Unsubscribe from an interest
export const unsubscribe = (interest) => {
  console.log("unsbscribe interest",interest);
  RNPusherPushNotifications.unsubscribe(
    interest,
    (statusCode, response) => {
        //console.tron.logImportant(statusCode, response);
    },
    () => {
         //console.tron.logImportant('Success');
    }
  );
};

export const setSubscriptions = (donutInterests) => {
  RNPusherPushNotifications.setSubscriptions(
    donutInterests,
    (statusCode, response) => {
      console.error(statusCode, response);
    },
    () => {
      console.log("Success IOS Subscription");
    }
  );
};
