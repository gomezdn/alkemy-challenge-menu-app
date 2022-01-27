import React from "react"
import {Modal, ModalContent, ModalBody, ModalOverlay, Heading, ModalCloseButton, Text, VStack} from "@chakra-ui/react"

export default function DetailModal(props) {
    
    return (
        <Modal colorScheme="orange"isOpen={props.isOpen} onClose={props.onClose} isCentered="true">
            <ModalOverlay/>
            <ModalContent bg="#E5E7F1">
                <ModalCloseButton />
                <ModalBody padding={["3em", "5em"]} >
                    <VStack fontSize="1.5em" spacing="1em" w="100%" h="100%">
                        <Heading fontSize="1.7em" textAlign="center">{props.title}</Heading>
                        <Text fontWeight="bold" color="#C6665B">$ {props.price} per serving</Text>
                        <Text fontWeight="bold" color="#C6665B">Ready in {props.prepTime} minutes</Text>
                        <Text fontWeight="bold" color="#C6665B">Health score: {props.healthScore}</Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}