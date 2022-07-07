import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export const DownThumb = ({ dislikes }) => {

    
    const [Interactions, setInteractions] = useState(dislikes)

    const [click, setClick] = useState(false)

    const Vote = () => {
        if (click === false) {
            setClick(true)
            setInteractions(dislikes => dislikes + 1)
        } else {
            setInteractions(dislikes => dislikes - 1)
            setClick(false)
        }
    }

    return (
        <Flex alignItems='center' >
            <Button px='0' onClick={Vote} border='none' bg='transparent' cursor='pointer' w='15px' _hover={{ bg: 'none' }}>
                {
                    click ?
                        <svg style={{ flexShrink: '0'}} xlink="http://www.w3.org/1999/xlink" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#333" fillRule="evenodd" d="M5.949 14.2V4.001L3 4v10.2h2.949zm4.876 4.4a2.882 2.882 0 0 0 1.978-3.71L12.16 13h3.359a2.285 2.285 0 0 0 2.134-3.101l-1.036-2.715a4.2 4.2 0 0 0-4.682-2.634L8.39 5.2H7.15v7.945l1.24.454 2.436 5z">
                            </path>
                        </svg>
                        :
                        <svg style={{ flexShrink: '0', marginTop: '3px',  marginLeft: '2.5px' }} xlink="http://www.w3.org/1999/xlink" aria-hidden="true" data-testid="dislike-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.95722 10.5356L5.81838 10.87L8.38319 15.9999L9.4001 15.4912C10.7665 14.8076 11.4009 13.2063 10.8734 11.7724L10.5872 10.9946H13.387C13.6792 10.9946 13.969 10.9412 14.2421 10.837C15.4806 10.3647 16.1017 8.97788 15.6294 7.7394L14.4246 4.57995C13.7031 2.68807 11.7345 1.58025 9.74294 1.94534L6.19693 2.59537H4.95722V1.39551H0.807861V11.5955H4.95722V10.5356ZM6.68456 9.9191L8.91926 14.3887C9.70026 13.9636 10.0564 13.0272 9.74716 12.1867L8.86705 9.79457H13.387C13.5331 9.79457 13.678 9.76788 13.8145 9.71581C14.4338 9.47966 14.7443 8.78622 14.5082 8.16698L13.3033 5.00753C12.788 3.65619 11.3819 2.86489 9.95931 3.12567L6.35966 3.78554L6.25147 3.79537H4.95722V9.24831L6.68456 9.9191ZM3.75706 2.59551H2.00786V10.3955H3.75722L3.75706 2.59551Z" fill="#000000" fillOpacity="0.25" strokeOpacity="0" stroke="#000000">
                            </path>
                        </svg>
                }
            </Button>
            <Text>{Interactions}</Text>
        </Flex>
    )
}

