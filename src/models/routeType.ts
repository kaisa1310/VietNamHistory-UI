export interface routeType {
  path: string
  element: React.ComponentType
  layout?: React.ComponentType<any>
  children?: routeType[]
}
