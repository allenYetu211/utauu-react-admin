import HTTP_CLIENT from 'src/http/index'
import {ICreateArticle} from 'src/interfaces/http.interface'

// 获取全部文章
export const getArticleAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'article'
  })
}

// 获取全部标签
export const getTagsAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'tag'
  })
}

// 存储文章
export const postArticle = async (data:ICreateArticle) => {
  return await HTTP_CLIENT.post({
    url: 'article',
    data
  })
}
