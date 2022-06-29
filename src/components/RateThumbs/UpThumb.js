import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";

export const UpThumb = ( {likes} ) => {

    // const {Interactions, click, Vote} = useThumbRate({likes})


    const [Interactions, setInteractions] = useState(likes)

    const [click, setClick] = useState(false)

    const Vote = () => {
        if (click === false) {
            setClick(true)
            setInteractions(likes => likes + 1)
        } else {
            setInteractions(likes => likes - 1)
            setClick(false)
        }
    }

    return (
        <Flex alignItems='center' mr='1em'>
            <Button px='0' onClick={Vote} border='none' bg='transparent' cursor='pointer' w='15px' _hover={{bg: 'none'}}>
                {
                    click ? 
                    <svg style={{ flexShrink: '0', marginTop: '3px'}} aria-hidden="true" data-testid="like-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path fill="#333" fillRule="evenodd" d="M4.949 4.4v10.198L2 14.6V4.4h2.949zM9.825 0a2.882 2.882 0 0 1 1.978 3.71L11.16 5.6h3.359a2.285 2.285 0 0 1 2.134 3.1l-1.036 2.715a4.2 4.2 0 0 1-4.682 2.635L7.39 13.4H6.15V5.453L7.39 5l2.436-5z">
                        </path>
                    </svg>
                    :
                    <svg style={{ flexShrink: '0', marginTop: '1px',  marginLeft: '2.5px'}} xlink="http://www.w3.org/1999/xlink" aria-hidden="true" data-testid="like-svg" className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.95722 6.4592L5.81838 6.12478L8.38319 0.994873L9.4001 1.50361C10.7665 2.18721 11.4009 3.78855 10.8734 5.22246L10.5872 6.00025H13.387C13.6792 6.00025 13.969 6.05364 14.2421 6.15778C15.4806 6.63008 16.1017 8.01694 15.6294 9.25542L14.4246 12.4149C13.7031 14.3068 11.7345 15.4146 9.74294 15.0495L6.19693 14.3994H4.95722V15.5993H0.807861V5.39933H4.95722V6.4592ZM6.68456 7.07572L8.91926 2.60607C9.70026 3.03125 10.0564 3.96762 9.74716 4.80811L8.86705 7.20025H13.387C13.5331 7.20025 13.678 7.22694 13.8145 7.27902C14.4338 7.51516 14.7443 8.2086 14.5082 8.82784L13.3033 11.9873C12.788 13.3386 11.3819 14.1299 9.95931 13.8692L6.35966 13.2093L6.25147 13.1994H4.95722V7.74651L6.68456 7.07572ZM3.75706 14.3993H2.00786V6.59933H3.75722L3.75706 14.3993Z" fill="#000000" fillOpacity="0.25" strokeOpacity="0" stroke="#000000"></path>
                    </svg>  
                }

            </Button>
            <Text>{Interactions}</Text>
        </Flex>
    )
}