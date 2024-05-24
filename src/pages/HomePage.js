import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <section id="home" class="home-hero">
                <div class="home-hero_content">
                    <h1 class="heading-primary">HEY, I'M RAM MAHESHWARI</h1>
                    <div class="home-hero_info">
                        <p class="text-primary">
                            A Frontend focused Web Developer building the
                            Frontend of Websites and Web Applications that
                            leads to the success of the overall product
                        </p>
                    </div>
                    <div class="home-hero_cta">
                        <a href="../Rammaheshwari/projects.html" class="btn btn--bg">Projects</a>
                    </div>
                </div>
                <div class="homme-hero_socials">
                    <div class="home-hero_social">
                        <a href="#" class="home-hero_social-icon-link">
                            <img src="" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>
                    <div class="home-hero_social">
                        <a href="#" class="home-hero_social-icon-link">
                            <img src="" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>

                    <div class="home-hero_social">
                        <a href="#" class="home-hero_social-icon-link">
                            <img src="" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>

                    <div class="home-hero_social">
                        <a href="#" class="home-hero_social-icon-link">
                            <img src="" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>
                    <div class="home-hero_social">
                        <a href="#" class="home-hero_social-icon-link">
                            <img src="" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>
                </div>
                {/* <div class="home-hero_mouse-scroll-cont">
                    <div class="mouse"></div>
                </div> */}
            </section>
            <section id="about" class="about sec-pad">
                <div class="main-container">
                    <h2 class="heading-sec_mb-med">
                        <span class="heading-sec__main">About Me</span>
                        <span class="heading-sec_sub">
                            Here you will find more information about me, what i do,
                            and my curreny skills mostly in terms of programming
                            and technology
                        </span>
                    </h2>
                    <div class="about__content">
                        <div class="about__content-main">
                            <h3 class="about__content-title">Get to know me!</h3>
                            <div class="about__content-details">
                                <p class="about__content-details-para">
                                    I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads
                                    to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                                </p>
                                <p class="about__content-details-para">
                                    I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong>
                                    so it can help other people of the Dev community. Feel free to Connect or Follow me on my linkedin where I post useful content
                                    related to Web Development and programming
                                </p>
                                <p class="about__content-details-para">
                                    I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity
                                    that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                                </p>
                            </div>
                            <a href="../Rammaheshwari/contact.html" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
                        </div>
                        <div class="about__content-skills">
                            <h3 class="about__content-title">My Skills</h3>
                            <div class="skills">
                                <div class="skills_skill">HTML</div>
                                <div class="skills_skill">CSS</div>
                                <div class="skills_skill">JavaScript</div>
                                <div class="skills_skill">React</div>
                                <div class="skills_skill">SASS</div>
                                <div class="skills_skill">GIT</div>
                                <div class="skills_skill">Shopify</div>
                                <div class="skills_skill">WordPress</div>
                                <div class="skills_skill">Google Ads</div>
                                <div class="skills_skill">Facebook</div>
                                <div class="skills_skill">Android</div>
                                <div class="skills_skill">IOS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" class="projects sec-pad">
                <div class="main-container">
                    <h2 class="heading-sec_mb-bg">
                        <span class="heading-sec__main">Projects</span>
                        <span class="heading-sec_sub">
                            Here you will find some of the personal and clients projects
                            that I created with each project containing its own case study
                        </span>
                    </h2>
                    <div class="projects_content">
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src="../Rammaheshwari/dopefolio.jpeg" alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Dopefolio</h3>
                                <p class="projects_row-content-desc">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the
                                    biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                                </p>
                                <a href="#" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src="../Rammaheshwari/wilsonport.jpeg" alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Wilsonport</h3>
                                <p class="projects_row-content-desc">
                                    Wilsonport is a multiservice logistics and transport company and I created
                                    their website from scratch using the frontend tools I know
                                </p>
                                <a href="#" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src="../Rammaheshwari/boreal-coffee-clone.jpeg" alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Boreal Coffee Clone</h3>
                                <p class="projects_row-content-desc">
                                    I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI.
                                    It was a great experience for me to build the entire frontend
                                </p>
                                <a href="#" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src="../Rammaheshwari/crown-template.jpeg" alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Crown Template</h3>
                                <p class="projects_row-content-desc">
                                    Crown is a web template that I created targetting the restaurant and food industry which anyone can
                                    use to present their business online
                                </p>
                                <a href="#" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="contact sec-pad dynamicBg">
                <div class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-med">
                        <span class="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span class="heading-sec_sub heading-sec__sub--lt">
                            Feel free to Contact me by submitting the form below and I will get
                            back to you as soon as possible
                        </span>
                    </h2>
                    <div class="contact__form-container">
                        <form action='#' class='contact__form' method='post'><input type='hidden' name='form-name' value='form 1' />
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="name">Name</label>
                                <input required placeholder="Enter Your Name" type="text" class="contact__form-input" name="name"
                                    id="name" />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="email">Email</label>
                                <input required placeholder="Enter Your Email" type="email" class="contact__form-input" name="email"
                                    id="email" />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="message">Message</label>
                                <textarea required cols="30" rows="10" class="contact__form-input" placeholder="Enter Your Message"
                                    name="message" id="message"></textarea>
                            </div>
                            <button type="submit" class="btn btn--theme contact__btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
