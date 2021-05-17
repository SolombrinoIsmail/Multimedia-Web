import React from "react";
import '../Styles/App.css';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderData';
const PhotoLibrary = () => {
    return <ImageSlider slides={SliderData} />;
};

export default PhotoLibrary;
