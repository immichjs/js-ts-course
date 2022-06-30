class ValidateForm {
  constructor() {
    this.form = document.querySelector('form')
    this.events()
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const fieldsIsValid = this.checkFields()
    const passwordIsValid = this.validatePassword()

    if (fieldsIsValid && passwordIsValid) {
      alert('Formulário enviado com sucesso')
      this.form.submit()
    }
  }

  checkFields() {
    let valid = true

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for (let field of this.form.querySelectorAll('.validate')) {
      if (!field.value) {
        const label = field.previousElementSibling.innerHTML
        this.createError(field, `Campo ${label.slice(0, -1)} não pode estar em branco`)
        valid = false
      }

      if (field.classList.contains('cpf')) {
        if(!this.validateCPF(field)) valid = false 
      }
      if (field.classList.contains('user')) {
        if(!this.validateUser(field)) valid = false
      }
    }
    
    return valid
  }

  validatePassword (field) {
    let valid = true
    const password = this.form.querySelector('.password')
    const confirmPassword = this.form.querySelector('.repeat-password')

    if (password.value !== confirmPassword.value) {
      this.createError(password, 'As senhas não conferem')
      valid = false
    }

    if (password.length < 6 || password.length > 12) {
      this.createError(password, 'Senha deve ter entre 6 e 12 caracteres')
      valid = false
    }

    return valid
  }

  validateUser (field) {
    const user = field.value
    let valid = true
    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário deve ter entre 3 e 12 caracteres')
      valid = false
    }

    if (!user.match(/[a-zA-Z0-0]/)) {
      this.createError(field, 'Usuário precisa conter apenas letras e/ou números')
      valid = false
    }

    return valid
  }

  validateCPF(field) {
    const cpf = new CPF(field.value)

    if (!cpf.validate()) {
      this.createError(field, 'CPF inválido')
      return false
    }

    return true
  }

  createError(field, message) {
    const div = document.createElement('div')
    div.innerHTML = message
    div.classList.add('error-text')
    field.insertAdjacentElement('afterend', div)
  }
}

const validateForm = new ValidateForm()