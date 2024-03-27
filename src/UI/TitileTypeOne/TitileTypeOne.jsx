import PropTypes from 'prop-types';
import './TitileTypeOne.css'
//import victor image
import victor from '../../assets/victor.png'

function TitileTypeOne({ ClassName, Title, TitleTop }) {
  return (
    <div className={`titleTypeOne ${ClassName}`}>
      <small>{TitleTop}</small>
      <div className="heading-H">
        <div className="line"></div>
        <h2>{Title}</h2>
        <div className="line"></div>
      </div>
      <img src={victor} alt="" className='victor' />
    </div>
  )
}

TitileTypeOne.propTypes = {
  ClassName: PropTypes.string,
  Title: PropTypes.string.isRequired,
  TitleTop: PropTypes.string.isRequired
};

export default TitileTypeOne;