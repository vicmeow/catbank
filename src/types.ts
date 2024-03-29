
export type DetailType = 'markedsområde' | 'produktkrav' | 'medlemskapskrav'

export interface Bank {
    name: string
    product: string
    url: string
    id: string
    maxAge: number
    minAge: number
    interestRate: number
    markedsomraade: string
    markedsomraade_tekst: string,
    produktkrav: boolean
    produktkrav_tekst?: string
    medlemskapskrav: boolean
    medlemskapskrav_tekst?: string
}

