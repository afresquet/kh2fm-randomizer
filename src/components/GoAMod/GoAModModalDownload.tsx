import { Button, Modal, Typography } from "antd";
import React from "react";
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
			</Modal>
		</>
	);
};
