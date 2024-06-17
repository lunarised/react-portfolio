import { PageCard } from "../components/pageCard";

export const HomeSection = () => {
	return (
		<PageCard>
			<h1>James McKenzie</h1>
			<br />
			<h2>SysAdmin, Programmer, Dog Person</h2>
			<p>
				I am a BIT graduate from Otago Polytechnic with experience in
				operations, systems programming, machine learning, and infrastructure
				management.
			</p>
			<p>
				At the Otago Polytechnic, I was a key member in the student OP's team,
				and had various experiences maintaining systems. Such experiences were
				managing SSL certificates, diagnosing hardware faults, and general
				maintenance of several systems used by the other students for their
				projects.
			</p>
			<a href="https://github.com/lunarised">
				<img
					src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
					alt="Find me on Github!"
					height="64px"
					width="64px"
				/>
			</a>
			<a href="https://linkedin.com/in/lunarised">
				<img
					src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
					alt="Connect with me on LinkedIn"
					height="64px"
					width="64px"
				/>
			</a>
		</PageCard>
	);
};
