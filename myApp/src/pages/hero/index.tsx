import { connect } from 'dva';
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { HeroModelState, ConnectProps } from '@/models/connect';
import styles from './index.less';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

interface PageState {}

@connect(({ hero }) => ({ hero }))
class Page extends Component<PageProps, PageState> {
  state: PageState = {};

  render() {
    const {
      hero: { name, heros = [] },
    } = this.props;
    return (
      <div className={styles.normal}>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
    );
  }
}

export default Page;
