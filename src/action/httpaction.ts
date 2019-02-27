import HTTP_CLIENT from 'src/http/index'
import {ICreateArticle} from 'src/interfaces/http.interface'

// 获取全部文章
export const getArticleAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'article'
  })
}

// 获取分类标签
export const getTagClassArticle = async (tag: string) => {
  return  await HTTP_CLIENT.get({
    url: 'article',
    param: {
      tags: tag
    }
  })
}

// 获取文章详情
export const getArticleDetail = async (id: number) => {
  return await HTTP_CLIENT.get({
    url: `article/${id}`
  })
}

// 获取全部标签
export const getTagsAll = async () => {
  return  await HTTP_CLIENT.get({
    url: 'tag'
  })
}



// 保存编辑文章
export const putEditArticle = async (data:ICreateArticle, id:number) => {
  return await HTTP_CLIENT.put({
    url: `article`,
    data,
    param: {
      articleID: id
    }
  })
}

// 新建文章存储文章
export const postCreateArticle = async (data:ICreateArticle) => {
  return await HTTP_CLIENT.post({
    url: 'article',
    data
  })
}
