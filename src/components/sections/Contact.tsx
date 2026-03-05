import { motion } from "framer-motion";

const Contact = () => {
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
        {/* Section Title */}
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
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-card p-5 text-center"
            >
              <h4 className="text-light mb-4">
                Let’s build something amazing together 🚀
              </h4>

              {/* Phone */}
              <p className="fs-5 text-light mb-3">
                📞 <a href="tel:8010012645" className="text-info text-decoration-none">
                  8010012645
                </a>
              </p>

              {/* Email */}
              <p className="fs-5 text-light mb-3">
                📧 <a
                  href="mailto:aavishkarbhosale1612@gmail.com"
                  className="text-info text-decoration-none"
                >
                  aavishkarbhosale1612@gmail.com
                </a>
              </p>

              {/* LinkedIn */}
              <p className="fs-5 text-light mb-3">
                💼 <a
                  href="https://www.linkedin.com/in/aavishkar-bhosale-526b80277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info text-decoration-none"
                >
                  LinkedIn Profile
                </a>
              </p>

              {/* GitHub */}
              <p className="fs-5 text-light">
                💻 <a
                  href="https://github.com/Aavishkar1612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info text-decoration-none"
                >
                  GitHub Profile
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;