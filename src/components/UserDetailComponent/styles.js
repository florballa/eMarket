import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  scrollView:{
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  imageContainer:{
    height: 300,
    width: '100%',

  },
  loading: {
    paddingLeft: "35%",
    paddingTop: "5%"
  },

  detailImage: {
    height: 300,
    width: '100%',
    resizeMode: "cover",
  },
  content:{
    padding: 20,
  },
  fullName: {
    fontSize: 23,
  },
  username: {
    marginBottom: 20,
  }
});
