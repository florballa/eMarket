import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import LoginComponent from "../../components/Login";
import login from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const { params } = useRoute();

  useEffect(()=>{
    if(params?.data){
      setJustSignedUp(true);
      setForm({...form, email: params.data.email})
    }
  },[params]);

  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.email && form.password) {
      login(form.email, form.password)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
