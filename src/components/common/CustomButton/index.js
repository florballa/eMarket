import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const CustomButton = ({ onSubmit, title, loading }) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.wrapper}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator color={colors.white} />}
        {title && (
          <Text style={[styles.text, { paddingLeft: loading ? 5 : 0 }]}>
            {loading ? "Please wait..." : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
