import { get } from '@/service/http'

export function alarmPlanFind<T>(data: T) {
    return get<any>('/', data)
  }