import DiscordIcon from "../../assets/svg/logo/fa-discord.svg";
import GitHubIcon from "../../assets/svg/logo/fa-github.svg";
import TwitterIcon from "../../assets/svg/logo/fa-twitter.svg";
import IconButton from "../IconButton";

export default function Socials() {
  return (
    <div className="py-4 space-x-4">
      <IconButton
        icon={GitHubIcon}
        label="github"
        href="https://github.com/Cubxity"
        external
      />
      <IconButton
        icon={DiscordIcon}
        label="discord"
        href="https://discord.gg/UUPeTMVjV7"
        external
      />
      <IconButton
        icon={TwitterIcon}
        label="twitter"
        href="https://twitter.com/Cubxity"
        external
      />
    </div>
  );
}
