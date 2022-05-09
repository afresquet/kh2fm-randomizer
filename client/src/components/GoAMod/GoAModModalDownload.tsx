import { Button, Modal, Typography } from "antd";
import { useToggle } from "../../hooks/useToggle";

export const GoAModModalDownload: React.FC = () => {
	const [modalVisible, toggleModalVisible] = useToggle(false);

	return (
		<>
			<Button onClick={toggleModalVisible} style={{ marginRight: 4 }} block>
				Download Mod
			</Button>

			<Modal
				title="Download Garden of Assemblage mod"
				visible={modalVisible}
				onCancel={toggleModalVisible}
				footer={[
					<Button key="back" onClick={toggleModalVisible}>
						Cancel
					</Button>,
					<Button key="submit" type="primary" onClick={toggleModalVisible}>
						<Typography.Link
							href="https://docs.google.com/document/d/1GYjEnrM_TIk7qyO75clPLYD-_nP5wTR7K6SE-Wn-QCg/edit"
							target="_blank"
						>
							Go to Sonicshadowsilver2's document
						</Typography.Link>
					</Button>,
				]}
			>
				<p>
					This mod was created by{" "}
					<Typography.Link
						href="https://twitter.com/Sonicshadowsil2"
						target="_blank"
					>
						Sonicshadowsilver2
					</Typography.Link>
					, you can download it by going to his document where he has all the
					information about it.
				</p>
				<p>
					You will need to download the 'Randomizer Build' in order for the
					randomizer to work.
				</p>

				<p>
					If you are playing on PC with the Lua version, you can download{" "}
					<Typography.Link href="https://github.com/1234567890num">
						Num's
					</Typography.Link>{" "}
					GoA by{" "}
					<Typography.Link href="https://github.com/1234567890num/Garden-of-Assemblage-Mod-Lua">
						clicking this link
					</Typography.Link>
					, going to releases and download the file <code>GoA.RAM.lua</code>
				</p>
			</Modal>
		</>
	);
};
