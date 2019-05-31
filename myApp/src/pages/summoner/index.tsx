import { connect } from 'dva';
import React, { Component } from 'react';

import { SummonerModelState, ConnectProps } from '@/models/connect';

import styles from './index.less';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

interface PageState {}

@connect(({ summoner }) => ({ summoner }))
class Page extends Component<PageProps, PageState> {
  state: PageState  = {};

  render() {
    const {
      summoner: { name },
    } = this.props;
    return <div className={styles.userCenter}>Hello {name}</div>;
  }
}

export default Page;
