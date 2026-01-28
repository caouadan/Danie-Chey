import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          @Danie Chey - {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer
