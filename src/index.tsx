import React from "react";
import "./index.css";
import { LargeViewPort, SmallViewPort } from "./components/viewPort";
import { Breakpoint, BreakpointProvider } from "react-socks";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
	<BreakpointProvider>
		<React.StrictMode>
			<Breakpoint medium up>
				<LargeViewPort />
			</Breakpoint>
			<Breakpoint small down>
				<SmallViewPort />
			</Breakpoint>
		</React.StrictMode>
	</BreakpointProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
