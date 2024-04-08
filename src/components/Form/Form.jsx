import { useState } from "react";
import ImageUploader from "../Input/ImageUploader";
import Input from "../Input/Input";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const intitialFormState = {
	overall: "",
	pace: "",
	shooting: "",
	passing: "",
	dribbling: "",
	defending: "",
	physical: "",

	image: "",
};

const intitialFormErrorState = {
	overall: "",
	pace: "",
	shooting: "",
	passing: "",
	dribbling: "",
	defending: "",
	physical: "",

	image: "",
};

const Form = () => {
	const [formData, setFormData] = useState(intitialFormState);
	const [image, setImage] = useState(null);
	const [startGeneratingCard, setStartGeneratingCard] = useState(false);
	const [formErrors, setFormErrors] = useState(intitialFormErrorState);

	const handleCardGenerate = (e) => {
		e.preventDefault();
		if (validateInput()) {
			setStartGeneratingCard(true);
		} else {
			setFormErrors();
		}
	};

	const validateInput = () => {
		return true;
	};

	const handleChange = (data, id) => {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[id]: data,
			};
		});
	};

	return (
		<div>
			{!startGeneratingCard ? (
				<div className={`flex ${styles.form} h-[650px]`}>
					<div className='h-[650px] w-[400px]'>
						<img
							className='h-full'
							src='https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						/>
					</div>
					<form className='flex flex-col gap-3 px-16 py-16'>
						<div className='flex gap-8 w-[700px]'>
							<Input
								onChange={handleChange}
								type='number'
								id='overall'
								formErrors={formErrors}
								formData={formData}
							/>
							<Input
								onChange={handleChange}
								type='number'
								id='pace'
								formErrors={formErrors}
								formData={formData}
							/>
						</div>
						<div className='flex gap-8'>
							<Input
								onChange={handleChange}
								type='number'
								id='shooting'
								formErrors={formErrors}
								formData={formData}
							/>
							<Input
								onChange={handleChange}
								type='number'
								id='passing'
								formErrors={formErrors}
								formData={formData}
							/>
						</div>
						<div className='flex gap-8'>
							<Input
								onChange={handleChange}
								type='number'
								id='dribbling'
								formErrors={formErrors}
								formData={formData}
							/>
							<Input
								onChange={handleChange}
								type='number'
								id='defending'
								formErrors={formErrors}
								formData={formData}
							/>
						</div>
						<div className='flex gap-8'>
							<Input
								onChange={handleChange}
								type='number'
								id='physical'
								formErrors={formErrors}
								formData={formData}
							/>
						</div>
						<ImageUploader type='file' id='photo' setImage={setImage} />
						<button
							className='bg-black mt-5 text-white py-4 text-lg rounded-md'
							onClick={handleCardGenerate}>
							Generate Card
						</button>
					</form>
				</div>
			) : (
				<Card formData={formData} image={image} />
			)}
		</div>
	);
};

export default Form;
