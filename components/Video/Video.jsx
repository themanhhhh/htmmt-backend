import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../img";


const Video = () => {
  return (
    <div className={Style.Video}>
        <div className={Style.Video_box}>
            <h1>
                <span>🎬</span> The Videos
            </h1>
            <p>
            Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.
            </p>
            <div className={Style.Video_box_frame}>
                <div className={Style.Video_box_frame_left}>
                    <Image src={images.creatorbackground11}
                    alt="Video image"
                    width={1050}
                    height={600}
                    objectFit="cover"
                    className={Style.Video_box_frame_left_img}
                    />                 
                </div>

                <div className={Style.Video_box_frame_right}>
                    Hey
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video