import isString from 'lodash/lang/isString';
import isPlainObject from 'lodash/lang/isPlainObject';
import isEmpty from 'lodash/lang/isEmpty';

export function getMessage(messages, pointer) {
  if (!isString(pointer)) { throw new TypeError(`Pointer must be a string`); }
  if (!isPlainObject(messages) || isEmpty(messages)) {
    throw new TypeError(`Messages must an object`);
  }

  let message;
  try {
    message = pointer.split('.').reduce(function(obj, pathPart) {
      return obj[pathPart];
    }, messages);
  } finally {
    if (message === undefined) {
      throw new ReferenceError(`Could not find Message pointer: ${pointer}`);
    }
  }

  return message;
}
