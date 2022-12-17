import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Modall = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        // 배경색상 투명으로
        visible={modalVisible}
        // modalVisible 값을 여기에 props로 바로 줌
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* 모달 View */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>광고중</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View>
              <Text style={styles.textStyle}>닫기</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  //  모달뷰 중앙 정렬 컨테이너
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  //   모달 메인 뷰
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeBtnBox: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Modall;
