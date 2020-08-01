import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import {
	ColumnFilterItem,
	FilterDropdownProps,
} from "antd/lib/table/interface";
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { SeedContext } from "../../context/seed";
import { analytics } from "../../firebase";
import { LocationName } from "../../LocationName";
import { RewardLocationType } from "../../rewardLocations/RewardLocation";

interface Props {
	active: boolean;
}

type T = {
	key: string;
	name: string;
	description: string;
	type: string;
	became: string;
	original: string;
};

export const TabPaneSpoilerLogs: React.FC<Props> = ({ active }) => {
	const { seed, loading, configuration } = useContext(SeedContext);

	useEffect(() => {
		if (configuration.name) {
			analytics.logEvent("logs_viewed", {
				seed: configuration.name,
			});
		}
	}, [configuration]);

	const [visible, setVisible] = useState<boolean>(false);

	const inputRef = useRef<Input | null>();

	const handleVisible = useCallback((state: boolean) => {
		if (state) setTimeout(() => inputRef.current?.select());

		setVisible(state);
	}, []);

	useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (active && (event.metaKey || event.ctrlKey) && event.key === "f") {
				event.preventDefault();

				handleVisible(!visible);
			}
		};

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, [active, visible, handleVisible]);

	const dataSource = useMemo<T[] | undefined>(() => {
		return seed
			?.filter(value => value.reward.value !== "00000000")
			.map<T>(value => ({
				key: `${value.location.description}: ${value.location.reward.name} -> ${value.reward.name}`,
				name:
					value.location.type === RewardLocationType.KEYBLADE
						? RewardLocationType.KEYBLADE
						: value.location.location,
				description: value.location.description,
				type: value.location.type,
				became: value.reward.name,
				original: value.location.reward.name,
			}))
			.sort((a, b) => {
				if (a.name !== b.name) {
					return a.name.localeCompare(b.name);
				} else if (a.name === LocationName.LEVEL_UP) {
					return 0;
				}

				if (a.description !== b.description) {
					return a.description.localeCompare(b.description);
				}

				if (a.type !== b.type) {
					return a.type.localeCompare(b.type);
				}

				return 0;
			});
	}, [seed]);

	const locations = useMemo<ColumnFilterItem[] | undefined>(() => {
		const locations = new Set<string>();

		seed?.forEach(value => {
			locations.add(value.location.location);
		});

		const result: ColumnFilterItem[] = [];

		for (const location of locations) {
			result.push({ text: location, value: location });
		}

		return result;
	}, [seed]);

	return (
		<Table<T> dataSource={dataSource} loading={loading}>
			<Table.Column<T>
				title="Location"
				dataIndex="name"
				key="key"
				filterIcon={<SearchOutlined />}
				filters={locations}
				onFilter={(value, record) => record.name === value}
			/>

			<Table.Column<T> title="Description" dataIndex="description" key="key" />

			<Table.Column<T> title="Type" dataIndex="type" key="key" />

			<Table.Column<T>
				title="Became"
				dataIndex="became"
				key="key"
				filterIcon={<SearchOutlined />}
				filterDropdown={({
					setSelectedKeys,
					selectedKeys,
					confirm,
					clearFilters,
				}: FilterDropdownProps) => (
					<div style={{ padding: 8 }}>
						<Input
							placeholder="Search Reward"
							value={selectedKeys[0]}
							onChange={e =>
								setSelectedKeys(e.target.value ? [e.target.value] : [])
							}
							onPressEnter={confirm}
							style={{ width: 188, marginBottom: 8, display: "block" }}
							ref={node => {
								inputRef.current = node;
							}}
						/>
						<Space>
							<Button
								type="primary"
								onClick={confirm}
								size="small"
								style={{ width: 90 }}
							>
								Search
							</Button>
							<Button onClick={clearFilters} size="small" style={{ width: 90 }}>
								Reset
							</Button>
						</Space>
					</div>
				)}
				onFilter={(value, record) =>
					record.became.toLowerCase().includes((value as string).toLowerCase())
				}
				filterDropdownVisible={visible}
				onFilterDropdownVisibleChange={handleVisible}
			/>

			<Table.Column<T> title="Original" dataIndex="original" key="key" />
		</Table>
	);
};
