import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import CustomIcon from "../Icon/index";
import PropTypes from "prop-types";

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.titleHeader}>{title || "User Details"}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CustomIcon size={20} name="close" />
              </TouchableOpacity>
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>
            <View>
              {modalFooter}
              {!modalFooter && (
                <View>
                  <>
                    <View style={styles.footerSeparator} />
                    <View style={styles.footerItems}>
                      <View style={styles.footer}>
                        <Text style={styles.footerText}>Privacy Policy</Text>
                        <View style={styles.termsView} />
                        <Text style={styles.footerText}>Terms of Service</Text>
                      </View>
                    </View>
                  </>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;
