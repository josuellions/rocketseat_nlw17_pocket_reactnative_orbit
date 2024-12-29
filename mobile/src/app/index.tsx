import { EmptyGoals } from '@/components/empty-goals'

import Summary from './summary'
import { getSummary } from '@/http/get-summary'
import { useQuery } from '@tanstack/react-query'

export default function Index() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 segundos
  })

  return <>{data && data.total > 100 ? <Summary /> : <EmptyGoals />}</>
}
