import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from '../firebase/firebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import SliderMovie from "../components/SliderMovies";
import '../styles/homePage.css'
import { setMovies } from "../redux/movieSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  let recommendsMovie = [];
  let newMovies = [];
  let originalMovies = [];
  let trendingMovies = [];

  const getMoviesList = async () => {
    const q = query(collection(db, "movies"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      if (data.type.includes("new")) {
        newMovies = [...newMovies, { id: doc.id, data }];
      }
      if (data.type.includes("recommend")) {
        recommendsMovie = [...recommendsMovie, { id: doc.id, data }];
      }
      if (data.type.includes("trending")) {
        trendingMovies = [...trendingMovies, { id: doc.id, data }];
      }
      if (data.type.includes("original")) {
        originalMovies = [...originalMovies, { id: doc.id, data }];
      }
    });
    dispatch(
      setMovies({
        recommend: recommendsMovie,
        newDisney: newMovies,
        original: originalMovies,
        trending: trendingMovies,
      })
    );
  }

  useEffect(() => {
    getMoviesList()
  }, [userName])

  return (
    <div className="pageWrapper">
      <ImgSlider />
      <Viewers />
      <SliderMovie title="Recommended for you" type="recommend" />
      <SliderMovie title="Trending" type="trending" />
      <SliderMovie title="Originals" type="original" />
      <SliderMovie title="New to Disney+" type="newDisney" />
    </div>
  )
}

export default HomePage