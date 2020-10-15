import React from 'react'
import { useForm } from '../../custom-hooks/CustomHooks';
import { CommentContainer, InputComment } from './Styled'

export default function CommentSection (props) {
	const { form, handleInputChange, resetState } = useForm({comment:""})
	
	return(
		<CommentContainer>
			<form onSubmit={props.functionSend}>
				<InputComment
					value={form.comment}
					name="comment"
					type="text"
					onChange={handleInputChange}
					required
					placeholder="comentario"
				/>
				<button>Enviar</button>
			</form>
		</CommentContainer>
	);
}