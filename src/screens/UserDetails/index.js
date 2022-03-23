import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/theme/colors";
import Icon from "../../components/common/Icon";
import UserDetailComponent from "../../components/UserDetailComponent";
import { USER_LIST } from "../../constants/routeNames";
import deleteUser from "../../context/actions/Users/deleteUser";
import { GlobalContext } from "../../context/Provider";

const UserDetails = () => {
  const { params: { item = {} } = {} } = useRoute();
  const { setOptions, navigate } = useNavigation();
  const {
    userDispatch,
    userState: {
      deleteUser: { loading },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.fullName,
        headerRight: () => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Delete",
                    "Are you sure you want to delete " + item.fullName + "?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => {},
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          deleteUser(item.id)(userDispatch)(() => {
                            navigate(USER_LIST);
                          });
                        },
                      },
                    ]
                  );
                }}
              >
                {loading ? (
                  <ActivityIndicator size="small" color={colors.danger} />
                ) : (
                  <Icon
                    size={23}
                    type="material"
                    name="delete"
                    color={colors.danger}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  return <UserDetailComponent contact={item} />;
};

export default UserDetails;
