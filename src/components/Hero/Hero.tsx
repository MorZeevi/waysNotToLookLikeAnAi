import styles from "./Hero.module.scss";
import { EtherealShadow } from "@/components/EtherealShadow/EtherealShadow";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <EtherealShadow
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 100 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
      <div className={styles.inner}>
        <p className={styles.label}>מדריך פרקטי</p>

        <h1 className={styles.title}>
          8 דרכים
          <br />
          לגרום לAI
          <br />
          לא להיות <br /> כמו AI
        </h1>

        <p className={styles.description}>
          מדריך פרקטי איך להנות מכלים מדהימים
          <br />
          בלי להחריב לעצמנו את העסק בגנריות מחרידה.
        </p>

        <a href="#rules" className={styles.cta}>
          <span>בואו נתחיל</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 3v14M3 10l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>גללו למטה</span>
      </div>
    </section>
  );
}
