import React from 'react'
import './MainContainer.css'
import VideoCard from './VideoCard'
function MainContainer() {
    return (
        <div className="mainContainer">
            <h2 className="mainContainer__title">Recommended</h2>
            <div className="mainContainer__videos">
                <VideoCard 
                    thumbnailUrl="https://quangcaoytb.com/wp-content/uploads/2019/07/a1.jpg" 
                    channelImageUrl="https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png"
                    postedDate="3 days ago"
                    title="Live demo youtube thumbnail clone"
                    channelName="tmsang"
                    noOfViews="5.2M views"
                />           
                <VideoCard 
                    thumbnailUrl="https://quangcaoytb.com/wp-content/uploads/2019/07/a1.jpg" 
                    channelImageUrl="https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png"
                    postedDate="3 days ago"
                    title="Live demo youtube thumbnail clone"
                    channelName="tmsang"
                    noOfViews="5.2M views"
                />   
                <VideoCard 
                    thumbnailUrl="https://quangcaoytb.com/wp-content/uploads/2019/07/a1.jpg" 
                    channelImageUrl="https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png"
                    postedDate="3 days ago"
                    title="Live demo youtube thumbnail clone"
                    channelName="tmsang"
                    noOfViews="5.2M views"
                />   
                <VideoCard 
                    thumbnailUrl="https://quangcaoytb.com/wp-content/uploads/2019/07/a1.jpg" 
                    channelImageUrl="https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png"
                    postedDate="3 days ago"
                    title="Live demo youtube thumbnail clone"
                    channelName="tmsang"
                    noOfViews="5.2M views"
                />    
                <VideoCard 
                    thumbnailUrl="https://quangcaoytb.com/wp-content/uploads/2019/07/a1.jpg" 
                    channelImageUrl="https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png"
                    postedDate="3 days ago"
                    title="Live demo youtube thumbnail clone"
                    channelName="tmsang"
                    noOfViews="5.2M views"
                />         
            </div>
        </div> 
        
    )
}

export default MainContainer
