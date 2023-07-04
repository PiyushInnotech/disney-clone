import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/details.css'
import db from "../firebase/firebaseConfig";

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such document in firebase 🔥");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);

    return (
        <div className="pageWrapper">
            <div className="background">
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </div>

            <div className="movieTitle">
                <img alt={detailData.title} src={detailData.titleImg} />
            </div>
            <div className="movieContent">
                <div className="btnGroup">
                    <button className="buttonCommon player">
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </button>
                    <button className="buttonCommon trailer">
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </button>
                </div>
                <div className="subTitle">{detailData.subTitle}</div>
                <div className="desc">{detailData.description}</div>
            </div>
        </div>
    );
};

export default Detail;