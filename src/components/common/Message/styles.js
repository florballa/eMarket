import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({

    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        marginTop: 5,
        borderRadius: 4,
        paddingVertical: 13,
        
    },

    loaderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        color: colors.white
    }
})