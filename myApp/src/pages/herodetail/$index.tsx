import { connect } from 'dva';
import React, { Component } from 'react';
import { Button } from 'antd';
import { router } from 'alita';
import { HerodetailModelState, ConnectProps } from '@/models/connect';

import styles from './index.less';

interface PageProps extends ConnectProps {
  herodetail: HerodetailModelState;
}

interface PageState {}

@connect(({ herodetail }) => ({ herodetail }))
class Page extends Component<PageProps, PageState> {
  state: PageState = {};

  render() {
    const {
      herodetail: { herodetails },
      match,
    } = this.props;
    console.log(match);
    return (
      <div className={styles.userCenter}>
        <Button onClick={() => router.goBack()}>返回英雄列表页</Button>
        Hello {JSON.stringify(herodetails)}
      </div>
    );
  }
}

export default Page;
