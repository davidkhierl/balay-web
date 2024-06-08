import { ServerActionError, ServerActionErrorField } from '@/types/server-actions.types'

export function isServerActionError<T>(
  state: ServerActionErrorField<T> | ServerActionError
): state is ServerActionError {
  return 'server' in state.errors
}
