import { connect } from 'dva';
import React, { Component } from 'react';

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
      hero: { name, heros },
    } = this.props;
    return (
      <div className={styles.userCenter}>
        Hello {name}
        <h2>This is {JSON.stringify(heros)}</h2>
      </div>
    );
  }
}

export default Page;
