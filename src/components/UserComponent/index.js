import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../assets/theme/colors";
import AppModal from "../common/AppModal";
import styles from "./styles";
import Message from "../common/Message/index";
import Icon from "../common/Icon";
import { useNavigation } from "@react-navigation/native";
import { USER_CREATE, USER_DETAILS } from "../../constants/routeNames";

const UserComponent = ({
  modalVisible,
  setModalVisible,
  data,
  loading,
  sortBy,
}) => {
  const { navigate } = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{ padding: 100 }}>
        <Message info message="No users to show" />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { userImage, firstName, lastName, fullName, username } = item;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(USER_DETAILS, { item });
        }}
      >
        <View style={styles.item}>
          {userImage ? (
            <Image style={styles.imageView} source={{ uri: userImage }} />
          ) : (
            <View style={styles.imageView}>
              <Text>{firstName[0]}</Text>
              <Text>{lastName[0]}</Text>
            </View>
          )}

          <View style={styles.generalInfo}>
            <View style={styles.nameText}>
              <Text style={styles.fullName}>{fullName}</Text>
            </View>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>

        <Icon name="right" type="ant" size={21} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ backgroundColor: colors.white }}>
        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalBody={
            <View>
              <Text>Testing body</Text>
            </View>
          }
        />

        {loading && (
          <View style={{ padding: 100 }}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!loading && (
          <View style={{ paddingVertical: 20 }}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === "First Name") {
                        if (b.firstName > a.firstName) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                      if (sortBy === "Last Name") {
                        if (b.lastName > a.lastName) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{ height: 150 }}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{ height: 0.5, backgroundColor: colors.grey }}
                ></View>
              )}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(USER_CREATE);
        }}
      >
        <Icon name="plus" size={21} />
      </TouchableOpacity>
    </>
  );
};

export default UserComponent;
