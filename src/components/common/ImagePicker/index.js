import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from "../Icon";
import styles from "./styles";
import colors from "../../../assets/theme/colors";
import * as ImagePickerCrop from "expo-image-picker";

const ImagePicker = React.forwardRef(({ onFileSelected }, ref) => {
  const options = [
    {
      name: "Take from camera",
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCrop.launchCameraAsync({
          mediaTypes: ImagePickerCrop.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => console.log("error in image picker: ", error));
      },
    },
    {
      name: "Choose from gallery",
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCrop.launchImageLibraryAsync({
          mediaTypes: ImagePickerCrop.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => console.log("error in image picker: ", error));
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={150}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <View style={styles.optionsWrapper}>
        {options.map(({ name, onPress, icon }) => (
          <TouchableOpacity
            onPress={onPress}
            key={name}
            style={styles.pickerOption}
          >
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
