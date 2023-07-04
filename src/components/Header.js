import { useEffect } from "react";
import '../styles/header.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebaseConfig";
import {
    setUserLoginDetails,
    setSignOutState,
} from "../redux/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userName = useSelector((state) => state.user.name);
    const userPhoto = useSelector((state) => state.user.photo);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserDetails(user);
                navigate("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUserDetails(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate("/");
                })
                .catch((err) => alert(err.message));
        }
    };

    const setUserDetails = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <nav>
            <a className="headerLogo">
                <img src="/images/logo.svg" alt="Disney+" />
            </a>

            {!userName ? (
                <a className="loginButton" onClick={handleAuth} >Login</a>
            ) : (
                <>
                    <div className="navMenu">
                        <h4>Disney+ hostar</h4>
                    </div>
                    <div className="signOut">
                        <img src={userPhoto} alt={userName} className="userImage" />
                        <div className="dropDown" onClick={handleAuth}>
                            <span >Sign out</span>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Header;