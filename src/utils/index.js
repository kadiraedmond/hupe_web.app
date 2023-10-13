import { ref } from 'vue'

const confirmationResult = ref()

export const getConfirmation = async (auth, phone) => {
    const verifier = new RecaptchaVerifier(auth, 'recaptcha-container')
  
    confirmationResult.value = await signInWithPhoneNumber(auth, phone, verifier)
}

export const useConfirmation = () => {
    return confirmationResult.value
}
