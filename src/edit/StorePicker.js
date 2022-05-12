import { Button, Modal } from '@wordpress/components';
import { useCallback, useEffect, useState } from '@wordpress/element';

const STORE_PICKER_URL =
	'https://www.jotform.com/resource-picker/wrapper.php?picker=store';
const JOTFORM_ORIGIN = 'jotform.com';

const StorePicker = ({ onStoreSelect }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	useEffect(() => {
		window.addEventListener('message', handleJFMessage);
		return () => {
			window.removeEventListener('message', handleJFMessage);
		};
	}, []);

	const handleJFMessage = useCallback((event) => {
		if (!event || !event.data || !event.origin.includes(JOTFORM_ORIGIN))
			return;
		const { type, data: storeData } = event.data;
		switch (type) {
			case 'resourcePickerClosed':
				closeModal();
				break;
			case 'resourcePicked':
				onStoreSelect(storeData);
				closeModal();
				break;
			default:
				break;
		}
	}, []);

	const modalProps = {
		className: 'jf-store-picker-modal',
	};

	return (
		<>
			<Button variant="primary" onClick={openModal}>
				Select Store
			</Button>
			{isModalOpen && (
				<Modal {...modalProps}>
					<iframe
						src={STORE_PICKER_URL}
						title="Jotform Store Picker"
						className="jf-store-picker-frame"
					/>
				</Modal>
			)}
		</>
	);
};

export default StorePicker;
