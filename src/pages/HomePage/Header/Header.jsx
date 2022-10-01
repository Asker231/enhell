import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { removeUser } from "../../../redux/userSlice/userSlice.js";
import UserInform from "../../../components/userInform/UserInform";
import Badge  from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail'
import { Link } from "react-router-dom";

const Header = () => {
  const disp = useDispatch();
  const { email } = useSelector((state) => state.users);
  const [out, setOut] = useState(false);
  const [menu, setMenu] = useState(false);
  let color = Math.floor(Math.random() * 16700216).toString(16);

  return (
    <div className={style.header}>
      <h4>
        enne<span style={{color:'black', backgroundColor: `#${color}`, fontWeight: "700",padding:'2px 4px',borderRadius:'10px' }}>LL</span>
      </h4>
      <MenuIcon onClick={() => setMenu(!menu)} className={style.menu} />
      <div className={style.right}>
        <Link to='/MessagePage'>
        <Badge badgeContent={4} color="primary">
         <MailIcon style={{cursor:'pointer',color:'#fff'}} color="action" />
      </Badge>
        </Link>
      
        <AccountCircleSharpIcon
          onClick={() => setOut(!out)}
          className={style.outIcon}
        />
        {out ? (
          <p className={style.outVis}>
            <p>{email}</p>
            <ExitToAppIcon
              className={style.accOut}
              onClick={() => disp(removeUser())}
            />
          </p>
        ) : null}
      </div>

      {menu ? (
        <div className={style.setting}>
          <div className={style.top_setting}>
            <ClearIcon className={style.clear} onClick={() => setMenu(!menu)} />
            <div className={style.settingHeader}>
              <AccountCircleSharpIcon className={style.userIcon} />
              <Link to='/MessagePage'>
        <Badge badgeContent={4} color="primary">
         <MailIcon style={{cursor:'pointer',color:'#fff'}} color="action" />
      </Badge>
        </Link>
              <div className={style.emailOut}>
                <p>kotsevasker0Gmail.com</p>
                <ExitToAppIcon
                  onClick={() => disp(removeUser())}
                  className={style.exit}
                />
              </div>
         
            </div>
          </div>
          
          <UserInform />
   
        </div>
       
      ) : null}
    </div>
  );
};

export default Header;
