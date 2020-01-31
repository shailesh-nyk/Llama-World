import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';

var r = require.context('../assets/slides', false, /\.(png|jpe?g|svg)$/);
var images = r.keys().map(r);

class HomeComponent extends Component {
    render() {
        console.log("IMages");
        console.log(images);
        return (
            <div>
                <Jumbotron>
                    <h1 className="text-center"> Welcome to Llama World  &#128516;</h1>
                    <p>
                    An adorable animal the world decided to obsess over in 2015. It's fluffy, and...actually, I'm pretty sure that's all we cared to learn about them. So here I am educating you Llama lovers with fun facts.
                    </p>
                    <p>
                        The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.
                        Llamas are very social animals and live with others as a herd. Their wool is very soft and lanolin-free. Llamas can learn simple tasks after a few repetitions.
                    </p>
                </Jumbotron>
                <Carousel style={{ height: "500px", backgroundColor: 'currentColor' }}>
                    {images.map(img => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block s-carousel-img"
                                    src={img}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </div>
        )
    }
}

export default HomeComponent