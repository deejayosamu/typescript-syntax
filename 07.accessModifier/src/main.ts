class Post{
  //public id: number
  //public title: string
  
  constructor(private id: number, protected title: string){
    this.id = id
    this.title = title
  }

  getPost() {
    return `postId: ${this.id}, postTitle: ${this.title} `
  }
}

const post: Post = new Post(1,'title1')

//public: 어디서나 접근 가능
//protected: 클래스 내, 자식 클래스에서 접근 가능
//private: 클래스 내에서만 접근 가능