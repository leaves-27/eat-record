
let prefixUrl;
let env = process.env.NODE_ENV;

if(env == "production") {
  prefixUrl= "//funnyxiu.com/"
}else{
  prefixUrl= "http://localhost:3000/"
}

export const Config = {
  prefixUrl : prefixUrl
}