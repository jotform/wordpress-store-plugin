import { useBlockProps } from '@wordpress/block-editor';
import { Button, Modal } from '@wordpress/components';
import { useCallback, useEffect, useState } from '@wordpress/element';
import './EditMode.scss';
import { generateEmbedCode } from './utils';

const STORE_PICKER_URL = 'https://www.jotform.com/resource-picker/store-picker.php';
const JOTFORM_ORIGIN = 'jotform.com';

const EditMode = () => {
	const [appCode, setAppCode] = useState(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const handleJFMessage = useCallback((event) => {
		if (!event || !event.data || !event.origin.includes(JOTFORM_ORIGIN)) return;
		const { type, data } = event.data;
		switch (type) {
			case 'resourcePickerClosed':
				closeModal();
				break;
			case 'resourcePicked':
				setAppCode(generateEmbedCode(data.id));
				closeModal();
				break;
			default:
				break;
		}
	}, []);

	useEffect(() => {
		window.addEventListener('message', handleJFMessage);
		return () => {
			window.removeEventListener('message', handleJFMessage);
		}
	}, []);

	const modalProps = {};
	return (
		<div {...useBlockProps()}>
			<div className='components-placeholder'>
				<div className='components-placeholder__label'>
					Jotform Store Embed
				</div>
				<div className='components-placeholder__instructions'>
					Select a store to embed to your site
				</div>
				<Button variant='primary' onClick={openModal}>Select Store</Button>
				{isModalOpen && (
					<Modal {...modalProps}>
						<iframe className='store-picker-frame' src={STORE_PICKER_URL} />
					</Modal>
				)}
				{appCode && (
					<div>
						{appCode}
					</div>
				)}
			</div>
		</div>
	);
};

export default EditMode;
