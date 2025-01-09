import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="fresh water logo" />
        <p>Donec vel ligula ornare, finibus ex at, vive risus. Aenean velit ex, finibus elementum eu, dignissim varius augue. </p>
        <p>www.fresh@water.com</p>
      </div>

      <div>
        <h2>Information</h2>
        <ul>
            {["Contact Us","About Us","Delivery Information","Privacy Policy","Terms & Conditions","Privacy Policy"].map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2>Our Services</h2>
        <ul>
            {["Contact Us","About Us","Delivery Information","Privacy Policy","Terms & Conditions","Privacy Policy"].map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2>Recent News</h2>

        <h3>Nullam condimenum varius ipsum.</h3>
        <span>15 Aug 2018</span>

        <h3>Nullam condimenum varius ipsum.</h3>
        <span>15 Aug 2018</span>
      </div>

      <div>
        <h2>Get In Touch</h2>

        <p>Fresh Water 45 Grand Central Terminal New York.</p>
        <p>+00123654789</p>
        <p>freshwater@gmail.com</p>
      </div>

    </footer>
  )
}

export default Footer
