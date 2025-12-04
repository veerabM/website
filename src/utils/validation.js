export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateContactForm = (formData) => {
    const errors = {};

    if (!formData.name?.trim()) {
        errors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters long.';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
        errors.name = 'Name should only contain letters and spaces.';
    }

    if (!formData.email?.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject?.trim()) {
        errors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 10) {
        errors.subject = 'Subject must be at least 10 characters long.';
    } else if (!/^[a-zA-Z0-9\s.,!?'"()#\-\/]*$/.test(formData.subject)) {
        errors.subject = 'Subject contains invalid characters.';
    }

    if (!formData.message?.trim()) {
        errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 20) {
        errors.message = 'Message must be at least 20 characters long.';
    } else if (!/[a-zA-Z0-9]/.test(formData.message)) {
        errors.message = 'Message must contain text.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateServiceForm = (formData) => {
    const errors = {};

    if (!formData.title?.trim()) {
        errors.title = 'Title is required.';
    } else if (formData.title.trim().length < 3) {
        errors.title = 'Title must be at least 3 characters long.';
    }

    if (!formData.shortDescription?.trim()) {
        errors.shortDescription = 'Short description is required.';
    } else if (formData.shortDescription.trim().length < 10) {
        errors.shortDescription = 'Short description must be at least 10 characters long.';
    }

    if (!formData.description?.trim()) {
        errors.description = 'Full description is required.';
    } else if (formData.description.trim().length < 20) {
        errors.description = 'Full description must be at least 20 characters long.';
    }

    if (formData.displayOrder === undefined || formData.displayOrder === null || formData.displayOrder < 0) {
        errors.displayOrder = 'Display order must be a non-negative number.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
