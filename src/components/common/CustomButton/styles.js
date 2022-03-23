import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({

    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 4,
        justifyContent: 'space-evenly',
        backgroundColor: colors.primary,
    },

    loaderSection: {
        flexDirection: 'row'
    },

    text: {
        color: colors.white
    }
})