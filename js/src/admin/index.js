app.initializers.add('tpam/flarum-jdidverify', function(app) {
  app.extensionData
    .for('tpam/flarum-jdidverify')
    .registerSetting(
      {
        setting: 'tpam/flarum-jdidverify.isEnable', // This is the key the settings will be saved under in the settings table in the database.
        label: '是否开启身份认证通道', // The label to be shown letting the admin know what the setting does.
        type: 'boolean', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select.
      },
      30 // Optional: Priority
    )
});
