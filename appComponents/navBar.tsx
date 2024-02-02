import Link from "next/link";

import Menu from "./menu";
import { Button, Figure } from "@/elements";

const NavBar = () => {
	const links = [
		{ path: "/", name: "HOME" },
		{ path: "#engagement", name: "ENGAGEMENT" },
		{ path: "#user-gratification", name: "USER GRATIFICATION" },
		{ path: "#mining-pools", name: "MINING POOLS" },
		{ path: "#nft", name: "NFT" },
		{ path: "#tokenomics", name: "TOKENOMICS" },
		{ path: "#roadmap", name: "ROADMAP" },
		{ path: "#team", name: "TEAM" },
		{ path: "#faq", name: "FAQ" },
	];

	return (
		<nav className="lg:flex justify-between gap-10 lg:pt-10 xl:px-5">
			<Menu />
			<Figure
				altText="logo"
				image="/logo.png"
				containerStyles="max-w-20 -mt-10 mx-auto lg:mt-0 lg:max-w-none lg:mx-0"
			/>
			<div className="lg:-mt-[15px]">
				<Button
					children="Launch Dapp"
					className="hidden lg:block border-2 border-[#D8BC40] bg-transparent mb-10 ml-auto px-9 py-2.5 hover:bg-[#D9BD41] active:bg-[#D9BD41] focus:bg-[#D9BD41]"
				/>
				<ul className="hidden lg:flex gap-5 xl:gap-10">
					{links.map(({ name, path }, i) => (
						<li key={i}>
							<Link
								href={path}
								className={`block font-medium group lg:text-sm focus:text-[#D8BC40] hover:text-[#D8BC40] focus:font-black hover:font-black ${
									!i ? "text-[#D8BC40]" : "text-white"
								}`}
							>
								<span
									className={`decoration-[5px] group-focus:underline group-hover:underline underline-offset-[10px] text-nowrap ${
										!i ? "underline" : ""
									}`}
								>
									{name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
