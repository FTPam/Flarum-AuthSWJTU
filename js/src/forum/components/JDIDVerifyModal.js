import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class isIDVerifyEnabled extends Modal {
  // True by default, dictates whether the modal can be dismissed by clicking on the background or in the top right corner.
  static isDismissible = true;

  oninit(vnode) {
    super.oninit(vnode);

    this.sendingCode = false;
    this.email = Stream(this.attrs.email || '');
    this.verifyCode = Stream(this.attrs.code || '');
    this.success = false;

  }

  className() {
    // Custom CSS classes to apply to the modal
    return 'isIDVerifyEnabled Modal--small';
  }

  title() {
    // Content to show in the modal's title bar
    return '西南交通大学身份认证';
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input
              type="text"
              autocomplete="off"
              name="email"
              placeholder='西南交通大学教育邮箱号'
              className="FormControl"
              bidi={this.email}
              disabled={this.loading} />
          </div>
          <div className="Form-group">
            <input
              className="FormControl"
              name="verifyCode"
              type="text"
              placeholder='验证码'
              style="width:50%;float:left;"
              bidi={this.verifyCode}
              disabled={this.loading}
              autocomplete="off"
            />
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'button',
                style: "width:45%;",
                onclick: () => this.sendEmail(),
                disabled: this.sendEmail,
                loading: this.sendEmail,
              },
              发送验证码
            )}
          </div>
          <div className="Form-group">
            {Button.component({
              className: 'Button Button--primary Button--block',
              type: 'submit',
              loading: this.loading,
            }, 提交)}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();


  }
}
