import ChevronIcon from "../../assets/svg/logo/hero-chevron.svg";

export default function ScrollArrow() {
  const handleScroll = () => {
    const main = document.getElementsByTagName("main")[0];
    main.scrollIntoView();
  };

  return (
    <button
      type="button"
      className="mb-20 sm:mb-6 mx-auto animate-bounce"
      onClick={handleScroll}
      aria-label="scroll down"
    >
      <ChevronIcon className="text-gray-200 w-6 h-6" />
    </button>
  );
}
