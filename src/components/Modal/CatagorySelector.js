import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import dropdown from "../../assets/down-chevron.svg";
import tick from "../../assets/tick.svg";
import { connect } from "react-redux";

const CatagorySelector = (props) => {
    const location = useLocation();
    const [postCatClicked, setPostCatClicked] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {
        let newTitle = "";
        props.selectedCatagory.forEach((element) => {
            if (newTitle !== "") newTitle += " , ";
            newTitle += element;
        });
        setTitle(newTitle);
    }, [props.selectedCatagory]);

    const renderPostCatagory = () => {
        return (
            <div className="post-catagory-option">
                <NavLink
                    to={`${location.pathname}${location.hash}#create-catagory`}
                >
                    Create New Catagory
                </NavLink>
                {props.catagory.map((element, index) => {
                    return (
                        <li
                            id={element}
                            onClick={(e) => props.selectCatagory( e.target.id )}
                            key={index}
                        >
                            {element}
                            {props.selectedCatagory.filter(
                                (el) => el === element
                            ).length ? (
                                <span>
                                    <img src={tick} height="15px" alt="tick" />
                                </span>
                            ) : null}
                        </li>
                    );
                })}
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

const mapStateToProps = (state) => {
    return {
        catagory: state.catagory,
        selectedCatagory: state.selectedCatagory,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        selectCatagory: ( catagoryName ) => {
            dispatch({
                type: "SELECT_CATAGORY",
                payload: {
                    catagoryName: catagoryName,
                }
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CatagorySelector);
