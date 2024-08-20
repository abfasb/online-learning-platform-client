import React from 'react';
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter, useModal } from './ui/animated-modal';

const AnimatedModal = () => {
    return (
        <Modal> {/* ModalProvider context is provided here */}
            <ModalTrigger>Open Modal</ModalTrigger>
            <ModalBody>
                <ModalContent>
                    <h1>Modal Title</h1>
                    <p>Modal body content goes here.</p>
                </ModalContent>
                <ModalFooter>
                    <CloseButton />
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}

const CloseButton = () => {
    const { setOpen } = useModal();  // Correctly use the hook within ModalProvider context

    return (
        <button onClick={() => setOpen(false)}>Close</button>
    );
}

export default AnimatedModal;
