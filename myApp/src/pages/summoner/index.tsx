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
  state: PageState = {};

  render() {
    const {
      summoner: { name, summoners },
    } = this.props;
    return (
      <div className={styles.userCenter}>
        Hello {name}
        <h2>This is {JSON.stringify(summoners)}</h2>
      </div>
    );
  }
}

export default Page;
