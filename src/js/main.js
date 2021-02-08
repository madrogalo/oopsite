import MainSlider from './modules/slider-main';
import VideoPlayer from './modules/playVideo';

const videoplayer = new VideoPlayer('.showup .play', '.overlay');
const slider = new MainSlider({page: '.page', btns: '.next'});

window.addEventListener("DOMContentLoaded", () => {
    slider.render();
    videoplayer.init();
});