function Account (agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdraw = function (value) {
    if (this.balance > value) {
        console.log(`Saldo insuficiente: ${this.balance}`)
        return
    }

    this.balance -= value
}

Account.prototype.deposit = function (value) {
    this.balance += value
    this.showBalance()
}

Account.prototype.showBalance = function () {
    console.log(`Agência/Conta: ${this.agency}/${this.account} | Saldo: R$ ${this.balance}`)
}

function CurrentAccount (agency, account, balance, limit) {
    Account.call(this, agency, account, balance)
    this.limit = limit
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount

CurrentAccount.prototype.withdraw = function (value) {
    if (this.balance > (this.balance + this.limit)) {
        console.log(`Saldo insuficiente: ${this.balance}`)
        return
    }

    this.balance -= value
    this.showBalance()
}

const nubank = new Account(1234, '20287747-5', 0)

nubank.deposit(100)
nubank.deposit(10)
nubank.withdraw(50)
nubank.withdraw(200)

const inter = new CurrentAccount(4321, '57477870-2', 0, 300)
inter.deposit(100)
inter.deposit(10)
inter.withdraw(300)