import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import logo1 from '../images/p1logo.png';

export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link: "/home"
    },

    {
        title:"Blood Work",
        icon: <DescriptionIcon />,
        link: "/bloodwork"
    },

    {
        title:"Medication",
        icon: <LocalHospitalIcon />,
        link: "/medication"
    },

    {
        title:"Prescriptions",
        icon: <ReceiptIcon />,
        link: "/prescriptions"
    },

    {
        title:"Patient",
        icon: <PeopleIcon />,
        link: "/patient"
    },

    {
        title:"Log Out",
        icon: <ExitToAppIcon />,
        link: "/"
    }
];

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="title">
                <img src={ logo1 } alt='Pharmacy One logo' className="logo"/>
                <h1>PharmacyOne</h1>
            </div>
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                            <li 
                                key={key}
                                className="row"
                                id={window.location.pathname === val.link ? "active" : ""}
                                onClick={() => {
                                   window.location.pathname = val.link;
                                }}
                            >
                                <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar