import React, {useState} from 'react';
import { LockOpenIcon } from '@heroicons/react/solid';
import classes from './SignIn.module.css';
import {Link} from "react-router-dom";

// https://i.ibb.co/pd483Yv/logo.png  // HEADER LOGO

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

    const doSubmitHandler = (ev) => {
        ev.preventDefault()

        localStorage.setItem('token', email)
        console.log(email, password)
    }

    return (
        <div className={classes['content-wrapper']}>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-16 w-auto"
                         src="https://www.scholembergdistribuidora.com.br/media/img/logo.png"
                         alt="Scholemberg"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre com a sua conta</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/login/signup">
                            registre-se agora
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={doSubmitHandler}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email"
                                className={classes['form-input-email']}
                                onChange={onChangeEmailHandler}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={classes['form-input-password']}
                                placeholder="Senha"
                                onChange={onChangePasswordHandler}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        {/*<div className="flex items-center">*/}
                        {/*    <input*/}
                        {/*        id="remember_me"*/}
                        {/*        name="remember_me"*/}
                        {/*        type="checkbox"*/}
                        {/*        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"*/}
                        {/*    />*/}
                        {/*    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">*/}
                        {/*        Lembrar*/}
                        {/*    </label>*/}
                        {/*</div>*/}

                        <div className="text-sm">
                            <Link to="/login/recover" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Esqueceu sua senha?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={classes['submit-button']}
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <LockOpenIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            Entrar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default SignIn;