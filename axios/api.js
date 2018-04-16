import { fetch } from "./fetch"; 

//发布文章
export function publish(title, content) { 
    return fetch({
        url: '/publishArticle',
        method: 'put',
        data: { params: [title, content] }
    })
}