import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Switch } from "react-native";
import styles from "./styles";
import Container from "../common/Container";
import Input from "../common/input";
import CustomButton from "../common/CustomButton";
import CountryPicker from "react-native-country-picker-modal";
import colors from "../../assets/theme/colors";
import ImagePicker from "../common/ImagePicker";
import {Asset} from 'expo-asset';

const CreateUserComponent = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  error,
  errors,
  loading,
  toggleValueChange,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile
}) => {

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const imageURI = Asset.fromModule(require('../../assets/images/blank-avatar.png')).uri;
  
  return (
    <View style={styles.container}>
      <Container>
        <Image
          height={150}
          width={150}
          source={{uri: localFile?.uri || imageURI }}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={(value) => {
            onChangeText({ name: "firstName", value: value });
          }}
          value={form.firstName || ''}
          error={errors.firstName || error?.firstName?.[0]}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={(value) => {
            onChangeText({ name: "lastName", value: value });
          }}
          value={form.lastName || ''}
          error={errors.lastName || error?.lastName?.[0]}
        />
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={(value) => {
            onChangeText({ name: "email", value: value });
          }}
          value={form.email || ''}
          error={errors.email || error?.email?.[0]}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              <Text style={{ textAlign: "right" }}>Show</Text>
            </TouchableOpacity>
          }
          value={form.password || ''}
          iconPosition="right"
          onChangeText={(value) => {
            onChangeText({ name: "password", value });
          }}
          error={errors.password || error?.password?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const countryCode = v.cca2;
                setForm({ ...form, countryCode });
              }}
            />
          }
          onChangeText={(value) => {
            onChangeText({ name: "phoneNumber", value: value });
          }}
          style={{ padding: 10 }}
          iconPosition="left"
          label="Phone number"
          placeholder="Enter phone number"
          error={errors.phoneNumber || error?.phoneNumber?.[0]}
          value={form.phoneNumber || ''}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>Is Enabled</Text>
          <Switch
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={colors.white}
            ios_backgroundColor={"#3e3e3e"}
            onValueChange={toggleValueChange}
            value={form.enabled}
          />
        </View>

        <CustomButton
          primary
          title="Submit"
          onSubmit={onSubmit}
          loading={loading}
          disable={loading}
        />
      </Container>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateUserComponent;
