// Home.js
import React from 'react';
import './style.css'
import aws from './images/AWS_Academy/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20231130-29-1bi8im.png'

const Cert = () => {
  return (
    <div class="cert">
      <h2>AWS</h2>
      <div class="row">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img
                src={aws} />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="../assets/images/cert/microsoft/Office PowerPoint 2016.png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="../assets/images/cert/CodeLearn/CodeLearn_certification (1).png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="../assets/images/cert/CodeLearn/CodeLearn_certification (2).png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="../assets/images/cert/CodeLearn/CodeLearn_certification (3).png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <img src="../assets/images/cert/CodeLearn/CodeLearn_certification (4).png" />
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident
                at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cert;
