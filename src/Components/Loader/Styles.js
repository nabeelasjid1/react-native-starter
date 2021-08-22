import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: Colors.White,
        opacity: 0.5,
        position: 'absolute',
    }
});
export default styles;