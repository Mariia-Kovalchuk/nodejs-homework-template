const contactsHendlers = require('../../model')
const Joi = require("joi");
const { NotFound, BadRequest } = require("http-errors");


const joiSchema = Joi.object({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email({ minDomainSegments: 2 }),
    phone: Joi.string().max(14).min(6)
});

const updateItem = async (req, res) => {
    const { contactId } = req.params;
    const { body } = req;
    if (Object.keys(body).length === 0) {
        throw new BadRequest(`missing fields`);
    }
    const { error } = joiSchema.validate(body);
    if (error) {
        throw new BadRequest(`${error.message}`);
    }

    const contactWithSamePhone = await contactsHendlers.checkPhoneUniqueness(body.phone)
    if (contactWithSamePhone) {
        throw new BadRequest(`You already have contact ${contactWithSamePhone.name} with phone number ${body.phone}.`);

    };
    const updatedContact = await contactsHendlers.updateContact(contactId, body)
    if (updatedContact) {
        res.json(updatedContact)
    } else {
        throw new NotFound(`Contact with id ${contactId} not found`);
    }
    
};

module.exports = updateItem;