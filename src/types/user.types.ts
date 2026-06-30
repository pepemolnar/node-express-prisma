export interface userCreate {
  name: string,
  email: string,
  isDeleted: boolean
}

export interface getUserFilters {
  id?: string
  name?: string
  email?: string
  createdAt?: string
  updatedAt?: string
  isDeleted?: boolean
}