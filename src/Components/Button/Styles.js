import {StyleSheet} from 'react-native';
import Colors from '../../Styles/Colors';
import {Typography,FontWeight} from '../../../config';
const styles = StyleSheet.create({
  default: {
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.appHeaderColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
},
textDefault: {
    ...Typography.headline,
    color: Colors.White,
    fontWeight: FontWeight.semibold
},
outline: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.fbColor
},
textOuline: {
    color: Colors.fbColor
},
full: {
    width: "100%",
    alignSelf: "auto"
},
round: {
    borderRadius: 28
}
});
export default styles;
