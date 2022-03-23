import React, { useEffect, useState } from "react";
import SignupComponent from "../../components/Signup";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../../context/Provider";
import { LOGIN } from "../../constants/routeNames";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);
  const { navigate } = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prev) => {
            return {
              ...prev,
              [name]: "Password needs to be minimum 6 charachters long",
            };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const onSubmit = () => {

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "Please add a username" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: "Please add a first name" };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: "Please add a last name" };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "Please add a password" };
      });
    }

    if (
      Object.values(form).length === 4 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form.email, form.password, form.firstName, form.lastName)(authDispatch)((res)=>{
        navigate(LOGIN, {data: res});
      });
    }
  };

  return (
    <SignupComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
