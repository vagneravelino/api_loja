import { uri, headerInit } from "@/config";

export default {
    data: () => ({
        returnApi: {

        }
    }),
    methods: {
        fetchApi(url, payload = null, method = "GET") {
            fetch(uri + url, {
                method: method,
                headers: headerInit,
                body: payload ? JSON.stringify(payload) : null,
            }).then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    this.returnApi = data.errors
                    // const error = data.errors;
                    // return error;
                }
                
                this.returnApi = data.data
            });
        },
    },
};
