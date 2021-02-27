import React, {Component} from 'react';
import { render } from 'react-dom';
import ReactPlayer from 'react-player'
import kinggnu_2 from '../video/kinggnu_2.mp4'
import sekainoowari from '../video/sekainoowari.mp4'
import aonohonou from '../video/aonohonou.mp4'
import yonezu from '../video/yonezu.mp4'
import suda from '../video/suda.mp4'
import Vmodal from './vModal.js'
import './style.css'
import './modal.css'


class Video extends Component{
        constructor(){
            super();
            this.state={
                show1:false,
                show2:false,
                show3:false,
                show4:false
            };
            this.showModal1 = this.showModal1.bind(this)
            this.hideModal1 = this.hideModal1.bind(this)
            this.showModal2 = this.showModal2.bind(this)
            this.hideModal2 = this.hideModal2.bind(this)
            this.showModal3 = this.showModal3.bind(this)
            this.hideModal3 = this.hideModal3.bind(this)
            this.showModal4 = this.showModal4.bind(this)
            this.hideModal4 = this.hideModal4.bind(this)
        }

        showModal1 = () =>{
            this.setState({show1:true})
        }

        hideModal1 = () =>{
            this.setState({show1:false})
        }
        showModal2 = () =>{
            this.setState({show2:true})
        }

        hideModal2 = () =>{
            this.setState({show2:false})
        }
        showModal3 = () =>{
            this.setState({show3:true})
        }

        hideModal3 = () =>{
            this.setState({show3:false})
        }
        showModal4 = () =>{
            this.setState({show4:true})
        }

        hideModal4 = () =>{
            this.setState({show4:false})
        }

        render(){
        return(
            
            <div className="grid-canvas">

                <div className="grid-item">
                    <Vmodal className="overlay" show={this.state.show1} handleClose={this.hideModal1} videosrc={kinggnu_2}></Vmodal>

                    <div className='player-wrapper' onClick={this.showModal1}>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {kinggnu_2}
                                width='100%'
                                height='100%' 
                                />
                    </div>                
                </div>
                <div className="grid-item">
                <Vmodal className="overlay" show={this.state.show2} handleClose={this.hideModal2} videosrc={aonohonou}></Vmodal>
                    <div className='player-wrapper' onClick={this.showModal2}>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {aonohonou}
                                width='100%'
                                height='100%'
                                controls = {false}/>
                    </div>  
                </div>
                <div className="grid-item">
                <Vmodal className="overlay" show={this.state.show3} handleClose={this.hideModal3} videosrc={yonezu}></Vmodal>

                    <div className='player-wrapper' onClick={this.showModal3}>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {yonezu}
                                width='100%'
                                height='100%'
                                controls = {false}/>
                    </div> 
                </div>
                <div className="grid-item">
                <Vmodal className="overlay" show={this.state.show4} handleClose={this.hideModal4} videosrc={suda}></Vmodal>

                <div className='player-wrapper' onClick={this.showModal4}>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {suda}
                                width='100%'
                                height='100%'
                                controls = {false}/>
                    </div> 
                </div>
            </div>
        )
            }
}

export default Video;