'use strict';

import BusinessMember from './lib/BusinessMember';
import $ from 'jquery';

const withWindow = typeof window !== 'undefined';

new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  })
  .then(response => {
    const user = new BusinessMember('taro', 'yamada', 'G社');
    if (withWindow) {
      $("#mes").text(user.getName());
    }
    console.log(user.getName());
  });

