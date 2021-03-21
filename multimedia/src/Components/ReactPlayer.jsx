import React from "react";
import ReactPlayer from "react-player";

export default function () {
    return (
        <div className="Library">

            < ReactPlayer className="Video"
                controls
                url='https://www.youtube.com/watch?v=y9MCHwZNjpk&ab_channel=NicolaB%C3%A4chi'/>

            <ReactPlayer className="Video"
                controls
                url='https://www.youtube.com/watch?v=-XzVFDfljlU&ab_channel=LesaleProductions'/>

            <ReactPlayer className="Video"
                controls
                url='https://www.youtube.com/watch?v=M9YoGGQ2v3s&ab_channel=LesaleProductions'/>
            <ReactPlayer className="Video"
                         controls
                         url=' https://www.youtube.com/watch?v=034zymd9e44&ab_channel=LesaleProductions'/>

        </div>
    )

}