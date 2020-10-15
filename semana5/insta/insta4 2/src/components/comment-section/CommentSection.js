import React from 'react'
import { useForm } from '../../custom-hooks/CustomHooks';
import './SecaoComentario.css'

export default function CommentSection (props) {
	const { form, handleInputChange, resetState } = useForm({comment:""})
	
	return(
		<div>
			<form onSubmit={props.functionSend}>
				<input
					value={form.comment}
					name="comment"
					type="text"
					onChange={handleInputChange}
					required
					placeholder="comentario"
				/>
				<button>Enviar</button>
			</form>
		</div>
	);
}

// export class SecaoComentario extends React.Component {
// 	state = {
// 		coment: ""
// 	};

// 	onChangeComentario = (event) => {
// 		this.setState({coment: event.target.value});
// 		console.log(this.state.coment)
// 	}

// 	render() {
// 		return <div className={'comment-container'}>
// 			<input
// 				className={'input-comentario'}
// 				placeholder={'Comentário'}
// 				value={this.state.coment}
// 				onChange={this.onChangeComentario}
// 			/>
// 			<button onClick={this.props.aoEnviar}>Enviar</button>
// 		</div>
// 	}
// }
