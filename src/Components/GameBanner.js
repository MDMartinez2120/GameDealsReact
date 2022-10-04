import React from "react";
import './GameBanner.css'

function GameBanner(){
//     let slideIndex = 1;
//     showSlides(slideIndex);
//
// // Next/previous controls
//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }
//
// // Thumbnail image controls
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }
//
//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("mySlides");
//         let dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//     }
    function submitHandler(e){
        e.preventDefault();
    }

    // return (
    //         <div className='slideshow-container'>
    //             <div className="mySlides fade">
    //                 <div className="number-text">1 / 3</div>
    //                 <img src="" style="width:100%"/>
    //                     <div className="text">Caption Text</div>
    //             </div>
    //
    //             <div className="mySlides fade">
    //                 <div className="number-text">2 / 3</div>
    //                 <img src="" style="width:100%"/>
    //                     <div className="text">Caption Two</div>
    //             </div>
    //
    //             <div className="mySlides fade">
    //                 <div className="number-text">3 / 3</div>
    //                 <img src="" style="width:100%"/>
    //                     <div className="text">Caption Three</div>
    //             </div>
    //             <div>
    //                 <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
    //                 <a className="next" onClick="plusSlides(1)">&#10095;</a>
    //             </div>
    //             <div style="text-align:center">
    //                 <span className="dot" onClick={submitHandler}></span>
    //                 <span className="dot" onClick={submitHandler}></span>
    //                 <span className="dot" onClick={submitHandler}></span>
    //             </div>
    //         </div>
    // )
}
export default GameBanner;