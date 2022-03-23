import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/common/Container/index";
import CustomButton from "../../components/common/CustomButton";
import Input from "../../components/common/input";
import { REGISTER } from "../../constants/routeNames";
import Message from "../common/Message";
import styles from "./styles";

const LoginComponent = ({ error, onChange, form, onSubmit, loading, justSignedUp }) => {
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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>

          {justSignedUp && (
            <Message
            onDismiss={() => {}}
            success
            message="Account created successfully"
          />
          )}

          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid credentials"
            />
          )}

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
            value={form.email || null}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
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
          />

          <CustomButton
            disable={loading}
            loading={loading}
            onSubmit={onSubmit}
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>You don't have an account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
