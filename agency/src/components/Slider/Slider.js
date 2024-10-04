import { testing } from '../../data';
import BtnSlider from './BtnSlider';
import rightArrow from './icons/Arrow_right.svg';
import leftArrow from './icons/Arrow_left.svg';
import './Slider.css';
import { useEffect, useState } from 'react';

const Feedback = ({imgIndex, data}) => {

    return (
    <div className='feedback'>
        {data.map((item, ind) => {
            let position = 'slide_next';
            if (ind === imgIndex) {position ='slide_active'}
            if ((ind === imgIndex - 1) || (ind === 0 && imgIndex === data.length - 1)) {position = 'slide_prev'}
                return (
                    <div className={position} key={item.id}>
                        <div className="feedback_wrap">
                            <p>{item.description}</p>
                        </div>
                        <div className="desc">
                            <h4 className="name">{item.name}</h4>
                            <p>{item.employee}</p>
                        </div>
                    </div>
                )
        })}
    </div>
    )
}

export default function Slider() {
    const [test] = useState(testing);
    const [imgIndex, setIndex] = useState(0);

    useEffect(() => {
        const lastIndx = test.length - 1;
        if (imgIndex < 0) {setIndex(lastIndx)}
        if (imgIndex > lastIndx) {setIndex(0)}
    }, [imgIndex, test])

    const prevSlide = () => {
        setIndex(prev => prev - 1)
    }
    const nextSlide = () => {
        setIndex(prev => prev + 1)
    }
    
    return (
        <div className="test_wrap">
            <Feedback imgIndex={imgIndex} data={test}/>
            <div className="navigation">
                <BtnSlider src={leftArrow} moveSlide={prevSlide}/>
                <BtnSlider src={rightArrow} moveSlide={nextSlide}/>
            </div>
        </div>
    )
}