import React , {useState} from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";


import Style from "./FollowerTabCard.module.css";
import images from "../../../img";

const FollowerTabCard = ({el,i}) => {

const [following , setFollowing] = useState(false);

  const followMe = () => {
    if(!following){
      setFollowing(true);
    }else
    {
      setFollowing(false)
    }
  }
  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{i+1} <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div  className={Style.FollowerTabCard_box_img}>
          <Image 
          className={Style.FollowerTabCard_box_img_img}
          src={el.background || images.creatorbackground7 }
          alt="profile background"
          width={320}
          height={180}
          objectFit="cover"
          />
        </div>

        <div className={Style.FollowerTabCard_box_profile}>
          <Image  
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={55}
            height={55}
            src={el.user || images.user3}
          />
        </div>

        <div className={Style.FollowerTabCard_box_info}>
          <div  className={Style.FollowerTabCard_box_info_name}>
              <h4>
                {el.seller.slice(0,9)}
                <span>
                  <MdVerified/>
                </span>
              </h4>
              <p>{el.price || 0} ETH</p>
          </div>

          <div className={Style.FollowerTabCard_box_info_following}>
            {
              following ? (
                <a onClick={() => followMe()}>
                    Follow{" "} <span><TiTick/></span>
                </a>
              ) : (
                <a onClick={() => followMe()}>
                    Following
                </a>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
};

export default FollowerTabCard;