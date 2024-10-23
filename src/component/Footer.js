import React from 'react';
import '../style/Footer.css'; // CSS faylni qo'shish
import isntagram from '../images/Instagram.png'
import watsapp from '../images/WhatsApp.png'
import telegram from '../images/telegram.png'
import twitter from '../images/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={isntagram} alt='Isntagram' />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt='Isntagram' />
            Telegram
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={watsapp} alt='Isntagram' />
            WhatsApp
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt='Isntagram' />
            Twitter
          </a>
        </li>
      </ul>
      <p className="copyright">
        © {new Date().getFullYear()} Landing Page Shukurov Jaloliddin
      </p>
    </footer>
  );
}

export default Footer;
