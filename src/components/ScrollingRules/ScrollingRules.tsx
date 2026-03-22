"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import contactImg from "@/assets/contact.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollingRules.module.scss";

type Rule = {
  num?: string;
  image: StaticImageData;
  title: string;
  text?: React.ReactNode;
  isContact?: boolean;
};

const rules: Rule[] = [
  {
    num: "01",
    image: img1,
    title: "לבטל את העיצוב הדיפולטיבי",
    text: (
      <>
        כמה עוד אפשר לראות את אותה הקופסה בצבע קצת שונה? אותו צל (Shadow), עיגול פינות (Border-radius) ואייקונים שנראים כאילו נלקחו מאתר של קופת חולים.
        <br />
        <br />
        כחלק מהתהוות הפרויקט שלכם, פשוט תבקשו מה-AI לצאת מהתבנית. פרומפט להעתקה:
        <br />
        <br />
        <span style={{ fontSize: "0.9em", fontStyle: "italic", whiteSpace: "pre-wrap", color: "inherit", opacity: 0.8 }}>
          "Do not use default, generic UI styles... Instead, create a premium, modern, and minimalist design. Use a sophisticated color palette, refined micro-typography, ample whitespace, and subtle, elegant micro-animations."
        </span>
      </>
    ),
  },
  {
    num: "02",
    image: img2,
    title: "רפרנסים מהשראות מתאימות",
    text: "הדביקו פרינט סקרינים מאתרים שאתם אוהבים. במקום לבקש מה-AI 'תעצב לי אתר יפה', תראו לו למה אתם מתכוונים. יש כל כך הרבה אתרים מדהימים לקחת מהם השראה: Cosmos, Dribbble, Pinterest, Awwwards. תעלו סקרינשוט ותנחו אותו 'אני רוצה את התחושה והסגנון הזה'.",
  },
  {
    num: "03",
    image: img3,
    title: "לעצב בפיגמה ולחבר ב-MCP",
    text: "אפשר להשתמש בכלים כמו פיגמה, או סטיץ׳ (Stitch), ופשוט לחבר לרפוזיטורי שלכם בעזרת MCP. רק שימו לב שחשוב מאוד להשתמש ב-Auto Layout כדי שהתרגום לקוד יהיה מדויק. דרך מדהימה להמשיך לעצב בעצמכם עם התוצאה הסופית בידיים שלכם.",
  },
  {
    num: "04",
    image: img4,
    title: "ספריית UI/UX Pro Max",
    text: "אל תמציאו את הגלגל מחדש, אבל גם אל תשתמשו בגלגל השחוק שכולם נוסעים עליו. קחו ספריות קומפוננטות מתקדמות (כמו Radix, Aceternity או ספריות אינדי שוות), שמציעות בסיס קוד מהוקצע. ה-AI יעזור לכם לשנות את הסטייל שלהן ככה שייראו בדיוק כמו המותג שלכם ולא כמו עותק דהוי.",
  },
  {
    num: "05",
    image: img5,
    title: "לקרוא בקול רם",
    text: "האם זה משהו שאתם הייתם אומרים בחיים האמיתיים? אם כן – תשאירו. אם לא, איך הייתם מנסחים את זה בשיחה אמיתית עם לקוח או חבר? הטקסט שלכם צריך להישמע טבעי, אנושי ובגובה העיניים. לא כמו פלטפורמת שירות לקוחות זולה.",
  },
  {
    num: "06",
    image: img1,
    title: "להיפטר מביטויים נפוצים",
    text: "״בעולם דינאמי של...״, ״בעידן הדיגיטלי של היום...״, ״לנפץ את תקרת הזכוכית...״ – כולם צריכים ללכת לפח. ועל מקפים מיותרים בכלל אין צורך להרחיב (פשוט להכחיד אותם מהטקסטים שלכם, דחוף). דברו ישר ולעניין.",
  },
  {
    num: "07",
    image: img2,
    title: "21st Dev",
    text: "ספריות אנימציות מטורפות וקומפוננטות יעילות שנותנות נוק-אאוט רציני לכל המכניות של ה-AI. ככה פשוט, ככה מגניב. מוצאים קומפוננטות מהממות, מעתיקים את הפרומפט, מדביקים ל-AI – וזהו. יש עיצוב קצה שישאיר אנשים עם פה פתוח.",
  },
  {
    num: "08",
    image: img3,
    title: "לסגור את המחשב",
    text: "כן, מה ששמעתם. סגרו את המחשב. קחו דף ועט (גם אם אתם מציירים רע) ושרטטו איך הייתם רוצים שהאתר ייראה. דמיינו איך הקהל הפוטנציאלי שלכם מרגיש בזמן שהוא נכנס לממשק שלכם. תעשו סקיצה מהירה, וחזרו ל-AI חכמים עמוקים ומדויקים יותר.",
  },
  {
    isContact: true,
    image: contactImg,
    title: "נשאר בקשר",
    text: "עיצוב ופיתוח שנראים כמו שהם נועדו להיראות.",
  },
];

