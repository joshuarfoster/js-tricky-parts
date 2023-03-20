

function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += newAmount;
            return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`
        },
        withdraw(inputPin, newAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (newAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= newAmount;
            return `Succesfully withdrew $${newAmount}. Current balance: $${amount}.`
        },
        changePin(inputPin, newPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
