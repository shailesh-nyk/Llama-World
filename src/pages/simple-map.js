import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import alpaca from '../assets/types/alpaca.png';
import guanaco from '../assets/types/guanaco.png';
import llama from '../assets/types/llama.png';
import vicugna from '../assets/types/vicugna.png';

const MarkerComponent = (data) => {
       var imgsrc = null;
       switch(data.type) {
         case 'alpaca' : {imgsrc = alpaca; break;}
         case 'llama' : {imgsrc = llama; break;}
         case 'guanaco' : {imgsrc = guanaco; break;}
         case 'vicugna' : {imgsrc = vicugna; break;}
         default : {imgsrc = llama; break;}
       }
       return (
          <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(null,data.name, data.details)}
          >
         <img style={{width: "5vw", minWidth: "50px", transform: 'translate(-50%, -50%)'}} src={imgsrc} rounded />
         </OverlayTrigger>
         
       )
        
};
function renderTooltip(props, name, details) {
    return <Popover>
    <Popover.Title as="h3">{name}</Popover.Title>
    <Popover.Content>
          {details}
    </Popover.Content>
  </Popover>;
}
class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: -19.0206372, lng: -65.3298328},
    zoom: 6,
    locArray : [
       {lat: -24.1250827, long : -68.8694732, name: 'Atacama Desert, Chile', type: 'guanaco', details: "This gorgeous expanse of colorful volcanic landscape lies between the border of Chile and the Pacific Ocean. In addition to the stunning scenery, it's filled with adorable indigenous creatures like guanacos and vicunas, which belong to the camelid family just like llamas. They share a similar visage to their more well-known cousins, and the desert is a wonderful place to see these amazing creatures in their natural habitat."},
       {lat: -22.2056589, long : -67.8144651, name: 'Laguna Colorada, Bolivia', type: 'alpaca', details: "If the desert is too hot and dry for you, try a lake day instead by visiting the alpacas of Laguna Colorada in Bolivia. Sometimes called The Red Lagoon, this shallow salt lake has been touted as one of South America's most beautiful natural wonders. The water's red hue is caused by sediments and a particular type of algae. Along with the adorable alpacas, it's also home to thousands of flamingos."},
       {lat: -13.5300169, long : -71.9742687, name: 'Cusco, Peru', type: 'llama', details: "Peruvian culture is well known for having llamas at the forefront. They've been an integral part of society in the country for centuries. Llamas were one of the only domesticated animals used by the Incas, and ancient traditions involving llamas have been passed down for generations. If you're looking to get up close and snap a few photos with these fluffy Peruvian mascots, Cusco is a great place to start."},
       {lat: -50.9423262, long : -73.4089766, name: 'Torres del Paine National Park, Chile', type: 'vicugna', details: "Located in Chilean Patagonia, Torres del Paine National Park is the perfect place to camp, hike or picnic alongside the guanacos. The park has an endless stream of activities to offer including guided hikes in the glaciers and kayak tours, which all offer great opportunities to get to know the creatures who reside there."},
       {lat: -42.5181632, long :  172.7580163, name: 'Hanmer Springs, New Zealand', type: 'llama', details: "Take a hike with a llama in Hanmer Springs! This area on New Zealand's South Island offers many other activities, including mountain biking and hot pools. It's difficult to imagine a scenario more ideal than relaxing in a natural hot pool after a long day of petting llamas and admiring breathtaking New Zealand views."},
       {lat: -21.2697004, long : -66.7948361, name: 'Andes Mountains, Bolivia', type: 'alpaca', details: "Alpacas roam all over the Andes Mountain Range, which makes this destination one of the best in the world to see them living in the wild. Alpacas prefer the wet and humid climate of the mountains while their cousin, the llama, prefers the cool and dry climate to the south. The Andes are thought to be the location where indigenous humans first domesticated the alpaca."},
       {lat: 57.3395389, long : -5.659046, name: 'Plockton, Scotland', type: 'alpaca', details: "The Scottish Highlands are teeming with llama farms, so it's the perfect place to get up close with these fluffy friends. You can even book a stay in a cabin on one of the farms so you can wake up surrounded by Scottish beauty and llama love every morning."},
       {lat: -13.1631412, long : -72.5471516, name: 'Machu Picchu, Peru', type: 'llama', details: "If you're looking for an educational adventure, the llamas of Machu Picchu have lots of history to share. The ancient Incas integrated llamas into their everyday lives thousands of years ago. Today, you can lead a llama up to the top of this famous cultural landmark and learn something new along the way."},
       {lat: -24.2053236, long : -65.375596, name: 'Jujuy, Argentina', type: 'llama', details: "Llamas in Argentina are a popular tourist attraction, which makes this location one to seriously consider when looking to get up close. Jujuy is a lesser-known province of Argentina that offers a look at indigenous culture without too much of the tourist fluff that comes along with more frequented destinations."},
       {lat: 57.079142, long : -115.192186, name: 'Alberta, Canada', type: 'alpaca', details: "With llama farming on the rise, Canada is a great place to see llamas of all kinds. From miniature llamas, alpacas, working llamas who offer rides and everything in between, Canada has what you need to scratch the llama itch. Learn more about llamas in Canada here."},
    ]
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '95%', margin: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'MY_GOOGLE_API_KEY_HIDDEN_FOR_SECURITY_REASONS' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.locArray.map(region => {
          return (
            <MarkerComponent
                        lat={region.lat}
                        lng={region.long}
                        text={region.name}
                        type={region.type}
                        name={region.name}
                        details={region.details}
            />
          )
        })}
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
