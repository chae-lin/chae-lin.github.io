import gsap from "gsap";

export const useMotion = () => {
  // OS/브라우저의 "모션 줄이기" 설정 감지
  const prefersReducedMotion = import.meta.client
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  // 섹션 공통 ScrollTrigger 타임라인 생성
  const createScrollTimeline = (trigger: Element) => {
    return gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top 75%",
        once: true,
      },
    });
  };

  return { prefersReducedMotion, createScrollTimeline };
};
