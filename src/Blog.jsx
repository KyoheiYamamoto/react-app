import React from 'react';
import Article from './Article';
import * as FooBar from "./components/FooBar";
import Hoge  from "./components/Hoge";
const Blog = () =>
{

  // componentDidMount()
  // {
  //   //ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener('click',this.countUp);
  // }

  // componentDidUpdate()
  // {
  //   if (this.state.count >= 10)
  //   {
  //     this.setState({count: 0})
  //   }
  // }

  // componentWillUnmount()
  // {
  //   document.getElementById('counter').addEventListener('click', this.countUp);
  // }


  // countUp = () =>
  // {
  //   this.setState( {count: this.state.count +1})
  // }



  // render()
  // {
  // const authorName = "kyohei";
  return (
    <>
      <Article
        title={'Reactの使い方'}
      // count={this.state.count}
      />
      <div>
        
      </div>

      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
}

export default Blog
