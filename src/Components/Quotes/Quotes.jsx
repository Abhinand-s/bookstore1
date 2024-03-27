//import Quotes.css
import './Quotes.css'
//title props
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'
//quote data props
import { quoteData } from '../../Data/Data'
export default function Quotes() {
    return (
        <section className='Quote'>
            <div className="container quote-container">
                <TitileTypeTwo Title={'Quote of the day'} ClassName='quote-title' />

                {
                    quoteData.map(({ quote, speaker }, index) => {
                        return (
                            <article key={index}>
                                <p>{quote}</p>
                                <h5>{speaker}</h5>
                            </article>
                        )

                    })
                }

            </div>
        </section>
    )
}
