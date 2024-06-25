import { ContentParagraph } from "../../components/ContentStylings";
import { CollapsableRow } from "../../components/SharedComponents";
import { ExperienceProps } from "./experience";

export const DelayedRenderingRow = (props: ExperienceProps) => {
	return (
		<CollapsableRow
			name="Delayed Rendering"
			open={props.open}
			setOpen={props.setOpen}
		>
			<ContentParagraph>
				One of the more challenging projects I worked on in my time at
				ADInstruments was adding Delayed Rendering to the application. You can
				read more about the Objective C prototype in the{" "}
				<a href="#Projects">Projects</a> section, but there were additional
				challenges surrounding the implementation and other parts of the project
			</ContentParagraph>
			<ContentParagraph>
				Coming up with a solution that worked both on Mac and Windows was one of
				the more challenging parts of this project as a whole. The backend was
				written with windows in mind, so I had to spend time getting all the
				existing rendering code to be cross platform. This also led to having to
				pick the point where Mac specific code would branch from the windows
				specific code, so that each set of clipboard calls shared as much of the
				same code as possible.
			</ContentParagraph>
			<ContentParagraph>
				The Windows side was also quite difficult, with conflicting information
				in the documentation which partially suggested that delayed rendering
				was no longer supported, and the clipboard history feature of windows 10
				causing automatic renders of the clipboard whenever anything was added
				to the clipboard. Along with using a legacy renderer from an older
				version of the application, I managed to get delayed rendering working
				on windows too.
			</ContentParagraph>
		</CollapsableRow>
	);
};
