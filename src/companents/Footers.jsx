import React from "react";
import "../css/footers.css";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <footer className="foot-btn">
      <div className="foot-container">
        <div className="footer-section">
          <h4>Hakkımızda</h4>
          <div className="footer-links">
            <Link to="/about" className="cursor">
              <i className="bi bi-info-circle"></i>
              Hakkımızda
            </Link>
            <Link to="/contact" className="cursor">
              <i className="bi bi-envelope"></i>
              İletişim
            </Link>
            <Link to="/privacy" className="cursor">
              <i className="bi bi-shield-check"></i>
              Gizlilik Politikası
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Kategoriler</h4>
          <div className="footer-links">
            <Link to="/movies" className="cursor">
              <i className="bi bi-film"></i>
              Filmler
            </Link>
            <Link to="/series" className="cursor">
              <i className="bi bi-tv"></i>
              Diziler
            </Link>
            <Link to="/upcoming" className="cursor">
              <i className="bi bi-calendar-event"></i>
              Yakında
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Üyelik</h4>
          <div className="footer-links">
            <Link to="/login" className="cursor">
              <i className="bi bi-box-arrow-in-right"></i>
              Giriş Yap
            </Link>
            <Link to="/register" className="cursor">
              <i className="bi bi-person-plus"></i>
              Kayıt Ol
            </Link>
            <Link to="/profile" className="cursor">
              <i className="bi bi-person"></i>
              Profilim
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Bizi Takip Edin</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="developer">
        <p className="cursor">© 2024 Filmistan. Tüm hakları saklıdır.</p>
        <p className="cursor">Developed by MertBey</p>
      </div>
    </footer>
  );
}

export default Footers;
