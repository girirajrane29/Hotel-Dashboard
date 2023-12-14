import React from "react";
import { BsFillGridFill, BsFileText } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const sidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-options">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20200814/ourmid/pngtree-simple-background-of-multiple-colors-gradient-solid-color-material-png-image_392299.jpg"
          alt=""
          width="40"
          height="40"
        ></img>
        <br />
        <BsFillGridFill className="icon" />
        <br />
        <AiOutlinePieChart className="icon" />
        <br />
        <CiHeart className="icon" />
        <br />
        <BsFileText className="icon" />
        <br />
        <CiCalendar className="icon" />
        <br />
        <HiOutlineEnvelope className="icon" />
        <br />
        <IoSettingsOutline className="icon" />
      </div>
      <div className="left-sidebar-options">
        <FiLogOut className="icon" />
      </div>
    </div>
  );
};

export default sidebar;
