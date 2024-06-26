import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const LinuxRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Linux"
      color="#0088cc"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I have used Linux as my primary operating system for over 6 years, both
        for desktop and server use. I currently manage an array of Linux
        servers, hosting an suite of services for me, such as Jellyfin, Git,
        Grafana and Web Hosting. These servers are run with multiple different
        distributions, such as Ubuntu, Arch, Debian and Raspian.
      </ContentParagraph>
      <ContentParagraph>
        As some of these servers are running on the public internet, I take a
        great interest in keeping the security of my systems safe with
        (sometimes) overzealous firewall configurations and SSH authentication.
      </ContentParagraph>
    </CollapsibleRow>
  );
};
