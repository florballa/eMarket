import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../../assets/theme/colors";
import styles from "./styles";
import AppModal from "../common/AppModal";
import Icon from "../common/Icon";

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  prefArray,
}) => {
  return (
    <>
      <AppModal
      closeOnTouchOutside={false}
        modalVisible={modalVisible}
        modalFooter={<></>}
        modalBody={
          <View>
            {prefArray.map(({ name, selected, onPress }) => (
              <View>
                  <TouchableOpacity style={styles.sortBy} onPress={onPress} key={name}>
                      {selected && <Icon name="check" size={17}/>}
                      <Text style={{paddingLeft: selected ? 15 : 30, fontSize: 17}}>{name}</Text>
                  </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title="Sort by"
        setModalVisible={setModalVisible}
      />

      <ScrollView style={styles.screenScrollView}>
        {settingsOptions.map(({ title, subTitle, onPress }) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>{title}</Text>
              {subTitle && <Text style={styles.subTitleView}>{subTitle}</Text>}
            </View>
            <View style={{ height: 0.5, backgroundColor: colors.grey }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
