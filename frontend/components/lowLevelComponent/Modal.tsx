import { ModalProps } from "@/lib/props"
import { Modal as BasicModal, } from "@mui/material"

export default function Modal ( props: ModalProps )
{
    return <BasicModal open={ props.open }
        onClose={ props.onClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        { props.children }
    </BasicModal>

}