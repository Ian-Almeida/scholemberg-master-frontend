import {useHistory} from "react-router-dom";
import classes from './SignUp.module.css';
import { PlusCircleIcon, RewindIcon } from "@heroicons/react/solid";
import {useState} from "react";
import api from "../../requests/api";
import {getToken, saveToken} from "../../requests/utils";

const SignUp = (props) => {

    let history = useHistory();

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeNomeHandler = (ev) => {
        setNomeCompleto(prevState => {
            return ev.target.value
        })
    }

    const onChangeEmailHandler = (ev) => {
        setEmail(prevState => {
            return ev.target.value
        })
    }

    const onChangePasswordHandler = (ev) => {
        setPassword(prevState => {
            return ev.target.value
        })
    }

    const doSubmitHandler = async(ev) => {
        ev.preventDefault()

        try {
            const response = await api.getAccessToken(email, password)
            if(response) {
                const { access_token } = response.data;
                saveToken(access_token)
            }
        } catch (e) {
            console.log(e)
        }

        try{
            const response = await api.getAllUsers(getToken());
            if(response) {
                console.log(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes['content-wrapper']}>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-16 w-auto"
                         src="https://www.scholembergdistribuidora.com.br/media/img/logo.png"
                         alt="Scholemberg"
                    />
                    <h2 className="text-center mt-4 text-3xl font-extrabold">Crie sua conta</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={doSubmitHandler}>
                    <div>
                        <label htmlFor="nome-completo" className="sr-only">Nome Completo</label>
                        <input
                            id="nome-completo"
                            name="nome-completo"
                            type="text"
                            value={nomeCompleto}
                            placeholder="Nome Completo"
                            required
                            onChange={onChangeNomeHandler}
                            className={classes['form-input']}
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Email"
                            required
                            onChange={onChangeEmailHandler}
                            className={classes['form-input']}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Email</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Senha"
                            required
                            onChange={onChangePasswordHandler}
                            className={classes['form-input']}
                        />
                    </div>

                    <div className="flex px-4 space-x-6">

                        <button className={classes['form-button']} onClick={() => {history.goBack()}}>
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <RewindIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            Voltar
                        </button>

                        <button className={classes['form-button']} type="submit">
                            <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                                <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;