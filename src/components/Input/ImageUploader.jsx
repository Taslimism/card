/* eslint-disable react/prop-types */

function ImageUploader({ id, type, setImage }) {
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setImage(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='flex flex-col roundex-md justify-center '>
			<label htmlFor={id} className='ml-1 mb-1'>
				Profile Photo
			</label>
			<input
				className='border border-black py-2 px-2  rounded-lg'
				type={type}
				accept='image/*'
				onChange={handleImageChange}
			/>
		</div>
	);
}

export default ImageUploader;
