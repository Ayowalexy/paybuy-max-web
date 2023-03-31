import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
} from '@chakra-ui/react'
import CurrencyList from './currency-list';


const ModeBox = ({ open, setOpen }) => {
    return (

        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <ModalOverlay />
            <ModalContent style={{padding: "0 1rem"}}>
                <ModalHeader><Text fontSize={{ lg: "1rem" }} style={{ fontFamily: "Gotham" }}>Select a currency</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <CurrencyList setOpen={setOpen}/>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => setOpen(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default ModeBox;