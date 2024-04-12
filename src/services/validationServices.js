const validatePhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    
    if (cleanedPhoneNumber.length === 11 && !isNaN(cleanedPhoneNumber)) {
        return false;
    } else {
        return true;
    }
}

export {
    validatePhoneNumber
}