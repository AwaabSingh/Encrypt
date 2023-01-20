import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CgCopy } from 'react-icons/cg';
import { toast } from 'react-toastify';

const GenPasswordModal = ({ setShowModal }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
			<div className='bg-white p-2 rounded  py-4  '>
				<AiFillCloseCircle
					onClick={() => setShowModal(false)}
					className='text-red-500 text-xl font-bold'
				/>

				<div className='text-center font-semibold text-xl text-secondaryBlue flex flex-col space-y-5'>
					<h5> Generate Password </h5>
				</div>

				{/* {copied && <p>Copied to Clipboard</p>} */}
			</div>
		</div>
	);
};

export default GenPasswordModal;
