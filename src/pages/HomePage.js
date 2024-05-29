import React from 'react'
import desklib from "../assets/Desklib.png"
import ozassignment from "../assets/OzAssignment.png"
import technofocus from "../assets/Technofocus.png"
import neokred from "../assets/Neokred.png"
import Aunest from "../assets/Aunest.png"


const HomePage = () => {
    return (
        <div>
            <section id="home" class="home-hero">
                <div class="home-hero_content">
                    <h1 class="heading-primary">HEY, I'M SOHIL KHAN</h1>
                    <div class="home-hero_info">
                        <p class="text-primary">
                            Full Stack Web Developer Dedicated to Building High-Quality Websites and Applications that Drive Business Growth and Success
                        </p>
                    </div>
                    <div class="home-hero_cta">
                        <a href="#projects" class="btn btn--bg">Projects</a>
                    </div>

                </div>
                <div class="home-hero_socials">
                    <div class="home-hero_social">
                        <a target="_blank" href="https://www.linkedin.com/in/sohil-fullstack/" class="home-hero_social-icon-link">
                            <img src="https://www.rammaheshwari.com/assets/svg/linkedin-dark.svg" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>
                    <div class="home-hero_social">
                        <a target="_blank" href="https://x.com/SOHILSDE" class="home-hero_social-icon-link">
                            <img src="https://www.rammaheshwari.com/assets/svg/twitter-dark.svg" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>

                    <div class="home-hero_social">
                        <a target="_blank" href="https://github.com/sohilweb20" class="home-hero_social-icon-link">
                            <img src="https://www.rammaheshwari.com/assets/svg/github-dark.svg" alt="icon" class="home-hero_social-icon" />
                        </a>
                    </div>
                    <div class="home-hero_social">
                        <a target="_blank" href="https://dev.to/sohilkhan_fullstack" class="home-hero_social-icon-link">
                            <img src="https://www.rammaheshwari.com/assets/svg/book-dark.svg" alt="icon" class="home-hero_social-icon" />
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
                            Here, you will find detailed information about me, my work, and my current skills, particularly in programming and technology.
                        </span>
                    </h2>
                    <div class="about__content">
                        <div class="about__content-main">
                            <h3 class="about__content-title">Get to know me!</h3>
                            <div class="about__content-details">
                                <p class="about__content-details-para">
                                    I am a <strong>Frontend Web Developer</strong> specializing in creating the front-end of websites and web applications that contribute to the overall success of the product. You can explore some of my projects in the <strong>Projects</strong> section.
                                </p>
                                <p class="about__content-details-para">
                                    I enjoy sharing content related to my <strong>web development</strong> knowledge and experience to support the developer community. Feel free to connect or follow me on <a style={{ color: "#7843E9", textDecoration: 'underline', fontWeight: "bold" }} target="_blank" href='https://www.linkedin.com/in/sohil-fullstack/?original_referer='>Linkedin</a> , where I regularly post valuable content about web development and programming.
                                </p>
                                <p class="about__content-details-para">
                                    I am open to <strong>job</strong> opportunities where I can contribute, learn, and grow. If you have a fitting opportunity that aligns with my skills and experience, please don't hesitate to <strong>reach</strong> out.
                                </p>
                            </div>
                            <a href="#contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
                        </div>
                        <div class="about__content-skills">
                            <h3 class="about__content-title">My Skills</h3>
                            <div class="skills">
                                <div class="skills_skill">JavaScript</div>
                                <div class="skills_skill">React.Js</div>
                                <div class="skills_skill">Next.Js</div>
                                <div class="skills_skill">React Native</div>
                                <div class="skills_skill">HTML</div>
                                <div class="skills_skill">CSS</div>
                                <div class="skills_skill">Tailwind css</div>
                                <div class="skills_skill">Ant design</div>
                                <div class="skills_skill">Node.Js</div>
                                <div class="skills_skill">Express.Js</div>
                                <div class="skills_skill">Postgres SQL</div>
                                <div class="skills_skill">Mongo DB</div>
                                <div class="skills_skill">Redux Toolkit</div>
                                <div class="skills_skill">Mobile Development</div>
                                <div class="skills_skill">Github</div>

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
                            Here, you will find a selection of personal and client projects I've developed, each accompanied by its own case study.
                        </span>
                    </h2>
                    <div class="projects_content">
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src={desklib} alt="Desklib Screenshot"
                                    class="projects_row-img" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Desklib</h3>
                                <p class="projects_row-content-desc">
                                    Desklib is an online learning platform offering course-specific study materials. Students can access solutions to assignments, essays, dissertations, case studies, and more, contributed by students and educational partners, to enhance their academic performance.
                                </p>
                                <a href="https://desklib.com/" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src={ozassignment} alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Oz Assignment</h3>
                                <p class="projects_row-content-desc">
                                    Our services focus on providing high-quality academic content, including Admission Essay Services, Business Editing Services, Academic Proofreading Services, Academic Services, and Professional Editing Services.
                                </p>
                                <a href="https://www.ozassignments.com/" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src={technofocus} alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Technofocus</h3>
                                <p class="projects_row-content-desc">
                                    Technofocus is dedicated to enabling professionals in technical learning. Our experiential training programs help learners gain essential skills in the latest cloud features, enhanced by field experts and certified, seasoned instructors, ensuring a comprehensive and effective learning experience.
                                </p>
                                <a href="https://technofocus.ai/" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src={neokred} alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Neokred</h3>
                                <p class="projects_row-content-desc">
                                    Neokred believes business experiences should be more than transactions; they should be enriching journeys. These experiences transform transactions into relationships and relationships into memories. Neokred aims to be the cornerstone of insight-driven financial excellence across industries.
                                </p>
                                <a href="https://neokred.tech/" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
                            </div>
                        </div>
                        <div class="projects_row">
                            <div class="projects_row-img-cont">
                                <img src={Aunest} alt="Software Screenshot"
                                    class="projects_row-img" loading="lazy" />
                            </div>
                            <div class="projects_row-content">
                                <h3 class="projects_row-content-title">Aunest Mobile App</h3>
                                <p class="projects_row-content-desc">
                                    Compare Gold funds and choose the best. Explore top jewelers' collections, find the best gold loan offers, and invest in gold as a hedge. SIP in Gold funds for special gifts. Save gold securely with modern technology.
                                </p>
                                <a href="https://aunest.in/" class="btn btn--med btn--theme dynamicBgClr" target="_blank">Case Study</a>
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
                        <form
                            action="https://getform.io/f/nadopqyb"
                            method="POST" class='contact__form'><input type='hidden' name='form-name' value='form 1' />
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
        </div>
    )
}

export default HomePage
