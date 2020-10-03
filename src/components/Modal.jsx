import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { Modal as ModalContainer, Content } from '../styles/components/modal.js'

export default function Modal(props) {

    if (!props.isOpen) {
        return null;
    }
    return (

        ReactDOM.createPortal(
            <ModalContainer >
                <Content >
                    <MdClose size="26px" onClick={props.handleClose}/>
                    {props.children}
                </Content>

            </ModalContainer>,
            document.getElementById('modal'))

    );
}
