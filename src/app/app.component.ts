import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray=[]
  index=0

  addPost(value, image, link){
    let hash = {index: this.index,text: value, likes: 0, image: image, link: link, shortLink: link.slice(0, 50) + "...", comments: [], boolean: false}
    this.postArray.push(hash)
    this.index += 1
  }

  likePost(post){

    this.postArray.map(function(thePost) {
      if (thePost === post){
        return thePost.likes += 1
      }

    })
  }

  addComment(post, comment){
    this.postArray.map(function(thePost) {
      if (thePost === post){
        return thePost.comments.push(comment)
      }
    })
  }


}
