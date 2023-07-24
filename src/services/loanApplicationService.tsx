import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BalanceSheet } from "../typings";

export interface ILoanApplicationService {

    getBalanceSheet : (name : string, year : string) => Promise<Array<BalanceSheet>>
    initiateApplication(name : string, year_established : string, provider : string) : Promise<void>
    submit(
        name : string,
        applicationId : number,
        averageAssetValue : number,
        plInLastYear: number, 
        yearEstablished: string,
        loanAmount : string 
    ): Promise<void>
}
const loanApplicationService  = () : ILoanApplicationService => {
    const instance : AxiosInstance = axios.create({
        baseURL: process.env.REACT_BACKEND_APPLICATION || 'http://localhost:8080/'
    })
    return {
        async getBalanceSheet(name : string, year : string) : Promise<Array<BalanceSheet>> {
            const response : AxiosResponse<Array<BalanceSheet>> = await instance.get('/fetch-balance-sheet')
            return response.data 
        },

        async initiateApplication(name : string, year_established : string, provider : string) : Promise<void> {
            await instance.post('/initiate', {name,year_established, provider})
        },

        async submit(
            name : string,
            applicationId : number,
            averageAssetValue : number,
            plInLastYear: number, 
            yearEstablished: string,
            loanAmount : string 
        ): Promise<void> {
            await instance.post('/submit', {
                name, 
                applicationId, 
                averageAssetValue, 
                plInLastYear,
                yearEstablished, 
                loanAmount 
            })
        }

    }
}

export default loanApplicationService