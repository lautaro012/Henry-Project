import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const items = [
    {
        src: require('../../Style/_temp/mclaren.jpg'),
        altText: 'Slide 1',
        caption: 'Auto'
    },
    {
        src: require('../../Style/_temp/chica.jpg'),
        altText: 'Slide 2',
        caption: 'Chica'
    },
    {
        src: require('../../Style/_temp/robot.jpg'),
        altText: 'Slide 3',
        caption: 'Robot'
    },
    {
        src: require('../../Style/_temp/fortnite.jpg'),
        altText: 'Slide 3',
        caption: 'El fornai pa'
    }
];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem className='carrousel_card'
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <Link to={'/game/' + item.id}>
                        <img src={item.src} alt={item.altText} />
                    </Link>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>

            );
        });

        return (
            <div className='carrousel'>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>

        );
    }
}


export default Example;