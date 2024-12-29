import React from "react";
import { Container } from "@mui/material";
import "../css/about.css";

function About() {
  return (
    <Container maxWidth="md" className="about-container">
      <div className="about-header">
        <i className="bi bi-film"></i>
        <h1>Filmistan'ın Hikayesi</h1>
      </div>

      <div className="about-content">
        <section className="story-section">
          <h2>Nasıl Başladık?</h2>
          <p>
            2024 yılının başında, bir grup film tutkunu arkadaş olarak bir araya geldik. 
            Türkiye'de kaliteli bir film arşivi ve bilgi platformu eksikliğini görüyorduk. 
            Bu eksikliği gidermek için Filmistan'ı kurduk.
          </p>
        </section>

        <section className="mission-section">
          <h2>Misyonumuz</h2>
          <p>
            Film tutkunlarına zengin bir içerik sunmak, kaliteli filmleri keşfetmelerine 
            yardımcı olmak ve sinema kültürünü yaygınlaştırmak için çalışıyoruz. 
            Her gün büyüyen arşivimiz ve topluluk destekli yapımız ile Türkiye'nin 
            en kapsamlı film platformu olmayı hedefliyoruz.
          </p>
        </section>

        <section className="features-section">
          <h2>Neler Sunuyoruz?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="bi bi-search"></i>
              <h3>Gelişmiş Arama</h3>
              <p>Binlerce film ve dizi arasında detaylı arama yapabilme</p>
            </div>
            <div className="feature-card">
              <i className="bi bi-info-circle"></i>
              <h3>Detaylı Bilgi</h3>
              <p>Her yapım için kapsamlı bilgi ve değerlendirmeler</p>
            </div>
            <div className="feature-card">
              <i className="bi bi-collection-play"></i>
              <h3>Geniş Arşiv</h3>
              <p>Sürekli güncellenen film ve dizi koleksiyonu</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Ekibimiz</h2>
          <p>
            Film tutkunları tarafından, film tutkunları için geliştirilen Filmistan, 
            sürekli büyüyen ekibi ile her gün daha da gelişiyor. Amacımız, 
            Türkiye'nin en kapsamlı ve kullanıcı dostu film platformunu oluşturmak.
          </p>
        </section>
      </div>
    </Container>
  );
}

export default About;
