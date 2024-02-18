import { ModalActions, ModalLoading, ModalWrapper } from "./Modal.styled";
import { ModalProps } from "./Modal.type";

const Modal = ({
    isOpen,
    loading,
    title,
    description,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
}: ModalProps) => {
    return (
        isOpen && (
            <ModalWrapper $isOpen={isOpen}>
                <h2>{title}</h2>
                <p>{description}</p>

                <ModalActions>
                    {cancelText && (
                        <button onClick={onCancel}>{cancelText}</button>
                    )}
                    {confirmText && (
                        <button onClick={onConfirm}>
                            {loading ? <ModalLoading /> : confirmText}
                        </button>
                    )}
                </ModalActions>
            </ModalWrapper>
        )
    );
};

export default Modal;
