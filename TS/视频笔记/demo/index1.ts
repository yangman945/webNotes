type UserType = {
    getName(name:string):void,
    getAge(age:number):void
}
type AugmentedActionContext = {
    commit<K extends keyof UserType>(
      key: K,
      payload: Parameters<UserType[K]>[1]
    ): ReturnType<UserType[K]>;
  }
  
  type User = (name:string,age:number) => string | number
  type GetUser = Parameters<User>[1]
//   const aaa:GetUser = ['1',1]