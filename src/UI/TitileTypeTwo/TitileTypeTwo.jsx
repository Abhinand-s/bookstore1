import PropTypes from 'prop-types';
import './TitileTypeTwo.css'
import victor from '../../assets/victor.png'
function TitileTypeTwo({ ClassName, Title }) {
  return (
    <div className={`titleTypeTwo ${ClassName}`}>
      <h2>{Title}</h2>
      <img src={victor} alt="" className='victor' />
    </div>
  )
}
TitileTypeTwo.propTypes = {
  ClassName: PropTypes.string,
  Title: PropTypes.string.isRequired,
  TitleTop: PropTypes.string.isRequired
};

export default TitileTypeTwo;