import React, { useState , useEffect } from "react";
import "./CreatePost.css";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import dropdown from "../../assets/down-chevron.svg";
import tick from "../../assets/tick.svg";

const CatagorySelector = (props) => {
    const location = useLocation();
    const [postCatClicked, setPostCatClicked] = useState(false);
    const [title , setTitle ] = useState("");

    useEffect(() => {
        let newTitle = "";
        props.selectedCatagory.forEach(element => {
            if( newTitle !== "" ) newTitle += ' , ';
            newTitle += element;
        });
        setTitle( newTitle );
    }, [props.selectedCatagory])

    const renderPostCatagory = () => {
        return (
            <div className="post-catagory-option">
                <NavLink
                    to={`${location.pathname}${location.hash}#create-catagory`}
                >
                    Create New Catagory
                </NavLink>
                <li id="Option 1" onClick={props.selectOnClick}>
                    Option 1
                    {props.selectedCatagory.filter(
                        (element) => element === "Option 1"
                    ).length ? (
                        <span>
                            <img src={tick} height="15px" alt="tick" />
                        </span>
                    ) : null}
                </li>
                <li id="Option 2" onClick={props.selectOnClick}>
                    Option 2
                    {props.selectedCatagory.filter(
                        (element) => element === "Option 2"
                    ).length ? (
                        <span>
                            <img src={tick} height="15px" alt="tick" />
                        </span>
                    ) : null}
                </li>
                <li id="Option 3" onClick={props.selectOnClick}>
                    Option 3
                </li>
            </div>
        );
    };
    return (
        <div>
            <div
                className="post-catagory"
                onClick={() => {
                    setPostCatClicked(!postCatClicked);
                }}
            >
                <div className="post-catagory-select">
                    <span>{title.length ? title : "Post Catagory"}</span>
                </div>
                <img src={dropdown} height="15px" alt="down-chevron" />
            </div>
            {postCatClicked ? renderPostCatagory() : null}
        </div>
    );
};

export default CatagorySelector;
