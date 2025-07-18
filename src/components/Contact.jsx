import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const styles = {
    cardMaxWidthPx: 400,
    cardPaddingRem: 2.5,
    cardBorderRadiusRem: 1.5,
    labelFontSizeRem: 1.125,
    inputPaddingRem: 0.75,
    buttonPaddingRem: 0.75,
    buttonBorderRadiusRem: 0.5,
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-transparent mb-0 pb-0"
      style={{ padding: 0, borderTop: "none", boxShadow: "none" }}
    >
      <h2
        style={{
          background: "linear-gradient(90deg, #8ffefa, #2da59c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "800",
          fontSize: "4.5rem",
          marginBottom: "0rem",
          textAlign: "center",
        }}
      >
        {t("contact.title")}
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "600",
          marginBottom: "1rem",
          fontSize: "1.125rem",
        }}
      >
        {t("contact.description")}
      </p>

      <div
        style={{
          maxWidth: `${styles.cardMaxWidthPx}px`,
          width: "100%",
          background:
            "linear-gradient(135deg, #20252d 0%, #222a34 50%, #3ee6c1 100%)",
          borderRadius: `${styles.cardBorderRadiusRem}rem`,
          padding: `${styles.cardPaddingRem}rem`,
          paddingBottom: "1rem",
          boxShadow:
            "0 4px 20px rgba(62, 230, 193, 0.4)",
          border: "1px solid #2c3039",
          backdropFilter: "blur(10px)",
          marginTop: "1rem",
          marginBottom: "-1.5rem",
        }}
      >
        <form
          className="flex flex-col"
          style={{ gap: "1rem" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="name"
            style={{
              color: "#3ee6c1",
              fontWeight: "600",
              fontSize: `${styles.labelFontSizeRem}rem`,
              display: "block",
            }}
          >
            {t("contact.name")}
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder={t("contact.namePlaceholder")}
            style={{
              width: "100%",
              padding: `${styles.inputPaddingRem}rem`,
              borderRadius: "0.5rem",
              backgroundColor: "#20252d",
              color: "white",
              border: "1px solid #3ee6c1",
              outline: "none",
              fontSize: "1rem",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 6px #3ee6c1")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <label
            htmlFor="email"
            style={{
              color: "#3ee6c1",
              fontWeight: "600",
              fontSize: `${styles.labelFontSizeRem}rem`,
              display: "block",
            }}
          >
            {t("contact.emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("contact.emailPlaceholder")}
            style={{
              width: "100%",
              padding: `${styles.inputPaddingRem}rem`,
              borderRadius: "0.5rem",
              backgroundColor: "#20252d",
              color: "white",
              border: "1px solid #3ee6c1",
              outline: "none",
              fontSize: "1rem",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 6px #3ee6c1")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <label
            htmlFor="message"
            style={{
              color: "#3ee6c1",
              fontWeight: "600",
              fontSize: `${styles.labelFontSizeRem}rem`,
              display: "block",
            }}
          >
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder={t("contact.messagePlaceholder")}
            style={{
              width: "100%",
              padding: `${styles.inputPaddingRem}rem`,
              borderRadius: "0.5rem",
              backgroundColor: "#20252d",
              color: "white",
              border: "1px solid #3ee6c1",
              outline: "none",
              fontSize: "1rem",
              height: "12rem",
              resize: "none",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 6px #3ee6c1")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: `${styles.buttonPaddingRem}rem 0`,
              borderRadius: `${styles.buttonBorderRadiusRem}rem`,
              fontWeight: "600",
              background:
                "linear-gradient(90deg, #8fefee 0%, #3cc1bb 100%)",
              color: "black",
              boxShadow: "0 4px 8px rgba(62,230,193,0.5)",
              cursor: "pointer",
              transition: "filter 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;