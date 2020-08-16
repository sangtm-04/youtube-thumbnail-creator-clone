import React from 'react'
import './VideoCard.css'

function VideoCard({
    thumbnailUrl, 
    channelImageUrl, 
    postedDate, 
    title, 
    channelName, 
    noOfViews
}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={thumbnailUrl} alt=""/>
            <div className="videoCard__info">
                <div className="videoCard__channelImageContainer">
                    <img src={channelImageUrl} alt=""/>
                </div> 
                <div className="videoCard__infoText">
                    <p className="videoCard__title">{title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__noOfViewsAndPostedDate">{noOfViews} • {postedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
