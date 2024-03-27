import './CopyRight.css'
//import footer social data
import { FootersLinksData } from '../../Data/Data'

export default function CopyRIght() {
    return (
        <div className="footer-copyright">
            <div className="container copyright-container">
                <p>@ 2024 Abhinand All Right Reserved</p>
                <div className="footer-socials">
                    {
                        FootersLinksData.socials.map((item, index) => {
                            return (
                                <a href={item.link} key={index}>
                                    <item.icon />
                                </a>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
