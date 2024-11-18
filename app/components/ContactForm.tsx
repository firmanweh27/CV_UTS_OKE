"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratings, setRatings] = useState<{ name: string; message: string; rating: number }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRating = { name, message, rating };
    setRatings([...ratings, newRating]);
    setName("");
    setMessage("");
    setRating(0);
  };

  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, cur) => acc + cur.rating, 0);
    return total / ratings.length;
  };

  const censorName = (name: string) => {
    const visibleChars = 2;
    if (name.length <= visibleChars) return name;
    return name.slice(0, visibleChars) + "*".repeat(name.length - visibleChars);
  };

  const ratingDescriptions = [
    "Buruk sekali",
    "Kurang baik",
    "Cukup baik",
    "Sangat baik",
    "Luar biasa!",
  ];

  return (
    <div style={styles.container}>
      <div style={styles.averageRatingContainer}>
        <h3 style={styles.averageRatingHeader}>Rata-rata Rating:</h3>
        <p style={styles.averageRating}>{calculateAverageRating().toFixed(1)} ★</p>
      </div>

      <h2 style={styles.header}>Berikan Rating Anda</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nama</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Pesan</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Berikan Rating Anda</label>
          <div style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRating(index)}
                style={index < (hoverRating || rating) ? styles.starActive : styles.star}
                title={ratingDescriptions[index]}
              >
                ★
              </span>
            ))}
          </div>
          {hoverRating > 0 && (
            <p style={styles.ratingDescription}>{ratingDescriptions[hoverRating - 1]}</p>
          )}
        </div>
        <button type="submit" style={styles.submitButton}>Kirim</button>
      </form>

      <div style={styles.submittedData}>
        <h3 style={styles.submittedHeader}>Ulasan Terbaru</h3>
        {ratings.map((data, index) => (
          <div key={index} style={styles.review}>
            <p>
              <strong>{censorName(data.name)}</strong> ({data.rating} ★)
            </p>
            <p style={styles.italicMessage}>{data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "linear-gradient(145deg, #1f1c2c, #928dab)",
    color: "#FFFFFF",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "auto",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
  },
  averageRatingContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  averageRatingHeader: {
    fontSize: "1.5rem",
    color: "#FFD700",
  },
  averageRating: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#FFFA8A",
  },
  header: {
    textAlign: "center",
    fontSize: "2.2rem",
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#EAEAEA",
  },
  input: {
    padding: "12px",
    background: "#2C2C54",
    border: "none",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px",
    background: "#2C2C54",
    border: "none",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontSize: "1rem",
    minHeight: "100px",
  },
  stars: {
    display: "flex",
    gap: "5px",
    cursor: "pointer",
  },
  star: {
    fontSize: "30px",
    color: "#666",
  },
  starActive: {
    fontSize: "30px",
    color: "#FFD700",
  },
  ratingDescription: {
    marginTop: "8px",
    fontSize: "0.9rem",
    color: "#FFFA8A",
    fontStyle: "italic",
  },
  submitButton: {
    padding: "12px",
    background: "linear-gradient(90deg, #FF7E5F, #FD267D)",
    border: "none",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  submittedData: {
    marginTop: "30px",
    padding: "20px",
    background: "#1E1E2F",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  submittedHeader: {
    color: "#FF7E5F",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  review: {
    borderBottom: "1px solid #444",
    padding: "10px 0",
  },
  italicMessage: {
    fontStyle: "italic",
    color: "#D3D3D3",
  },
};

export default ContactForm;
