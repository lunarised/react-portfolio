import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsibleRow } from "../../components/SharedComponents";
import { ExperienceProps } from "./experience";

export const SchedulerRow = (props: ExperienceProps) => {
  return (
    <CollapsibleRow name="Scheduler" open={props.open} setOpen={props.setOpen}>
      <ContentParagraph>
        I worked on a project to add a feature for end users to configure
        automatic sampling. This included weekdays, times, delay between
        sessions as well as support for multiple timezones changing mid
        experiment (Daylight Saving and such).
      </ContentParagraph>
      <ContentParagraph>
        This project was specifically challenging due to how many edge cases
        there can be around timezones, some of which were partially solved by
        using the Luxon JS library. Some other things I had to consider were all
        the edge cases for why an application may not have accurate access to a
        clock, or system states that may interrupt automated sampling (such as
        Windows Update)
      </ContentParagraph>
    </CollapsibleRow>
  );
};
