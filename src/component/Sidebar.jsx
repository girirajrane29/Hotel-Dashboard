import React from "react";
import { BsFillGridFill, BsFileText } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

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
        <BsFillGridFill
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Options"
          data-tooltip-place="Right"
        />
        <br />
        <AiOutlinePieChart
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Statistics"
          data-tooltip-place="Right"
        />
        <br />
        <CiHeart
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Favorite"
          data-tooltip-place="Right"
        />
        <br />
        <BsFileText
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Docs"
          data-tooltip-place="Right"
        />
        <br />
        <CiCalendar
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Calender"
          data-tooltip-place="Right"
        />
        <br />
        <HiOutlineEnvelope
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Message"
          data-tooltip-place="Right"
        />
        <br />
        <IoSettingsOutline
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Setting"
          data-tooltip-place="Right"
        />
      </div>
      <div className="left-sidebar-options">
        <FiLogOut
          className="icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="LogOut"
          data-tooltip-place="Right"
        />
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default sidebar;
