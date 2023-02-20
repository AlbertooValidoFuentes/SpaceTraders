import * as credentials from '../credentials.json'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`
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