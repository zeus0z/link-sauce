import './styles.css'

type Props = {
    modalTitle: string;
    closeModalFunction: ()=>void;
    children: any;

}

const Modal = ({ modalTitle, closeModalFunction, children }: Props) => {

    return (
        <div className="modal">

            <div className="modalHeader">
                <h2 className="modalTitle">{modalTitle}</h2>
                <span className="closeButton"
                    onClick={closeModalFunction}>
                    &times;
                </span>
            </div>

            <div className="modalContent">
                {children}
            </div>

        </div>
    )
}

export default Modal
