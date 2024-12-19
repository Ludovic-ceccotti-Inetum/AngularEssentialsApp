
export interface SignupResponse {
  username: string,
  email:string,
  region:string,
  enabled:boolean,
  expirationDate:string
  creationdate:string,
  accountNonExpired:boolean,
  credentialsNonExpired:boolean,
  accountNonLocked:boolean
}
