import {LoginRequest} from '../login/LoginRequest';

export interface SignupRequest  extends LoginRequest{

  region:string | null,
  email:string | null
}
