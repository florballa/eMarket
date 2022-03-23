import React, { useContext, useEffect, useRef, useState } from "react";
import CreateUserComponent from "../../components/CreateUserComponent";
import createUser from "../../context/actions/Users/createUser";
import editUser from "../../context/actions/Users/editUser";
import { GlobalContext } from "../../context/Provider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { USER_DETAILS, USER_LIST } from "../../constants/routeNames";

const UserCreate = () => {
  const {
    userDispatch,
    userState: {
      createUser: { loading, error },
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { navigate } = useNavigation();
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [uploading, setIsUploading] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if(params?.contact){

      const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        countryCode,
        enabled
      } = params?.contact;

      setForm({...form, firstName, lastName, email, password, phoneNumber, countryCode, enabled});
    }
  }, []);

  const toggleValueChange = () => {
    setForm({ ...form, enabled: !form.enabled });
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onChangeText = ({ name, value }) => {
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

    if (!form.phoneNumber) {
      setErrors((prev) => {
        return { ...prev, phoneNumber: "Please add a phone number" };
      });
    }

    if (
      Object.values(form).length > 5 &&
      Object.values(errors).every((item) => !item)
    ) {

      if(params?.contact){
        editUser({ ...form, userImage: localFile?.uri }, params?.contact.id)(userDispatch)((item) => {
          navigate(USER_DETAILS, {item});
        });
      }
      else{
        setIsUploading(false);
        createUser({ ...form, userImage: localFile?.uri })(userDispatch)(() => {
          navigate(USER_LIST);
        });
      }
    }
  };

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
  };

  return (
    <CreateUserComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading || uploading}
      error={error}
      errors={errors}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default UserCreate;
