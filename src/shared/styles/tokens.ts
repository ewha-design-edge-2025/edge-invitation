import { css, type Theme } from "@emotion/react";

/** ${color("black")} */
export const color = <K extends keyof Theme["colors"]>(key: K) =>
  (p: { theme: Theme }) => p.theme.colors[key];

/** ${font("title_bold_20")}  */
export const font = <K extends keyof Theme["fonts"]>(key: K) =>
  ({ theme }: { theme: Theme }) => {
    const v = theme.fonts[key] as {
      fontFamily: string; fontWeight: number; fontSize: string; lineHeight: string; letterSpacing: string;
    };
    return css`
      font-family: ${v.fontFamily};
      font-weight: ${v.fontWeight};
      font-size: ${v.fontSize};
      line-height: ${v.lineHeight};
      letter-spacing: ${v.letterSpacing};
    `;
  };
