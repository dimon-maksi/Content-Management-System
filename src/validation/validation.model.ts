type Validator<T> = {
    validate: (data: T) => ValidationResult;
};

type ValidationResult = {
    isValid: boolean;
    errors?: string[];
};
