import HTTP_CLIENT from 'src/http/index';
import {ICreateArticle, ICreateTag} from 'src/interfaces/http.interface';
import store from 'src/store';
// 获取全部文章
export const getArticleAll = async() => {
  return await HTTP_CLIENT.get({url: 'article'});
}

// 获取分类标签
export const getTagClassArticle = async(tag : string) => {
  return await HTTP_CLIENT.get({
    url: 'article',
    param: {
      tags: tag
    }
  });
}

// 获取发布文章
export const getPublishClassArticle = async(publishState : boolean) => {
  return await HTTP_CLIENT.get({url: 'article', param: {
      publishState
    }});
}

// 获取文章详情
export const getArticleDetail = async(id : number) => {
  return await HTTP_CLIENT.get({url: `article/${id}`});
}

// 获取全部标签
export const getTagsAll = async() => {
  store.tags = await HTTP_CLIENT.get({url: 'tag'});
}

// 保存编辑文章
export const putEditArticle = async(data : ICreateArticle, id : number) => {
  return await HTTP_CLIENT.put({
    url: `article`,
    data,
    param: {
      articleID: id
    }
  });
}

// 新建文章存储文章
export const postCreateArticle = async(data : ICreateArticle) => {
  return await HTTP_CLIENT.post({url: 'article', data});
}

// 新建标签
export const postCreateTag = async(data : ICreateTag) => {
  try {
    await HTTP_CLIENT.post({url: 'tag', data});
    await getTagsAll();
    return true
  } catch (e) {
    return false
  }
}

// 删除标签
export const deleteTag = async(_id : number) => {
  await HTTP_CLIENT.delete({
    url: 'tag',
    param: {
      tagID: _id
    }
  })
  await getTagsAll();
}