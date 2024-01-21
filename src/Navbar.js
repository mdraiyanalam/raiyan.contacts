import React from 'react';
import LogoPic from './img/Picture.jpg';
import CopyToClipboardButton from './CopyToClipboardButton';

const Navbar = () => {
  const textToCopy = 'Hello, this text will be copied to the clipboard!';
  return (

    <div class="container">

        {/* Grid Starts */}
        <div class="container text-center">
          <div class="row">
         
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div class="col-3">
                  <a className="navbar-brand" href="#">
                <img className="rounded-circle" style={{ height: '52px', width: '52px' }} src={LogoPic} alt="Your Logo" />
              </a>

              </div>

              <div class="col-6">{/*Column*/}</div>

              <div class="col-3">
                <CopyToClipboardButton textToCopy={textToCopy} />       
              </div>

            </nav>
          </div>
        </div>
        {/* Grid Ends */}
    </div>
    
  );
};

export default Navbar;
