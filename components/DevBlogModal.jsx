import styles from './DevBlogModal.module.css';
import { useEffect } from 'react';
import Modal from 'react-modal';
import CloseButton from './CloseButton';
import KalachakraIcon from './KalachakraIcon';

export default function DevBlogModal({ modalIsOpen, closeModal, children }) {

    useEffect(() => {
        Modal.setAppElement('#__next');
    });

    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Developer blog modal"
            overlayClassName={styles.overlay}
            className={styles.modal}
        >
            <div className={styles.left}>
                <button onClick={closeModal} className={styles.closeButton}><KalachakraIcon /></button>
            </div>
            <div className={styles.center}> 
                {children}
            </div>
            <div className={styles.right}>
                <button onClick={closeModal} className={styles.closeButton}><CloseButton /></button>
            </div>
        </Modal>
    );
};