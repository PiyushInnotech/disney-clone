import React from "react";

const viewersList = [
    {
        id: 1,
        img: '/images/viewers-disney.png',
        video: '/videos/1564674844-disney.mp4'
    },
    {
        id: 2,
        img: '/images/viewers-pixar.png',
        video: '/videos/1564676714-pixar.mp4'
    },
    {
        id: 3,
        img: '/images/viewers-marvel.png',
        video: '/videos/1564676115-marvel.mp4'
    },
    {
        id: 4,
        img: '/images/viewers-starwars.png',
        video: '/videos/1608229455-star-wars.mp4'
    },
    {
        id: 5,
        img: '/images/viewers-national.png',
        video: '/videos/1564676296-national-geographic.mp4'
    },
]

const Viewers = (props) => {


    return (
        <div className="viewersWrapper">
            {viewersList.map((item, index) => {
                return (
                    <div key={item.id} className="cardWrap">
                        <img src={item.img} alt="" />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={item.video} type="video/mp4" />
                        </video>
                    </div>
                )
            })}
        </div>
    );
};

export default Viewers;