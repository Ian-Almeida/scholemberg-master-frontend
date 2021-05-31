
export const saveToken = (token) => {
    if(localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.setItem('token', token);
    }

    localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = localStorage.getItem('token');

    if(!token) return ''

    return token
}

export const logout = () => {
    if(localStorage.getItem('token')) localStorage.removeItem('token');

}