import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.getElementById("contact-form")?.reset();
  }, []);

  const styles = {
    cardMaxWidthPx: 400,
    cardPaddingRem: 2.5,
    cardBorderRadiusRem: 1.5,
    labelFontSizeRem: 1.125,
    inputPaddingRem: 0.75,
    buttonPaddingRem: 0.75,
    buttonBorderRadiusRem: 0.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xldljdbe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        form.reset();

        const successMessage = document.createElement("div");
        successMessage.innerText = "✅ ¡Mensaje enviado con éxito!";
        successMessage.style.color = "#3ee6c1";
        successMessage.style.fontWeight = "600";
        successMessage.style.marginTop = "1rem";
        form.parentElement.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 4000);
      })
      .catch(() => {
        alert("Hubo un error. Inténtalo de nuevo.");
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-transparent mb-0 pb-[4rem]"
      style={{ paddingTop: "3rem", paddingBottom: "0", borderTop: "none", boxShadow: "none" }}
    >
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <h3 className="mb-2 text-2xl font-bold" style={{ color: "#3ee6c1" }}>
          {t("contact.title")}
        </h3>
        <p className="text-base sm:text-lg text-white/80">
          {t("contact.description")}
        </p>
      </div>

      <div
        style={{
          maxWidth: `${styles.cardMaxWidthPx}px`,
          width: "100%",
          background:
            "linear-gradient(135deg, #20252d 0%, #222a34 50%, #3ee6c1 100%)",
          borderRadius: `${styles.cardBorderRadiusRem}rem`,
          padding: `${styles.cardPaddingRem}rem`,
          paddingBottom: "1rem",
          boxShadow: "0 4px 20px rgba(62, 230, 193, 0.4)",
          border: "1px solid #2c3039",
          backdropFilter: "blur(10px)",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        <form
          id="contact-form"
          className="flex flex-col"
          style={{ gap: "1rem" }}
          onSubmit={handleSubmit}
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
            onFocus={(e) => (e.target.style.boxShadow = "0 0 6px #3ee6c1")}
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
            onFocus={(e) => (e.target.style.boxShadow = "0 0 6px #3ee6c1")}
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
            onFocus={(e) => (e.target.style.boxShadow = "0 0 6px #3ee6c1")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: `${styles.buttonPaddingRem}rem 0`,
              borderRadius: `${styles.buttonBorderRadiusRem}rem`,
              fontWeight: "600",
              background: "linear-gradient(90deg, #8fefee 0%, #3cc1bb 100%)",
              color: "black",
              boxShadow: "0 4px 8px rgba(62,230,193,0.5)",
              cursor: "pointer",
              transition: "filter 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;