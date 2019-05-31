import { connect } from 'dva';
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { ItemModelState, ConnectProps } from '@/models/connect';

import styles from './index.less';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

interface PageState {}

@connect(({ item }) => ({ item }))
class Page extends Component<PageProps, PageState> {
  state: PageState = {};

  render() {
    const {
      item: { items = [] },
    } = this.props;
    return (
      <div className={styles.normal}>
        <Row>
          {items.reverse().map(data => (
            <Col key={data.item_id} span={3} className={styles.heroitem}>
              <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`} />
              <p>{data.item_name}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Page;
