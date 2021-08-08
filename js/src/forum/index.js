
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';


app.initializers.add('tpam/flarum-jdidverify', () => {
  if(app.forum.attribute('isIDVerifyEnabled')){
    extend(SettingsPage.prototype, 'accountItems', function (items){
      items.add('VerifyJDID',
        <button className='button'
                onclick={(componentClass, attrs)=>app.modal.show('JDIDVerifyModal', attrs)}>
          交大身份认证
        </button>
      );
    })
  }

});
