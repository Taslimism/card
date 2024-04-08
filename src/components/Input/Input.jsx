/* eslint-disable react/prop-types */
const Input = ({ type, id, onChange }) => {
	return (
		<div className='flex flex-col w-full'>
			<label
				htmlFor={id}
				className='text-slate-700 text-sm ml-1 mb-1'>{`${id[0].toUpperCase()}${id.slice(
				1
			)}`}</label>
			<input
				onChange={(e) => onChange(e.target.value, id)}
				id={id}
				type={type}
				className='h-[50px] rounded-lg px-3 border border-black'
			/>
		</div>
	);
};

export default Input;
