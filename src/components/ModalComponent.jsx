'use client'
import Modal from 'react-modal'
import useQuiosco from '@/hooks/useQuiosco';
import ModalProducto from './ModalProducto';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#modal');

export default function ModalComponent() {
    const { modal } = useQuiosco()
    return (
        <>
            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <ModalProducto />
                </Modal>
            )}
        </>
    )
}
