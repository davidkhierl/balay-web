/**
 * Converts an object to FormData.
 *
 * @param {Object} obj - The object to convert to FormData.
 * @param {FormData} [form] - The existing FormData object to append the converted data to. If not provided, a new FormData object will be created.
 * @param {string} [namespace] - The optional namespace to prepend to the form keys.
 *
 * @returns {FormData} - The FormData object containing the converted data.
 */
export function objectToFormData(
  obj: { [key: string]: any },
  form?: FormData,
  namespace?: string
): FormData {
  const formData: FormData = form || new FormData()
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      let formKey: string = constructFormKey(namespace, property)
      if (isObjectNotFile(obj[property])) {
        objectToFormData(obj[property], formData, property)
      } else {
        formData.append(formKey, obj[property])
      }
    }
  }
  return formData
}

/**
 * Constructs a form key using the provided namespace and property.
 * If the namespace is defined, the key will be formatted as `${namespace}[${property}]`.
 * If the namespace is undefined, the key will be the property itself.
 *
 * @param {string | undefined} namespace - The namespace to include in the form key.
 * @param {string} property - The property to include in the form key.
 *
 * @return {string} - The constructed form key.
 */
export function constructFormKey(namespace: string | undefined, property: string): string {
  return namespace ? `${namespace}[${property}]` : property
}

/**
 * Checks if a given value is an object and not a File object.
 *
 * @param {any} value - The value to check.
 * @return {boolean} Returns true if the value is an object and not a File object, otherwise false.
 */
export function isObjectNotFile(value: any): boolean {
  return typeof value === 'object' && !(value instanceof File)
}
