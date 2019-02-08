import HTTP_CLIENT from 'src/http/index'


export const articleAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'article'
  })
 
}