import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Img_1 from '../image/Img_1.jpg'
import Img_2 from '../image/Img_2.jpg'
import Img_3 from '../image/Img_3.jpg'
import Img_4 from '../image/Img_4.jpg'
import Img_5 from '../image/Img_5.jpg'
import Img_6 from '../image/Img_6.jpg'
import Img_7 from '../image/Img_7.jpg'
import Img_8 from '../image/Img_8.jpg'
import Img_9 from '../image/Img_9.jpg'
import Img_10 from '../image/Img_10.jpg'
import Img_11 from '../image/Img_11.jpg'
import Img_12 from '../image/Img_12.jpg'
import Modal from './Modal.js'


class Image extends Component{
    constructor(){
        super();
        this.state = {
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            show6:false,
            show7:false,
            show8:false,
            show9:false,
            show10:false,
            show11:false,
            show12:false
        };
        this.showModal1 = this.showModal1.bind(this);
        this.hideModal1 = this.hideModal1.bind(this);
        this.showModal2 = this.showModal2.bind(this);
        this.hideModal2 = this.hideModal2.bind(this);
        this.showModal3 = this.showModal3.bind(this);
        this.hideModal3 = this.hideModal3.bind(this);
        this.showModal4 = this.showModal4.bind(this);
        this.hideModal4 = this.hideModal4.bind(this);
        this.showModal5 = this.showModal5.bind(this);
        this.hideModal5 = this.hideModal5.bind(this);
        this.showModal6 = this.showModal6.bind(this);
        this.hideModal6 = this.hideModal6.bind(this);
        this.showModal7 = this.showModal7.bind(this);
        this.hideModal7 = this.hideModal7.bind(this);
        this.showModal8 = this.showModal8.bind(this);
        this.hideModal8 = this.hideModal8.bind(this);
        this.showModal9 = this.showModal9.bind(this);
        this.hideModal9 = this.hideModal9.bind(this);
        this.showModal10 = this.showModal10.bind(this);
        this.hideModal10 = this.hideModal10.bind(this);
        this.showModal11 = this.showModal11.bind(this);
        this.hideModal11 = this.hideModal11.bind(this);
        this.showModal12 = this.showModal12.bind(this);
        this.hideModal12 = this.hideModal12.bind(this);
    }

    showModal1 = () => {
        this.setState({ show1: true});
      };
    showModal2 = () => {
        this.setState({ show2: true});
    };
    showModal3 = () => {
        this.setState({ show3: true});
    };
    showModal4 = () => {
        this.setState({ show4: true});
    };
    showModal5 = () => {
        this.setState({ show5: true});
    };
    showModal6 = () => {
        this.setState({ show6: true});
    };
    showModal7 = () => {
        this.setState({ show7: true});
    };
    showModal8 = () => {
        this.setState({ show8: true});
    };
    showModal9 = () => {
        this.setState({ show9: true});
    };
    showModal10 = () => {
        this.setState({ show10: true});
    };
    showModal11 = () => {
        this.setState({ show11: true});
    };
    showModal12 = () => {
        this.setState({ show12: true});
    };
    
    hideModal1 = () => {
        this.setState({ show1: false });
      };
    hideModal2 = () => {
        this.setState({ show2: false });
    };
    hideModal3 = () => {
        this.setState({ show3: false });
    };
    hideModal4 = () => {
        this.setState({ show4: false });
    };
    hideModal5 = () => {
        this.setState({ show5: false });
    };
    hideModal6 = () => {
        this.setState({ show6: false });
    };
    hideModal7 = () => {
        this.setState({ show7: false });
    };
    hideModal8 = () => {
        this.setState({ show8: false });
    };
    hideModal9 = () => {
        this.setState({ show9: false });
    };
    hideModal10 = () => {
        this.setState({ show10: false });
    };
    hideModal11 = () => {
        this.setState({ show11: false });
    };
    hideModal12 = () => {
        this.setState({ show12: false });
    };
    
    
    render(){
    return(
        <div>
            
            <div className="img_container" style={{marginLeft:'auto', marginRight:'auto'}}>
                <div className="grid-canvas">
                    <div className="grid-item">
                        <Modal className="overlay" show={this.state.show1} handleClose={this.hideModal1} imagesrc={Img_1}>
                        </Modal>
                        <img src={Img_1} onClick={this.showModal1}/>
                    </div>
                    <div className="grid-item">
                        <Modal className="overlay" show={this.state.show2} handleClose={this.hideModal2} imagesrc={Img_2}>
                        </Modal>
                        <img src={Img_2} onClick={this.showModal2}/>
                    </div>
                    <div className="grid-item">
                        <Modal className="overlay" show={this.state.show3} handleClose={this.hideModal3} imagesrc={Img_3}>
                        </Modal>
                        <img src={Img_3} onClick={this.showModal3}/>
                    </div>
                    <div className="grid-item">
                        <Modal className="overlay" show={this.state.show4} handleClose={this.hideModal4} imagesrc={Img_4}>
                        </Modal>
                        <img src={Img_4} onClick={this.showModal4}/>
                    </div>
                    <div className="grid-item">
                        <Modal className="overlay" show={this.state.show5} handleClose={this.hideModal5} imagesrc={Img_5}>
                        </Modal>
                        <img src={Img_5} onClick={this.showModal5}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show6} handleClose={this.hideModal6} imagesrc={Img_6}>
                        </Modal>
                        <img src={Img_6} onClick={this.showModal6}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show7} handleClose={this.hideModal7} imagesrc={Img_7}>
                        </Modal>
                        <img src={Img_7} onClick={this.showModal7}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show8} handleClose={this.hideModal8} imagesrc={Img_8}>
                        </Modal>
                        <img src={Img_8} onClick={this.showModal8}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show9} handleClose={this.hideModal9} imagesrc={Img_9}>
                        </Modal>
                        <img src={Img_9} onClick={this.showModal9}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show10} handleClose={this.hideModal10} imagesrc={Img_10}>
                        </Modal>
                        <img src={Img_10} onClick={this.showModal10}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show11} handleClose={this.hideModal11} imagesrc={Img_11}>
                        </Modal>
                        <img src={Img_11} onClick={this.showModal11}/>
                    </div>
                    <div className="grid-item">
                    <Modal className="overlay" show={this.state.show12} handleClose={this.hideModal12} imagesrc={Img_12}>
                        </Modal>
                        <img src={Img_12} onClick={this.showModal12}/>
                    </div>
                </div>
            </div>

            <button id="top_button" onClick="returnTop()">⇪<i/>

        </button>

            <div id="modal" class="modal" onClick="this.style.display='none'">
            <div class="modal-center">
              <img id="overlay_img" onClick="event.stopPropagation();" style={{maxWidth:'100%'}}/>
            </div>
            <p style={{textAlign: 'center', fontSize: '11px'}}>Photos by Jenny Aoyama</p>
            <script src="scripts/script.js"></script>
            </div>
        </div>        
    )
}

}


export default Image;