import styled from "@emotion/styled";

const DESIGN = 375;
const MAX = 440;

export default function AppShell({ background, children }: { background?: string; children: React.ReactNode }) {
  return (
    <Wrap style={{ background }}>
      <Stage>{children}</Stage>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 100dvh;
  min-width: ${DESIGN}px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;

const Stage = styled.div`
  width: ${DESIGN}px;
  transform-origin: top center;
  transform: scale(1);

  /* 375~440: 비례 확대 */
  @media (min-width: ${DESIGN}px) and (max-width: ${MAX}px) {
    transform: scale(calc(100vw / ${DESIGN}));
  }

  /* 441↑: 440 기준 고정 */
  @media (min-width: ${MAX + 1}px) {
    transform: scale(calc(${MAX} / ${DESIGN}));
  }
`;