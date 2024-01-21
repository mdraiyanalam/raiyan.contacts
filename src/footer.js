import React from 'react';
import './footer.css';

import linkedinIcon from './img/icons8-linkedin-48.png';
const footer = () => {
  return (
    <footer>
        <p>This website is developed by
          <a class="nav-link" href="https://www.linkedin.com/in/mdraiyanalam/" target='_blank'>
            <img style={{ height: '25px', width: '25px', padding: '5px' }} src={linkedinIcon} alt="linkedinIcon" />
            Raiyan
          </a>
        </p>
    </footer>
  );
};

export default footer;
