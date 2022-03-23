import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const Message = ({
  message,
  info,
  primary,
  danger,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [userDismissed, setDismissed] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBgColor() }]}
        >
          <View style={styles.loaderSection}>
            <Text style={styles.text}>{message}</Text>

            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={styles.text}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}
              >
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
