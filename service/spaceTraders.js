import * as credentials from '../credentials.json'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
    getAvailableLoans: `https://api.spacetraders.io/types/loans?token=${credentials.token}`,
}

export const getUserProfile = async () => {

    try {
        console.log('Estoy pidiendo datos')

        const response = await fetch(endpoints.userProfile)
        const data = await response.json()

        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const getAvailableLoans = async () => {
    try {
        const response = await fetch(endpoints.getAvailableLoans)
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}

export const takeOutLoan = async (type) => {
    try {
        const response = await fetch(`https://api.spacetraders.io/my/loans=${credentials.token}&type=${type}`, 
        {method: 'POST'})
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}