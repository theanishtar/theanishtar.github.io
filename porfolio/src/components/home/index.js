// Home.js
import React from 'react';
import avatar from '../../assets/images/profile/avt.png';
import './style.css';

const Home = () => {
  return (
    <div class="container">
      <div class="head item">
        <div class="left">
          <div class="bounce_auto">
            <img src={avatar} id="avt" alt="" class="bounce" />
          </div>
          <h1 id="uname">Tran Huu Dang <span id="subname"></span></h1>
          <p id="desc">Java Developer</p>
          <div class="contact">
            <div class="wrap">
              <a href="https://github.com/dangtranhuu/RESUME/blob/main/CV%20Tran%20Huu%20Dang%20-%20TranHuuDang-InternDeveloper.pdf"
                target="_blank" rel="noopener noreferrer"><button>My Resume</button></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/theanishtar"><button><i id="github"
                class='bx bxl-github'></i></button></a>

              <a href="https://leetcode.com/tranhuudang" target="_blank" rel="noopener noreferrer">
                <button>
                  <svg id="leetcode" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      <title>LeetCode icon</title>
                      <path
                        d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z">
                      </path>
                    </g>
                  </svg>
                </button>
              </a>

              <a href="https://www.hackerrank.com/tranhuudang" target="_blank" rel="noopener noreferrer">
                <button>
                  <svg id="hackerrank" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z">
                      </path>
                    </g>
                  </svg>
                </button>
              </a>
            </div>
            <div class="wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tranhuudang"><button><i
                class='bx bxl-linkedin-square' id="linkedin"></i></button></a>
              <a href="https://www.youtube.com/@froggydev" target="_blank" rel="noopener noreferrer"><button><i class='bx bxl-youtube'
                id="youtube"></i></button></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dangdeveloper/"><button><i
                class='bx bxl-facebook-square' id="facebook"></i></button></a>
              <a href="https://www.tiktok.com/@theanishtar" target="_blank" rel="noopener noreferrer"><button><i
                class='bx bxl-tiktok' id="tiktok"></i>
              </button></a>
              <a href="https://www.tiktok.com/@theanishtar" target="_blank" rel="noopener noreferrer"><button><i
                class='bx bxl-twitter' id="twitter"></i>
              </button></a>
            </div>
          </div>
        </div>

        <div class="right bounce_auto">
          <img id="avatar" src={avatar} alt="" class="bounce" />
        </div>

      </div>
      <div class="about item">
        <p>Hi, i'm Tran Huu Dang. You can call me Davis.</p>
        <p>I like technology and other work with computer. I am a developer in the back-end website fields
          (NodeJS and Spring Boot)
        </p>
        <p>In addition, I also have knowledge of technology such as Angular, VueJS,
          TaiwindCSS, JavaSwing. I understand tools like Git, Postman, Debug, ...</p>
        <p style={{ paddingRight: '30px' }}>Connect with my Linkedin to discuss about work or my Github to share
          interesting knowledge ^^</p>
      </div>

      <div class="experience title">
        <h1>Experience</h1>
        <div class="row">
          <div class="left">
            <div class="top">
              Leader Developer team at Factory software FPL Can Tho
            </div>
            <div class="bot">
              Using Angular development the project Lorum learning at my school
            </div>
          </div>
          <div class="right">
            2021–2023
          </div>
        </div>

        <div class="row">
          <div class="left">
            <div class="top">
              Teaching Assistant for students at FPT Polytechnic
            </div>
            <div class="bot">
              The Subject's instructor Java OOP/Swing/Servlet/SpringBoot, SQL Server, AngularJS,...
            </div>
          </div>
          <div class="right">
            2021–2023
          </div>
        </div>
      </div>

      <div class="news title">
        <h1>Appearance</h1>
        <div class="carousel swiper">
          <div class="slide-container">
            <div class="card-wrapper swiper-wrapper">
              <div class="card swiper-slide">
                <div class="image-box">
                  <a href="https://caodang.fpt.edu.vn/tin-tuc-poly/can-tho-tin-sinh-vien/du-an-phan-mem-quan-ly-ban-phu-kien-thiet-bi-di-dong-cua-sinh-vien-fpoly-can-tho-lot-mat-xanh-cua-giang-vien.html"
                    target="_blank" rel="noopener noreferrer">
                    <img src="images/showImg/duan1.png" alt="" />
                  </a>
                </div>
                <div class="profile-details">
                  <img src="images/profile/nhuomtv.jpg" alt="" />
                  <div class="name-job">
                    <h3 class="name">Mr. Tran Van Nhuom</h3>
                    <h4 class="job">IT Teacher - FPT</h4>
                  </div>
                </div>
              </div>
              <div class="card swiper-slide">
                <div class="image-box">
                  <a href="https://caodang.fpt.edu.vn/tin-tuc-poly/can-tho-tin-sinh-vien/nam-sinh-fpt-polytechnic-can-tho-tai-nang-sang-tao-he-thong-hoc-lap-trinh-bo-ich.html"
                    target="_blank" rel="noopener noreferrer">
                    <img src="images/showImg/fefw.png" alt="" />
                  </a>
                </div>
                <div class="profile-details">
                  <img src="images/profile/nghiaqh.jpg" alt="" />
                  <div class="name-job">
                    <h3 class="name">Mr. Quach Huu Nghia</h3>
                    <h4 class="job">IT Teacher - FPT</h4>
                  </div>
                </div>
              </div>
              <div class="card swiper-slide">
                <div class="image-box">
                  <a target="_blank" rel="noreferrer"
                    href="https://caodang.fpt.edu.vn/tin-tuc-poly/can-tho-tin-sinh-vien/dien-dan-truc-tuyen-tang-do-secondhand-tien-loi-made-by-sinh-vien-fpt-polytechnic-can-tho.html">
                    <img src="images/showImg/java5.png" alt="" />
                  </a>
                </div>
                <div class="profile-details">
                  <img src="images/profile/nhuomtv.jpg" alt="" />
                  <div class="name-job">
                    <h3 class="name">Mr. Tran Van Nhuom</h3>
                    <h4 class="job">IT Teacher - FPT</h4>
                  </div>
                </div>
              </div>
              <div class="card swiper-slide">
                <div class="image-box">
                  <a href="https://caodang.fpt.edu.vn/tin-tuc-poly/can-tho-tin-sinh-vien/sinh-vien-fpt-polytechnic-can-tho-xuat-sac-hoan-thanh-vong-loai-cuoc-thi-vo-dich-tin-hoc-van-phong-the-gioi-mos.html"
                    target="_blank" rel="noopener noreferrer">
                    <img src="images/showImg/mos.png" alt="" />
                  </a>
                </div>
                <div class="profile-details">
                  <img src="images/profile/fpt.png" alt="" />
                  <div class="name-job">
                    <h3 class="name">Mr. Huynh Thanh Hoang</h3>
                    <h4 class="job">IT Teacher - FPT</h4>
                  </div>
                </div>
              </div>
              <div class="card swiper-slide">
                <div class="image-box">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/showImg/resume.png" alt="" />
                  </a>
                </div>
                <div class="profile-details">
                  <img
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/306545771_116266211223011_4583493279246203610_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s5bUDlZrD9cAX-xTigE&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfALiD2NgdPT7vI1RwDbNc09GW-gxWI4bfFkmJw6yOEyEg&oe=6561BC06"
                    alt="" />
                  <div class="name-job">
                    <h3 class="name">Ms. Nguyen Thi Hanh</h3>
                    <h4 class="job">SK Teacher - FPT</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="education title item">
        <h1>Education</h1>
        <div class="row">
          <div class="left">
            <b>FPT Polytechnic Collect</b> <br />
            <i>Software Development</i>
          </div>
          <div class="right">
            2022-2024
          </div>
        </div>
      </div>

      <div class="projects title">
        <h1 class="">Projects</h1>
        <div class="row"></div>
        <div class="pro">
          <div class="left">
            <img src="images/davitickets.png" alt="" srcset="" />
          </div>
          <div class="right">
            <a href="https://github.com/Theanishtar/DaviTickets">
              <p>DaviTickets - Website booking tickets cinema</p>
            </a>
            <div class="bot">
              <div class="technical">
                <span class="angular">
                  <img src="images/techs/angular-seeklogo.com.svg" alt="" srcset="" />Angular
                </span>
                <span class="springboot">
                  <img src="images/techs/icons8-spring-boot.svg" alt="" srcset="" />SpringBoot
                </span>
                <span class="jwt">
                  <img src="images/techs/icons8-jwt.svg" alt="" srcset="" />JWT
                </span>
                <span class="firebase">
                  <img src="images/techs/icons8-firebase.svg" alt="" srcset="" />FireBase
                </span>
                <span class="sql-server">
                  <img src="images/techs/icons8-microsoft-sql-server.svg" alt="" srcset="" />SQL Server
                </span>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non
                posuere
                consectetur, justo erat semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
          </div>
        </div>


        <div class="row"></div>
        <div class="pro">
          <div class="left">
            <img src="images/rainbow-flix.png" alt="" srcset="" />
          </div>
          <div class="right">
            <a href="https://github.com/Theanishtar/Rainbow-Flix">
              <p>Website watching movie Rainbow-Flix</p>
            </a>
            <div class="bot">
              <div class="technical">
                <span class="nodejs">
                  <img src="images/techs/nodejs-icon-svgrepo-com.svg" alt="" srcset="" />NodeJS
                </span>
                <span class="expressjs">
                  <img src="images/techs/express-svgrepo-com.svg" alt="" srcset="" />ExpressJS
                </span>
                <span class="jwt">
                  <img src="images/techs/icons8-jwt.svg" alt="" srcset="" />JWT
                </span>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non
                posuere
                consectetur, justo erat semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
          </div>
        </div>

        <div class="pro">
          <div class="left">
            <img src="images/frogcyber.png" alt="" srcset="" />
          </div>
          <div class="right">
            <a href="https://github.com/Theanishtar/Rainbow-Flix">
              <p>Website learning programing - Frog Cyber</p>
            </a>
            <div class="bot">
              <div class="technical">
                <span class="gitcus">
                  <img src="images/techs/icons8-github.svg" alt="" srcset="" />GitCus
                </span>
                <span class="vue">
                  <img src="images/techs/vuejs-seeklogo.com.svg" alt="" srcset="" />
                  Vue
                </span>
                <span class="vue">
                  <img src="images/techs/nuxt-seeklogo.com.svg" alt="" srcset="" />
                  Nuxt
                </span>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non
                posuere
                consectetur, justo erat semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
          </div>
        </div>

        <div class="pro">
          <div class="left">
            <img src="images/frog-quiz.png" alt="" srcset="" />
          </div>
          <div class="right">
            <a href="https://github.com/Theanishtar/frog-quiz">
              <p>Frog Quiz - Website quiz online</p>
            </a>
            <div class="bot">
              <div class="technical">
                <span class="angular">
                  <img src="images/techs/icons8-angularjs.svg" alt="" srcset="" />AngularJS
                </span>
                <span class="firebase">
                  <img src="images/techs/icons8-firebase.svg" alt="" srcset="" />FireBase
                </span>
                <span class="gitcus">
                  <img src="images/techs/icons8-github.svg" alt="" srcset="" />GitCus
                </span>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non
                posuere
                consectetur, justo erat semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="miscellaneous title item">
        <h1>Miscellaneous</h1>
        <ul>
          <li class="showtoTop delay-02">🚀 My projects mainly focus on software running on Windows and
            website-apps</li>
          <li class="showtoTop delay-04">🧐 My Skills: Java, Spring Boot, Spring MVC, JavaScript, NodeJS, SQL
            Server, MySQL, MongoDB,
            Firebase
          </li>
          <li class="showtoTop delay-06">🎃 TheanIshtar is inspired by the Egyptian language</li>
          <li class="showtoTop delay-08">🖥 I have creativity and always exploring new things</li>
          <li class="showtoTop delay-1">🛠 Like to contribute to open-source machine learning and frontend
            projects in spare time</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
