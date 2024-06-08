import { typeToFlattenedError } from 'zod'

export interface ServerActionErrorField<T> {
  errors: typeToFlattenedError<T, string>['fieldErrors']
}

export interface ServerActionError {
  errors: { server: string }
}
