import React from "react";

export const TabForm = ({ id }) => {
	return (
		<div id={id}>
			<label htmlFor={`name${id}`}>Titulo</label>
			<input 	type="text" 
					name={`name${id}`}
					required
					minLength={3}
					maxLength={10}/>
			<label htmlFor={`text${id}`}>Conteudo</label>
			<textarea 	type="text"
						name={`text${id}`}
						required
						minLength={5}
						maxLength={100}
						/>
		</div>
	);
};
