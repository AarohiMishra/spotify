import React from "react";
import logo from '../Img/logo.svg';
import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";

function Sidebar() {
  return (
    <>
      <aside className="w-60 bg-black pt-6 flex flex-col flex-shrink-0">
        <div className="px-10 mb-7">
          <img src={logo} alt="Spotify" className="h-10"></img>
        </div>

        <Menu/>
        <Playlist/>
      </aside>
    </>
  );
}

export default Sidebar;