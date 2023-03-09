


export const getToken = () => {
    const token = localstorage.getItem('token');
    return token
}