import count from './js/count';
import sum from './js/sum';

// 想要webpack打包资源，必须将该资源引入
import './css/index.css';
import './less/index.less';
import './sass/index.sass';
import './sass/index.scss';
import './css/iconfont.css';

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));

