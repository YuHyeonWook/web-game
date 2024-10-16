/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "var(--color-neutral-0)",
          5: "var(--color-neutral-5)",
          10: "var(--color-neutral-10)",
          20: "var(--color-neutral-20)",
          30: "var(--color-neutral-30)",
          40: "var(--color-neutral-40)",
          50: "var(--color-neutral-50)",
          60: "var(--color-neutral-60)",
          70: "var(--color-neutral-70)",
          80: "var(--color-neutral-80)",
          90: "var(--color-neutral-90)",
          100: "var(--color-neutral-100)",
        },
        primary: {
          5: "var(--color-primary-5)",
          10: "var(--color-primary-10)",
          20: "var(--color-primary-20)",
          30: "var(--color-primary-30)",
          40: "var(--color-primary-40)",
          50: "var(--color-primary-50)",
          60: "var(--color-primary-60)",
          70: "var(--color-primary-70)",
          80: "var(--color-primary-80)",
          90: "var(--color-primary-90)",
        },
        error: {
          5: "var(--color-error-5)",
          10: "var(--color-error-10)",
          20: "var(--color-error-20)",
          30: "var(--color-error-30)",
          40: "var(--color-error-40)",
          50: "var(--color-error-50)",
          60: "var(--color-error-60)",
          70: "var(--color-error-70)",
          80: "var(--color-error-80)",
          90: "var(--color-error-90)",
        },
        warn: {
          5: "var(--color-warn-5)",
          10: "var(--color-warn-10)",
          20: "var(--color-warn-20)",
          30: "var(--color-warn-30)",
          40: "var(--color-warn-40)",
          50: "var(--color-warn-50)",
          60: "var(--color-warn-60)",
          70: "var(--color-warn-70)",
          80: "var(--color-warn-80)",
          90: "var(--color-warn-90)",
        },
        success: {
          5: "var(--color-success-5)",
          10: "var(--color-success-10)",
          20: "var(--color-success-20)",
          30: "var(--color-success-30)",
          40: "var(--color-success-40)",
          50: "var(--color-success-50)",
          60: "var(--color-success-60)",
          70: "var(--color-success-70)",
          80: "var(--color-success-80)",
          90: "var(--color-success-90)",
        },
      },
      fontSize: {
        // Display styles
        "display-lg": "66px",
        "display-lg-m": "40px",

        "display-base": "50px",
        "display-base-m": "32px",

        "display-sm": "40px",
        "display-sm-m": "25px",

        // Heading styles
        "heading-lg": "50px",
        "heading-lg-m": "40px",

        "heading-base": "40px",
        "heading-base-m": "32px",

        "heading-sm": "32px",
        "heading-sm-m": "25px",

        // Title styles
        "title-2xl": "32px",
        "title-2xl-m": "25px",

        "title-xl": "25px",
        "title-xl-m": "25px",

        "title-lg": "21px",
        "title-lg-m": "21px",

        "title-base": "19px",
        "title-base-m": "19px",

        "title-sm": "17px",
        "title-sm-m": "17px",

        "title-xs": "15px",
        "title-xs-m": "15px",

        // Body styles
        "body-lg": "19px",

        "body-base": "17px",
        "body-base-m": "17px",

        "body-sm": "15px",
        "body-sm-m": "15px",

        // Detail styles
        "detail-lg": "17px",
        "detail-lg-m": "17px",

        "detail-base": "15px",
        "detail-base-m": "15px",

        "detail-sm": "13px",
        "detail-sm-m": "13px",

        // Label styles
        "label-lg": "19px",
        "label-lg-m": "19px",

        "label-base": "17px",
        "label-base-m": "17px",

        "label-sm": "15px",
        "label-sm-m": "15px",

        "label-xs": "13px",
        "label-xs-m": "13px",

        // Links styles
        "links-lg": "19px",
        "links-lg-m": "19px",

        "links-base": "17px",
        "links-base-m": "17px",

        "links-sm": "15px",
        "links-sm-m": "15px",
      },
      borderRadius: {
        0: "0px",
        1: "2px",
        2: "4px",
        3: "6px",
        4: "8px",
        5: "12px",
        6: "16px",
        7: "20px",
        8: "24px",
        9: "32px",
        10: "1000px",
      },
    },
    spacing: {
      0: "0px",
      1: "2px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px",
      6: "20px",
      7: "24px",
      8: "32px",
      9: "40px",
      10: "48px",
    },
  },
  plugins: [],
};
