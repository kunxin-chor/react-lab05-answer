import React from "react"
import {Link} from "react-router-dom"

// const c = () => {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

// export default c;

export default function Nav()
{
    return (<ul>
        <li><Link to='/'> About Me</Link></li>
        <li><Link to='/my-education'>My Education</Link></li>
        <li><Link to='/work-experience'>Work Experience</Link></li>
        <li><Link to='/contact-me'>Contact Me</Link></li>
        <li><Link to='/counter'>Count</Link></li>
        <li><Link to='/view-count'>View Count</Link></li>
    </ul>)
}