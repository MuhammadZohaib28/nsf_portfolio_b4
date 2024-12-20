import React from 'react'
import './section1.css'
import profilePicture from '../images/subahn.jpg'
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaPhone, FaTwitter } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const Section1 = () => {


    const userDetail = [
        {
            img: <MdEmail />,
            title: "Email",
            value: "tanweer@gmail.com",
            color: "#FFCFEF"

        },
        {
            img: <FaPhone />,
            title: "Phone",
            value: "+923312345678",
            color: "#0A97B0"
        },
        {
            img: <FaBirthdayCake />,
            title: "Date of Birth",
            value: "5th May, 2000",
            color: "#0A5EB0"
        },
        {
            img: <FaMapMarkerAlt />,
            title: "Location",
            value: "Karachi, Pakistan",
            color: "#0A5EB0"
        },
    ]


    const socialMedia = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/",
           color: "#0A5EB0"

        },
        {
            icon: <FaTwitter />,
            link: "https://x.com/",
            color: "#0A5EB0"

        },
        {
            icon: <FaGithub />,
            link: "https://www.github.com",
            color: "#0A5EB0"

        }
    ]

    return (
        <div className='section-1'>

            <div className='section-1-first'>

                <div className='section-1-first-pp'>
                    <img src={profilePicture} className='section-1-pp' />
                </div>

                <h1 className='main-name'>Daniyal</h1>

                <div>
                    <p className='frontend-dev'>Frontend Developer</p>
                </div>

                <span className='section-1-first-line'></span>
            </div>


            <div className='section-1-second'>
                {userDetail.map((item, index) => {
                    return (
                        <div className='section-1-data' key={index}>
                            <span style={{ color: item.color }}>{item.img}</span>


                            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "150px" }}>
                                <p className='title'>{item.title}</p>
                                <h4>{item.value}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='section-1-last-icons'>
                {socialMedia.map((item, index) => {
                    return (
                        <a href={item.link} target='_blank' key={index}>
                            <span className='icons'>{item.icon}</span>
                        </a>
                    )
                })}
            </div>




        </div>
    )
}

export default Section1
