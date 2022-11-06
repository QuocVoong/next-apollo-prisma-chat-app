import {
  AlertDialog, AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay, Button, Flex
} from "@chakra-ui/react";
import React from "react";

const Alert = (props) => {
  const { isOpen, onClose, onOk, title, message, okText, cancelText, moreBtn } = props;
  const cancelRef = React.useRef()
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          {message}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} colorScheme='red' onClick={onClose}>{cancelText || 'Cancel'}</Button>
          <Button ml={3} colorScheme="blue" onClick={onOk}>{okText || 'Yes'}</Button>
          { moreBtn && <Button ml={3} colorScheme={moreBtn.colorScheme} onClick={moreBtn.onClick}>{moreBtn.text}</Button> }
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert;
