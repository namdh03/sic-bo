export type ModalProps = {
    isOpen: boolean;
    loading?: boolean
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};

export type ModalStyleProps = {
    $isOpen: boolean;
};
