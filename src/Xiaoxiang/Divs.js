import React, { PropTypes } from 'react';



class Divs extends React.Component {
  handleBack(){
      this.context.router.goBack();
    }
  render () {

    return (
      <div>
        <div className="xq-header">
          <span className="glyphicon glyphicon-menu-left biaoq" onClick={this.handleBack.bind(this)}></span>
          <h3>肖像的圣化</h3>
          <p>肖全摄影作品展</p>
          <p>XIAO QUAN EXHIBLTINO</p><br/><br/>
          <p>展览时间：2016.07.15-08.31</p>
          <p>展览地点：chik11艺术空间</p>
        </div>
        <div className="content">展览内容</div>
        <p>本次展览将从人像摄影家肖全为杨丽萍摄的众多摄影中挑选出的一组精品向观众展示
        一个是舞之精灵，美的化身，一个是被誉为中国最好的人像摄影家。两个人的心灵碰撞，会擦出什么演的的艺术
      火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的撩起了人民 的
    好奇心。</p>
    <div className="xq-sec"><div className="introduce1">作者介绍</div></div>
    <p>肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为”中国最后的人像摄影师”。
      1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年
    在瑞士举办个展，1993年在法国参加摄影联赛，1997年出版《我们这一代》。2000年《我镜头下的美丽女人那》</p>
    <div className="xq-thr"><div className="introduce2">作品展示</div></div>
    <div className="xq-tho"></div>
    <div className="xq-five"></div>
    <div className="content1">展览评论</div>

    </div>
    )
  }
}

Divs.contextTypes = {
  router:React.PropTypes.object
}
export default Divs;
