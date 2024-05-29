import React from 'react'

const Footer = () => {
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sohil-fullstack/">
                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="Ram Maheshwari Linkedin Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/sohilweb20">
                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="RammCodes Github Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/SOHILSDE">
                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png" alt="RammCodes Twitter Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://dev.to/sohilkhan_fullstack">
                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/c7b1e51b8c75a239d68af3d42866666580f390ec/dcc7c/assets/png/blog-ico.png" alt="RammCodes DEV.to Blog Profile" />
              </a>
              {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg">
                <img class="main-footer__icon main-footer__icon--mr-none" src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
                  alt="RammCodes Youtube Channel" />
              </a> */}
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h2 class="heading heading-sm text-lt">Sohil khan</h2>
            <p class="main-footer__short-desc">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
        <div class="main-footer__lower">
          {/* Copyright <script>document.write(new Date().getFullYear())</script>
          . Made by
          <a rel="noreferrer" target="_blank" href="https://Rammaheshwari.com">
            Ram Maheshwari
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
