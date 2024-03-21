import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";

import Styles from './ModalinputStyle'
import Button from "../Button";

const ModelInput = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState('')

    function handelSend() {
        if (!text) {
            return;
        }
        onSend(text);
        setText(null)
    }

    return (
        <Modal style={Styles.modal}
            swipeDirection={"down"}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
        >

            <View style={Styles.container}>
                <View style= {Styles.inputContainer}>
                    <TextInput
                        placeholder="Darla hadi milleti.."
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button text="Gonder" onPress={handelSend}/>
            </View>

        </Modal>
    )


}

export default ModelInput;