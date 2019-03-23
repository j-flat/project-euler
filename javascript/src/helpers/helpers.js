const isRequired = (param = undefined) => { 
  throw new Error(`param ${(param ? ": " + param : "")} is required!`)
}

const validate = (type = isRequired(), isTypeOf = isRequired()) => {
  return 0;
}

module.exports.isRequired = isRequired;
module.exports.validate = validate;