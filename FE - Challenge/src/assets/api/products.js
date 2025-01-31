import axios from 'axios'
const apiURL = 'https://magicloops.dev/api/loop/211a3fd6-7e03-4aa1-94d5-03346edafa86/run?input=I+love+Magic+Loops%21' 

export const getProducts = async() => {
    try {
        let response = await axios.get(apiURL)
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
    }
}