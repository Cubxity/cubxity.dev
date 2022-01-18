import GitHubIcon from "../../assets/svg/logo/fa-github.svg";
import IconButton from "../IconButton";

export default function Socials() {
  return (
    <div className="pt-4">
      <IconButton
        icon={GitHubIcon}
        href="https://github.com/Cubxity"
        external
      />
    </div>
  );
}
