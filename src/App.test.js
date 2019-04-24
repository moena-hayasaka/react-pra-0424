import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from "enzyme";

test("コンポーネントがクラッシュせず初期化できる", () => {
  // Appコンポーネントをシャローマウントする
  const wrapper = shallow(<App />);
  // Appというdivタグがあるか調べる
  const isExists = wrapper.find("div.App").exists();
  // 存在することを正とする
  expect(isExists).toBe(true);
})

test("Appコンポーネントのaタグのhrefがhttps://reactjs.orgであることを調べる", () => {
  // Appコンポーネントをシャローマウントする
  const wrapper = shallow(<App />);
  const isExists = wrapper.find("a[href='https://reactjs.org']").exists();
  // Appというdivタグがあるか調べる
  // const hrefContent = wrapper.find("div.App");
  // 存在することを正とする
  expect(isExists).toBe(true);
});

test("flagがtrueのときの要素を検証", () => {
  const wrapper = shallow(<App flag={true} />);
  const isExists = wrapper.find("div.red").exists();
  // 存在することを正とする
  expect(isExists).toBe(true);
});

test("flagがtrueのときの要素を検証", () => {
  const wrapper = shallow(<App flag={false} />);
  const isExists = wrapper.find("div.blue").exists();
  // 存在することを正とする
  expect(isExists).toBe(true);
});

test("ボタンをクリック時、propsの関数が呼ばれること", () => {
  const fnClick = jest.fn(); //モック関数
  const wrapper = shallow(<App flag={true} onClick={fnClick} />);
  // クリックをシュミレートする
  wrapper.find("button").simulate("click");
  // 関数が呼ばれたかどうか
  expect(fnClick).toHaveBeenCalled();
});


test("コンポーネントがクラッシュせず初期化できる", () => {
  // Appコンポーネントをシャローマウントする
  // シャローだと失敗する
  // const wrapper = shallow(<App />);
  // Appというdivタグがあるか調べる
  // マウントだと下の階層まで見るのでSubのh1タグが見つかる
  const wrapper = mount(<App />);
  const isExists = wrapper.find("h1.sub").exists();
  // 存在することを正とする
  expect(isExists).toBe(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

