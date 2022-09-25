import React, { useState } from 'react'
import style from './header.module.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { removeUser } from '../../../redux/userSlice/userSlice.js'
import UserInform from '../../../components/userInform/UserInform';

const Header = () => {
    const disp = useDispatch();
    const { email } = useSelector(state => state.users)
    const [out, setOut] = useState(false);
    const [menu, setMenu] = useState(false);
    const pass = style.outIcon;
    return (
        <div className={style.header}>
            <h4>EnHell</h4>
            <MenuIcon onClick={() => setMenu(!menu)} className={style.menu} />
            <div className={style.right}>
                <AccountCircleSharpIcon 
                    onClick={() => setOut(!out)}
                    className={style.outIcon}
                     />
                {
                    out ? <p className={style.outVis}><p>{email}</p>
                        <ExitToAppIcon
                            className={style.accOut}
                            onClick={() => disp(removeUser())}
                        />
                    </p>
                        :null
                }
            </div>

            {menu ? <div className={style.setting}>
                <div className={style.top_setting}>

                    <ClearIcon className={style.clear}
                onClick={() => setMenu(!menu)}
                />
                <div className={style.settingHeader}>
                    <AccountCircleSharpIcon className={style.userIcon} />
                    <div className={style.emailOut}>
                        <p>kotsevasker0Gmail.com</p>
                        <ExitToAppIcon
                             onClick={()=>disp(removeUser())}
                            className={style.exit} />
                    </div>
                </div>
                </div>
                
                <UserInform/>
            </div>
                : null
            }
        </div>
    )
}

export default Header