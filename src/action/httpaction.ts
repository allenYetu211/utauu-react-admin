import HTTP_CLIENT from 'src/http/index'


export const getArticleAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'article'
  })
}

export const getTagsAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'tag'
  })
}