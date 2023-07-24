import React from "react"
import { Button, FormControl, FormHelperText, FormLabel, Input, VStack } from "@chakra-ui/react"
import loanApplicationService from "../services/loanApplicationService"

const InitiateComponent = () => {
    
    return <VStack h = "max-content" w = "max-content" spacing={10}>
        <FormControl>
            <FormLabel>Name of the company</FormLabel>
            <Input type='text' />
        </FormControl>
        <FormControl>
            <FormLabel>Year Established</FormLabel>
            <Input type='text' />
        </FormControl>
        <FormControl>
            <FormLabel>Loan Amount</FormLabel>
            <Input type='text' />
        </FormControl>
        <FormControl>
            <FormLabel>Provider</FormLabel>
            <Input type='text' />
        </FormControl>
        <Button onClick = {async () => {
            await loanApplicationService().initiateApplication("name", "year", "provider")
        }}>Initiate</Button>
    </VStack>
}

export default InitiateComponent