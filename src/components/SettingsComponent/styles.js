import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  screenScrollView: {
    backgroundColor: colors.white,
  },
  titleView: {
    padding: 20,
  },
  titleText: {
    fontSize: 17,
  },
  subTitleView: {
    fontSize: 14,
    color: colors.grey,
    paddingTop: 5,
  },
  sortBy: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: "center"
  },
});
