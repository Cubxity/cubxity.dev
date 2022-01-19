import ChevronIcon from "../../assets/svg/logo/hero-chevron.svg";

export default function ScrollArrow() {
  const handleScroll = () => {
    const main = document.getElementsByTagName("main")[0];
    main.scrollIntoView();
  };

  return (
    <button
      type="button"
      className="absolute left-1/2 right-1/2 bottom-16 sm:bottom-4 animate-bounce"
      onClick={handleScroll}
    >
      <ChevronIcon className="text-gray-200 w-6 h-6" />
    </button>
  );
}
