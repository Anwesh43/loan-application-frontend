import React, { useState } from "react"
import { Button, FormControl, FormHelperText, FormLabel, Input, Select, VStack } from "@chakra-ui/react"
import loanApplicationService from "../services/loanApplicationService"
import { useNavigate, useNavigation } from "react-router-dom"

const InitiateComponent = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [provider, setProvider] = useState('')
    return <VStack h = "max-content" w = "max-content" spacing={10} p = "30">
        <FormControl>
            <FormLabel>Name of the company</FormLabel>
            <Input type='text' onChange={(e) => {
                setName(e.target.value)
            }} />
        </FormControl>
        <FormControl>
            <FormLabel>Year Established</FormLabel>
            <Input type='text' onChange={(e) => {
                setYear(e.target.value)
            }}/>
        </FormControl>
        <FormControl>
            <FormLabel>Loan Amount</FormLabel>
            <Input type='text' onChange={(e) => {
                setLoanAmount(e.target.value)
            }}/>
        </FormControl>
        <FormControl>
            <FormLabel>Provider</FormLabel>
            <Input  onChange={(e) => {
                setProvider(e.target.value)
            }}/>
        </FormControl>
        <Button onClick = {async () => {
            
            await loanApplicationService().initiateApplication("name", "year", "provider")
            navigate('/list-balance-sheet')
        }}>Initiate</Button>
    </VStack>
}

export default InitiateComponent