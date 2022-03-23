import React from "react";
import { ScrollView, Text, View } from "react-native";
import ImageComponent from "./ImageComponent";
import styles from "./styles";
import { Asset } from "expo-asset";
import CustomButton from "../common/CustomButton";
import { USER_CREATE } from "../../constants/routeNames";
import { useNavigation } from "@react-navigation/native";

const UserDetailComponent = ({ contact }) => {
  const { navigate } = useNavigation();

  const { userImage, firstName, lastName, fullName, username } = contact;
  const imageURI = Asset.fromModule(
    require("../../assets/images/blank-avatar.png")
  ).uri;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {userImage ? (
          <ImageComponent src={userImage} />
        ) : (
          <ImageComponent src={imageURI} />
        )}
        <View style={styles.content}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.username}>{username}</Text>
          
          <CustomButton
            style={{ alignSelf: "flex-end", marginRight: 20, width: 200 }}
            primary
            title="Edit Contact"
            onSubmit={() => {
              navigate(USER_CREATE, { contact, editing: true });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailComponent;
