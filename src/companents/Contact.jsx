import React, { useState } from "react";
import { Container, TextField, Button, Alert, Snackbar } from "@mui/material";
import "../css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini backend'e gönderme işlemi yapılabilir
    console.log("Form verileri:", formData);
    
    // Başarılı gönderim mesajı
    setSnackbar({
      open: true,
      message: "Mesajınız başarıyla gönderildi!",
      severity: "success",
    });

    // Formu temizle
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" className="contact-container">
      <div className="contact-header">
        <i className="bi bi-envelope-heart"></i>
        <h1>İletişime Geçin</h1>
        <p>
          Öneri, şikayet ve işbirliği teklifleriniz için bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="bi bi-geo-alt"></i>
            <div>
              <h3>Adres</h3>
              <p>İstanbul, Türkiye</p>
            </div>
          </div>
          <div className="info-item">
            <i className="bi bi-envelope"></i>
            <div>
              <h3>E-posta</h3>
              <p>info@filmistan.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="bi bi-telephone"></i>
            <div>
              <h3>Telefon</h3>
              <p>+90 (212) 555 0123</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <TextField
            fullWidth
            label="Adınız"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="E-posta Adresiniz"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Konu"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mesajınız"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button 
            variant="contained" 
            type="submit"
            className="submit-button"
          >
            Gönder
          </Button>
        </form>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact; 