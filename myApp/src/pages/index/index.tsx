import { connect } from 'dva';
import React, { Component } from 'react';

import { IndexModelState, ConnectProps } from '@/models/connect';

import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
}

interface PageState {}

@connect(({ index }) => ({ index }))
class Page extends Component<PageProps, PageState> {
  state: PageState  = {};

  render() {
    const {
      index: { name },
    } = this.props;
    return <div className={styles.userCenter}>Welcome {name}</div>;
  }
}

export default Page;
