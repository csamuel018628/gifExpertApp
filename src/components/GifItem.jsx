import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {

    // console.log(title, url, id );
  return (
    <div className="card-grid"> 
        <img src={ url } alt={ title }></img>
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url:   PropTypes.string.isRequired,
}