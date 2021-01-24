import { DeleteOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Modal } from "antd";
import {
	defaultGoAModSettings,
	defaultInclude,
	defaultSettings,
	defaultWorlds,
} from "kh2fm-randomizer";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { SeedContext } from "../../context/seed";
import { ConfigDiff, useConfigDiff } from "../../hooks/useConfigDiff";
import { useToggle } from "../../hooks/useToggle";

const presetLocalStorage = "presets";

interface Preset {
	name: string;
	settings: Partial<ConfigDiff>;
}

export const ModalPresets: React.FC = () => {
	const [showModal, toggleShowModal] = useToggle(false);
	const [presetName, setPresetName] = useState("");

	const {
		settings: [, setSettings],
		worlds: [, setWorlds],
		include: [, setInclude],
		gameMode: {
			goa: [, setGoA],
		},
	} = useContext(SeedContext);

	const [presets, setPresets] = useState<Preset[]>([]);

	const preset = useConfigDiff();

	useEffect(() => {
		const jsonString = localStorage.getItem(presetLocalStorage);

		if (!jsonString) return;

		setPresets(JSON.parse(jsonString));
	}, []);

	const setPreset = useCallback(
		(preset: Partial<ConfigDiff>) => {
			setSettings({
				...defaultSettings,
				...preset.settings,
			});

			setWorlds({
				...defaultWorlds,
				...preset.worlds,
			});

			setInclude({
				...defaultInclude,
				...preset.include,
			});

			setGoA({
				...defaultGoAModSettings,
				...preset.goa,
			});
		},
		[setSettings, setWorlds, setInclude, setGoA]
	);

	const managePreset = useCallback(
		(name: string, remove: boolean = false) => {
			const nextPresets = presets.filter(preset => preset.name !== name);

			if (!remove) {
				nextPresets.push({ name, settings: preset });
			}

			localStorage.setItem(presetLocalStorage, JSON.stringify(nextPresets));

			setPresets(nextPresets);
		},
		[presets, preset]
	);

	return (
		<>
			<Button style={{ marginLeft: 8 }} onClick={toggleShowModal}>
				Presets
			</Button>

			<Modal
				title="Presets"
				visible={showModal}
				onCancel={toggleShowModal}
				footer={[
					<Button onClick={toggleShowModal} key="presets-close">
						Close
					</Button>,
				]}
			>
				{presets.map(preset => (
					<div style={{ display: "flex", marginBottom: 8 }}>
						<Button
							style={{ width: "100%", marginRight: 8 / 2 }}
							onClick={() => {
								setPreset(preset.settings);

								toggleShowModal();
							}}
						>
							{preset.name}
						</Button>

						<Button
							type="primary"
							danger
							style={{ marginLeft: 8 / 2 }}
							icon={<DeleteOutlined />}
							onClick={() => {
								managePreset(preset.name, true);
							}}
						/>
					</div>
				))}

				{presets.length > 0 && <Divider />}

				<div style={{ display: "flex" }}>
					<Input
						placeholder="New preset name"
						value={presetName}
						style={{ width: "100%", marginRight: 8 / 2 }}
						onChange={e => {
							setPresetName(e.target.value);
						}}
					/>
					<Button
						type="primary"
						style={{ marginLeft: 8 / 2 }}
						onClick={() => {
							managePreset(presetName);

							setPresetName("");
						}}
					>
						Add
					</Button>
				</div>
			</Modal>
		</>
	);
};
