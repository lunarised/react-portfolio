import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { SkillsProps } from "./skills";

export const MonitoringRow = (props: SkillsProps) => {
  return (
    <CollapsibleRow
      name="Monitoring"
      color="#b30000"
      open={props.open}
      setOpen={props.setOpen}
    >
      <ContentParagraph>
        I monitor all my linux servers carefully using a combination of
        Prometheus and Grafana. I have triggers setup to check for potential
        downtime, as well as abnormal operation, such as systemd services
        failing, or CPU utilisation average exceeding a value. I have a
        notification setup using discord and webhooks to alert me when these
        events occur
      </ContentParagraph>
    </CollapsibleRow>
  );
};
