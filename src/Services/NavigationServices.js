import { NavigationActions, StackActions } from "react-navigation";
const config = {};
export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}
export function navigate(routeName) {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName });
    config.navigator.dispatch(action);
  }
}
export function navigateWithParams(routeName, params) {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}
export function goBack() {
  if (config.navigator) {
    const action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}

export function resetAndGoTo(routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  config.navigator.dispatch(resetAction);
}

export function resetRouteAndGoWithParams(routeName, params) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName, params })],
  });
  config.navigator.dispatch(resetAction);
}
