import React from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
	state = {
		coment: ""
	};

	onChangeComentario = (event) => {
		this.setState({coment: event.target.value});
		console.log(this.state.coment)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.coment}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
