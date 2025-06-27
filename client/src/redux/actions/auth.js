import axios from 'axios'


export const registerAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/register', authData)

        dispatch({type: 'REGISTER', payload:data} )

        window.location = '/'
    } catch (error) {
        
    }
}

export const loginAction = () => async(dispatch) => {
    try {
        
    } catch (error) {
        
    }
}