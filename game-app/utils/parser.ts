import { get, isNil} from 'lodash'

export const parseGetButtonByName = (data: any) => {
  return isNil(data) ? null : get(data, 'getButtonByName', {})
}