export default function ScrollingRules() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const slides = section.querySelectorAll<HTMLElement>(`.${styles.slide}`);

    slides.forEach((slide) => {
      const contentWrapper = slide.querySelector<HTMLElement>(
        `.${styles.contentWrapper}`
      );
      const content = slide.querySelector<HTMLElement>(`.${styles.content}`);
      if (!contentWrapper || !content) return;

      const randomZ = (Math.random() - 0.5) * 10;

      gsap.to(content, {
        rotationZ: randomZ,
        scale: 0.7,
        rotationX: 40,
        ease: "power1.in",
        scrollTrigger: {
          pin: contentWrapper,
          trigger: slide,
          start: "top 0%",
          end: "+=" + window.innerHeight,
          scrub: true,
        },
      });

      gsap.to(content, {
        autoAlpha: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: content,
          start: "top -80%",
          end: "+=" + 0.2 * window.innerHeight,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="rules" className={styles.scrollingRules} ref={sectionRef}>
      <div className={styles.slides}>
        {rules.map((rule, i) => (
          <div key={rule.num ?? "contact"} className={styles.slide}>
            <div className={styles.contentWrapper}>
              <div className={`${styles.content} ${rule.isContact ? styles.theme1 : styles[`theme${(i % 3) + 1}`]}`}>
                <div className={styles.top}>
                  <p className={styles.ruleTitle}>{rule.title}</p>
                  <svg width="81" height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}><path d="M52.9696 64.5854C51.6459 63.2617 49.6094 63.2617 48.2857 64.5854L42.7872 70.0839C41.4635 71.4076 39.4271 71.4076 38.1034 70.0839L32.4013 64.3818C31.0776 63.0581 31.0775 61.0216 32.4013 59.6979L80.971 11.1282L70.585 0.742188L22.0153 49.3119C20.6916 50.6356 18.6551 50.6356 17.3314 49.3119L11.6293 43.6098C10.3056 42.2861 10.3056 40.2497 11.6293 38.926L17.1277 33.4275C18.4515 32.1038 18.4515 30.0673 17.1277 28.7436L11.4256 23.0415C10.1019 21.7178 10.1019 19.6813 11.4256 18.3576L16.9241 12.8592C18.2478 11.5355 18.2478 9.499 16.9241 8.17529L11.222 2.47318C9.89828 1.14948 7.86182 1.14948 6.53812 2.47319L1.03965 7.97165C-0.284051 9.29535 -0.284051 11.3318 1.03965 12.6555L6.74177 18.3576C8.06547 19.6813 8.06546 21.7178 6.74176 23.0415L1.2433 28.54C-0.0804043 29.8637 -0.0804005 31.9001 1.2433 33.2238L6.94541 38.9259C8.26912 40.2497 8.26911 42.2861 6.94541 43.6098L1.44694 49.1083C0.123239 50.432 0.123243 52.4685 1.44694 53.7922L7.14905 59.4943C8.47276 60.818 8.47276 62.8545 7.14906 64.1782L1.6506 69.6766C0.326892 71.0003 0.32689 73.0368 1.6506 74.3605L7.3527 80.0626C8.67641 81.3863 10.7129 81.3863 12.0366 80.0626L17.535 74.5641C18.8587 73.2404 20.8952 73.2404 22.2189 74.5641L27.921 80.2662C29.2447 81.5899 31.2812 81.59 32.6049 80.2663L38.1034 74.7678C39.4271 73.4441 41.4635 73.4441 42.7872 74.7678L48.4893 80.4699C49.8131 81.7936 51.8495 81.7936 53.1732 80.4699L58.6717 74.9714C59.9954 73.6477 62.0319 73.6477 63.3556 74.9714L69.0577 80.6735C70.3814 81.9972 72.4178 81.9972 73.7415 80.6735L79.24 75.1751C80.5637 73.8514 80.5637 71.8149 79.24 70.4912L73.5379 64.7891C72.2142 63.4654 70.1777 63.4654 68.854 64.7891L63.3556 70.2876C62.0319 71.6113 59.9954 71.6113 58.6717 70.2876L52.9696 64.5854ZM22.2189 69.8803C20.8952 71.204 18.8587 71.204 17.535 69.8803L11.8329 64.1782C10.5092 62.8544 10.5092 60.818 11.8329 59.4943L17.3314 53.9958C18.6551 52.6721 20.6916 52.6721 22.0153 53.9958L27.7174 59.6979C29.0411 61.0216 29.0411 63.0581 27.7174 64.3818L22.2189 69.8803Z" fill="currentColor" /></svg>
                </div>
                <div className={styles.bottom}>
                  {rule.isContact ? (
                    <div className={styles.ruleText}>
                      <p>{rule.text}</p>
                      <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/moriz_studio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <radialGradient id="ig-rg" cx="30%" cy="107%" r="150%">
                                <stop offset="0%" stopColor="#ffd676"/>
                                <stop offset="25%" stopColor="#f9a844"/>
                                <stop offset="50%" stopColor="#f1723a"/>
                                <stop offset="75%" stopColor="#c4326d"/>
                                <stop offset="100%" stopColor="#5f52cc"/>
                              </radialGradient>
                            </defs>
                            <rect width="24" height="24" rx="6" fill="url(#ig-rg)"/>
                            <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8"/>
                            <circle cx="17.5" cy="6.5" r="1.1" fill="white"/>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/mor-zeevi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="5" fill="#0077B5"/>
                            <path d="M6.5 9.5h2v8h-2v-8zm1-1.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM10.5 9.5h1.9v1.1c.4-.7 1.3-1.3 2.6-1.3 2.1 0 3 1.4 3 3.4v4.8h-2v-4.4c0-1-.4-1.8-1.5-1.8-1 0-1.5.7-1.5 1.8v4.4h-2V9.5z" fill="white"/>
                          </svg>
                        </a>
                        <a href="https://wa.me/972522937174" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#25D366"/>
                            <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5 0-.2-.7-1.7-.9-2.3-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.1 2 3.1 4.9 4.3.7.3 1.2.4 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" fill="white"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className={styles.ruleText}>{rule.text}</p>
                  )}
                  <div className={styles.bottomRight}>
                    {!rule.isContact && <p className={styles.ruleNum}>({rule.num})</p>}
                    <Image
                      src={rule.image}
                      alt=""
                      className={styles.placeholder}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
