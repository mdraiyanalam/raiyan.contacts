import React from 'react';
import CallIcon from './img/call_icon.png';
import WhatsappIcon from './img/icons8-whatsapp-48.png';
import linkedinIcon from './img/icons8-linkedin-48.png';
const mainbody = () => {
  return (

    <div class="container text-center"> {/* Container Starts */}
      {/* telephone starts */}
        <div class="row">
          <div class="col-3">{/* Column */} </div>

          <div class="col">
            <button type="button" class="btn btn-outline-primary w-100">
              <div>
                <a class="nav-link" href="tel:+8801722465849"><img style={{ height: '25px', width: '25px', padding: '5px' }} src={CallIcon} alt="Call Icon" />Call</a>
              </div>
            </button>
          </div>

          <div class="col-3">{/* Column */} </div>
        </div>
      {/* telephone ends */}
      <br/>
      {/* Whatsapp starts */}
      <div class="row">
          <div class="col-3">{/* Column */} </div>

          <div class="col">
            <button type="button" class="btn btn-outline-primary w-100">
              <div>
                <a class="nav-link" href="tel:https://wa.me/01722465849"><img style={{ height: '25px', width: '25px', padding: '5px' }} src={WhatsappIcon} alt="Whatsapp" />Whatsapp</a>
              </div>
            </button>
          </div>

          <div class="col-3">{/* Column */} </div>
        </div>
      {/* Whatsapp ends */}
      <br/>
      {/* LinkedIn starts */}
      <div class="row">
          <div class="col-3">{/* Column */} </div>

          <div class="col">
            <button type="button" class="btn btn-outline-primary w-100">
              <div>
                <a class="nav-link" href="https://www.linkedin.com/in/mdraiyanalam/"><img style={{ height: '25px', width: '25px', padding: '5px' }} src={linkedinIcon} alt="linkedinIcon" />LinkedIn</a>
              </div>
            </button>
          </div>

          <div class="col-3">{/* Column */} </div>
        </div>
      {/* LinkedIn ends */}
      <br/>
    </div> 
    
  );
};

export default mainbody;
