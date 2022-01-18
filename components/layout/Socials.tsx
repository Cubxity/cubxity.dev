import DiscordIcon from "../../assets/svg/logo/fa-discord.svg";
import GitHubIcon from "../../assets/svg/logo/fa-github.svg";
import TwitterIcon from "../../assets/svg/logo/fa-twitter.svg";
import IconButton from "../IconButton";

export default function Socials() {
  return (
    <div className="py-4 space-x-4">
      <IconButton
        icon={GitHubIcon}
        href="https://github.com/Cubxity"
        external
      />
      <IconButton
        icon={DiscordIcon}
        href="https://discord.gg/UUPeTMVjV7"
        external
      />
      <IconButton
        icon={TwitterIcon}
        href="https://twitter.com/Cubxity"
        external
      />
    </div>
  );
}
