import data from './data/banksparing.json'
import { Bank } from './types'

export function getAllBanks(): Bank[] {
    // Get all the data from the json document and make it easier to consume
    // To reduce the amount of data, let's filter out all products with less than 5% interest
    // because we want just want more money by the end of the year
    return data.feed.entry?.map(bank => ({
        name: bank.leverandor_tekst,
        product: bank.title,
        url: bank.link,
        id: bank.id,
        maxAge: bank.maks_alder,
        minAge: bank.min_alder,
        markedsomraade: bank.markedsomraade.toLowerCase(),
        produktkrav: !!bank.trenger_ikke_pakke,
        medlemskapskrav: bank.medlemskap === "",
        interestRate: bank.rentesats1
    })).filter(b => b.interestRate > 5)
}

export function getFilteredBanks(banks: Bank[], filters: { userAge: number, marketArea: string, userBank: string | null }): Bank[] {
    console.log(filters)
    // Filter the banks based on the current criterias
    const filteredBanks = banks.filter(bank => {
        console.log(filters)
        // Check if the user's age is within the bank's defined min and max age
        const isWithinAgeRange = bank.minAge <= filters.userAge && filters.userAge <= bank.maxAge
        // Check if the bank is only local or not
        const isChosenMarketArea = filters.marketArea === 'alle' ? true : filters.marketArea === bank.markedsomraade
        // Check if the bank matches the bank the user specified
        const isUserBank = !filters.userBank || bank.name === filters.userBank
        return isWithinAgeRange && isChosenMarketArea && isUserBank
    })
    // We sort the banks with the best interest rates
    const sortedBanks = filteredBanks.sort((a, b) => b.interestRate - a.interestRate)
    return sortedBanks
}

export function calculateEarnings(amount: number, interest: number): number {
    return amount && (interest && Math.round(amount * (interest / 100)))
}
