import ChevronIcon from "../../assets/svg/logo/hero-chevron.svg";

export default function ScrollArrow() {
  const handleScroll = () => {
    const main = document.getElementsByTagName("main")[0];
    main.scrollIntoView();
  };

  return (
    <div className="flex justify-center absolute bottom-0 left-0 right-0 mb-20 sm:mb-6">
      <button
        type="button"
        className="animate-bounce"
        onClick={handleScroll}
        aria-label="scroll down"
      >
        <ChevronIcon className="text-gray-200 w-6 h-6" />
      </button>
    </div>
  );
}
