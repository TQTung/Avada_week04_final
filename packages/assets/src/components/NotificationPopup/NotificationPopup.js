import React from 'react';
import './NoticationPopup.scss';
import * as PropTypes from "prop-types";

const NotificationPopup = ({id,
  firstName = 'John Doe',
  city = 'New York',
  country = 'United States',
  productName = 'Puffer Jacket With Hidden Hood',
  timestamp = 'a day ago',
  productImage = 'http://paris.mageplaza.com/images/shop/single/big-1.jpg',
    onClosePopup
}) => {

  const handleOnClick = (e,id) => {
    e.stopPropagation()
    onClosePopup(id)
  }

  return (
    <div className="Avava-SP__Wrapper fadeInUp animated">
      <div className="Avava-SP__Inner">
        <div className="Avava-SP__Container">
          <a href="#" className={'Avava-SP__LinkWrapper'}>
            <div
              className="Avava-SP__Image"
              style={{
                backgroundImage: `url(${productImage})`
              }}
            ></div>
            <div className="Avada-SP__Content">
              <div className='Avada-SP__Title'>
                {firstName} in {city}, {country}
              </div>
              <div className='Avada-SP__Subtitle'>purchased {productName}</div>
              <div className='Avada-SP__Footer'>
                {timestamp}{' '}
                <span className="uni-blue">
                  <i className="fa fa-check" aria-hidden="true" /> by Avada
                </span>
              </div>
              <button
                  onClick={(e) =>handleOnClick(e,id)}
                  className="Avada-SP__Close">
                x
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

NotificationPopup.propTypes = {
  firstName: PropTypes.string,
  onClosePopup: PropTypes.func
};

export default NotificationPopup;
