import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  imageView: {
    height: 45,
    width: 45,
    backgroundColor: colors.grey,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    flexDirection: "row",
    alignItems: "center",
  },
  generalInfo:{
    paddingLeft: 20
  },
  fullName: {
      fontSize: 17,
  },
  username: {
    paddingVertical: 5,
    fontSize: 13
  },
  floatingActionButton : {
      position: "absolute",
      height: 55,
      width: 55,
      bottom: 45,
      right: 10,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red"
  }
});
