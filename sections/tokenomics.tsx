import { Figure, Heading, Text } from "@/elements";

const Tokenomics = () => {
	const items = [
		{ title: "TOTAL SUPPLY", description: "100 million" },
		{ title: "NO ALLOCATION", description: "Fully minable" },
		{ title: "ISSUING STARTS AT", description: "200k/month" },
	];

	return (
		<section>
			<Figure
				altText="tokenomics section icon"
				imageStyles="mx-auto h-[60px] w-[60px]"
				image="/tokenomics-icon.svg"
			/>
			<Heading
				as="h2"
				children="TOKENOMICS"
				className="text-[30px] sm:text-[40px] mt-4 lg:text-6xl"
			/>
			<Text
				children="Lorem Ipsum on lihtsalt proovitekst, mida kasutatakse printimis- ja ladumistööstuses. See on olnud tööstuse põhiline proovitekst juba alates 1500. aastatest, mil tundmatu printija võttis hulga suvalist teksti."
				className=" max-w-[1065px] mt-6 mb-20 mx-auto md:mb-[60px] md:mt-[30px] md:text-center md:text-xl"
			/>
			<div className="text-center">
				<Text
					children="Information about Global Crypto Hub"
					className="font-black text-xl"
				/>
				{items.map(({ title, description }, i) => (
					<div
						key={i}
						className="border border-[#DBDBDB] text-center font-black max-w-[400px] md:max-w-[500px] mx-auto my-10 px-4 py-9 rounded-[10px] text-lg md:text-xl uppercase"
					>
						<Text className="mx-auto">
							{title} <span className="mx-2.5 sm:mx-5">|</span>
							<span className="normal-case text-[#D8BC40]">{description}</span>
						</Text>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tokenomics;