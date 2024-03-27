//import bestsellingbook css
import './BestSellingBook.css'
//import title props....
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'
//import tree shape..
import TreeShape from '../../assets/treeShape.png'
//import selling data
import { sellingBooksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
//import react icon
import { BsArrowRight } from 'react-icons/bs'
export default function BestSellingBook() {
    return (
        <section className='BestSellingBook'>
            {/*....selling book tree shape */}
            <div className="treeShape">
                <img src={TreeShape} alt="" />
            </div>
            {/*...selling book content */}
            {
                sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
                    return (
                        <div className="container bestselling-container" key={index}>
                            {/*...left.......... */}
                            <div className="selling-book-left">
                                <img src={img} alt="" />
                            </div>
                            {/*...right.............*/}
                            <div className="selling-book-right">
                                <TitileTypeTwo Title={'Best selling book'} ClassName="sellingBookTitle" />
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                    <small>Shop it now</small>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </section>
    )
}
