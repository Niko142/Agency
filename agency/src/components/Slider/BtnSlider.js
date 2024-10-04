import './Slider.css';

export default function BtnSlider({ src, moveSlide }) {
    return (
        <button className='btn_slide' onClick={moveSlide}>
            <img src={src} alt='Arrow'/>
        </button>
    )
}