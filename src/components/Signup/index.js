import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/common/Container/index";
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/input";
import { LOGIN } from "../../constants/routeNames";
import Message from "../common/Message";
import styles from "./styles";

const SignupComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to eMarket</Text>
        <Text style={styles.subTitle}>Create a new account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {}}
              onDismiss={() => {}}
              danger
              message={error?.error}
            />
          )}

          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Fist Name"
            placeholder="Enter first name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName || error?.firstName?.[0]}
          />

          <Input
            label="Last name"
            placeholder="Enter last name"
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
            error={errors.lastName || error?.lastName?.[0]}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={()=>{setIsSecureEntry((prev) => !prev)}}>
                <Text style={{ textAlign: "right" }}>Show</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            loading={loading}
            disable={loading}
            onSubmit={onSubmit}
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
