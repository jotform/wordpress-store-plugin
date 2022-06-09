import { Modal } from '@wordpress/components';
import {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState,
} from '@wordpress/element';

const STORE_PICKER_URL =
	'https://www.jotform.com/resource-picker/wrapper.php?picker=store';
const JOTFORM_ORIGIN = 'jotform.com';

const StorePicker = ({ onStoreSelect }, ref) => {
	const [isModalOpen, setModalOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		openModal: () => {
			handleOpenModal();
		},
	}));

	const handleOpenModal = () => {
		window.addEventListener('message', handleJFMessage);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		window.removeEventListener('message', handleJFMessage);
		setModalOpen(false);
	};

	const handleJFMessage = useCallback((event) => {
		if (!event || !event.data || !event.origin.includes(JOTFORM_ORIGIN))
			return;
		const { type, data: storeData } = event.data;
		switch (type) {
			case 'resourcePickerClosed':
				handleCloseModal();
				break;
			case 'resourcePicked':
				onStoreSelect(storeData);
				handleCloseModal();
				break;
			default:
				break;
		}
	}, []);

	const modalProps = {
		className: 'jf-store-picker-modal',
	};

	if (!isModalOpen) return null;

	return (
		<Modal {...modalProps}>
			<iframe
				src={STORE_PICKER_URL}
				title="Jotform Store Picker"
				className="jf-store-picker-frame"
			/>
		</Modal>
	);
};

export default forwardRef(StorePicker);
