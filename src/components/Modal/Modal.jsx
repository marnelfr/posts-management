import classes from "./modal.module.css";

const Modal = ({onClose, children}) => {
  return (
    <>
      <div onClick={onClose} className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal;