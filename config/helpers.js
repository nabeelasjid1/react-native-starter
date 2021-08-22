import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

export const hasLocationPermission = async () => {
  if (
    Platform.OS === "ios" ||
    (Platform.OS === "android" && Platform.Version < 23)
  ) {
    return true;
  }
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (hasPermission) return true;
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show("Location permission denied by user.", ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      "Location permission revoked by user.",
      ToastAndroid.LONG
    );
  }
  return false;
};
export const currentLocation = async () => {
  const hasLocationPermissions = await hasLocationPermission();
  if (hasLocationPermissions) {
    const promise = new Promise(function (resolve, reject) {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject("unable to get current  location");
          return null;
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
    const location = await promise;
    return location;
  }
};
