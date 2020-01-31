import React, { Component } from 'react';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import llama_face from '../assets/info/llama31.jpeg';
import llama_size from '../assets/info/llama_size.gif';
import  Carousel  from 'react-bootstrap/Carousel';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function renderTooltip(props,details) {
    return <Popover>
    <Popover.Content>
          {details}
    </Popover.Content>
  </Popover>;
}
class AboutComponent extends Component {
    render() {
        var facts = [
            "Some farmers use llamas to guard their sheep.",
            "Llamas were sources of meat and wool for the ancient Inca.",
            "Llamas are the only draft animal in the South American continent.",
            "Llamas are diabetic — sort of.",
            "They spit or stick out their tongue when they are annoyed.",
            "Llamas are smart. They can distinguish between the neighbor’s dog and a predatory coyote.",
            "Llamas are the camel’s hippie cousins.",
            "One of the ways llamas communicate is by humming."
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm s-info-container">
                        <Row style={{marginTop: "20px"}}>
                            <Col className="d-flex justify-content-center align-items-start" >
                                <img src={llama_face} className='s-info-icon'/>
                            </Col>
                            <Col >
                                <p><b>COMMON NAME:</b> Llama</p>

                                <p><b>SCIENTIFIC NAME:</b> Lama glama</p>

                                <p><b>TYPE:</b> Mammals</p>

                                <p><b>DIET:</b> Herbivore</p>

                                <p><b>SIZE:</b> Height at the shoulder: 47 inches</p>

                                <p><b>WEIGHT:</b> 250 pounds</p>

                                <p><b>SIZE RELATIVE TO A 6-FT MAN</b>:</p>
                                <p><img src={llama_size} className="w-75"/></p>
                            </Col>
                         </Row>
                    </div>   
                    <div className="col-sm" style={{margin: "20px"}}>
                        <span className="s-did-you-know">DID YOU KNOW?</span>
                        <Carousel className="d-flex justify-content-center align-items-center" style={{ height: "100%", backgroundColor: "darkblue", borderRadius: "8px" }}>
                            {facts.map(fact => {
                                return (
                                    <Carousel.Item style={{ color : "white", textAlign: "center", padding: "15%", fontSize: "1.5rem"}}>
                                        {fact}
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>   
                </div>   
                <div className="row">
                    <div className="col-sm s-info-container p-3" style={{backgroundColor: "lavender",  fontSize: "23px"}}>
                         <h3 style={{textAlign: "center", marginBottom: "20px"}}>Llama Soundboard</h3>
                         <div className="row">
                         <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip(null,"An orgle is a guttural vocal sound produced by a male alpaca or llama during copulation. Orgling helps induce ovulation in the female.")}
                            >
                            <div className="col-sm d-flex flex-column align-items-center">
                                <i class="fas fa-volume-up" onClick={() => this.playSound('http://urlserveurs.free.fr/sound/misc/ooorgle.wav')}></i>
                                Ooorgle
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip(null,"The sound a baby llama makes is a bleat.")}
                            >
                            <div className="col-sm d-flex flex-column align-items-center">
                                <i class="fas fa-volume-up" onClick={() => this.playSound('http://urlserveurs.free.fr/sound/misc/bleeeat.wav')}></i>
                                Bleeeat
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip(null,"The sound a llama makes when it's pissed off. Yes, these cute furries can be triggered")}
                            >
                            <div className="col-sm d-flex flex-column align-items-center">
                                <i class="fas fa-volume-up" onClick={() => this.playSound('http://urlserveurs.free.fr/sound/misc/brawwrr.wav')}></i>
                                Brawwrr
                            </div>
                        </OverlayTrigger>    
                         </div>
                    </div>
                </div>             
            </div>
        )
    }
    playSound(url) {
        let audio = new Audio(url);
        audio.play();
    }
}

export default AboutComponent