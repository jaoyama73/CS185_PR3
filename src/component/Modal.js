import './modal.css';


const Modal = ({ handleClose, show ,imagesrc}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className="modal-main" onClick={(e)=>{e.stopPropagation()}}>
        <img id="modal" src = {imagesrc}></img>
      </section>
    </div>
  );
};

export default Modal;