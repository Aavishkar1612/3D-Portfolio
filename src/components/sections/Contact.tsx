import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",      // 🔁 Replace
        "YOUR_TEMPLATE_ID",     // 🔁 Replace
        formRef.current,
        "YOUR_PUBLIC_KEY"       // 🔁 Replace
      );

      setStatus("Message sent successfully 🚀");
      formRef.current.reset();
    } catch (error) {
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-5 fw-bold text-center gradient-text mb-5"
        >
          Contact Me
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-card p-4"
            >
              <div className="mb-3">
                <label className="form-label text-light">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control bg-dark text-light"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control bg-dark text-light"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="form-control bg-dark text-light"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-info w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="mt-3 text-center glow-text">
                  {status}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;