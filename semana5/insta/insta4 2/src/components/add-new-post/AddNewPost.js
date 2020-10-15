import React from 'react';
import { useForm } from '../../custom-hooks/CustomHooks';
import { ContainerTitle, NewPostContainer, WriteSpace, ButtonAdd, BigContainer } from './Styled'


export default function AddNewPost (props) {
    const { form, handleInputChange, resetState } = useForm({ 
        userName:"",
        userPhoto:"", 
        postPhoto:"" 
    })
    
    return(
        <BigContainer>
            <ContainerTitle>
                <h2>Labegran</h2>
            </ContainerTitle>
            <>
                <NewPostContainer onSubmit={()=> props.functionAdd(form)}>
                    <WriteSpace
                        value={form.userName}
                        name="userName"
                        type="text"
                        onChange={handleInputChange}
                        required
                        placeholder="Digite seu nome de usuário"
                    />
                    <WriteSpace
                        value={form.userPhoto}
                        name="userPhoto"
                        type="text"
                        onChange={handleInputChange}
                        required
                        placeholder="URL da foto de usuário"
                    />
                    <WriteSpace
                        value={form.postPhoto}
                        name="postPhoto"
                        type="text"
                        onChange={handleInputChange}
                        required
                        placeholder="URL da foto do post"
                    />
                    <ButtonAdd>Adicionar</ButtonAdd>
                </NewPostContainer>
            </>
        </BigContainer>
    );
}