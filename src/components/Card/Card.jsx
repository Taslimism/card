/* eslint-disable react/prop-types */

const shortForm = {
	overall: "OVR",
	pace: "PAC",
	shooting: "SHO",
	passing: "PAS",
	dribbling: "DRI",
	defending: "DEF",
	physical: "PHY",
};

const Card = ({ image, formData }) => {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='group relative w-[380px] h-[500px] cursor-pointer'>
				<div className='absolute inset-0 bg-gradient-to-r from-[#2196f3] to-[#e91e63] rounded-lg shadow-lg transition-all duration-500 group-hover:rotate-[10deg]'></div>
				<div className='relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 group-hover:rotate-[10deg]'>
					<img
						src={image}
						alt='Card'
						className='w-full h-[65%] object-fit transition-all duration-500 group-hover:scale-110'
					/>
					<div className='absolute ml-10 mt-20 top-0 text-2xl font-mono text-center'>
						<p>93</p>
						<p>RW</p>
						<div className='w-10 h-8'>
							<img src='src/assets/argentina.png'></img>
						</div>
					</div>
					<div className='absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-80'></div>
					<div className=' inset-0 grid grid-cols-2 items-center justify-center text-black text-center p-6 transition-all duration-500 group-hover:opacity-100'>
						{Object.keys(formData).map((key) => {
							return (
								<div key={key} className='grid grid-cols-2'>
									<p className='text-2xl font-mono'>{formData[key]}</p>
									<p className='justify-self-start text-2xl font-mono'>
										{shortForm[key]}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
