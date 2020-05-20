import React from "react"

import styles from "../../css/contact.module.css"
import Title from "../Title"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="us" />

      <div className={styles.center}>
        <form
          action="https://formspree.io/xoqkjkrn"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Your message"
            />
          </div>

          <div>
            <button type="submit" className={styles.submit}>
              Submit here
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
