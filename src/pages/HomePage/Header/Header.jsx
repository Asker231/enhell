import React, { useState } from 'react'
import style from './header.module.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { removeUser } from '../../../redux/userSlice/userSlice.js'


const Header = () => {
    const disp = useDispatch();
    const { email } = useSelector(state => state.users)
    const [out, setOut] = useState(false);
    return (
        <div className={style.header}>
            <h4>EnHell</h4>
            <MenuIcon className={style.menu} />

            <div className={style.right}>

                <AccountCircleSharpIcon onClick={() => setOut(!out)} className={style.outIcon} />
                {
                    out ? <p className={style.outVis}><p>{email}</p>
                        <ExitToAppIcon
                            className={style.accOut}
                            onClick={() => disp(removeUser())}
                        />
                    </p>
                        : null
                }
            </div>
            <div className={style.setting}>
                <ClearIcon className={style.clear} />
                <div className={style.settingHeader}>
                    <AccountCircleSharpIcon className={style.userIcon} />
                    <div className={style.emailOut}>
                        <p>scnsodkm;xapos</p>
                        <ExitToAppIcon className={style.exit} />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header