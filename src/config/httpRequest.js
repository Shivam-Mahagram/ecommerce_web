
import axios from "axios";

export const postRequest = async (url, data) => {

    try {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const res = await axios(config)

        return ({
            statuscode: 200,
            message: res.data
        })

    }

    catch (err) {

        if (axios.isAxiosError(err)) {

            return ({
                statuscode: 500,
                message: err.response.data.message,
            });
        } else {

            console.error('Error:', err);
        }

    }

}

export const getRequest = async (url) => {
    try {
        let config = {
            url: url,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
         

        };

        console.log(config)

        const res = await axios(config)

        return res.data
    } catch (err) {
        console.log(err)
    }
}


