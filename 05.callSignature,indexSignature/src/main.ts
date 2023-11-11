interface getLikenumber{
  (like: number): number
}


interface Post{
  [key: string]: unknown
  id: number,
  title: string,
  getLikenumber: getLikenumber
}

const post1: Post = {
  id: 1,
  title: 'post1',
  getLikenumber(like: number) {
    return like
  }
}

post1.getLikenumber(1)
post1['description'] = 'lalala'



