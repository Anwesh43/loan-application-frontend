import React, { useEffect, useState } from "react";
import { BalanceSheet } from "../typings";
import loanApplicationService from "../services/loanApplicationService";
import { Card, CardBody, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
const FetchBalanceSheet = () => {
    const [balanceSheets, setBalanceSheets] = useState<Array<BalanceSheet>>([])
    useEffect(() => {
        async function fetchBalanceSheet() {
            const balanceSheets = await loanApplicationService().getBalanceSheet("dummy", "2020")
            setBalanceSheets(balanceSheets)
        }
        fetchBalanceSheet()
    }, [])
    return <List>
        {balanceSheets.map((balanceSheet, i) => (
            <ListItem key = {`balance_sheet_${i}`}>
                <Card>
                    <CardBody>
                        <VStack>
                            {Object.values(balanceSheet).map(val => (
                                <Text  key = {val}>{val}</Text>
                            ))}
                        </VStack>
                    </CardBody>
                </Card>
            </ListItem>
        ))}
    </List> 
}

export default 