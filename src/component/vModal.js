import './modal.css';
import ReactPlayer from 'react-player';


const Vmodal = ({ handleClose, show, videosrc}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main" onClick={(e)=>{e.stopPropagation()}}>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {videosrc}
            width='100%'
            height='100%'
            controls = {true}/>
          </section>      
    </div>
  );
};

export default Vmodal;